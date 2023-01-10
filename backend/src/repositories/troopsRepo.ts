import Troops from '../models/troop';

export function getAllTroops(): Promise<Troops[]> {
  return Troops.findAll();
}

export function getTroopsByType(searchType: string): Promise<Troops[]> {
  return Troops.findAll({
    where: {
      type: searchType
    }
  });
}

export function getTroopById(id: number): Promise<Troops | null> {
  return Troops.findByPk(id);
}

export function createTroop(name: string): Promise<Troops> {
  return Troops.create({ name });
}