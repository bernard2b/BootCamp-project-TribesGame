import User from '../models/user';
import * as loginRepo from '../repositories/loginRepo';
import { LoginResponse } from '../interfaces/login';
import { NotFoundError, ParameterError } from '../errors';
import * as jwt from "jsonwebtoken"
import bcrypt from 'bcrypt';

export async function getTokenByUserName(
  user: string,
  password: string
): Promise<LoginResponse> {
  if (!user && !password) {
    throw new ParameterError('All fields required');
  } else if (!password) {
    throw new ParameterError('Password is required');
  } else if (!user) {
    throw new ParameterError('Username required');
  }
  const loggednInUser = await loginRepo.getUserByUserName(user);

  if (!loggednInUser) {
    throw new NotFoundError('No such username...');
  }

  const isPasswordCorrect = await bcrypt.compare(
    loggednInUser.password,
    password
  );

  if(!isPasswordCorrect) {
    throw new NotFoundError('Wrong username or password')
  }

  const payload = {
    id: loggednInUser.id,
  };

  if (loggednInUser) {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '3000',
    });

    return { Token: token };
  }
}
