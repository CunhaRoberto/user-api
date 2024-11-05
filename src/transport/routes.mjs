import * as CreateEmbarkationController from './controllers/CreateEmbarkationController.mjs';
import * as SearchEmbarkationController from './controllers/SearchEmbarkationController.mjs';

import * as SearchRoutesController from './controllers/SearchRoutesController.mjs';
import * as VisitController from './controllers/VisitController.mjs';
import * as BusController from './controllers/BusController.mjs';

import { Router } from 'express';

const router = Router();

router.route('/v1/embarkation/').post(CreateEmbarkationController.create);
router.route('/v1/embarkation/').get(SearchEmbarkationController.search);
// router.route('/v1/transport/embarkation/id').put(UpdateEmbarkationController.update);
// router.route('/v1/transport/embarkation/id').delete(DeleteEmbarkationController.remove);

router.route('/v1/routes/').get(SearchRoutesController.search);

router.route('/v1/visit/').get(VisitController.search);
router.route('/v1/visit/').post(VisitController.create);
router.route('/v1/visit/id').delete(VisitController.remove)

router.route('/v1/bus/').get(BusController.search);


export default router;


