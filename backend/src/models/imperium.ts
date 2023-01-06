import { Table, Column, Model, AllowNull, BelongsTo, HasMany } from 'sequelize-typescript';
import Building from './building';
import User from './user';
import Troop from './troop';
import Resource from './resource';

@Table
export default class Imperium extends Model {
  @Column
  @AllowNull(false)
  name: string;

  @Column
  coordinateX: number;

  @Column
  coordinateY: number;

  @BelongsTo(() => User)
  ruler: User;

  @HasMany(() => Building)
  buildings: Building[];

  @HasMany(() => Troop)
  troops: Troop[];

  @HasMany(() => Resource)
  resource: Resource[];
}
