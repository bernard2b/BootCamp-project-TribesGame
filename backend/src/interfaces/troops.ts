import Troops from "../models/troop";

export interface TroopRequest {
  troops: Troops;
}

 export interface GetAllTroopsResponse {
   troops: Troops[]
 }