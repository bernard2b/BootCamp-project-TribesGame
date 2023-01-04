import express from 'express';
import status from 'http-status';
import apiErrorHandler from '../middlewares/apiErrorHandler';
import * as helloController from '../controllers/helloController';
import { HttpError } from '../errors';
import * as buildingsController
from '../controllers/buildingsController';

const router = express.Router();

router.use(express.json());

router.get('/hello', helloController.getHelloWorld);
router.get('/buildings', buildingsController.getAllBuilding);

router.use('/*', (req, res, next) => next(new HttpError(status.NOT_FOUND)));
router.use(apiErrorHandler);

export default router;
