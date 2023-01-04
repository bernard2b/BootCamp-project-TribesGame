import Building from "../models/buildings"

export function getAllBuildings(): Promise<Building[] | null> {
  return Building.findAll();
}