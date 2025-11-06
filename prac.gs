function doPost(e) {
  const response = {
    success: false,
    status: "error",
    data: {},
    errorDetails: "",
    message: "" // ✅ Added message field
  };

  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("website leads");
    if (!sheet) throw new Error('Sheet "website leads" not found');

    // Extract and sanitize input
    const name = e.parameter.name?.trim();
    const email = e.parameter.email?.trim().toLowerCase();
    const contact = e.parameter.phoneNumber?.trim() || e.parameter.contact?.trim();
    const appointmentDate = e.parameter.appointmentDate?.trim() || "Not provided";
    const appointmentTime = e.parameter.appointmentTime?.trim() || "Not provided";
    const message = e.parameter.message?.trim() || "";
    const utmSource = e.parameter.utm_source?.trim() || "";
    const utmMedium = e.parameter.utm_medium?.trim() || "";
    const utmCampaign = e.parameter.utm_campaign?.trim() || "";

    // Validate input
    if (!name || !email || !contact) {
      response.errorDetails = "Missing required fields: name, email, or contact.";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      response.errorDetails = "Name can only contain letters and spaces.";
    } else if (!/^\d{10}$/.test(contact)) {
      response.errorDetails = "Phone number must be exactly 10 digits.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      response.errorDetails = "Invalid email format.";
    } else {
      const existingData = sheet.getDataRange().getValues();
      const isDuplicate = existingData.some(row =>
        (row[2]?.toString().toLowerCase() === email) &&
        (row[3]?.toString() === contact) && 
        (row[5]?.toString() === appointmentDate) &&
        (row[6]?.toString() === appointmentTime)
      );

      if (isDuplicate) {
        response.errorDetails = "Your Appointment Is Already Under Process";
      } else {
        const last4 = contact.slice(-4);
        let uniqueId = "";
        do {
          const random4 = Math.floor(1000 + Math.random() * 9000);
          uniqueId = `${last4}${random4}`;
        } while (existingData.some(row => row[0] === uniqueId));

        const date = new Date();

        // Append data
        sheet.appendRow([
          uniqueId, name, email, contact, message, appointmentDate, appointmentTime, date,
          utmSource, utmMedium, utmCampaign
        ]);

        
        try {
          const adminSubject = `📩 New Appointment Booking - ${name}`;
        const adminPlain = `
New appointment booking received!

Unique ID: ${uniqueId}
Name: ${name}
Email: ${email}
Contact: ${contact}
Appointment Date: ${appointmentDate}
Appointment Time: ${appointmentTime}
Message: ${message}
Submitted At: ${date.toLocaleString()}

UTM Source: ${utmSource}
UTM Medium: ${utmMedium}
UTM Campaign: ${utmCampaign}
        `;

        const adminHtml = `
          <div style="font-family:Arial,sans-serif;color:#333;">
            <h2>📩 New Appointment Booking</h2>
            <p><b>Unique ID:</b> ${uniqueId}</p>
            <ul>
              <li><b>👤 Name:</b> ${name}</li>
              <li><b>📧 Email:</b> ${email}</li>
              <li><b>📞 Contact:</b> ${contact}</li>
              <li><b>📅 Appointment Date:</b> ${appointmentDate}</li>
              <li><b>⏰ Appointment Time:</b> ${appointmentTime}</li>
              <li><b>💬 Message:</b> ${message}</li>
              <li><b>🕓 Submitted At:</b> ${date.toLocaleString()}</li>
            </ul>
            <p><b>UTM:</b> ${utmSource || "-"} / ${utmMedium || "-"} / ${utmCampaign || "-"}</p>
          </div>
        `;
          MailApp.sendEmail({
            to: "shaikhziau431@gmail.com",
            subject: adminSubject,
            body: adminPlain,
            htmlBody: adminHtml
          });

          const userSubject = "✨ Your Appointment with Wow Aesthetic is Confirmed!";
        const userPlain = `
Dear ${name},

Thank you for booking your consultation with Wow Aesthetic 💖

Your appointment has been successfully scheduled.

📅 Date: ${appointmentDate}
⏰ Time: ${appointmentTime}

Our team will contact you soon for confirmation.
Your reference ID is: ${uniqueId}

Warm regards,
Wow Aesthetic Team
        `;

        const userHtml = `
          <div style="font-family:Arial,sans-serif;color:#333;">
            <h2 style="color:#d63384;">Hey ${name}, 🌸</h2>
            <p>Thank you for booking your free consultation with <b>Wow Aesthetic</b>!</p>
            <p>Your appointment details are as follows:</p>
            <ul>
              <li><b>📅 Date:</b> ${appointmentDate}</li>
              <li><b>⏰ Time:</b> ${appointmentTime}</li>
              <li><b>🔖 Reference ID:</b> ${uniqueId}</li>
            </ul>
            <p>We’ll get in touch soon to confirm your appointment.</p>
            <p style="margin-top:15px;">Warm regards,<br><b>Wow Aesthetic Team 💫</b></p>
          </div>
        `;
          MailApp.sendEmail({
            to: email,
            subject: userSubject,
            body: userPlain,
            htmlBody: userHtml
          });
        } catch (mailErr) {
          console.warn("Email sending error:", mailErr.message);
        }

        // ✅ Success response
        response.success = true;
        response.status = "ok";
        response.message = "Your request has been submitted successfully."; // ✅ Added
        response.data = {
          id: uniqueId,
          name,
          email,
          contact,
          message,
          timestamp: date.toISOString()
        };
      }
    }
  } catch (err) {
    console.error("Error:", err.message);
    response.errorDetails = err.message;
  }

  return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}