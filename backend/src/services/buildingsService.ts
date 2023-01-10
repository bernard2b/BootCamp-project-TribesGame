import Building from "../models/building";
import { NotFoundError } from '../errors';
import * as buildingsRepo from "../repositories/buildingsRepo";
import { GetAllBuildingsResponse, GetOneBuildingResponse } from "../interfaces/buildings";


export async function getAllBuildings(): Promise<GetAllBuildingsResponse> {

  const buildings = await buildingsRepo.getAllBuildings()

  if (buildings) {
    return { buildings: buildings }
  } else {
    throw new NotFoundError();
  }
}

export async function getOneBuilding(id: number): Promise<GetOneBuildingResponse> {
  
  const building = await buildingsRepo.getOneBuilding(id)

  if (building) {
    return { building: building }
  } else {
    throw new NotFoundError();
  }
}