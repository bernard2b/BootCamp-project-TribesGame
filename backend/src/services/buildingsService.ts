import { NotFoundError, ParameterError } from '../errors';
import * as buildingsRepo from "../repositories/buildingsRepo";
import { GetAllBuildingsResponse, GetOneBuildingByIdResponse } from "../interfaces/buildings";


export async function getAllBuildings(): Promise<GetAllBuildingsResponse> {

  const buildings = await buildingsRepo.getAllBuildings()

  if (buildings) {
    return { buildings: buildings }
  } else {
    throw new NotFoundError();
  }
}

export async function getOneBuildingById(buildingId: number): Promise<GetOneBuildingByIdResponse> {
  if (buildingId < 0 || !Number.isInteger(buildingId)) {
    throw new ParameterError('Invalid buildingId');
  }
  const building = await buildingsRepo.getOneBuildingById(buildingId);

  if (building) {
    return { building: building }
  } else {
    throw new NotFoundError();
  }
}