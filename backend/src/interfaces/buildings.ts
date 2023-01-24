import Building from "../models/building";
import * as buildingsRepo from '../repositories/buildingsRepo'
import { z } from 'zod';

export interface GetAllBuildingsResponse {
  buildings: Building[];
}

export interface GetOneBuildingByIdRequest {
  buildingId: number;
}

export interface GetOneBuildingByIdResponse {
  building: Building;
}

export interface AddBuildingResponse {
  id: number;
  type: string;
  level: number;
}

export const newBuildingValidator = z.object({
  type: z.enum(['mine', 'farm', 'barracks', 'lab'])
})


export type NewBuildingRequest = z.infer<typeof newBuildingValidator>

export interface UpgradeBuildingResponse {
  id: number;
}

export interface UpgradedBuilding {
  id: number,
  level: number,
  mineralCost: number,
  timeCost: number,
  mineralPerMinute: number
  foodPerMinute: number,
}