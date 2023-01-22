import { NotFoundError, ParameterError } from '../errors';
import * as troopsRepo from '../repositories/troopsRepo';
import { UpgradedTroop } from '../interfaces/troops';
import * as imperiaRepo from '../repositories/imperiaRepo';
import * as resourcesRepo from '../repositories/resourcesRepo';
import { AfterFind, Not } from 'sequelize-typescript';
import Troop from '../models/troop';

export async function upgradeTroopById(
  imperiumId: number,
  id: number,
  level?: number,
  attack?: number,
  defense?: number,
  healthPoint?: number,
  mineralCost?: number,
  timeCost?: number
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
    level,
    attack,
    defense,
    healthPoint,
    timeCost,
  };

  return upgradedTroop as UpgradedTroop;
}
