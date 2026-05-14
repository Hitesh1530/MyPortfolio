import { Resend } from 'resend';

// Standard Vercel Serverless Function (ESM)
export default async function (req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Configuration from environment variables
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
  const toEmail = process.env.RESEND_TO_EMAIL || 'Hitesh.yar00@gmail.com';

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  if (!apiKey) {
    console.error("RESEND_API_KEY is missing.");
    return res.status(500).json({ error: 'Email service is not configured (API Key missing).' });
  }

  try {
    const resend = new Resend(apiKey);
    
    const { data, error } = await resend.emails.send({
      from: `Hitesh Portfolio <${fromEmail}>`,
      to: [toEmail],
      reply_to: email,
      subject: `[Portfolio Contact] ${subject}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
          <h2 style="color: #3B82F6;">New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 5px; border-left: 4px solid #3B82F6;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 20px; font-size: 11px; color: #999;">Submitted on ${new Date().toLocaleString()}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend delivery error:", error);
      
      // Handle specific Resend errors gracefully
      if (error.name === 'validation_error' || error.message.includes('domain')) {
        return res.status(403).json({ 
          error: "Domain not verified. If you haven't verified your domain in Resend, you can only send emails to your own registered email address." 
        });
      }
      
      if (error.name === 'rate_limit_exceeded') {
        return res.status(429).json({ error: "Too many messages sent. Please try again later." });
      }

      return res.status(400).json({ error: error.message || "Failed to deliver email." });
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (err) {
    console.error("Unexpected server error:", err);
    return res.status(500).json({ error: 'An internal server error occurred. Please try again later.' });
  }
}
