import express from 'express';

import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import indexRouter from './api/routes/index';

import ErrorHandler from './ErrorHelpers/ErrorHandler';
import { sendErrorResponse } from './utils/sendResponses';

// logs with wiston
import wiston from './ErrorHelpers/WistonLogger';

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const app = express();

// add stream option to morgan
app.use(morgan('combined', { stream: wiston.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/v1', indexRouter);

// catch 404 and forward to error handler
app.all('/*', (req, res) => {
  wiston.error(`404 -${res.message || 'Route not found'} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  res.status(404).send({
    status: 'error',
    error: 'This route is unavailable on this server',
  });
});

// get the unhandled rejection and throw it to another fallback handler we already have.
// eslint-disable-next-line no-unused-vars
process.on('unhandledRejection', (error, _promise) => {
  throw error;
});

// handle any uncaught exceptions
process.on('uncaughtException', (error) => {
  ErrorHandler.handleError(error);
  if (!ErrorHandler.isTrustedError(error)) {
    process.exit(1);
  }
});

// error handler
app.use(async (err, req, res, next) => {
  if (err instanceof Error) {
    wiston.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    if (ErrorHandler.isTrustedError(err)) {
      await ErrorHandler.handleError(err, res);
    } else {
      // what do we do when error is not operational
      sendErrorResponse(res, err.status || 500, 'An error just occured, please try again');
    }
  } else {
    next(err);
  }
});

export default app;
