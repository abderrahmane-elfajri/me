/**
 * ============================================================================
 * GOOGLE APPS SCRIPT — PORTFOLIO CONTACT FORM INTEGRATION
 * ============================================================================
 * Author: Abderrahmane El Fajri
 * Portfolio Contact Form Backend (Google Sheets + Instant Gmail Notification)
 * ============================================================================
 */

// Configuration
const SHEET_NAME = 'Sheet1';
const NOTIFICATION_EMAIL = 'abderrahmanelfajri@gmail.com';

/**
 * Handle incoming POST requests from the Portfolio Contact Form
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  
  // Wait up to 30 seconds for concurrent requests
  try {
    lock.waitLock(30000);
  } catch (lockError) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: 'Server busy. Please try again.' })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  try {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = doc.getSheetByName(SHEET_NAME);

    // If sheet doesn't exist, create it and add headers
    if (!sheet) {
      sheet = doc.insertSheet(SHEET_NAME);
      sheet.appendRow(['Date', 'Name', 'Email', 'Message', 'Status']);
      sheet.getRange(1, 1, 1, 5).setFontWeight('bold').setBackground('#00eeff').setFontColor('#0b1120');
    }

    // Ensure headers exist in Row 1 if empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Date', 'Name', 'Email', 'Message', 'Status']);
      sheet.getRange(1, 1, 1, 5).setFontWeight('bold').setBackground('#00eeff').setFontColor('#0b1120');
    }

    // Extract submitted data from URLSearchParams or FormData
    const name = e.parameter.name ? e.parameter.name.trim() : 'Anonymous';
    const email = e.parameter.email ? e.parameter.email.trim() : 'No email provided';
    const message = e.parameter.message ? e.parameter.message.trim() : '';
    const dateStr = new Date().toLocaleString('fr-FR', { timeZone: 'Africa/Casablanca' });

    // Append new row to Google Sheets
    sheet.appendRow([dateStr, name, email, message, 'Unread / New']);

    // Send Instant Email Notification to Abderrahmane's Gmail
    try {
      const emailSubject = '🚀 New Portfolio Inquiry from ' + name;
      const emailBody = 
        'Hello Abderrahmane,\n\n' +
        'You have received a new contact inquiry from your portfolio!\n\n' +
        '--------------------------------------------------\n' +
        '👤 Name: ' + name + '\n' +
        '✉️ Email: ' + email + '\n' +
        '🕒 Date & Time: ' + dateStr + '\n' +
        '--------------------------------------------------\n' +
        '💬 Message:\n' + message + '\n\n' +
        '--------------------------------------------------\n' +
        '👉 Reply directly to: ' + email + '\n' +
        '📊 View Google Sheet: ' + doc.getUrl();

      MailApp.sendEmail({
        to: NOTIFICATION_EMAIL,
        replyTo: email,
        subject: emailSubject,
        body: emailBody
      });
    } catch (mailErr) {
      Logger.log('Could not send notification email: ' + mailErr.toString());
    }

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({
        status: 'success',
        message: 'Inquiry saved and notification delivered.'
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log('Error handling contact form: ' + error.toString());
    return ContentService.createTextOutput(
      JSON.stringify({
        status: 'error',
        error: error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

/**
 * Handle GET requests (health check)
 */
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: 'active',
      message: 'Abderrahmane El Fajri Portfolio Contact Endpoint is LIVE.'
    })
  ).setMimeType(ContentService.MimeType.JSON);
}
