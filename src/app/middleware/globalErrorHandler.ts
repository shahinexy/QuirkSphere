/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from "express";

const GlobalErrorHandler: ErrorRequestHandler = (err, req, res, next): any => {
  const statusCode = 500;
  const message = "Something went wrong";

  return res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
};

export default GlobalErrorHandler;
