import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    const adminEmail = process.env.CONTACT_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@cyberlexadvocate.com'
    const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || 'LawSake'

    // Email to admin (you) - Professional HTML template
    const adminEmailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #8B4513; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background-color: #f9f9f9; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #8B4513; }
          .message-box { background-color: white; padding: 15px; border-left: 4px solid #8B4513; margin-top: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Name:</span> ${name}
            </div>
            <div class="field">
              <span class="label">Email:</span> <a href="mailto:${email}">${email}</a>
            </div>
            <div class="field">
              <span class="label">Phone:</span> <a href="tel:${phone}">${phone}</a>
            </div>
            <div class="field">
              <span class="label">Message:</span>
              <div class="message-box">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `

    // Email to user (thank you message) - Professional HTML template
    const userEmailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #8B4513; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background-color: #f9f9f9; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Thank You for Reaching Out!</h2>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            <p>Thank you for contacting <strong>${companyName}</strong>. We have received your message and our team will review it shortly.</p>
            <p>Your inquiry is important to us, and we appreciate you taking the time to reach out. We will get back to you as soon as possible.</p>
            <p>If you have any urgent matters, please feel free to call us directly.</p>
          </div>
          <div class="footer">
            <p>Best regards,<br><strong>${companyName} Team</strong></p>
            <p style="margin-top: 20px; font-size: 12px; color: #999;">
              This is an automated confirmation email. Please do not reply to this message.
            </p>
          </div>
        </div>
      </body>
      </html>
    `

    // Send email to admin
    await resend.emails.send({
      from: `Contact Form <onboarding@resend.dev>`, // You'll need to verify your domain with Resend
      to: [adminEmail],
      subject: `New Contact Form Submission from ${name}`,
      html: adminEmailContent,
    })

    // Send thank you email to user
    await resend.emails.send({
      from: `${companyName} <onboarding@resend.dev>`, // You'll need to verify your domain with Resend
      to: [email],
      subject: `Thank You for Contacting ${companyName}`,
      html: userEmailContent,
    })

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
