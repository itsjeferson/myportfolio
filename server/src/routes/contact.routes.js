import { Router } from 'express';
import { submitContactForm } from '../controllers/contact.controller.js';
import { validateContact } from '../middlewares/validateContact.js';
import { contactRateLimiter } from '../middlewares/rateLimiter.js';

const router = Router();

router.post('/', contactRateLimiter, validateContact, submitContactForm);

export default router;
