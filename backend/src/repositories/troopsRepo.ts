import Troop from '../models/troop';

export function getAllTroops(): Promise<Troop[]> {
  return Troop.findAll();
}

export function getTroopsByType(searchType: string): Promise<Troop[]> {
  return Troop.findAll({
    where: {
      type: searchType
    }
  });
}

export function getTroopById(id: number): Promise<Troop | null> {
  return Troop.findByPk(id);
}

export function createTroop(name: string): Promise<Troop> {
  return Troop.create({ name });
}