import { ApiError } from '../utils/ApiError.js';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateContact = (req, res, next) => {
  const { name, email, message, honeypot } = req.body || {};
  const errors = [];

  // Honeypot field: real users never fill this in, bots often do.
  if (honeypot) {
    return next(new ApiError(400, 'Invalid submission.'));
  }

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.push('Name must be at least 2 characters.');
  }

  if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
    errors.push('A valid email address is required.');
  }

  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    errors.push('Message must be at least 10 characters.');
  }

  if (name && name.length > 100) errors.push('Name is too long.');
  if (message && message.length > 5000) errors.push('Message is too long.');

  if (errors.length > 0) {
    return next(new ApiError(422, 'Validation failed.', errors));
  }

  next();
};
