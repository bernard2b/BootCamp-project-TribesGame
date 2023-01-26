import Imperium from '../models/imperium';
import { where } from 'sequelize';
import { userSettingsRequest } from '../interfaces/user';
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
  userSettings: userSettingsRequest
): Promise<number[] | null> {
  return User.update(
    {...userSettings},
    { where: { id: userId } }
  );
}

export function getUserById(id: number): Promise<User | null> {
  return User.findOne({where: { id: id},
  include: Imperium})
}