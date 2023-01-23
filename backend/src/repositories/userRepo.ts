import { where } from 'sequelize';
import User from '../models/user';

export function createUser(
  name: string,
  password: string,
  email: string
): Promise<User> {
  return User.create({ name, password, email });
}

export function getUserByUserName(username: string): Promise<User | null> {
  return User.findOne({ where: { name: username } });
}

export function updateUser(
  userId: number,
  name: string,
  email: string,
  password: string
) {
  return User.update(
    { name, email, password },
    { where: { id: userId } }
  );
}
