import { NotFoundError, ParameterError } from "../errors";
import { ResourcesResponse } from "../interfaces/resources";
import * as resourcesRepo from '../repositories/resourcesRepo';
import * as userRepo from '../repositories/userRepo';

export async function getResourcesByImperiumId(
    userId: number
): Promise<ResourcesResponse> {
  const user = await userRepo.getUserById(userId);
    if (user.imperium.id < 0 || !Number.isInteger(user.imperium.id)) {
        throw new ParameterError('ImperiumId not a valid number!');
      }
    const resources = await resourcesRepo.getResourcesByImperiumId(user.imperium.id)
    
    if (!resources) {
        throw new NotFoundError('Resources for this Imperium not found!');
      }
      
    let currentMineral = resources[0].amount
    let mineralPerMinute = resources[0].generation
    let currentFood = resources[1].amount
    let foodPerMinute = resources[1].generation
    
    currentMineral += mineralPerMinute;
    currentFood += foodPerMinute;

  resourcesRepo.updateMineralAmountByImperiumId(user.imperium.id, currentMineral)
    resourcesRepo.updateFoodAmountByImperiumId(user.imperium.id, currentFood)
    
    let updatedResources = {
        mineralAmount: currentMineral,
        mineralGeneration: mineralPerMinute,
        foodAmount: currentFood,
        foodGeneration: foodPerMinute

    }


    return updatedResources as ResourcesResponse
}