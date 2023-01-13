import { Request, Response, NextFunction } from 'express';
import status from 'http-status';
import { HttpError, NotFoundError, ParameterError } from '../errors';
import { createUser } from '../interfaces/registration';
import * as registrationService from '../services/registrationService';
import { ValidationError } from 'sequelize';

export async function postNewUser(
  req: Request<createUser>,
  res: Response,
  next: NextFunction
): Promise<void> {
  const username = req.body.name;
  const password = req.body.password;
  const email = req.body.email;
  try {
    const data = await registrationService.createUser(
      username,
      password,
      email
    );
    res.send(data);
  } catch (error) {
    if (error instanceof ParameterError) {
      console.log("PARAMETER", error)
      next(new HttpError(status.BAD_REQUEST, error.message));
    }
    else if (error instanceof NotFoundError) {
      next(new HttpError(status.NOT_FOUND));
    } 
    else if (error.errors[0].path === 'name') {
      console.log("ERROOOOOR",error)
      next(new HttpError(status.CONFLICT, `This name is already in use, please choose a different one.`));
    }
    else if (error.errors[0].path === 'email') {
      next(new HttpError(status.CONFLICT, `This email is already assigned to another imperium.`));
    }
    else next(new HttpError(status.INTERNAL_SERVER_ERROR));
  }
}
