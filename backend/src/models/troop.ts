import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Imperium from './imperium';

@Table
export default class Troops extends Model {
  @Column
  name: string;

  @Column
  type: string;

  @Column
  level: number;
  defaultValue: 1;

  @Column
  attack: number;

  @Column
  defense: number;

  @Column
  healthPoint: number;

  @Column
  mineralCost: number;

  @Column
  timeCost: number;

  @Column
  foodUpkeep: number;

  @ForeignKey(() => Imperium)
  @Column
  imperiumId: number;

  @BelongsTo(() => Imperium)
  imperium: Imperium;
}
