import request from 'supertest';
import status from 'http-status';
import app from '../src/app';
import * as registrationService from '../src/services/registrationService';

process.env.JWT_SECRET = 'xxx';

describe('POST /api/login', () => {
  it('successful login with existing username and password', async () => {
    await registrationService.createUserWithImperium(
      'John',
      '12345678',
      'john@doe',
      'imperium'
    );
    const user = { name: 'John', password: '12345678' };
    const result = await request(app).post(`/api/login`).send(user);

    expect(result.statusCode).toEqual(status.OK);
    expect(result.headers['set-cookie']).toBeTruthy();
  });
});

it('returns Error for missing password', async () => {
  const user = { name: 'Jane', password: '' };
  const expectedResult = { message: 'Password is required' };
  const result = await request(app).post('/api/login').send(user);

  expect(result.statusCode).toEqual(status.BAD_REQUEST);
  expect(result.body).toStrictEqual(expectedResult);
  expect(result.headers['set-cookie']).toBeFalsy();
});

it('returns Error for wrong password', async () => {
  await registrationService.createUserWithImperium(
    'John',
    '12345678',
    'john@doe',
    'imperium'
  );
  const user = { name: 'John', password: '12445678' };
  const expectedResult = { message: 'Wrong username or password' };
  const result = await request(app).post('/api/login').send(user);

  expect(result.statusCode).toEqual(status.UNAUTHORIZED);
  expect(result.body).toStrictEqual(expectedResult);
  expect(result.headers['set-cookie']).toBeFalsy();
});

it('returns Error for wrong username', async () => {
  const user = { name: 'Jane', password: '12345678' };
  const expectedResult = { message: 'No such username...' };
  const result = await request(app).post('/api/login').send(user);

  expect(result.statusCode).toEqual(status.NOT_FOUND);
  expect(result.body).toStrictEqual(expectedResult);
  expect(result.headers['set-cookie']).toBeFalsy();
});
