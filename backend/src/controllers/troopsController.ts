import { Request, Response, NextFunction } from 'express';
import status from 'http-status';
import { HttpError, NotFoundError, ParameterError } from '../errors';
import { TroopRequest, GetAllTroopsResponse } from '../interfaces/troops';
import * as troopsService from '../services/troopsService';

export async function getAllTroops(
  req: Request,
  res: Response<GetAllTroopsResponse>,
  next: NextFunction
): Promise<void> {
  try {
    const data = await troopsService.getAllTroops();
    res.send(data);
  } catch (error) {
    next(new HttpError(status.INTERNAL_SERVER_ERROR));
  }
}