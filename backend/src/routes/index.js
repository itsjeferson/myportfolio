import { Router } from 'express';
import healthRoutes from './health.routes.js';
import contactRoutes from './contact.routes.js';
import resumeRoutes from './resume.routes.js';

const router = Router();

router.use('/health', healthRoutes);
router.use('/contact', contactRoutes);
router.use('/resume', resumeRoutes);

export default router;
