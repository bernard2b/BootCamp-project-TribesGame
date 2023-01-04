import Building from "../models/buildings";
import { NotFoundError } from '../errors';
import * as buildingsRepo from "../repositories/buildingsRepo";
import { BuildingsResponse } from "../interfaces/buildings";


export async function getAllData(): Promise<BuildingsResponse> {

  const buildings = await buildingsRepo.getAllBuildings()

  if (buildings) {
    return { buildings: buildings as Building[]}
  } else {
    throw new NotFoundError();
  }
}
