# ✉️ Direct Email Setup Guide (Zero Google Sheets Required)

Send all contact form messages directly to your Gmail (**`abderrahmanelfajri@gmail.com`**) without creating or managing any Google Sheets spreadsheet!

---

### Step 1: Open Google Apps Script
1. In your browser, open [script.new](https://script.new) (or go to [script.google.com](https://script.google.com) and click **New Project**).
2. Rename the project at the top left to: **Portfolio Contact Form Emailer**.

---

### Step 2: Paste the Code
1. Erase any code inside `Code.gs`.
2. Copy all code from [Code.gs](./Code.gs) in this folder.
3. Paste it into the Apps Script editor.
4. Click the **💾 Save project** icon (or press `Ctrl + S`).

*(Optional: Select `testSendEmail` in the top dropdown and click **▶ Run** to test receiving an email right away).*

---

### Step 3: Deploy as Web App
1. At the top right, click the blue **Deploy** button > **New deployment**.
2. Click the gear icon ⚙️ next to *"Select type"* and choose **Web app**.
3. Configure the 3 fields:
   - **Description**: `Portfolio Direct Email v1`
   - **Execute as**: **`Me (abderrahmanelfajri@gmail.com)`**
   - **Who has access**: **`Anyone`** *(⚠️ IMPORTANT: Must be "Anyone" so visitors can send messages without a Google account login!)*
4. Click **Deploy**.
5. When Google prompts for authorization:
   - Click **Authorize access**.
   - Choose your account: `abderrahmanelfajri@gmail.com`.
   - Click **Advanced** > **Go to Portfolio Contact Form Emailer (unsafe)**.
   - Click **Allow**.

---

### Step 4: Add Web App URL to Your Portfolio
1. Copy the **Web App URL** provided by Google (starts with `https://script.google.com/macros/s/.../exec`).
2. In the root of your portfolio project, add it to your `.env` file:
   ```env
   VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec
   ```
3. Run `npm run build` or start your dev server `npm run dev`.

---

### 🎉 How it Works
- When a recruiter or visitor fills out the contact form on your portfolio and clicks **Send Inquiry**, the message is sent directly to `abderrahmanelfajri@gmail.com`.
- The email has a formatted dark cyber layout showing the visitor's name, email, time, and full message.
- You can simply click **Reply** in Gmail and your response goes directly to the visitor's email address!
- **No Google Sheet is touched or created.**
