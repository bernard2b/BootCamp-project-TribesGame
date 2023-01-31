import { Request, Response, NextFunction } from 'express';
import status from 'http-status';
import jwt from 'jsonwebtoken';
import { HttpError } from '../errors';
import { accessTokenPayload } from '../interfaces/accessToken';

declare global {
  namespace Express {
    interface Request {
      userId?: number;
    }
  }
}

export default function authenticationHandler(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const bearerToken = req.cookies['auth-cookie'];

  if (!bearerToken) {
    next(new HttpError(status.UNAUTHORIZED, 'Not Bearer token included'));
  }

  jwt.verify(
    bearerToken,
    process.env.JWT_SECRET,
    (err: Error, payload: accessTokenPayload) => {
      if (err) {
        next(
          new HttpError(status.UNAUTHORIZED, 'Acces denied. Token is not valid')
        );
        return;
      } else {
        req.userId = payload.id;
        next();
      }
    }
  );
}
