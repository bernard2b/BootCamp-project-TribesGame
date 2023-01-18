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

export function addNewBuilding(imperiumId: number, name: string, type: string, mineralCost: number, timeCost: number, foodPerMinute: number, mineralPerMinute: number): Promise<Building | null> {
  return Building.create({name: name, type: type, imperiumId: imperiumId, mineralCost: mineralCost, timeCost: timeCost, foodPerMinute: foodPerMinute, mineralPerMinute: mineralPerMinute })
}