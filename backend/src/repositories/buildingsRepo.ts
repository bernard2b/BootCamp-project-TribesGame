import Building from "../models/building"

export function getAllBuildings(): Promise<Building[]> {
  return Building.findAll();
}

