import { sendContactEmail } from '../services/email.service.js';
import { ApiError } from '../utils/ApiError.js';

export const submitContactForm = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    const result = await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    res.status(200).json({
      success: true,
      message: result.delivered
        ? 'Your message was sent successfully. Thank you for reaching out!'
        : 'Message received. (Email delivery is not configured in this environment.)',
    });
  } catch (error) {
    next(new ApiError(502, 'Failed to send your message. Please try again later.', error.message));
  }
};
