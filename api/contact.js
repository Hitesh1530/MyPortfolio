import { Resend } from 'resend';

// Standard Vercel Serverless Function (ESM)
export default async function (req, res) {
  console.log("Contact API request received:", req.method);

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

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is missing.");
    return res.status(500).json({ error: 'Server configuration error: Missing API Key.' });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    console.log("Sending email via Resend...");
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['Hitesh.yar00@gmail.com'],
      reply_to: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="margin-top: 20px; padding: 15px; background: #f4f4f4; border-radius: 5px;">
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(400).json({ error: error.message });
    }

    console.log("Email sent successfully!");
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Unexpected server error:", err);
    return res.status(500).json({ error: 'Internal server error. Please try again later.' });
  }
}
