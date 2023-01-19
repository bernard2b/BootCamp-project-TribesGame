import Imperium from '../models/imperium';

export function getImperiumById(id: number): Promise<Imperium | null> {
  return Imperium.findByPk(id);

export function createImperium(
  name: string,
  userId: number,

): Promise<Imperium> {
  return imperium.create({ name, userId });
}