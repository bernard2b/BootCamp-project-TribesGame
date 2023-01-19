import Imperium from "../models/imperium"


export interface GetAllImperiaResponse {
 imperia: ImperiumInterface[]
}

export interface ImperiumInterface {
    id: number;
    name: string;
    coordinateX: number;
    coordinateY: number;
    userId: number
}
export interface SetLocationRequest {
    coordinateX: number,
    coordinateY: number
}

export interface SetLocationResponse {
    id: number;
}
