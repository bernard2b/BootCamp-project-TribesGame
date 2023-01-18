import { NotFoundError, ParameterError } from '../errors';
import * as buildingsRepo from '../repositories/buildingsRepo';
import * as imperiumRepo from '../repositories/imperiumRepo';
import {
  AddBuildingResponse,
  GetAllBuildingsResponse,
  GetOneBuildingByIdResponse,
  newBuildingValidator,
} from '../interfaces/buildings';

export async function getAllBuildings(): Promise<GetAllBuildingsResponse> {
  const buildings = await buildingsRepo.getAllBuildings();

  if (buildings) {
    return { buildings: buildings };
  } else {
    throw new NotFoundError();
  }
}

export async function getOneBuildingById(
  buildingId: number
): Promise<GetOneBuildingByIdResponse> {
  if (buildingId < 0 || !Number.isInteger(buildingId)) {
    throw new ParameterError('Invalid buildingId');
  }
  const building = await buildingsRepo.getOneBuildingById(buildingId);

  if (building) {
    return { building: building };
  } else {
    throw new NotFoundError();
  }
}

export async function addNewBuilding(
  imperiumId: number,
  name: string,
  type: string
): Promise<AddBuildingResponse> {
  if (!imperiumId || !Number.isInteger(imperiumId)) {
    throw new ParameterError('No imperium Id implemeted');
  }
  const imperium = await imperiumRepo.getImperiumById(imperiumId);

  if (!imperium) {
    throw new NotFoundError('No such Id');
  }

  let mineralCost: number = 0;
  let timeCost: number = 0;
  let mineralPerMinute: number = 0;
  let foodPerMinute: number = 0;

  if (type == 'Mine') {
    mineralCost = 500;
    timeCost = 5;
    foodPerMinute = 0;
    mineralPerMinute = 100;
  } else if (type == 'Hydrofarm') {
    mineralCost = 500;
    timeCost = 5;
    foodPerMinute = 100;
    mineralPerMinute = 0;
  } else if (type == 'Research Lab' || type == 'Military Academy') {
    mineralCost = 1000;
    timeCost = 10;
    foodPerMinute = 0;
    mineralPerMinute = 0;
  }

  await newBuildingValidator.parseAsync({ name, type });

  const newBuilding = await buildingsRepo.addNewBuilding(
    imperiumId,
    name,
    type,
    mineralCost,
    timeCost,
    foodPerMinute,
    mineralPerMinute
  );

  const theBuilding = {
    id: newBuilding.id,
    name: newBuilding.name,
    type: newBuilding.type,
    level: newBuilding.level,
  };

  return theBuilding;
}
