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
import * as userSettings from '../services/userSettings'
import * as getUserDetails from '../services/getUserDetails'

export async function updateUser(
  req: Request<userIdRequest, unknown, userSettingsRequest, unknown>,
  res: Response<userSettingsResponse>,
  next: NextFunction
): Promise<void> {
  const id = Number(req.params.id);
  const userData = req.body;

  try {
    const data = await userSettings.updateUser(id, userData);

    res.send(data);
  } catch (error) {
    if (error instanceof NotFoundError) {
      next(new HttpError(status.NOT_FOUND, error.message));
    } else if (error instanceof ParameterError)
      next(new HttpError(status.NOT_FOUND, error.message));
    else {
      next(new HttpError(status.INTERNAL_SERVER_ERROR, error.message));
      console.log(error)
    }
  }
}


export async function getUserDetail(
  req: Request<userIdRequest, unknown, unknown, unknown>,
  res: Response<getUserDetailsResponse>,
  next: NextFunction
): Promise<void> {
  const id = Number(req.params.id);
  try {
    const data = await getUserDetails.getUserById(id);
    res.send(data);
  } catch (error) {
    if (error instanceof ParameterError) {
      next(new HttpError(status.BAD_REQUEST, error.message));
    } else if (error instanceof NotFoundError) {
      next(new HttpError(status.NOT_FOUND));
    } else {
      next(new HttpError(status.INTERNAL_SERVER_ERROR));
    }
  }
}

