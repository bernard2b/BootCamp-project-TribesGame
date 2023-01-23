import { Request, Response, NextFunction } from 'express';
import status from 'http-status';
import {
  HttpError,
  NotFoundError,
  ParameterError,
  AuthenticationError,
} from '../errors';
import {
  userIdRequest,
  userSettingsRequest,
  userSettingsResponse,
} from '../interfaces/userSettings';
import * as userSettings from '../services/userSettings';

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
