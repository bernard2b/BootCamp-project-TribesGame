import { Request, Response, NextFunction } from 'express';
import status from 'http-status';
import { HttpError, NotFoundError, ParameterError } from '../errors';
import { createUserRequest, createUserResponse } from '../interfaces/registration';
import * as registrationService from '../services/registrationService';

export async function createUserWithImperium(
  req: Request<createUserRequest>,
  res: Response<createUserResponse>,
  next: NextFunction
): Promise<void> {
  const userName = req.body.name;
  const password = req.body.password;
  const email = req.body.email;
  const imperiumName = req.body.imperiumName
  try {
    const data = await registrationService.createUserWithImperium(
      userName,
      password,
      email,
      imperiumName
    );
    res.send(data);
  } catch (error) {
    if (error instanceof ParameterError) {
      next(new HttpError(status.BAD_REQUEST, error.message));
    } else if (error.errors[0].path === 'name') {
      next(
        new HttpError(
          status.CONFLICT,
          `This name is already in use, please choose a different one.`
        )
      );
    } else if (error.errors[0].path === 'email') {
      next(
        new HttpError(
          status.CONFLICT,
          `This email is already assigned to another imperium.`
        )
      );
    } else next(new HttpError(status.INTERNAL_SERVER_ERROR));
  }
}
