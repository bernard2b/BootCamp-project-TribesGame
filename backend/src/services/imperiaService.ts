import { NotFoundError, ParameterError } from '../errors';
import { GetAllImperiaResponse, ImperiumInterface, SetLocationRequest } from '../interfaces/imperia';
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
  coordinates: SetLocationRequest
): Promise<ImperiumInterface> {
  if (!imperiumId || !Number.isInteger(imperiumId)) {
    throw new ParameterError("ImperiumId not a valid number!");
  }
  const imperium = await imperiaRepo.getImperiumById(imperiumId);

  if (!imperium) {
    throw new NotFoundError("ImperiumId not found!");
  }

  if (
    coordinates.coordinateX >= 0 &&
    coordinates.coordinateX <= 100 || 
    coordinates.coordinateX === null &&
    coordinates.coordinateY <= 100  &&
    coordinates.coordinateY >= 0 ||
    coordinates.coordinateY === null
  ) {
    await imperiaRepo.setImperiumLocationById(imperiumId, coordinates);
  } else {
    throw new ParameterError('Wrong coordinates!');
  }

  const affectedrows= await imperiaRepo.setImperiumLocationById(imperiumId, coordinates);

  
  if (affectedrows[0] === 0) {
    throw new NotFoundError();
  } else {
   let imperium={ 
      id : imperiumId, 
      ...coordinates
    }
    return imperium as ImperiumInterface;
  }
 
}
