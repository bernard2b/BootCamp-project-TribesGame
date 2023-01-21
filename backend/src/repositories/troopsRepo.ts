import { UpgradeTroopRequest } from '../interfaces/troops';
import Troop from '../models/troop';

export function getAllTroops(): Promise<Troop[]> {
  return Troop.findAll();
}

export function getAllTroopsByImperiumId(imperiumId: number): Promise<Troop[]> {
  return Troop.findAll({
    where: {
      imperiumId: imperiumId,
    },
  });
}

export function getTroopsByType(searchType: string): Promise<Troop[]> {
  return Troop.findAll({
    where: {
      type: searchType,
    },
  });
}

export function getTroopByName(name: string): Promise<Troop | null> {
  return Troop.findOne({ where: { name: name } });
}

export function getTroopById(id: number): Promise<Troop | null> {
  return Troop.findByPk(id);
}

export function addNewTroop(
  imperiumId: number,
  type: string,
  attack: number,
  defense: number,
  healthPoint: number,
  mineralCost: number,
  timeCost: number,
  foodUpkeep: number
): Promise<Troop | null> {
  return Troop.create({
    imperiumId,
    type,
    attack,
    defense,
    healthPoint,
    mineralCost,
    timeCost,
    foodUpkeep,
  });
}

export function upgradeTroopById(
  id: number,
  type: string,
  level: number,
  attack: number,
  defense: number,
  healthPoint: number,
  mineralCost: number,
  timeCost: number,
  foodUpkeep: number,
  imperiumId: number
): Promise<number[]> {
  return Troop.update(
    {
      id, 
      type,
      level,
      attack,
      defense,
      healthPoint,
      mineralCost,
      timeCost,
      foodUpkeep,
      imperiumId,
    },

    {
      where: {
        id: id,
      },
    }
  );
}
