# 🚀 Quick 2-Minute Google Apps Script Setup Guide

Connect your portfolio contact form directly to **Google Sheets** and receive **instant email notifications** to `abderrahmanelfajri@gmail.com` on every message!

---

### Step 1: Create a Google Sheet
1. Open your browser and go to [sheets.new](https://sheets.new) (creates a new Google Spreadsheet).
2. Rename the spreadsheet to: **Portfolio Inquiries — Abderrahmane El Fajri**.
3. In **Row 1**, you can leave it blank (the script creates them automatically) or type headers in columns A through E:
   - **A1**: `Date`
   - **B1**: `Name`
   - **C1**: `Email`
   - **D1**: `Message`
   - **E1**: `Status`

---

### Step 2: Open Google Apps Script
1. In the top menu of your Google Sheet, click **Extensions** > **Apps Script**.
2. Erase any code inside `Code.gs`.
3. Open [Code.gs](./Code.gs) from this folder, copy all the code, and paste it into the editor.
4. Click the **💾 Save project** icon (or press `Ctrl + S`).

---

### Step 3: Deploy as Web App
1. At the top right of Apps Script, click the blue **Deploy** button > **New deployment**.
2. Click the gear icon ⚙️ next to *"Select type"* and select **Web app**.
3. Fill in the deployment settings:
   - **Description**: `Portfolio Contact Form v1`
   - **Execute as**: `Me (your email address)`
   - **Who has access**: **`Anyone`** *(⚠️ IMPORTANT: Must be "Anyone" so visitors can send messages without needing a Google account login!)*
4. Click **Deploy**.
5. If Google asks for authorization:
   - Click **Authorize access**.
   - Select your Google account (`abderrahmanelfajri@gmail.com`).
   - Click **Advanced** > **Go to Untitled project (unsafe)**.
   - Click **Allow**.

---

### Step 4: Copy the Web App URL & Add to Portfolio
1. Copy the **Web App URL** (looks like `https://script.google.com/macros/s/AKfycb.../exec`).
2. In the root of your portfolio project, create a file named `.env` (or copy `.env.example`):
   ```env
   VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec
   ```
3. Run `npm run build` or start your dev server `npm run dev`.

🎉 **Done!** Every inquiry from your website will now automatically:
- Append into your Google Spreadsheet in real time.
- Send an instant notification straight to `abderrahmanelfajri@gmail.com` with a 1-click reply button!
