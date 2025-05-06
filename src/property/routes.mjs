import * as CreatePropertyController from './controllers/CreateController.mjs';
import { Router } from 'express';
import { upload } from '../../infra/bucket/multerGD.mjs';


const router = Router();


router.route('/property/').post(upload.array('photo', 6), CreatePropertyController.create);

export default router;
