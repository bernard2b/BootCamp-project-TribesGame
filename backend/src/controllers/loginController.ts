import { Request, Response, NextFunction } from 'express';
import status from 'http-status';
import { HttpError, NotFoundError, ParameterError, AuthenticationError } from '../errors';
import { LoginRequest, LoginResponse } from '../interfaces/login';
import * as loginService from '../services/loginService';

export async function login(
  req: Request<unknown, unknown, LoginRequest, unknown>,
  res: Response<LoginResponse>,
  next: NextFunction
): Promise<void> {
  const userName = req.body.name;
  const userPassword = req.body.password;
  try {
    const data = await loginService.getTokenByUserName(userName, userPassword);
    res.cookie('auth-cookie', data.token, { httpOnly: true });
    res.send(data);
  } catch (error) {
    if (error instanceof ParameterError) {
      next(new HttpError(status.BAD_REQUEST, error.message));
    } else if (error instanceof NotFoundError) {
      next(new HttpError(status.NOT_FOUND, error.message));
    } else if (error instanceof AuthenticationError) {
      next(new HttpError(status.UNAUTHORIZED, error.message));
    } else {
      next(new HttpError(status.INTERNAL_SERVER_ERROR));
    }
  }
}
