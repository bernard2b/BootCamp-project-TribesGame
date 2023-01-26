import { Request, Response, NextFunction } from 'express';
import status from 'http-status';
import {
  HttpError,
  NotFoundError,
  ParameterError,
  AuthenticationError,
} from '../errors';
import {
  getUserDetailsResponse,
  userIdRequest,
  userSettingsRequest,
  userSettingsResponse,
} from '../interfaces/user';
import * as userSettings from '../services/userService'
import * as getUserDetails from '../services/userService'

export async function updateUser(
  req: Request<unknown, unknown, userSettingsRequest, unknown>,
  res: Response<userSettingsResponse>,
  next: NextFunction
): Promise<void> {
  const userData = req.body;

  try {
    const data = await userSettings.updateUser(req.userId, userData);

    res.send(data);
  } catch (error) {
    console.log(error)
    if (error instanceof NotFoundError) {
      next(new HttpError(status.NOT_FOUND, error.message));
    } else if (error instanceof ParameterError)
      next(new HttpError(status.NOT_FOUND, error.message));
    else {
      next(new HttpError(status.INTERNAL_SERVER_ERROR, error.message));
    }
  }
}


export async function getUserDetail(
  req: Request<unknown, unknown, unknown, unknown>,
  res: Response<getUserDetailsResponse>,
  next: NextFunction
): Promise<void> {
  try {
    const data = await getUserDetails.getUserById(req.userId);
    res.send(data);
  } catch (error) {
    if (error instanceof ParameterError) {
      next(new HttpError(status.BAD_REQUEST, error.message));
    } else if (error instanceof NotFoundError) {
      next(new HttpError(status.NOT_FOUND, error.message));
    } else {
      next(new HttpError(status.INTERNAL_SERVER_ERROR, error.message));
    }
  }
}

