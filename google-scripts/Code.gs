/**
 * ============================================================================
 * GOOGLE APPS SCRIPT — DIRECT EMAIL DISPATCHER (NO SPREADSHEET REQUIRED)
 * ============================================================================
 * Author: Abderrahmane El Fajri
 * Portfolio Contact Form Backend: Direct Instant Email to abderrahmanelfajri@gmail.com
 * ============================================================================
 */

// Configuration
const RECIPIENT_EMAIL = 'abderrahmanelfajri@gmail.com';

/**
 * Handle incoming POST requests from the Portfolio Contact Form
 */
function doPost(e) {
  try {
    // 1. Extract form fields (supports both form-urlencoded parameters and JSON postData)
    let name = (e && e.parameter && e.parameter.name) ? e.parameter.name.trim() : '';
    let email = (e && e.parameter && e.parameter.email) ? e.parameter.email.trim() : '';
    let message = (e && e.parameter && e.parameter.message) ? e.parameter.message.trim() : '';

    // If e.parameter was empty, try parsing postData (JSON or raw URL-encoded string)
    if ((!name || !email || !message) && e && e.postData && e.postData.contents) {
      try {
        const parsed = JSON.parse(e.postData.contents);
        if (parsed.name && !name) name = parsed.name.trim();
        if (parsed.email && !email) email = parsed.email.trim();
        if (parsed.message && !message) message = parsed.message.trim();
      } catch (err) {
        // Fallback for raw urlencoded string
        const parts = e.postData.contents.split('&');
        for (let i = 0; i < parts.length; i++) {
          const pair = parts[i].split('=');
          const key = decodeURIComponent(pair[0] || '');
          const val = decodeURIComponent(pair[1] || '');
          if (key === 'name' && !name) name = val.trim();
          if (key === 'email' && !email) email = val.trim();
          if (key === 'message' && !message) message = val.trim();
        }
      }
    }

    // Set safe defaults
    if (!name) name = 'Website Visitor';
    if (!email || email.indexOf('@') === -1) email = 'no-reply@portfolio.dev';
    if (!message) message = '(No message body provided)';
    
    // Format timestamp in Casablanca time
    const timestampStr = new Date().toLocaleString('fr-FR', {
      timeZone: 'Africa/Casablanca',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    // 2. Prepare Email Notification
    const emailSubject = `🚀 New Portfolio Message from ${name}`;
    
    // Plain text version
    const textBody = 
`Hello Abderrahmane,

You have received a new contact inquiry directly from your portfolio!

--------------------------------------------------
👤 SENDER DETAILS
Name:    ${name}
Email:   ${email}
Time:    ${timestampStr} (Casablanca Time)
--------------------------------------------------
💬 MESSAGE:
${message}
--------------------------------------------------

👉 Click "Reply" in your email client to respond directly to ${name} (${email}).
`;

    // HTML formatted version
    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0b1120; border: 1px solid #1e293b; border-radius: 12px; overflow: hidden; color: #f1f5f9;">
        <div style="background: linear-gradient(135deg, #0b1120 0%, #151f32 100%); padding: 24px 28px; border-bottom: 2px solid #00eeff;">
          <h2 style="margin: 0; color: #00eeff; font-size: 22px; font-weight: 700;">🚀 New Portfolio Message</h2>
          <p style="margin: 6px 0 0; color: #94a3b8; font-size: 14px;">Direct inquiry from your developer portfolio</p>
        </div>
        
        <div style="padding: 28px;">
          <div style="background: rgba(30, 41, 59, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px; padding: 18px; margin-bottom: 22px;">
            <p style="margin: 0 0 10px; font-size: 15px;">
              <strong style="color: #38bdf8;">👤 Full Name:</strong> 
              <span style="color: #ffffff; font-weight: 600;">${name}</span>
            </p>
            <p style="margin: 0 0 10px; font-size: 15px;">
              <strong style="color: #38bdf8;">✉️ Email Address:</strong> 
              <a href="mailto:${email}" style="color: #00eeff; text-decoration: none; font-weight: 600;">${email}</a>
            </p>
            <p style="margin: 0; font-size: 14px; color: #94a3b8;">
              <strong style="color: #38bdf8;">🕒 Date & Time:</strong> ${timestampStr}
            </p>
          </div>

          <div style="margin-bottom: 24px;">
            <h4 style="margin: 0 0 10px; color: #cbd5e1; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Message Content:</h4>
            <div style="background: #0f172a; border-left: 3px solid #00eeff; border-radius: 4px; padding: 16px; font-size: 15px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap;">${message}</div>
          </div>

          <div style="text-align: center; margin-top: 28px;">
            <a href="mailto:${email}?subject=Re:%20Portfolio%20Inquiry" style="background: #00eeff; color: #0b1120; font-weight: 700; padding: 12px 28px; border-radius: 8px; text-decoration: none; display: inline-block; font-size: 15px;">
              ✉️ Reply to ${name}
            </a>
          </div>
        </div>

        <div style="background: #070d19; padding: 14px 28px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.06); font-size: 12px; color: #64748b;">
          Abderrahmane El Fajri Portfolio • Automated Email Dispatcher
        </div>
      </div>
    `;

    // 3. Send email directly using MailApp
    MailApp.sendEmail({
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: emailSubject,
      body: textBody,
      htmlBody: htmlBody
    });

    // 4. Return success JSON response
    return ContentService.createTextOutput(
      JSON.stringify({
        status: 'success',
        message: 'Email delivered directly to inbox.'
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log('Error in doPost: ' + error.toString());
    return ContentService.createTextOutput(
      JSON.stringify({
        status: 'error',
        error: error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle GET requests (for testing in browser)
 */
function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: 'active',
      recipient: RECIPIENT_EMAIL,
      service: 'Portfolio Direct Email Dispatcher'
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Quick Test Function: Run this directly in the Apps Script Editor to verify your email works!
 */
function testSendEmail() {
  const fakeEvent = {
    parameter: {
      name: 'Test Recruiter / Client',
      email: 'recruiter.test@example.com',
      message: 'Hello Abderrahmane, this is a test message to confirm direct email delivery works without Google Sheets!'
    }
  };
  const result = doPost(fakeEvent);
  Logger.log('Test Result: ' + result.getContent());
}
