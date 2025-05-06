import multer from 'multer';

const storage = multer.memoryStorage(); // salva em memória, não no disco
const upload = multer({ storage, limits: { files: 6 } });

export { storage, upload };
