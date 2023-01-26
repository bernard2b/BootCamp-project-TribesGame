import Imperium from "../models/imperium"


export interface GetAllImperiaResponse {
 imperia: ImperiumInterface[]
}

export interface ImperiumInterface {
    id: number;
    name: string;
    coordinates: number;
    userId: number
}
export interface SetLocationRequest {
    coordinates: number,
}

export interface SetLocationResponse {
    id: number;
}
