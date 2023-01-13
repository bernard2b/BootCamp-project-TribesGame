import User from '../models/user';
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
  if (!password) {
    throw new ParameterError('Password is required.');
  } else if (!name) {
    throw new ParameterError('Username is required.');
  } else if (!name && !password) {
    throw new ParameterError('Username and password are required.');
  } else if (password.length < 8) {
    throw new ParameterError('Password must be 8 characters.');
  }

  // isUsernameFree(name);
  // isEmailUsed(email);

  password = encryptPassword(password);

  const newUser = await registrationRepo.createUser(name, password, email, `${name}'s Imperium`);
    return newUser;
  
}

function encryptPassword(password: string) {
  const salt = bcrypt.genSaltSync(saltRounds);
  password = bcrypt.hashSync(password, salt);
  return password;
}

export async function isUsernameFree(
  name: string
): Promise<registrationInterface.checkName | registrationInterface.checkEmail> {
  const UserName = await registrationRepo.getUserByName(name);
  if (UserName) {
    return
  } else {
    return;
  }
}

export async function isEmailUsed(
  email: string
): Promise<registrationInterface.checkEmail> {
  const UserEmail = await registrationRepo.getUserByEmail(email);
  if (UserEmail) {
    throw new ParameterError('Invalid personId');
  } else {
    return;
  }
}


/*
And my kingdom name should be "<username>'s kingdom."
Request e.g.:
{  "username" : "kiscica",  "password" : "password123",  "kingdomname" : "Dependency Injection"}
Response e.g.:
{  "id" : 1,  "username" : "kiscica",  "kingdomId" : 1}
*/
