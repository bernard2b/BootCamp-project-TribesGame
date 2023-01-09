import Building from "../models/building";
import { NotFoundError } from '../errors';
import * as buildingsRepo from "../repositories/buildingsRepo";
import { GetAllBuildingsResponse } from "../interfaces/buildings";


export async function getAllBuildings(): Promise<GetAllBuildingsResponse> {

  const buildings = await buildingsRepo.getAllBuildings()

  if (buildings) {
    return { buildings: buildings }
  } else {
    throw new NotFoundError();
  }
}
