import { SetLocationRequest, SetLocationResponse } from '../interfaces/imperia';
import Imperium from '../models/imperium';

export function getImperiumById(id: number): Promise<Imperium | null> {
  return Imperium.findByPk(id);
}

export function createImperium(
  name: string,
  userId: number
): Promise<Imperium> {
  return Imperium.create({ name, userId });
}

export function getAllImperia(): Promise<Imperium[]> {
  return Imperium.findAll();
}

export function setImperiumLocationById(
  imperiumId: number,
  coordinates: SetLocationRequest
): Promise<number[]> {
  return Imperium.update(
    { ...coordinates
     },

    {
      where: {
        id: imperiumId,
      },
    }
  );
}

