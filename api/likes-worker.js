/**
 * Cloudflare Worker — Likes API for The Adriatic
 *
 * Endpoints:
 *   GET  /api/likes/:slug  → { count: number, liked: boolean }
 *   POST /api/likes/:slug  → { count: number, liked: true }
 *
 * Environment variables (set in Cloudflare dashboard):
 *   UPSTASH_REDIS_REST_URL   — e.g. https://eu1-xyz.upstash.io
 *   UPSTASH_REDIS_REST_TOKEN — your Upstash REST token
 *   ALLOWED_ORIGIN           — e.g. https://the-adriatic.github.io
 */

const CORS_HEADERS = {
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400',
};

function corsHeaders(origin, env) {
  const allowed = (env.ALLOWED_ORIGIN || '').split(',').map(s => s.trim());
  const headers = { ...CORS_HEADERS };
  if (allowed.includes(origin) || allowed.includes('*')) {
    headers['Access-Control-Allow-Origin'] = origin;
  }
  return headers;
}

function json(data, status, origin, env) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin, env) },
  });
}

// Hash IP to a short anonymous ID (no raw IPs stored)
async function hashIP(ip) {
  const data = new TextEncoder().encode(ip + ':adriatic-salt');
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash)).slice(0, 8)
    .map(b => b.toString(16).padStart(2, '0')).join('');
}

// Upstash Redis REST helper
async function redis(env, ...args) {
  const res = await fetch(`${env.UPSTASH_REDIS_REST_URL}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.UPSTASH_REDIS_REST_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(args),
  });
  const body = await res.json();
  if (body.error) throw new Error(body.error);
  return body.result;
}

// Pipeline: multiple commands in one round-trip
async function redisPipeline(env, commands) {
  const res = await fetch(`${env.UPSTASH_REDIS_REST_URL}/pipeline`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.UPSTASH_REDIS_REST_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commands),
  });
  const body = await res.json();
  return body.map(r => r.result);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin') || '';

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin, env) });
    }

    // Parse route: /api/likes/:slug
    const match = url.pathname.match(/^\/api\/likes\/(.+)$/);
    if (!match) {
      return json({ error: 'Not found' }, 404, origin, env);
    }

    const slug = decodeURIComponent(match[1]);
    const ip = request.headers.get('CF-Connecting-IP') || '0.0.0.0';
    const userId = await hashIP(ip);

    const totalKey = `likes:total:${slug}`;
    const userKey = `likes:user:${userId}:${slug}`;

    try {
      if (request.method === 'GET') {
        const [count, userLikes] = await redisPipeline(env, [
          ['GET', totalKey],
          ['GET', userKey],
        ]);
        return json({
          count: parseInt(count) || 0,
          liked: (parseInt(userLikes) || 0) > 0,
        }, 200, origin, env);
      }

      if (request.method === 'POST') {
        const [count, userLikes] = await redisPipeline(env, [
          ['INCR', totalKey],
          ['INCR', userKey],
        ]);
        return json({
          count: parseInt(count),
          liked: true,
        }, 200, origin, env);
      }

      return json({ error: 'Method not allowed' }, 405, origin, env);
    } catch (err) {
      return json({ error: 'Internal error' }, 500, origin, env);
    }
  },
};
