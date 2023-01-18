import { NotFoundError, ParameterError } from '../errors';
import { GetAllImperiaResponse } from '../interfaces/imperia';
import Imperium from '../models/imperium';
import * as imperiaRepo from '../repositories/imperiaRepo';

export async function getAllImperia(): Promise<GetAllImperiaResponse> {
  const imperia = await imperiaRepo.getAllImperia();
  let responseImperia = [];

  imperia.forEach(element => {
    let responseImperium = {
      id: element.id,
      name: element.name,
      coordinateX: element.coordinateX,
      coordinateY: element.coordinateY,
      userId: element.userId,
    };
    responseImperia.push(responseImperium);
  });
  return { imperia: responseImperia };
}

export async function setImperiumLocationById(
  imperiumId: number,
  coordinateX: number,
  coordinateY: number
): Promise<Imperium> {
  if (!imperiumId || !Number.isInteger(imperiumId)) {
    throw new ParameterError('No imperium Id implemeted');
  }
  const imperium = await imperiaRepo.getImperiumById(imperiumId);

  if (!imperium) {
    throw new NotFoundError('No such Id');
  }

  if (
    coordinateX >= 0 &&
    coordinateX <= 100 &&
    coordinateY >= 0 &&
    coordinateY <= 100
  ) {
    imperiaRepo.setImperiumLocationById(imperiumId, coordinateX, coordinateY);
  } else {
    throw new ParameterError('Wrong coordinates!');
  }
  return imperium;
}
