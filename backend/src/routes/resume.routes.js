import { Router } from 'express';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { ApiError } from '../utils/ApiError.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RESUME_PATH = path.join(__dirname, '..', '..', 'public', 'resume.pdf');

const router = Router();

// Streams the resume as a forced download so the frontend "Download CV" button
// works without needing to know the server's file layout.
router.get('/', (req, res, next) => {
  if (!fs.existsSync(RESUME_PATH)) {
    return next(new ApiError(404, 'Resume is not available yet.'));
  }
  res.download(RESUME_PATH, 'Mark-Jeferson-Manalo-Resume.pdf');
});

export default router;
