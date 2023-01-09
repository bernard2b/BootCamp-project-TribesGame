import request from 'supertest';
import status from 'http-status';
import app from '../src/app';
import * as buildingsRepo from '../src/repositories/buildingsRepo';
import Building from '../src/models/building';

describe('GET /api/buildings', () => {
  it('returns all existing buildings', async () => {
    const newBuilding = await Building.create({
      name: 'strigops',
      level: 12,
      mineralCost: 5,
      timeCost: 1,
    });
    const buildings = await buildingsRepo.getAllBuildings();

    const result = await request(app).get('/api/buildings');

    expect(result.statusCode).toEqual(status.OK);

    const buildingsData = result.body;

    expect(buildingsData.buildings[0].name).toEqual('strigops');
    expect(buildingsData.buildings.length).toEqual(1);
    expect(buildingsData.buildings).toBeDefined();
  });

  it('returns an empty array', async () => {

    const buildings = await buildingsRepo.getAllBuildings();

    const result = await request(app).get('/api/buildings');

    expect(result.statusCode).toEqual(status.OK);

    const buildingsData = result.body;
    expect(buildingsData).toEqual({buildings: []});

  })
});
