import Troops from '../models/troop';
import { NotFoundError, ParameterError } from '../errors';
import * as troopsRepo from '../repositories/troopsRepo';
import { AddTroopResponse, GetAllTroopsResponse, newTroopValidator } from '../interfaces/troops';
import * as imperiaRepo from '../repositories/imperiaRepo';
import * as resourcesRepo from '../repositories/resourcesRepo';



export async function getAllTroops(): Promise<GetAllTroopsResponse> {
  const troops = await troopsRepo.getAllTroops();
  return { troops: troops };
}

export async function getAllTroopsByImperiumId(
  imperiumId: number): Promise<GetAllTroopsResponse> {
  const troops = await troopsRepo.getAllTroopsByImperiumId(imperiumId);
  if (troops) {
    return { troops: troops };
  } else {
    throw new NotFoundError();
  }
}


export async function addNewTroop(
  imperiumId: number,
  type: string,
  attack?: number,
  defense?: number,
  healthPoint?: number,
  mineralCost?: number,
  timeCost?:number ,
  foodUpkeep?: number
): Promise<AddTroopResponse> {
  if (!imperiumId || !Number.isInteger(imperiumId)) {
    throw new ParameterError('No imperium Id implemeted');
  }
  const imperium = await imperiaRepo.getImperiumById(imperiumId);

  if (!imperium) {
    throw new NotFoundError('No such Id');
  }

  const resource = await resourcesRepo.getResourcesByImperiumId(imperiumId);
  let mineralAmount: number = resource[0].amount
  let mineralToTake: number = 0;
  let foodAmount: number = resource[1].amount;
  let foodGeneration: number = resource[1].generation
  let foodConsumption: number = 0;
  
  await newTroopValidator.parseAsync( { type, attack, defense, healthPoint, mineralCost, timeCost, foodUpkeep });

  if (type === "melee") {
    attack = 10;
    defense = 10;
    healthPoint = 100;
    mineralCost = 100;
    mineralToTake = mineralCost;
    timeCost = 6;
    foodUpkeep = 5;
    foodConsumption = foodUpkeep;
  } else if (type === "ranged") {
    attack = 10;
    defense = 20;
    healthPoint = 75;
    mineralCost = 150;
    mineralToTake = mineralCost;
    timeCost = 9;
    foodUpkeep = 10;
    foodConsumption = foodUpkeep;
  } else if (type === "mounted") {
    attack = 25;
    defense = 5;
    healthPoint = 200;
    mineralCost = 200;
    mineralToTake = mineralCost;
    timeCost = 15;
    foodUpkeep = 20;
    foodConsumption = foodUpkeep;
  }

  if (mineralToTake > mineralAmount || foodAmount <= 0 || foodGeneration < foodConsumption) {
    throw new ParameterError("You don't have enough resources!");
  } else {
    mineralAmount -= mineralToTake;
    resourcesRepo.updateAmountByImperiumId(imperiumId, mineralAmount);
    foodGeneration -= foodConsumption
    resourcesRepo.updateFoodGenerationByImperiumId(imperiumId, foodGeneration)
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
