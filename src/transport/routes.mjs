import * as CreateEmbarkationController from './controllers/CreateEmbarkationController.mjs';
import * as SearchEmbarkationController from './controllers/SearchEmbarkationController.mjs';

import * as SearchRoutesController from './controllers/SearchRoutesController.mjs';
import * as TravelController from './controllers/TravelController.mjs';
import * as BusController from './controllers/BusController.mjs';

import { Router } from 'express';

const router = Router();

router.route('/v1/embarkation/').post(CreateEmbarkationController.create);
router.route('/v1/embarkation/').get(SearchEmbarkationController.search);
// router.route('/v1/transport/embarkation/id').put(UpdateEmbarkationController.update);
// router.route('/v1/transport/embarkation/id').delete(DeleteEmbarkationController.remove);

router.route('/v1/routes/').get(SearchRoutesController.search);

router.route('/v1/travel/').get(TravelController.search);
router.route('/v1/travel/').post(TravelController.create);

router.route('/v1/bus/').get(BusController.search);


export default router;


