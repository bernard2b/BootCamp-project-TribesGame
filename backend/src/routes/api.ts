import express from 'express';
import status from 'http-status';
import apiErrorHandler from '../middlewares/apiErrorHandler';
import * as helloController from '../controllers/helloController';
import { HttpError } from '../errors';
import * as buildingsController
from '../controllers/buildingsController';
import * as troopsController from '../controllers/troopsController';
import * as registrationController from '../controllers/registrationController'

const router = express.Router();

router.use(express.json());

router.get('/hello', helloController.getHelloWorld);
router.get('/buildings', buildingsController.getAllBuildings);
router.get('/buildings/:buildingId', buildingsController.getOneBuildingById);
router.get('/kingdom/troops', troopsController.getAllTroops);

router.post('/registration', registrationController.createUserWithImperium);

router.use('/*', (req, res, next) => next(new HttpError(status.NOT_FOUND)));
router.use(apiErrorHandler);

export default router;
