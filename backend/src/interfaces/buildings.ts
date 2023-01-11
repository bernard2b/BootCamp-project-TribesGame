import Building from "../models/building";

export interface GetAllBuildingsResponse {
  buildings: Building[];
}

export interface GetOneBuildingByIdRequest {
  buildingId: number;
}

export interface GetOneBuildingByIdResponse {
  building: Building;
}