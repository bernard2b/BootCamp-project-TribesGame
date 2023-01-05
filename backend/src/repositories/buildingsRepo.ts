import Building from "../models/buildings"

export function getAllBuildings(): Promise<Building[]> {
  return Building.findAll();
}

