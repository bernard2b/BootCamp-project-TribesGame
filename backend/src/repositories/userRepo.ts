import User from '../models/user';

export function createUser(
  name: string,
  password: string,
  email: string
): Promise<User> {
  return User.create({ name, password, email });
}

export function getUserByUserName(username: string): Promise<User | null>{
  return User.findOne({where: { name: username}})
}