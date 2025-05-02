import * as CreatePropertyController from './controllers/CreateController.mjs';
import { Router } from 'express';
import { upload } from '../../infra/bucket/multer.mjs';
import express from 'express'

const app = express();
const router = Router();

// const upload = multer({
//   dest: 'uploads/',
//   limits: { files: 6 },
//   fileName: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     if (!['.png', '.jpg', '.jpeg'].includes(ext)) {
//       return cb(new Error('Apenas imagens são permitidas'));
//     }
//     cb(null, true);
//   },
// });



router.route('/property/').post(upload.array('photo', 6), CreatePropertyController.create);

export default router;
