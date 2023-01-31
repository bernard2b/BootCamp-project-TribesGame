import express from 'express';
import compressionMiddleware from 'compression';
import helmetMiddleware from 'helmet';
import loggingMiddleware from 'pino-http';
import logger from './logger';
import apiRouter from './routes/api';
import staticRouter from './routes/static';
import cookieParser from 'cookie-parser'

const app = express();

app.use(loggingMiddleware({ logger }));
app.use(compressionMiddleware());
app.use(helmetMiddleware());
app.use(cookieParser());

app.use('/api', apiRouter);
app.use(staticRouter);

export default app;
