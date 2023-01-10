import Building from "../models/building"

export function getAllBuildings(): Promise<Building[]> {
  return Building.findAll();
}

export function getOneBuilding(id: number): Promise<Building> {
  return Building.findByPk(id);
}