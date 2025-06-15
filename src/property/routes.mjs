import * as CreatePropertyController from './controllers/CreateController.mjs';
import * as SearchPropertyController from './controllers/SearchPropertyController.mjs';
import { Router } from 'express';
import { upload } from '../../infra/bucket/multerGD.mjs';


const router = Router();


router.route('/property/').post(upload.array('photo', 6), CreatePropertyController.create);
router.route('/property/id').get(SearchPropertyController.searchById)
router.route('/property').get(SearchPropertyController.search)

export default router;
