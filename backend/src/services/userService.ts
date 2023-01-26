import * as userRepo from '../repositories/userRepo';
import {
  userSettingsRequest,
  userSettingsResponse,
} from '../interfaces/user';
import { encryptPassword } from './registrationService';
import { NotFoundError, ParameterError, AuthenticationError } from '../errors';
import bcrypt from 'bcrypt';
import { getUserDetailsResponse } from '../interfaces/user';

export async function updateUser(
  userId: number,
  userSettingsRequest: userSettingsRequest
): Promise<userSettingsResponse> {
  if (!userId) {
    throw new ParameterError('No user Id implemented');
  }

  const user = await userRepo.getUserById(userId);
  
  const isPasswordCorrect = await bcrypt.compare(
    userSettingsRequest.oldPassword,
    user.password
  );

  if (!user) {
    throw new NotFoundError('Id not found');
  }

  if (!isPasswordCorrect) {
    throw new AuthenticationError('Invalid password');
  }
  
  if (userSettingsRequest.newPassword !== undefined && userSettingsRequest.newPassword.length < 8) {
    throw new ParameterError('New Password must be 8 characters.')
  }

  let newPsw = !userSettingsRequest.newPassword
    ? user.password
    : encryptPassword(userSettingsRequest.newPassword);


  const newUser = {
    name: userSettingsRequest.name,
    email: userSettingsRequest.email,
    password: newPsw,
  };
  const updatedUser = await userRepo.updateUser(userId, newUser);

  return {
    name: userSettingsRequest.name,
    email: userSettingsRequest.email,
    password: userSettingsRequest.newPassword,
  };
}


export async function getUserById(
  userIdRequest
): Promise<getUserDetailsResponse> {
  if (userIdRequest < 0 || !Number.isInteger(userIdRequest)) {
    throw new ParameterError('Invalid user Id');
  }
  const user = await userRepo.getUserById(userIdRequest);

  if (user) {
    return user
  } else {
    throw new NotFoundError("No user found");
  }
}
