import { Table, Column, Model, ForeignKey, BelongsTo, Default } from 'sequelize-typescript';
import Imperium from './imperium';

@Table
export default class Building extends Model {
  @Column
  name: string;

  @Column
  type: string;

  @Column
  @Default(1)
  level: number;

  @Column
  mineralCost: number;

  @Column
  timeCost: number;

  @Column
  mineralPerMinute: number;

  @Column
  foodPerMinute: number;
   
  @ForeignKey(() => Imperium)
  @Column
  imperiumId: number;

  @BelongsTo(() => Imperium)
  imperium: Imperium; 
}
