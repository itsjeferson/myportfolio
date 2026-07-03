import { logger } from '../utils/logger.js';
import { isProduction } from '../config/env.js';

export const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
};

export const errorHandler = (err, req, res, _next) => {
  const statusCode = err.statusCode || 500;

  if (statusCode >= 500) {
    logger.error(err.stack || err.message);
  }

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal server error',
    ...(err.details ? { details: err.details } : {}),
    ...(!isProduction && statusCode >= 500 ? { stack: err.stack } : {}),
  });
};
