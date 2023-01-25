import * as userRepo from '../repositories/userRepo';
import {
  userSettingsRequest,
  userSettingsResponse,
} from '../interfaces/user';
import { encryptPassword } from './registrationService';
import { NotFoundError, ParameterError, AuthenticationError } from '../errors';
import bcrypt from 'bcrypt';

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
  
  // if (userSettingsRequest.newPassword.length < 8) {
  //   throw new ParameterError('Password must be 8 characters.')
  // }

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
