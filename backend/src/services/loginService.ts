import User from '../models/user';
import * as userRepo from '../repositories/userRepo';
import { LoginResponse } from '../interfaces/login';
import { NotFoundError, ParameterError, AuthenticationError } from '../errors';
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
  const loggednInUser = await userRepo.getUserByUserName(user);

  if (!loggednInUser) {
    throw new NotFoundError('No such username...');
  }

  const isPasswordCorrect = await bcrypt.compare(
    password,
    loggednInUser.password
  );

  if(!isPasswordCorrect) {
    throw new AuthenticationError('Wrong username or password')
  }

  const payload = {
    id: loggednInUser.id,
  };

  if (loggednInUser) {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    return { token: token };
  }
}
