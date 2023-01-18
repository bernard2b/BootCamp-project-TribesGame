import User from "../models/user";

export function getUserByUserName(username: string): Promise<User>{
  return User.findOne({where: { name: username}})
}