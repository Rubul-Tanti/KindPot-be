import express from 'express';
import { asyncError } from '../middleware/errorHandler';
import authorizationMiddleware from '../middleware/authentication';
import {
    createCharity,
    getAllCharities,
    getCharityById,
    updateCharity,
    deleteCharity,
    toggleCharityStatus,
    getFeaturedCharities,
    toggleFeaturedStatus,
} from '../controlers/charity/index';
import { uploadMiddleware as multerUpload } from '../middleware/multer';

const charityRouter = express.Router();
charityRouter.get('/', asyncError(getAllCharities));
charityRouter.get('/featured', asyncError(getFeaturedCharities));
charityRouter.get('/:id', asyncError(getCharityById));
charityRouter.post('/create', authorizationMiddleware(['ADMIN']), multerUpload.array('files'), asyncError(createCharity));
charityRouter.put('/:id', authorizationMiddleware(['ADMIN']), multerUpload.array('images'), asyncError(updateCharity));
charityRouter.delete('/:id',authorizationMiddleware(['ADMIN']),asyncError(deleteCharity));
charityRouter.patch('/:id/toggle-status',authorizationMiddleware(['ADMIN']),asyncError(toggleCharityStatus));
charityRouter.patch('/:id/toggle-featured',authorizationMiddleware(['ADMIN']),asyncError(toggleFeaturedStatus));

export default charityRouter;
