import User from '../models/user';

export interface createUser {
  name: string;
  password: string;
  email: string;
}

export interface checkName {
  name: string;
}

export interface checkEmail {
  email: string;
}