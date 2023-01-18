import User from '../models/imperium';

export function createImperium(name: string, userId: number): Promise<User> {
  return User.create({ name, userId });
}

import Imperium from '../models/imperium';

export function getAllImperia(): Promise<Imperium[]> {
  return Imperium.findAll();
}

export function setImperiumLocationById(
  imperiumId: number,
  coordinateX: number,
  coordinateY: number
) {
  return Imperium.update(
    { coordinateX: coordinateX, 
      coordinateY: coordinateY },
    {
      where: {
        imperiumId: imperiumId,
      },
    }
  );
}

export function getImperiumById(id: number): Promise<Imperium | null> {
  return Imperium.findByPk(id);
}