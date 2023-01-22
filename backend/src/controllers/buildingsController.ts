import { Request, Response, NextFunction } from 'express';
import status from 'http-status';
import { ZodError } from 'zod';
import { HttpError, NotFoundError, ParameterError } from '../errors';
import {
  AddBuildingResponse,
  GetAllBuildingsResponse,
  GetOneBuildingByIdRequest,
  GetOneBuildingByIdResponse,
  NewBuildingRequest,
} from '../interfaces/buildings';
import * as buildingsService from '../services/buildingsService';
import { fromZodError } from 'zod-validation-error';

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
  next: NextFunction
): Promise<void> {
  const buidlingId = Number(req.params.buildingId);

  try {
    const data = await buildingsService.getOneBuildingById(buidlingId);
    res.send(data);
  } catch (error) {
    if (error instanceof ParameterError) {
      next(new HttpError(status.BAD_REQUEST, error.message));
    } else if (error instanceof NotFoundError) {
      next(new HttpError(status.NOT_FOUND));
    } else {
      next(new HttpError(status.INTERNAL_SERVER_ERROR));
    }
  }
}

export async function addNewBuilding(
  req: Request<{ imperiumId: string }, unknown, NewBuildingRequest, unknown>,
  res: Response<AddBuildingResponse>,
  next: NextFunction
): Promise<void> {
  const imperiumId = Number(req.params.imperiumId);
  const type = req.body.type;
  try {
    const data = await buildingsService.addNewBuilding(imperiumId, type);
    res.send(data);
  } catch (error) {
    if (error instanceof NotFoundError) {
      next(new HttpError(status.NOT_FOUND, error.message));
    } else if (error instanceof ZodError) {
      next(new HttpError(status.BAD_REQUEST, fromZodError(error).message));
    } else if (error instanceof ParameterError) {
        next(new HttpError(status.BAD_REQUEST, error.message));
    } else {
      next(new HttpError(status.INTERNAL_SERVER_ERROR));
    }
  }
}
