import { NotFoundError, ParameterError } from '../errors';
import * as buildingsRepo from '../repositories/buildingsRepo';
import * as imperiaRepo from '../repositories/imperiaRepo';
import * as resourcesRepo from '../repositories/resourcesRepo';
import {
  AddBuildingResponse,
  GetAllBuildingsResponse,
  GetOneBuildingByIdResponse,
  newBuildingValidator,
} from '../interfaces/buildings';
import Building from '../models/building';

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
    throw new ParameterError('Invalid building Id');
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
  type: string,
  mineralCost?: number,
  timeCost?: number,
  foodPerMinute?: number,
  mineralPerMinute?: number
): Promise<AddBuildingResponse> {
  if (!imperiumId || !Number.isInteger(imperiumId)) {
    throw new ParameterError('No imperium Id implemeted');
  }
  const imperium = await imperiaRepo.getImperiumById(imperiumId);

  if (!imperium) {
    throw new NotFoundError('No such Id');
  }

  await newBuildingValidator.parseAsync({ type });

  const resource = await resourcesRepo.getResourcesByImperiumId(imperiumId);
  let mineralAmount: number = resource[0].amount;
  let mineralToTake: number = 0;
  let mineralGeneration: number = resource[0].generation;
  let foodGeneration: number = resource[1].generation;

  if (type === 'mine') {
    mineralCost = 500;
    mineralToTake = mineralCost;
    timeCost = 5;
    mineralPerMinute = 100;
    mineralGeneration += mineralPerMinute;
    foodPerMinute = 0;
  } else if (type === 'farm') {
    mineralCost = 500;
    mineralToTake = mineralCost;
    timeCost = 5;
    mineralPerMinute = 0;
    foodPerMinute = 100;
    foodGeneration += foodPerMinute;
  } else if (type === 'lab' || type === 'barracks') {
    mineralCost = 1000;
    mineralToTake = mineralCost;
    timeCost = 10;
    mineralPerMinute = 0;
    foodPerMinute = 0;
  }

  if (mineralToTake > mineralAmount) {
    throw new ParameterError('Not enough minerals!');
  } else {
    mineralAmount -= mineralToTake;
    resourcesRepo.updateMineralAmountByImperiumId(imperiumId, mineralAmount);
    resourcesRepo.updateFoodGenerationByImperiumId(imperiumId, foodGeneration);
    resourcesRepo.updateMineralGenerationByImperiumId(imperiumId, mineralGeneration);

  }

  const newBuilding = await buildingsRepo.addNewBuilding(
    imperiumId,
    type,
    mineralCost,
    timeCost,
    foodPerMinute,
    mineralPerMinute
  );

  return newBuilding as AddBuildingResponse;
}
