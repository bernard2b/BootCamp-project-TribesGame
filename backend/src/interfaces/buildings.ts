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
  name: string;
  type: string;
  level: number;
}

export const newBuildingValidator = z.object({
  name: z.string().min(1, "Buildingname is required"),
  type: z.enum(['Mine', 'Hydrofarm', 'Research Lab', 'Military Academy'])
})
.refine(async buildingRequest => {
 const buildingName = await buildingsRepo.getBuildingByName(buildingRequest.name)
 return !buildingName
}, 'Name is already taken')

export type NewBuildingRequest = z.infer<typeof newBuildingValidator>