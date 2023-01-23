import { Request, Response, NextFunction } from 'express';
import * as imperiaService from "../services/imperiaService"
import status from 'http-status';
import { HttpError, NotFoundError, ParameterError } from '../errors';
import { GetAllImperiaResponse, SetLocationRequest, SetLocationResponse } from "../interfaces/imperia";

export async function getAllImperia(
    req: Request,
    res: Response<GetAllImperiaResponse>, 
    next: NextFunction, 
): Promise<void> {
    try {
        const data = await imperiaService.getAllImperia();
        res.send(data);
      } catch (error) {
        next(new HttpError(status.INTERNAL_SERVER_ERROR));
      }
    }

export async function setImperiumLocationById(
    req: Request<{ imperiumId: number}, unknown, SetLocationRequest, unknown>,
    res: Response,
    next: NextFunction,
): Promise<void> {
    const imperiumId = Number(req.params.imperiumId);
    const coordinates = req.body;

    try {
        const data = await imperiaService.setImperiumLocationById(imperiumId, coordinates);
        res.send(data);
    } catch (error) {
        if (error instanceof NotFoundError) {
          next(new HttpError(status.NOT_FOUND, error.message));
        } else if (error instanceof ParameterError) {
            next(new HttpError(status.BAD_REQUEST, error.message));
        } else {
          next(new HttpError(status.INTERNAL_SERVER_ERROR));
        }
    }
}