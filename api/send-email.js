import nodemailer from 'nodemailer';

// Vercel Serverless Function
// This endpoint handles email sending from the contact form
export default async function handler(req, res) {
  // Enable CORS for all origins
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, email, service, preferredTime, message } = req.body;

    // Validate required fields
    if (!name || !phone || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create transporter with Hostinger SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'emergency@urgentdentalcare.co.uk',
        pass: '6o/kQR1eF+Y'
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email content
    const mailOptions = {
      from: 'emergency@urgentdentalcare.co.uk',
      to: 'emergency@urgentdentalcare.co.uk',
      replyTo: email,
      subject: `Emergency Dental Request - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
            New Emergency Dental Request
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>

          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Appointment Details</h3>
            <p><strong>Service Needed:</strong> ${service}</p>
            <p><strong>Preferred Time:</strong> ${preferredTime}</p>
          </div>

          <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626;">
            <h3 style="color: #1f2937; margin-top: 0;">Dental Issue Description</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This is an automated message from the Emergency Dentistry contact form.</p>
            <p>Please respond to the patient at: ${email} or call: ${phone}</p>
          </div>
        </div>
      `,
      text: `
New Emergency Dental Request

Contact Information:
- Name: ${name}
- Phone: ${phone}
- Email: ${email}

Appointment Details:
- Service Needed: ${service}
- Preferred Time: ${preferredTime}

Dental Issue Description:
${message}

---
This is an automated message from the Emergency Dentistry contact form.
Please respond to the patient at: ${email} or call: ${phone}
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    });
  }
}

