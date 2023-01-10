import Building from "../models/building";

export interface GetAllBuildingsResponse {
  buildings: Building[]
}

export interface GetOneBuildingResponse {
  building: Building
}

export interface GetOneBuildingRequest {
}