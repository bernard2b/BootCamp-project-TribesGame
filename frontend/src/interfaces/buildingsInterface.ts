import { ReactNode } from "react";

export interface Buildings {
  [x: string]: ReactNode;
  id: number;
  name: string;
  level: number;
  mineralCost: number;
  timeCost: number;
}

export default Buildings;
