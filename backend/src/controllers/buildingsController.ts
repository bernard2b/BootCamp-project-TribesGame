import { Request, Response, NextFunction } from 'express';
import status from 'http-status';
import { HttpError, NotFoundError, ParameterError } from '../errors';
import { GetAllBuildingsResponse, GetOneBuildingRequest, GetOneBuildingResponse } from '../interfaces/buildings';
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

export async function getOneBuilding(
  req: Request<unknown, unknown, unknown, GetOneBuildingRequest>,
  res: Response<GetOneBuildingResponse>,
  next: NextFunction
): Promise<void> {
  const buidlingId = Number(req.query.id)

  try {
    const data = await buildingsService.getOneBuilding(buidlingId)
    res.send(data);
  } catch (error) {
    next(new HttpError(status.NOT_FOUND));
  }
}