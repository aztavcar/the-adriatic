export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  // Validate email
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.BREVO_API_KEY
      },
      body: JSON.stringify({
        email: email,
        listIds: [6],
        updateEnabled: true // Update if contact already exists
      })
    });

    if (response.ok) {
      return res.status(200).json({ success: true });
    }

    const data = await response.json();

    // Contact already exists is fine
    if (data.code === 'duplicate_parameter') {
      return res.status(200).json({ success: true, message: 'Already subscribed' });
    }

    return res.status(400).json({ error: data.message || 'Subscription failed' });
  } catch (error) {
    console.error('Brevo API error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
}
