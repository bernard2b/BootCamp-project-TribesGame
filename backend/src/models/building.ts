import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Imperium from './imperium';

@Table
export default class Building extends Model {
  @Column
  name: string;

  @Column
  type: string;

  @Column
  level: number;
  defaultValue: 1;

  @Column
  mineralCost: number;

  @Column
  timeCost: number;

  @Column
  goldPerMinute: number;

  @Column
  foodPerMinute: number;
   
  @ForeignKey(() => Imperium)
  @Column
  imperiumId: number;

  @BelongsTo(() => Imperium)
  imperium: Imperium;
  
}
