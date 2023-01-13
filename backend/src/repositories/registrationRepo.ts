import User from '../models/user';

export function createUser(
  name: string,
  password: string,
  email: string,
  imperium: string
): Promise<User> {
  return User.create({ name, password, email, imperium});
}

export function getUserByName(
  name: string
): Promise<User> {
  console.log(`****** GET USER BY NAME SCRIPT ********`)
  return User.findOne({
    where: {
      name: name
    }
  });
}

export function getUserByEmail(
  email: string
): Promise<User> {
  console.log(`****** GET USER BY EMAIL SCRIPT ********`)

  return User.findOne({
    where: {
      email: email
    }
  });
}