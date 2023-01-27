import { NotFoundError, ParameterError } from '../errors';
import * as troopsRepo from '../repositories/troopsRepo';
import {
  AddTroopResponse,
  BattleResponse,
  GetAllTroopsResponse,
  newTroopValidator,
  UpgradedTroop,
} from '../interfaces/troops';
import * as imperiaRepo from '../repositories/imperiaRepo';
import * as resourcesRepo from '../repositories/resourcesRepo';
import * as userRepo from '../repositories/userRepo';
import Troops from '../models/troop';


export async function getAllTroops(): Promise<GetAllTroopsResponse> {
  const troops = await troopsRepo.getAllTroops();
  return { troops: troops };
}

export async function getAllTroopsByImperiumId(
  userId: number
): Promise<GetAllTroopsResponse> {
  const user = await userRepo.getUserById(userId);
  const troops = await troopsRepo.getAllTroopsByImperiumId(user.imperium.id);
  if (troops) {
    return { troops: troops };
  } else {
    throw new NotFoundError();
  }
}

export async function addNewTroop(
  userId: number,
  type: string
): Promise<AddTroopResponse> {
  const user = await userRepo.getUserById(userId);
  
  if (!user.imperium.id || !Number.isInteger(user.imperium.id)) {
    throw new ParameterError('No imperium Id implemeted');
  }
  const imperium = await imperiaRepo.getImperiumById(user.imperium.id);

  if (!imperium) {
    throw new NotFoundError('No such Id');
  }

  const resource = await resourcesRepo.getResourcesByImperiumId(user.imperium.id);
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
    resourcesRepo.updateMineralAmountByImperiumId(user.imperium.id, mineralAmount);
    foodGeneration -= foodConsumption;
    resourcesRepo.updateFoodGenerationByImperiumId(user.imperium.id, foodGeneration);
  }

  const newTroop = await troopsRepo.addNewTroop(
    user.imperium.id,
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
    await resourcesRepo.updateMineralAmountByImperiumId(
      imperiumId,
      mineralAmount
    );
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
    timeCost: unit.timeCost,
  };

  return upgradedTroop as UpgradedTroop;
}

export async function battle(
  imperiumId: number,
  threatLevel: string
): Promise<BattleResponse> {
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

  const army = await troopsRepo.getAllTroopsByImperiumId(imperiumId);

  if (!army) {
    throw new NotFoundError("Imperium don't have any units!");
  }

  let myArmyPower: number = 0;
  let enemyArmyPower: number = 0;
  let casualities: number = 0;
  let resultMessage: string = '';
  let battleRNG: number = Math.floor(-20 + Math.random() * 41);
  let mineralAmount: number = resource[0].amount;
  let foodGeneration: number = resource[1].generation;
  let loot: string = '';
  let rewardMineral: number = 0;
  let rewardXP: number = 0;
  let rewardScore: number = 0;
  let unitsLost: Troops[] = [];

  army.forEach(
    unit => (myArmyPower += unit.attack * unit.defense * unit.healthPoint)
  );

  if (threatLevel === 'low') {
    enemyArmyPower = 50000 * (1 + battleRNG / 100);
  } else if (threatLevel === 'medium') {
    enemyArmyPower = 100000 * (1 + battleRNG / 100);
  } else if (threatLevel === 'high') {
    enemyArmyPower = 200000 * (1 + battleRNG / 100);
  }

  let result = Math.floor(myArmyPower - enemyArmyPower);
  if (result <= 0) {
    resultMessage = 'Defeated! You have lost all of your troops!';
    unitsLost = army
    loot = "F"
    
    army.forEach(unit => {
      resourcesRepo.updateFoodGenerationByImperiumId(imperiumId,foodGeneration += unit.foodUpkeep);
      troopsRepo.deleteTroopById(unit.id)})
  } else {
    casualities = Math.floor(100 - (result / myArmyPower) * 100);
    resultMessage = `Victory! You have lost ${casualities}% of your army!`;
    let numberOfunitsToDelete = Math.round((army.length * casualities) / 100);
    for (let i = 0; i < numberOfunitsToDelete; i++) {
      let randomUnit = Math.random() * (numberOfunitsToDelete - i);
      let deletedUnit = army.splice(randomUnit, 1)[0];

      unitsLost.push(deletedUnit);
    }

    unitsLost.forEach(unit => {
      resourcesRepo.updateFoodGenerationByImperiumId(imperiumId,foodGeneration += unit.foodUpkeep);
      rewardMineral += (unit.mineralCost * 0,75 * unit.level);  
      resourcesRepo.updateMineralAmountByImperiumId(imperiumId, mineralAmount += rewardMineral)
      rewardXP += (unit.level * 250)
      rewardScore += (unit.level * 505)
      troopsRepo.deleteTroopById(unit.id);
    });
    loot = `Your reward is : ${rewardMineral} Mineral & ${rewardXP} XP & ${rewardScore} Score!`;
  }

  let battleResult = {
    result: resultMessage,
    destroyedUnits: unitsLost,
    reward: loot,
  };

  return battleResult as BattleResponse;
}
