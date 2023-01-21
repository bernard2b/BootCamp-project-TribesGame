import { NotFoundError, ParameterError } from '../errors';
import * as troopsRepo from '../repositories/troopsRepo';
import {
  UpgradeTroopResponse,
  upgradeTroopValidator,
} from '../interfaces/troops';
import * as imperiaRepo from '../repositories/imperiaRepo';
import * as resourcesRepo from '../repositories/resourcesRepo';

export async function upgradeTroopById(
  imperiumId: number,
  id: number,
  type: string,
  level: number,
  attack?: number,
  defense?: number,
  healthPoint?: number,
  mineralCost?: number,
  timeCost?: number,
  foodUpkeep?: number,
): Promise<UpgradeTroopResponse> {
  if (imperiumId < 0 || !Number.isInteger(imperiumId)) {
    throw new ParameterError('ImperiumId is not a valid number!');
  }
  const imperium = await imperiaRepo.getImperiumById(imperiumId);

  if (!imperium) {
    throw new NotFoundError('ImperiumId not found!');
  }

  const resource = await resourcesRepo.getResourcesByImperiumId(imperiumId);
  let mineralAmount: number = resource[0].amount;
  let mineralToTake: number = 0;
  let unitAttack: number = 0;
  let unitDefense: number = 0;
  let unitHP: number = 0;
  let trainTime: number = 0;

  await upgradeTroopValidator.parseAsync({
    type,
    level,
    attack,
    defense,
    healthPoint,
    mineralCost,
    timeCost,
    foodUpkeep,
  });

  if (type === 'melee') {
    attack = 10;
    unitAttack = attack + 5;
    defense = 10;
    unitDefense = defense;
    healthPoint = 100;
    unitHP = healthPoint;
    mineralCost = 100;
    mineralToTake = mineralCost;
    timeCost = 5;
    trainTime = timeCost - 2;
    foodUpkeep = 5;
  } else if (type === 'ranged') {
    attack = 10;
    unitAttack = attack;
    defense = 20;
    unitDefense = defense + 10;
    healthPoint = 75;
    unitHP = healthPoint;
    mineralCost = 150;
    mineralToTake = mineralCost;
    timeCost = 9;
    trainTime = timeCost - 3;
    foodUpkeep = 10;
  } else if (type === 'mounted') {
    attack = 25;
    unitAttack = attack;
    defense = 5;
    unitDefense = defense;
    healthPoint = 200;
    unitHP = healthPoint + 100;
    mineralCost = 200;
    mineralToTake = mineralCost;
    timeCost = 15;
    trainTime = timeCost - 5;
    foodUpkeep = 20;
  }
  
  if (mineralToTake > mineralAmount) {
    throw new ParameterError("You don't have enough resources!");
  } else {
    mineralAmount -= mineralToTake;
    resourcesRepo.updateAmountByImperiumId(imperiumId, mineralAmount);
  }


    const affectedrows = await troopsRepo.upgradeTroopById(
    id,
    type,
    level++,
    unitAttack,
    unitDefense,
    unitHP,
    mineralCost,
    trainTime,
    foodUpkeep,
    imperiumId
  );

  let returnObject = {
    response: id, type, level, unitAttack, unitDefense, unitHP

  };

  return returnObject as unknown as UpgradeTroopResponse;
}
