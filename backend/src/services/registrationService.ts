import * as userRepo from '../repositories/userRepo';
import * as imperiaRepo from '../repositories/imperiaRepo';
import * as resourcesRepo from '../repositories/resourcesRepo';
import * as buildingsRepo from '../repositories/buildingsRepo';
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

  const newImperium = await imperiaRepo.createImperium(
    imperiumName,
    newUser.id
  );

  const newResourceMineral = await resourcesRepo.createResource(
    newImperium.id,
    "mineral",
    2500,
    50
  )

  const newResourceFood = await resourcesRepo.createResource(
    newImperium.id,
    "food",
    1000,
    50
  )

  const newNexus = await buildingsRepo.startingBuilding(
    newImperium.id,
    "nexus",
    1,
    1500,
    15,
    50,
    50
  )

  let response = {
    id: newUser.id,
    name: newUser.name,
    imperiumId: newImperium.id
  };

  return response;
}

export function encryptPassword(password: string) {
  const salt = bcrypt.genSaltSync(saltRounds);
  password = bcrypt.hashSync(password, salt);
  return password;
}


