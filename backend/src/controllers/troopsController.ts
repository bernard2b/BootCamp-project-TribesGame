import { Request, Response, NextFunction } from 'express';
import status from 'http-status';
import { ZodError } from 'zod';
import { fromZodError } from 'zod-validation-error';
import { HttpError, NotFoundError, ParameterError } from '../errors';
import { AddTroopResponse, GetAllTroopsResponse, NewTroopRequest, UpgradeTroopRequest, UpgradeTroopResponse } from '../interfaces/troops';
import * as troopsService from '../services/troopsService';
import * as troopsUpgradeService from '../services/troopsUpgradeService';

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

export async function getAllTroopsByImperiumId(
  req: Request<{ imperiumId: string }, unknown, unknown, unknown>,
  res: Response<GetAllTroopsResponse>,
  next: NextFunction
): Promise<void> {

  const imperiumId = Number(req.params.imperiumId)
  try {
    const data = await troopsService.getAllTroopsByImperiumId(imperiumId);
    res.send(data);
  } catch (error) {
    next(new HttpError(status.INTERNAL_SERVER_ERROR));
  }
}

export async function addNewTroop(
  req: Request<{ imperiumId: string }, unknown, NewTroopRequest, unknown>,
  res: Response<AddTroopResponse>,
  next: NextFunction
): Promise<void> {
  const imperiumId = Number(req.params.imperiumId);
  const type = req.body.type;
  
  try {
    const data = await troopsService.addNewTroop(imperiumId, type);
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

export async function upgradeTroopById(
  req: Request<{ imperiumId: string, id: string }, unknown, UpgradeTroopRequest, unknown>,
  res: Response<UpgradeTroopResponse>,
  next: NextFunction
): Promise<void> {
  const imperiumId = Number(req.params.imperiumId);
  const id = Number(req.params.id)
  const type = req.body.type;
  const level = req.body.level;

  try {
    const data = await troopsUpgradeService.upgradeTroopById(imperiumId, id, type, level);
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
