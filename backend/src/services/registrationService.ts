import User from '../models/user';
import * as registrationRepo from '../repositories/registrationRepo';
import { createUser } from '../interfaces/registration';
import { ParameterError } from '../errors';

export async function createUser(
  name: string,
  password: string,
  email: string
): Promise<createUser> {
  if (!password) {
    throw new ParameterError('Password is required.');
  } else if (!name) {
    throw new ParameterError('Username is required.');
  }
  else if (!name && !password) {
    throw new ParameterError ('Username and password are required.');
  }
  else if (password.length < 8) {
    throw new ParameterError('Password must be 8 characters.');
  }

  const newUser = await registrationRepo.createUser(name, password, email);

  if (newUser) {
    console.log(newUser);
    return newUser;
  } else {
    throw new ParameterError('Username is already taken.');
  }
}

/*
Scenario 4: Then I get an error message: "Username is already taken."
Scenario 6:
When I send a request to it with a good username and password and optionally a kingdom name.
Then I get back the userId, username and kingdomId.

Scenario 7:
Given the POST /api/register endpoint.
When I send a request to it with a good username and password without a kingdom name.
Then I get back the userId, username and kingdomId.
And my kingdom name should be "<username>'s kingdom."

Request e.g.:
{  "username" : "kiscica",  "password" : "password123",  "kingdomname" : "Dependency Injection"}

Response e.g.:
{  "id" : 1,  "username" : "kiscica",  "kingdomId" : 1}
*/
