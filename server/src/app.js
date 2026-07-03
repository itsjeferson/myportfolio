import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { env, isProduction } from './config/env.js';
import routes from './routes/index.js';
import { notFoundHandler, errorHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: env.clientOrigin,
    methods: ['GET', 'POST'],
  })
);
app.use(express.json({ limit: '10kb' }));
app.use(morgan(isProduction ? 'combined' : 'dev'));

app.use('/api', routes);

app.get('/', (req, res) => {
  res.json({ success: true, message: 'Portfolio API is running.' });
});

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
