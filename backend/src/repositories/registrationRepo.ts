import User from '../models/user';

export function createUser(
  name: string,
  password: string,
  email: string,
  imperium: string
): Promise<User> {
  return User.create({ name, password, email, imperium});
}