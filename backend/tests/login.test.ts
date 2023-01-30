import request from 'supertest';
import status from 'http-status';
import app from '../src/app';
import * as registrationService from "../src/services/registrationService"

process.env.JWT_SECRET = 'abcd';

describe('POST /api/login', () => {
  it('successful login with existing username and password', async () => {
    
    await registrationService.createUserWithImperium("John", "12345678", "john@doe.com", "Imperium")

    const user = {username: "John", password: "12345678"} 
    const expectedResult = {
      username: "John",
        localStorage
      
    }
    const result = await request(app)
          .post(`/api/login`)
          .send(user)
        expect(result.statusCode).toEqual(status.OK);
        expect(result.body).toStrictEqual(expectedResult);
        expect(result.headers['set-cookie']).toBeTruthy();
})
});
