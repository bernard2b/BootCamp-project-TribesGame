import { Table, Column, Model, Unique, AllowNull, HasOne } from 'sequelize-typescript';
import Imperium from './imperium';

@Table
export default class User extends Model {
  @Column
  @Unique
  @AllowNull(false)
  name: string;

  @Column
  @AllowNull(false)
  password: string;

  @Column
  @Unique
  @AllowNull(false)
  email: string;

  @HasOne(() => Imperium)
  imperium: Imperium;
}
