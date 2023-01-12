import { Request, Response, NextFunction } from 'express';
import status from 'http-status';
import { HttpError, NotFoundError, ParameterError } from '../errors';
import {  GetAllBuildingsResponse, GetOneBuildingByIdRequest, GetOneBuildingByIdResponse,  } from '../interfaces/buildings';
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

export async function getOneBuildingById(
  req: Request<GetOneBuildingByIdRequest, unknown, unknown, unknown>,
  res: Response<GetOneBuildingByIdResponse>,
  next: NextFunction,
): Promise<void> {
  const buidlingId = Number(req.params.buildingId)

  try {
    const data = await buildingsService.getOneBuildingById(buidlingId)
    res.send(data);
  } catch (error) {
    if (error instanceof ParameterError) {
      next(new HttpError(status.BAD_REQUEST, error.message));
    }
    else if (error instanceof NotFoundError) {
      next(new HttpError(status.NOT_FOUND));
    } 
    else {
      next(new HttpError(status.INTERNAL_SERVER_ERROR))
    }
  }
}