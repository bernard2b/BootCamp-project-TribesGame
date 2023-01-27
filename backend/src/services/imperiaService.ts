import { NotFoundError, ParameterError } from '../errors';
import {
  GetAllImperiaResponse,
  ImperiumInterface,
  SetLocationRequest,
} from '../interfaces/imperia';
import * as imperiaRepo from '../repositories/imperiaRepo';

export async function getAllImperia(): Promise<GetAllImperiaResponse> {
  const imperia = await imperiaRepo.getAllImperia();
  let responseImperia = [];

  imperia.forEach(element => {
    let responseImperium = {
      id: element.id,
      name: element.name,
      coordinates: element.coordinates,
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
  if (imperiumId < 0 || !Number.isInteger(imperiumId)) {
    throw new ParameterError('ImperiumId not a valid number!');
  }
  const imperium = await imperiaRepo.getImperiumById(imperiumId);

  if (!imperium) {
    throw new NotFoundError('ImperiumId not found!');
  }

  if (
    coordinates.coordinates >= 0 &&
    coordinates.coordinates <= 600
  ) {
    await imperiaRepo.setImperiumLocationById(imperiumId, coordinates);
  } else {
    throw new ParameterError('Wrong coordinates!');
  }

  const affectedrows = await imperiaRepo.setImperiumLocationById(
    imperiumId,
    coordinates
  );

  let imperiumNewLocation = {
    id: imperiumId,
    ...coordinates,
  };
  return imperiumNewLocation as ImperiumInterface;
}
