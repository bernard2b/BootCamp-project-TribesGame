import Imperium from '../models/imperium';

export function getImperiumById(id: number): Promise<Imperium | null> {
  return Imperium.findByPk(id);
}