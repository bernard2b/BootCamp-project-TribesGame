import { Request, Response, NextFunction } from 'express';
import status from 'http-status';
import jwt from 'jsonwebtoken';
import { HttpError } from '../errors';

export default function authorizationHandler(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const bearerToken = req.headers['authorization'];

  if (!bearerToken) {
    next(new HttpError(status.UNAUTHORIZED, 'Not Bearer token inplemented'));
  }

  const bearer = bearerToken.split(' ')[1];
  jwt.verify(bearer, process.env.JWT_SECRET, (err: Error) => {
    if (err) {
      res
        .status(status.UNAUTHORIZED)
        .send({ message: 'Access denied. Token is not verified.' });
      return;
    } else {
      next();
    }
  });
}
