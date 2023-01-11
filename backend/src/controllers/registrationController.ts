import { Request, Response, NextFunction } from 'express';
import status from 'http-status';
import { HttpError, NotFoundError, ParameterError } from '../errors';
import { createUser } from '../interfaces/registration';
import * as registrationService from '../services/registrationService';


export async function postNewUser(
  req: Request<createUser>,
  res: Response,
  next: NextFunction
): Promise<void> {
  const username = req.body.name
  const password = req.body.password
  const email = req.body.email
  try {
    const data = await registrationService.createUser(username, password, email);
    res.send(data);
  } catch (error) {
    next(new HttpError(status.INTERNAL_SERVER_ERROR));
  }
}
