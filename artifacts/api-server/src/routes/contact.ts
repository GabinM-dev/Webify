import { Router } from "express";
import nodemailer from "nodemailer";
import { z } from "zod";

const router = Router();

const ContactSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT ?? "587");
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const smtpFrom = process.env.SMTP_FROM ?? "Webify <no-reply@webify.local>";
const emailTo = process.env.CONTACT_TO_EMAIL ?? "gabin.m2009@gmail.com";

async function createTransporter() {
  if (smtpHost && smtpUser && smtpPass) {
    return {
      transporter: nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      }),
      ethereal: false,
    } as const;
  }

  const testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: testAccount.smtp.host,
    port: testAccount.smtp.port,
    secure: testAccount.smtp.secure,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  return {
    transporter,
    ethereal: true,
    testAccount,
  } as const;
}

router.post("/contact", async (req, res) => {
  const parsed = ContactSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      error: "Invalid form submission",
      issues: parsed.error.format(),
    });
  }

  const { firstName, lastName, email, message } = parsed.data;

  try {
    const { transporter, ethereal } = await createTransporter();

    const info = await transporter.sendMail({
      from: smtpFrom,
      to: emailTo,
      subject: `Webify Contact: ${firstName} ${lastName}`,
      replyTo: email,
      text: `New contact request from ${firstName} ${lastName} <${email}>:\n\n${message}`,
      html: `<p><strong>Name:</strong> ${firstName} ${lastName}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    });

    const response: { success: true; previewUrl?: string; notice?: string } = { success: true };

    if (ethereal) {
      const previewUrl = nodemailer.getTestMessageUrl(info);
      response.notice =
        "SMTP credentials were not provided, so Webify used a local Ethereal test account. No real email was sent.";
      if (previewUrl) {
        response.previewUrl = previewUrl;
      }
    }

    return res.status(200).json(response);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unable to send contact email.";
    console.error("Contact form send error:", error);
    return res.status(500).json({ error: errorMessage });
  }
});

export default router;
