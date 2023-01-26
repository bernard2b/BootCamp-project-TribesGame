import { NotFoundError, ParameterError } from '../errors';
import * as buildingsRepo from '../repositories/buildingsRepo';
import * as imperiaRepo from '../repositories/imperiaRepo';
import * as resourcesRepo from '../repositories/resourcesRepo';
import * as userRepo from '../repositories/userRepo';

import {
  AddBuildingResponse,
  GetAllBuildingsResponse,
  GetOneBuildingByIdResponse,
  newBuildingValidator,
  UpgradedBuilding,
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
    throw new ParameterError('Invalid building Id');
  }
  const building = await buildingsRepo.getOneBuildingById(buildingId);

  if (building) {
    return { building: building };
  } else {
    throw new NotFoundError();
  }
}

export async function getAllBuildingsByImperiumId(
  userId: number
): Promise<GetAllBuildingsResponse> {
  const user = await userRepo.getUserById(userId);
  const buildings = await buildingsRepo.getAllBuildingsByImperiumId(
    user.imperium.id
  );
  if (buildings) {
    return { buildings: buildings };
  } else {
    throw new NotFoundError();
  }
}

export async function addNewBuilding(
  userId: number,
  type: string
): Promise<AddBuildingResponse> {
  if (userId < 0 || !Number.isInteger(userId)) {
    throw new ParameterError('User Id is not a valid number!');
  }
  const user = await userRepo.getUserById(userId);

  if (!user) {
    throw new NotFoundError('User not found!');
  }

  const resource = await resourcesRepo.getResourcesByImperiumId(user.imperium.id);

  if (!resource) {
    throw new NotFoundError('Resources for this Imperium not found!');
  }

  await newBuildingValidator.parseAsync({ type });

  let mineralCost: number;
  let timeCost: number;
  let mineralPerMinute: number;
  let foodPerMinute: number;
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

  if (mineralAmount == undefined || mineralToTake > mineralAmount) {
    throw new ParameterError('Not enough minerals!');
  } else {
    mineralAmount -= mineralToTake;
    resourcesRepo.updateMineralAmountByImperiumId(
      user.imperium.id,
      mineralAmount
    );
    resourcesRepo.updateFoodGenerationByImperiumId(
      user.imperium.id,
      foodGeneration
    );
    resourcesRepo.updateMineralGenerationByImperiumId(
      user.imperium.id,
      mineralGeneration
    );
  }

  const newBuilding = await buildingsRepo.addNewBuilding(
    user.imperium.id,
    type,
    mineralCost,
    timeCost,
    foodPerMinute,
    mineralPerMinute
  );

  return newBuilding as AddBuildingResponse;
}

export async function upgradeBuildingById(
  imperiumId: number,
  id: number
): Promise<UpgradedBuilding> {
  if (imperiumId < 0 || !Number.isInteger(imperiumId)) {
    throw new ParameterError('ImperiumId is not a valid number!');
  }
  const imperium = await imperiaRepo.getImperiumById(imperiumId);

  if (!imperium) {
    throw new NotFoundError('Imperium not found!');
  }

  const resource = await resourcesRepo.getResourcesByImperiumId(imperiumId);

  if (!resource) {
    throw new NotFoundError('Resources for this Imperium not found!');
  }
  const building = await buildingsRepo.getOneBuildingById(id);

  if (!building) {
    throw new NotFoundError('Building for this Imperium not found!');
  }

  let mineralAmount: number = resource[0].amount;
  let mineralToTake: number = 0;
  let mineralGeneration: number = resource[0].generation;
  let foodGeneration: number = resource[1].generation;

  if (building.level >= 3) {
    throw new ParameterError('Building is at max level!');
  }

  if (building.type === 'mine') {
    building.level++;
    mineralToTake = building.mineralCost;
    mineralGeneration += building.mineralPerMinute;
  } else if (building.type === 'farm') {
    building.level++;
    mineralToTake = building.mineralCost;
    foodGeneration += building.foodPerMinute;
  } else if (building.type === 'barracks' || building.type === 'lab') {
    building.level++;
    mineralToTake = building.mineralCost;
  }

  if (mineralToTake > mineralAmount) {
    throw new ParameterError("You don't have enough resources!");
  } else {
    mineralAmount -= mineralToTake;
    resourcesRepo.updateMineralAmountByImperiumId(imperiumId, mineralAmount);
    resourcesRepo.updateFoodGenerationByImperiumId(imperiumId, foodGeneration);
    resourcesRepo.updateMineralGenerationByImperiumId(
      imperiumId,
      mineralGeneration
    );
    buildingsRepo.upgradeBuildingById(id, building.level);
  }

  let upgradedBuilding = {
    id,
    level: building.level,
    mineralCost: building.mineralCost,
    timeCost: building.timeCost,
    mineralPerMinute: building.mineralPerMinute,
    foodPerMinute: building.foodPerMinute,
  };

  return upgradedBuilding as UpgradedBuilding;
}
