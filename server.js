import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Create reusable transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify connection on startup
transporter.verify((error) => {
  if (error) {
    console.error('❌ Email transporter error:', error.message);
  } else {
    console.log('✅ Email server is ready to send messages.');
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }

  try {
    // Email sent to Nexsof admin
    await transporter.sendMail({
      from: `"Nexsof Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #0a192f; color: #fff; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #0a192f, #00f0ff22); padding: 32px; border-bottom: 1px solid #1e3a5f;">
            <h1 style="margin: 0; font-size: 24px; color: #00f0ff;">Nexsof.production</h1>
            <p style="margin: 4px 0 0; color: #94a3b8; font-size: 14px;">New Contact Form Submission</p>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; color: #94a3b8; font-size: 14px; width: 100px;">Name</td>
                <td style="padding: 12px 0; color: #fff; font-weight: 600;">${name}</td>
              </tr>
              <tr style="border-top: 1px solid #1e3a5f;">
                <td style="padding: 12px 0; color: #94a3b8; font-size: 14px;">Email</td>
                <td style="padding: 12px 0; color: #00f0ff;"><a href="mailto:${email}" style="color: #00f0ff;">${email}</a></td>
              </tr>
              <tr style="border-top: 1px solid #1e3a5f;">
                <td style="padding: 12px 0; color: #94a3b8; font-size: 14px; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; color: #e2e8f0; line-height: 1.6;">${message.replace(/\n/g, '<br />')}</td>
              </tr>
            </table>
          </div>
          <div style="padding: 20px 32px; background: #050e1a; color: #64748b; font-size: 12px;">
            Sent via Nexsof.production contact form.
          </div>
        </div>
      `,
    });

    // Auto-reply to the sender
    await transporter.sendMail({
      from: `"Nexsof.production" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We received your message, ${name}!`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #0a192f; color: #fff; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #0a192f, #00f0ff22); padding: 32px; border-bottom: 1px solid #1e3a5f;">
            <h1 style="margin: 0; font-size: 24px; color: #00f0ff;">Nexsof.production</h1>
          </div>
          <div style="padding: 32px;">
            <h2 style="color: #fff; margin-top: 0;">Hi ${name}, thanks for reaching out! 👋</h2>
            <p style="color: #94a3b8; line-height: 1.7;">
              We've received your message and our team will get back to you within <strong style="color: #fff;">24–48 hours</strong>.
            </p>
            <p style="color: #94a3b8; line-height: 1.7;">
              In the meantime, feel free to explore our work or connect with us directly on WhatsApp.
            </p>
            <a href="https://wa.me/918090598976" style="display: inline-block; margin-top: 16px; padding: 12px 28px; background: #25D366; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;">
              Chat on WhatsApp
            </a>
          </div>
          <div style="padding: 20px 32px; background: #050e1a; color: #64748b; font-size: 12px;">
            &copy; ${new Date().getFullYear()} Nexsof.tech. All rights reserved.
          </div>
        </div>
      `,
    });

    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ success: false, error: 'Failed to send message. Please try again.' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
