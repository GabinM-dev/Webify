# API Server

This backend serves the Webify contact form and sends email using Nodemailer.

## Environment variables

Use these when you want real email delivery:

- `PORT=4000`
- `SMTP_HOST=smtp.gmail.com`
- `SMTP_PORT=587`
- `SMTP_USER=gabin.m2009@gmail.com`
- `SMTP_PASS=<your-gmail-app-password>`
- `SMTP_FROM="Webify <gabin.m2009@gmail.com>"`
- `CONTACT_TO_EMAIL=gabin.m2009@gmail.com`

> For Gmail, use a Google App Password if your account has 2-Step Verification enabled.

## Local testing without real SMTP credentials

If `SMTP_HOST`, `SMTP_USER`, or `SMTP_PASS` are not provided, the server will automatically use an Ethereal test account. That means:

- no real email is sent
- you can inspect the email in the preview URL returned by the contact API
- the contact form still works for testing the backend flow

## Run locally

```powershell
cd artifacts/api-server
pnpm.cmd run dev
```

If you have SMTP configured, the form will send real email. If not, the server will still accept the request and provide a preview URL in the response for debugging.
