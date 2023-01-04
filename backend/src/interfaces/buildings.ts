
export interface BuildingsRequest {}   //???

export interface BuildingsResponse {
  buildings: [
    {
      id: number;
      type: string;
      level: number;
      hp: number;

  }];
}
