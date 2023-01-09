import { Request, Response, NextFunction } from 'express';
import status from 'http-status';
import { HttpError, NotFoundError, ParameterError } from '../errors';
import { GetAllBuildingsResponse } from '../interfaces/buildings';
import * as buildingsService from '../services/buildingsService';

export async function getAllBuildings(
  req: Request,
  res: Response<GetAllBuildingsResponse>,
  next: NextFunction
): Promise<void> {
  try {
    const data = await buildingsService.getAllBuildings();
    res.send(data);
  } catch (error) {
    next(new HttpError(status.INTERNAL_SERVER_ERROR));
  }
}
