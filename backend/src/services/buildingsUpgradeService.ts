import { build } from 'joi';
import { NotFoundError, ParameterError } from '../errors';
import { UpgradedBuilding } from '../interfaces/buildings';
import * as buildingsRepo from '../repositories/buildingsRepo';
import * as imperiaRepo from '../repositories/imperiaRepo';
import * as resourcesRepo from '../repositories/resourcesRepo';

export async function upgradeBuildingById(
  imperiumId: number,
  id: number,
  level?: number,
  mineralCost?: number,
  timeCost?: number,
  mineralPerMinute?: number,
  foodPerMinute?: number
): Promise<UpgradedBuilding> {
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
  const building = await buildingsRepo.getOneBuildingById(id);

  if (!building) {
    throw new NotFoundError('building of building.id not found!');
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
    resourcesRepo.updateMineralGenerationByImperiumId(imperiumId,mineralGeneration);
    buildingsRepo.upgradeBuildingById(id, building.level)
  }

  let upgradedBuilding = {
    id,
    level,
    mineralCost,
    timeCost,
    mineralPerMinute,
    foodPerMinute,
  };

  return upgradedBuilding as UpgradedBuilding;
}
