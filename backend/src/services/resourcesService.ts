import { NotFoundError, ParameterError } from "../errors";
import { ResourcesResponse } from "../interfaces/resources";
import * as resourcesRepo from '../repositories/resourcesRepo';

export async function getResourcesByImperiumId(
    imperiumId: number
): Promise<ResourcesResponse> {
    if (imperiumId < 0 || !Number.isInteger(imperiumId)) {
        throw new ParameterError('ImperiumId not a valid number!');
      }
    const resources = await resourcesRepo.getResourcesByImperiumId(imperiumId)
    
    if (!resources) {
        throw new NotFoundError('Resources for this Imperium not found!');
      }
      
    let currentMineral = resources[0].amount
    let mineralPerMinute = resources[0].generation
    let currentFood = resources[1].amount
    let foodPerMinute = resources[1].generation
    
    currentMineral += mineralPerMinute;
    currentFood += foodPerMinute;

    resourcesRepo.updateMineralAmountByImperiumId(imperiumId, currentMineral)
    resourcesRepo.updateFoodAmountByImperiumId(imperiumId, currentFood)
    
    let updatedResources = {
        mineralAmount: currentMineral,
        mineralGeneration: mineralPerMinute,
        foodAmount: currentFood,
        foodGeneration: foodPerMinute

    }


    return updatedResources as ResourcesResponse
}