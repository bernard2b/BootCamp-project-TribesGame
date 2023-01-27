import * as userRepo from '../repositories/userRepo';
import * as imperiaRepo from '../repositories/imperiaRepo';
import { createUserResponse } from '../interfaces/registration';
import { ParameterError } from '../errors';
import bcrypt from 'bcrypt';
const saltRounds = 10;

export async function createUserWithImperium(
  name: string,
  password: string,
  email: string,
  imperiumName: string
): Promise<createUserResponse> {
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

  const newUser = await userRepo.createUser(name, password, email);

  if (imperiumName === '') {
    imperiumName = `${newUser.name}'s imperium`;
  }

  const newImperuim = await imperiaRepo.createImperium(
    imperiumName,
    newUser.id
  );

  let response = {
    id: newUser.id,
    name: newUser.name,
    imperiumId: newImperuim.id
  };

  return response;
}

export function encryptPassword(password: string) {
  const salt = bcrypt.genSaltSync(saltRounds);
  password = bcrypt.hashSync(password, salt);
  return password;
}


