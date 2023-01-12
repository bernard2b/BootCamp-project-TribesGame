import { Table, Column, Model, ForeignKey, BelongsTo, Default } from 'sequelize-typescript';
import Imperium from './imperium';

@Table
export default class Troop extends Model {
  @Column
  name: string;

  @Column
  type: string;

  @Default(1)
  @Column
  level: number;

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
