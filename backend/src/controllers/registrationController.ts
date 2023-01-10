import { Request, Response, NextFunction } from 'express';
import status from 'http-status';
import { HttpError, NotFoundError, ParameterError } from '../errors';
import { createUser } from '../interfaces/registration';
import * as registrationService from '../services/registrationService';
import bcrypt from "bcrypt";


export async function postNewUser(
  req: Request<createUser>,
  res: Response,
  next: NextFunction
): Promise<void> {
  const username = req.body.name
  const password = req.body.password
  const email = req.body.email
  console.log(username)
  console.log(password)
  console.log(email)
  try {
    console.log('TRYBAN VAGYUUUUUNK')
    const data = await registrationService.createUser(username, password, email);
    console.log("hibaaaaaaaaaaaaaaaaaa", data)
    res.send(data);
  } catch (error) {
    next(new HttpError(status.INTERNAL_SERVER_ERROR));
  }
}
