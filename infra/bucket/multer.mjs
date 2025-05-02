import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: 'uploads',
  limits: { files: 6 },
  filename: (req, file, cb) => {
    //cb(null, Date.now() +'_'+ path.basename(file.originalname) + path.extname(file.originalname));
    cb(null, Date.now() +'_'+ path.basename(file.originalname));
  },
});

const upload = multer({ storage });

export { storage, upload }; // named exports
