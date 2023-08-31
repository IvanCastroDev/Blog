import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import constants from '../constants/var.js';

const storage = new GridFsStorage({
    url: constants.MONGO_URL,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 