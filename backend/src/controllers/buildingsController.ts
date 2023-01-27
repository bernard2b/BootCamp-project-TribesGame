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
  UpgradeBuildingResponse,
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

export async function getAllBuildingsByImperiumId(
  req: Request<unknown, unknown, unknown, unknown>,
  res: Response<GetAllBuildingsResponse>,
  next: NextFunction
): Promise<void> {
  try {
    const data = await buildingsService.getAllBuildingsByImperiumId(req.userId);
    res.send(data);
  } catch (error) {
    next(new HttpError(status.INTERNAL_SERVER_ERROR));
  }
}

export async function addNewBuilding(
  req: Request<unknown, unknown, NewBuildingRequest, unknown>,
  res: Response<AddBuildingResponse>,
  next: NextFunction
): Promise<void> {
  const type = req.body.type;
  try {
    const data = await buildingsService.addNewBuilding(req.userId, type);
    res.send(data);
  } catch (error) {
    console.log(error)
    if (error instanceof NotFoundError) {
      next(new HttpError(status.NOT_FOUND, error.message));
    } else if (error instanceof ZodError) {
      next(new HttpError(status.BAD_REQUEST, fromZodError(error).message));
    } else if (error instanceof ParameterError) {
        next(new HttpError(status.BAD_REQUEST, error.message));
    } else {
      next(new HttpError(status.INTERNAL_SERVER_ERROR, error.message));
    }
  }
}

export async function upgradeBuildingById(
  req: Request<{ imperiumId: string; id: string }, unknown, unknown, unknown>,
  res: Response<UpgradeBuildingResponse>,
  next: NextFunction
): Promise<void> {
  const imperiumId = Number(req.params.imperiumId);
  const id = Number(req.params.id);

  try {
    const data = await buildingsService.upgradeBuildingById(imperiumId, id);
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