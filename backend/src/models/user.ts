import { Table, Column, Model, Unique, AllowNull, HasOne } from 'sequelize-typescript';
import Imperium from './imperium';

@Table
export default class User extends Model {
  @Unique
  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  password: string;

  @Unique
  @AllowNull(false)
  @Column
  email: string;

  @HasOne(() => Imperium)
  imperium: Imperium;
}
