import { Table, Column, Model } from "sequelize-typescript";

@Table({
  tableName: "buildings",
  timestamps: true
})

export default class Building extends Model{
  @Column
    name: string;
  @Column
    level: number;
  @Column
    mineralCost: number;
  @Column
    timeCost: number;
} 