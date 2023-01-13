import * as registrationRepo from '../repositories/registrationRepo';
import * as registrationInterface from '../interfaces/registration';
import { NotFoundError, ParameterError } from '../errors';
import bcrypt from 'bcrypt';
const saltRounds = 10;

export async function createUser(
  name: string,
  password: string,
  email: string
): Promise<registrationInterface.createUser> {
  if (!name && !password) {
    throw new ParameterError('Username and password are required.');
  } else if (!password) {
    throw new ParameterError('Password is required.');
  } else if (!name) {
    throw new ParameterError('Username is required.');
  } else if (!email) {
    throw new ParameterError('Email is required.');
  } else if (password.length < 8) {
    throw new ParameterError('Password must be 8 characters.');
  }
  password = encryptPassword(password);

  const newUser = await registrationRepo.createUser(
    name,
    password,
    email,
    `${name}'s Imperium`
  );
  return newUser;
}

function encryptPassword(password: string) {
  const salt = bcrypt.genSaltSync(saltRounds);
  password = bcrypt.hashSync(password, salt);
  return password;
}
