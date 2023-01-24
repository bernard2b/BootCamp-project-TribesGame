import * as userRepo from '../repositories/userRepo';
import { getUserDetailsResponse } from '../interfaces/user';
import { NotFoundError, ParameterError } from '../errors';

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
    throw new NotFoundError();
  }
}
