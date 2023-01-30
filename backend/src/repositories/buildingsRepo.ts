import Building from '../models/building';

export function getAllBuildings(): Promise<Building[]> {
  return Building.findAll();
}

export function getOneBuildingById(id: number): Promise<Building | null> {
  return Building.findByPk(id);
}

export function getBuildingByName(name: string): Promise<Building | null> {
  return Building.findOne({ where: { name: name } });
}

export function getAllBuildingsByImperiumId(
  imperiumId: number
): Promise<Building[]> {
  return Building.findAll({
    where: {
      imperiumId: imperiumId,
    },
  });
}

export function startingBuilding(
  imperiumId: number,
  type: string,
  level: number,
  mineralCost: number,
  timeCost: number,
  foodPerMinute: number,
  mineralPerMinute: number
): Promise<Building> {
  return Building.create({
    imperiumId,
    type,
    level,
    mineralCost,
    timeCost,
    foodPerMinute,
    mineralPerMinute,
  });
}

export function addNewBuilding(
  imperiumId: number,
  type: string,
  mineralCost: number,
  timeCost: number,
  foodPerMinute: number,
  mineralPerMinute: number
): Promise<Building | null> {
  return Building.create({
    type,
    imperiumId,
    mineralCost,
    timeCost,
    foodPerMinute,
    mineralPerMinute,
  });
}

export function upgradeBuildingById(
  id: number,
  level: number
): Promise<number[]> {
  return Building.update(
    {
      level,
    },

    {
      where: {
        id: id,
      },
    }
  );
}
