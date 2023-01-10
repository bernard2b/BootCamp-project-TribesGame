import Troops from '../models/troop';
import { NotFoundError, ParameterError } from '../errors';
import * as troopsRepo from '../repositories/troopsRepo';
import { GetAllTroopsResponse } from '../interfaces/troops';

/*---- to be used at filtering for type ---//
export async function getOneTroopTypeSquad(
  troopsType: string
): Promise<TroopsResponse> {
  if (typeof troopsType !== 'string') {
    throw new ParameterError('Invalid troops type');
  }

  const troops = await troopsRepo.getTroopsByType(troopsType);

  if (troops) {
    return { troops: troops as Troops[] };
  } else {
    throw new NotFoundError();
  }
 } */

export async function getAllTroops(): Promise<GetAllTroopsResponse> {
  const troops = await troopsRepo.getAllTroops();
  return { troops: troops };
}
