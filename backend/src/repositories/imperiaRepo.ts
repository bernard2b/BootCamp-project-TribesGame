import User from '../models/imperium';

export function createImperium(
  name: string,
  userId: number,

): Promise<User> {
  return User.create({ name, userId });
}