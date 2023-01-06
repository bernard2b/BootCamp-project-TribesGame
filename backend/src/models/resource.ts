import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Imperium from './imperium';

@Table
export default class Resource extends Model {
  @Column
  name: string;

  @Column
  amount: number;

  @Column
  generation: number;

  @ForeignKey(() => Imperium)
  @Column
  imperiumId: number;

  @BelongsTo(() => Imperium)
  imperium: Imperium;
}
