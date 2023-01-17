import Building from "../models/building"

export function getAllBuildings(): Promise<Building[]> {
  return Building.findAll();
}

export function getOneBuildingById(id: number): Promise<Building | null> {
  return Building.findByPk(id);
}

export function getBuildingByName(name: string): Promise<Building | null> {
  return Building.findOne({where: {name: name}})
}