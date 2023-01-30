import { Request, Response, NextFunction } from 'express';
import status from 'http-status';
import { HttpError, NotFoundError, ParameterError } from "../errors";
import { ResourcesResponse } from "../interfaces/resources";
import * as resourcesService from "../services/resourcesService"

export async function getResourcesByImperiumId(
    req: Request<unknown, unknown, unknown, unknown>,
    res: Response<ResourcesResponse>,
    next: NextFunction,
): Promise<void> {
    try {
        const data = await resourcesService.getResourcesByImperiumId(req.userId);
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