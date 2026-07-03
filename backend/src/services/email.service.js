import nodemailer from 'nodemailer';
import { env } from '../config/env.js';
import { logger } from '../utils/logger.js';

let transporter = null;

const isEmailConfigured = () =>
  Boolean(env.smtp.host && env.smtp.user && env.smtp.pass && env.contactEmailTo);

const getTransporter = () => {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: env.smtp.host,
      port: env.smtp.port,
      secure: env.smtp.secure,
      auth: {
        user: env.smtp.user,
        pass: env.smtp.pass,
      },
    });
  }
  return transporter;
};

/**
 * Sends the contact-form submission as an email.
 * Falls back to logging the message when SMTP credentials are not configured,
 * so the API remains usable in local development without real credentials.
 */
export const sendContactEmail = async ({ name, email, message }) => {
  if (!isEmailConfigured()) {
    logger.warn(
      'SMTP is not configured (see backend/.env.example). Logging the contact message instead of sending it.'
    );
    logger.info('Contact form submission:', { name, email, message });
    return { delivered: false };
  }

  await getTransporter().sendMail({
    from: `"Portfolio Contact Form" <${env.smtp.user}>`,
    to: env.contactEmailTo,
    replyTo: email,
    subject: `New portfolio message from ${name}`,
    text: message,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `,
  });

  return { delivered: true };
};
