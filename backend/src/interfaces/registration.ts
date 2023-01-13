import User from '../models/user';

export interface createUser {
  name: string;
  password: string;
  email: string;
}

export interface checkName {
  nameError: string;
}

export interface checkEmail {
  emailError: string;
}