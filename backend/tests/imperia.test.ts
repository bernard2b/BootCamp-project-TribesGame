import request from 'supertest';
import status from 'http-status';
import app from '../src/app';
import Imperium from '../src/models/imperium';

describe('GET /api/imperium/map', () => {
  it('returns all imperia', async () => {
    const newImperium = Imperium.create({
      name: 'imperium1',
      coordinateX: 1,
      coordinateY: 1
    });

    const result = await request(app).get('/api/imperium/map');

    expect(result.statusCode).toEqual(status.OK);

    const imperiaData = result.body;

    expect(imperiaData.imperia[0].name).toEqual('imperium1');
    expect(imperiaData.imperia[0].coordinateX).toBeGreaterThan(-1);
    expect(imperiaData.imperia.length).toBeDefined();
  });

  it('returns an empty array', async () => {

    const result = await request(app).get('/api/imperium/map');

    expect(result.statusCode).toEqual(status.OK);

    const imperiaData = result.body;

    expect(imperiaData.imperia.length).toEqual(0);
  });
});