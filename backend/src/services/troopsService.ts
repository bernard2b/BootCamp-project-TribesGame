import { NotFoundError, ParameterError } from '../errors';
import * as troopsRepo from '../repositories/troopsRepo';
import {
  AddTroopResponse,
  GetAllTroopsResponse,
  newTroopValidator,
  UpgradedTroop,
} from '../interfaces/troops';
import * as imperiaRepo from '../repositories/imperiaRepo';
import * as resourcesRepo from '../repositories/resourcesRepo';

export async function getAllTroops(): Promise<GetAllTroopsResponse> {
  const troops = await troopsRepo.getAllTroops();
  return { troops: troops };
}

export async function getAllTroopsByImperiumId(
  imperiumId: number
): Promise<GetAllTroopsResponse> {
  const troops = await troopsRepo.getAllTroopsByImperiumId(imperiumId);
  if (troops) {
    return { troops: troops };
  } else {
    throw new NotFoundError();
  }
}

export async function addNewTroop(
  imperiumId: number,
  type: string
): Promise<AddTroopResponse> {
  if (!imperiumId || !Number.isInteger(imperiumId)) {
    throw new ParameterError('No imperium Id implemeted');
  }
  const imperium = await imperiaRepo.getImperiumById(imperiumId);

  if (!imperium) {
    throw new NotFoundError('No such Id');
  }

  const resource = await resourcesRepo.getResourcesByImperiumId(imperiumId);
  let mineralAmount: number = resource[0].amount;
  let mineralToTake: number = 0;
  let foodAmount: number = resource[1].amount;
  let foodGeneration: number = resource[1].generation;
  let foodConsumption: number = 0;

  await newTroopValidator.parseAsync({ type });

  let attack: number;
  let defense: number;
  let healthPoint: number;
  let mineralCost: number;
  let timeCost: number;
  let foodUpkeep: number;

  if (type === 'melee') {
    attack = 10;
    defense = 10;
    healthPoint = 100;
    mineralCost = 100;
    mineralToTake = mineralCost;
    timeCost = 5;
    foodUpkeep = 5;
    foodConsumption = foodUpkeep;
  } else if (type === 'ranged') {
    attack = 10;
    defense = 20;
    healthPoint = 75;
    mineralCost = 150;
    mineralToTake = mineralCost;
    timeCost = 9;
    foodUpkeep = 10;
    foodConsumption = foodUpkeep;
  } else if (type === 'mounted') {
    attack = 25;
    defense = 5;
    healthPoint = 200;
    mineralCost = 200;
    mineralToTake = mineralCost;
    timeCost = 15;
    foodUpkeep = 20;
    foodConsumption = foodUpkeep;
  }

  if (
    mineralToTake > mineralAmount ||
    foodAmount <= 0 ||
    foodGeneration < foodConsumption
  ) {
    throw new ParameterError("You don't have enough resources!");
  } else {
    mineralAmount -= mineralToTake;
    resourcesRepo.updateAmountByImperiumId(imperiumId, mineralAmount);
    foodGeneration -= foodConsumption;
    resourcesRepo.updateFoodGenerationByImperiumId(imperiumId, foodGeneration);
  }

  const newTroop = await troopsRepo.addNewTroop(
    imperiumId,
    type,
    attack,
    defense,
    healthPoint,
    mineralCost,
    timeCost,
    foodUpkeep
  );

  return newTroop as AddTroopResponse;
}

export async function upgradeTroopById(
  imperiumId: number,
  id: number
): Promise<UpgradedTroop> {
  if (imperiumId < 0 || !Number.isInteger(imperiumId)) {
    throw new ParameterError('ImperiumId is not a valid number!');
  }
  const imperium = await imperiaRepo.getImperiumById(imperiumId);

  if (!imperium) {
    throw new NotFoundError('Imperium by ImperiumId not found!');
  }

  const resource = await resourcesRepo.getResourcesByImperiumId(imperiumId);

  if (!resource) {
    throw new NotFoundError('Resources of ImperiumId not found!');
  }
  const unit = await troopsRepo.getTroopById(id);

  if (!unit) {
    throw new NotFoundError('Unit of troop.id not found!');
  }

  let mineralAmount: number = resource[0].amount;
  let mineralToTake: number = unit.mineralCost;

  if (unit.level >= 3) {
    throw new ParameterError('Unit is at max level!');
  }



  if (unit.type === 'melee') {
    unit.level++;
    unit.attack += 5;
    unit.timeCost -= 2;
  } else if (unit.type === 'ranged') {
    unit.level++;
    unit.defense += 10;
    unit.timeCost -= 3;
  } else if (unit.type === 'mounted') {
    unit.level++;
    unit.healthPoint += 100;
    unit.timeCost -= 5;
  }

  if (mineralToTake > mineralAmount) {
    throw new ParameterError("You don't have enough resources!");
  } else {
    mineralAmount -= mineralToTake;
    await resourcesRepo.updateAmountByImperiumId(imperiumId, mineralAmount);
    await troopsRepo.upgradeTroopById(
      id,
      unit.level,
      unit.attack,
      unit.defense,
      unit.healthPoint,
      unit.timeCost
    );
  }

  let upgradedTroop = {
    id,
    level: unit.level,
    attack: unit.attack,
    defense: unit.defense,
    healthPoint: unit.healthPoint,
    timeCost: unit.timeCost
  };

  return upgradedTroop as UpgradedTroop;
}
