# Email Setup Guide - SMTP Configuration

## Option 1: Gmail (सबसे आसान)

### Steps:
1. **Google Account में जाएं:**
   - https://myaccount.google.com/
   - Security section में जाएं

2. **2-Step Verification Enable करें:**
   - Security → 2-Step Verification
   - Enable करें (अगर पहले से नहीं है)

3. **App Password बनाएं:**
   - Security → App passwords
   - Select app: "Mail"
   - Select device: "Other (Custom name)"
   - Name दें: "Lawsake Website"
   - Generate button click करें
   - 16-digit password copy करें

4. **`.env.local` में add करें:**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx  (जो app password मिला)
ADMIN_EMAIL=contact@cyberlexadvocate.com
```

---

## Option 2: Outlook/Hotmail

### Steps:
1. **Microsoft Account में जाएं:**
   - https://account.microsoft.com/security
   - Security settings

2. **App Password बनाएं:**
   - Security → Advanced security options
   - App passwords → Create new app password
   - Name: "Lawsake Website"
   - Generate और copy करें

3. **`.env.local` में add करें:**
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=xxxx-xxxx-xxxx-xxxx
ADMIN_EMAIL=contact@cyberlexadvocate.com
```

---

## Option 3: Custom Domain Email (अगर आपके पास है)

### अगर आपके पास custom domain है (जैसे contact@cyberlexadvocate.com):

#### cPanel/Hosting से:
1. **cPanel में जाएं:**
   - Email Accounts section
   - Email account बनाएं या existing use करें

2. **SMTP Settings:**
   - Host: `mail.yourdomain.com` या `smtp.yourdomain.com`
   - Port: 587 (TLS) या 465 (SSL)
   - Username: पूरा email (contact@cyberlexadvocate.com)
   - Password: email account का password

3. **`.env.local` में add करें:**
```env
SMTP_HOST=mail.cyberlexadvocate.com
SMTP_PORT=587
SMTP_USER=contact@cyberlexadvocate.com
SMTP_PASS=your-email-password
ADMIN_EMAIL=contact@cyberlexadvocate.com
```

---

## Option 4: Third-Party SMTP Services (Professional)

### SendGrid (Free tier: 100 emails/day)
1. https://sendgrid.com/ पर signup करें
2. API Key बनाएं
3. Settings:
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
ADMIN_EMAIL=contact@cyberlexadvocate.com
```

### Mailgun (Free tier: 5,000 emails/month)
1. https://www.mailgun.com/ पर signup करें
2. SMTP credentials लें
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-username
SMTP_PASS=your-mailgun-password
ADMIN_EMAIL=contact@cyberlexadvocate.com
```

### Zoho Mail (Free: 5GB storage)
1. https://www.zoho.com/mail/ पर signup करें
2. App Password बनाएं
```env
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_USER=your-email@zoho.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=contact@cyberlexadvocate.com
```

---

## Quick Setup (Gmail - Recommended)

### सबसे आसान तरीका:

1. **Gmail Account खोलें**
2. **Google Account Settings:**
   - https://myaccount.google.com/security
   - 2-Step Verification ON करें
   - App Passwords → Generate
   - Password copy करें

3. **`.env.local` file में add करें:**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=abcd efgh ijkl mnop
ADMIN_EMAIL=contact@cyberlexadvocate.com
```

4. **Server restart करें:**
```bash
npm run dev
```

---

## Testing

Form submit करके test करें:
- Admin email आनी चाहिए (form details के साथ)
- User को thank you email आनी चाहिए

---

## Troubleshooting

### Error: "Invalid login"
- App Password सही है या नहीं check करें
- 2-Step Verification enable है या नहीं check करें

### Error: "Connection timeout"
- Port 587 use करें (TLS)
- Firewall check करें

### Gmail में "Less secure app" error
- App Password use करें (regular password नहीं)
- 2-Step Verification जरूरी है

---

## Security Note

⚠️ **Important:** `.env.local` file को कभी भी Git में commit न करें!
- यह file automatically `.gitignore` में है
- Production में environment variables properly set करें

