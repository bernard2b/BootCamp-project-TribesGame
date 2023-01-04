import { Request, Response, NextFunction } from 'express';
import status from 'http-status';
import { HttpError, NotFoundError, ParameterError } from '../errors';
import { BuildingsResponse } from '../interfaces/buildings';
import * as buildingsService from '../services/buildingsService';

export async function getAllBuilding(
  req: Request,
  res: Response<BuildingsResponse>,
  next: NextFunction
): Promise<void> {
  try {
    const data = await buildingsService.getAllData();
    res.send(data);
  } catch (error) {
    if (error instanceof ParameterError) {
      next(new HttpError(status.BAD_REQUEST, error.message));
    }
    if (error instanceof NotFoundError) {
      next(new HttpError(status.NOT_FOUND));
    }
  }
}
