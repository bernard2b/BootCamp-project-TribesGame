import { z } from "zod";
import Troops from "../models/troop";
import * as troopsRepo from '../repositories/troopsRepo'


export interface GetAllTroopsResponse {
   troops: Troops[]
 }
export interface AddTroopResponse {
  id: number,
  type: string,
  attack: number,
  defense: number,
  healthPoint: number,
  mineralCost: number,
  timeCost: number,
  foodUpkeep: number,
 }

 export const newTroopValidator = z.object({
  type: z.enum(["melee", "ranged", "mounted"]),

 })

export type NewTroopRequest = z.infer<typeof newTroopValidator>



export interface UpgradeTroopResponse {
  id: number;
}

export interface UpgradedTroop {
  id: number,
  type: string,
  level: number,
  attack: number,
  defense: number,
  healthPoint: number,
  timeCost: number,
}