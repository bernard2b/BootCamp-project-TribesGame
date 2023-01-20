import { Request, Response, NextFunction } from 'express';
import status from 'http-status'
import jwt from 'jsonwebtoken';
import { ErrorResponse } from '../interfaces/error';
import { HttpError, NotFoundError, ParameterError } from '../errors';

export default function authorizationHandler(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const bearerToken = req.headers['authorization']

  console.log("ddddddddddddddddddd" ,bearerToken)

  if (!bearerToken) {
    next(new HttpError(status.UNAUTHORIZED, 'Not Bearer token inplemented'));
  }

  try {
    jwt.verify(bearerToken, 'my-ultra-secure-and-ultra-long-secret');
    next();
  } catch (error) {
    if (error) {
      next(new HttpError(status.UNAUTHORIZED, 'Bearer token invalid'));
    }
  }
}
