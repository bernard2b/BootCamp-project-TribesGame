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
  id: number,
  type: string,
  level: number,
  attack: number,
  defense: number,
  healthPoint: number,
  mineralCost: number,
  timeCost: number,
  foodUpkeep: number,
  imperiumId: number
 }

 export const upgradeTroopValidator = z.object({
  type: z.enum(["melee", "ranged", "mounted"]),
  level: z.number().min(1).max(3)
 })

export type UpgradeTroopRequest = z.infer<typeof upgradeTroopValidator>