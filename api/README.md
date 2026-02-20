# Likes API Setup

The like button works in two modes:
- **Without API**: localStorage only. Likes persist per-browser but aren't shared. The button works, heart fills, count increments - just not synced across visitors.
- **With API**: Shared counts via Upstash Redis + Cloudflare Worker. One URL change to activate.

## Setup (15 minutes)

### 1. Create Upstash Redis database

1. Sign up at [upstash.com](https://upstash.com)
2. Create a new Redis database (pick the region closest to your visitors - EU West for Balkans audience)
3. Copy the **REST URL** and **REST Token** from the database details page

### 2. Deploy the Cloudflare Worker

1. Sign up at [cloudflare.com](https://dash.cloudflare.com) (free tier is fine)
2. Install Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```
3. Login:
   ```bash
   wrangler login
   ```
4. From this `api/` directory, set your Upstash secrets:
   ```bash
   cd api
   wrangler secret put UPSTASH_REDIS_REST_URL
   # paste your Upstash REST URL when prompted

   wrangler secret put UPSTASH_REDIS_REST_TOKEN
   # paste your Upstash REST token when prompted
   ```
5. Deploy:
   ```bash
   wrangler deploy
   ```
6. Note the URL it gives you (e.g. `https://adriatic-likes.your-subdomain.workers.dev`)

### 3. Connect the frontend

In both `_layouts/post.html` and `_layouts/opinion.html`, find this line near the top of the `<script>` block:

```js
var LIKES_API = '';
```

Replace with your Worker URL:

```js
var LIKES_API = 'https://adriatic-likes.your-subdomain.workers.dev';
```

That's it. Rebuild the site and likes are live.

## How it works

- **GET /api/likes/:slug** - Returns `{ count, liked }`. The `liked` boolean is based on IP hash (no login needed).
- **POST /api/likes/:slug** - Increments the like count. Each click = +1. Unlimited likes per user.
- IPs are hashed (SHA-256) before storage - no raw IPs are kept in Redis.
- CORS is locked to your domain (configured in `wrangler.toml`).
- localStorage caches the liked state so returning visitors see the filled heart instantly without waiting for the API.

## Migration to App Platform

When you move to DigitalOcean App Platform:
1. Move the Worker logic into an App Platform function/service
2. Change `LIKES_API` to your new domain (e.g. `https://the-adriatic.com`)
3. Same Upstash Redis - no data migration needed
4. Delete the Cloudflare Worker

## Redis key structure

```
likes:total:{slug}     → integer (total count)
likes:user:{hash}:{slug} → integer (per-user count)
```
