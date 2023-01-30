import express from 'express';
import status from 'http-status';
import apiErrorHandler from '../middlewares/apiErrorHandler';
import * as helloController from '../controllers/helloController';
import { HttpError } from '../errors';
import * as buildingsController
from '../controllers/buildingsController';
import * as troopsController from '../controllers/troopsController';
import * as registrationController from '../controllers/registrationController'
import * as loginController from '../controllers/loginController'
import * as updateController from '../controllers/userController'
import * as userController from '../controllers/userController'
import authenticationHandler from '../middlewares/authentication';
import * as resourcesController from '../controllers/resourcesController';

import * as imperiaController from "../controllers/imperiaController"
const router = express.Router();

router.use(express.json());

router.get('/hello', helloController.getHelloWorld);
router.get('/buildings', buildingsController.getAllBuildings);
router.get('/troops', troopsController.getAllTroops);
router.get('/buildings/:buildingId', buildingsController.getOneBuildingById);
router.get('/user', authenticationHandler, userController.getUserDetail)
router.get('/imperia/buildings', authenticationHandler, buildingsController.getAllBuildingsByImperiumId);
router.get('/imperia/troops', authenticationHandler, troopsController.getAllTroopsByImperiumId);
router.get('/imperia/map/', imperiaController.getAllImperia)
router.get('/imperia/resources', authenticationHandler, resourcesController.getResourcesByImperiumId)

router.post('/imperia/buildings', authenticationHandler, buildingsController.addNewBuilding);
router.post('/imperia/troops', authenticationHandler, troopsController.addNewTroop)
router.post('/login', loginController.login);
router.post('/registration', registrationController.createUserWithImperium);
router.post('/imperia/:imperiumId/battle', troopsController.battle)

router.put('/imperia/:imperiumId/buildings/:id', buildingsController.upgradeBuildingById)
router.put('/imperia/:imperiumId/troops/:id', troopsController.upgradeTroopById)
router.put('/registration/map/:imperiumId', imperiaController.setImperiumLocationById)
router.put('/user',authenticationHandler, updateController.updateUser)


router.use('/*', (req, res, next) => next(new HttpError(status.NOT_FOUND)));
router.use(apiErrorHandler);

export default router;
