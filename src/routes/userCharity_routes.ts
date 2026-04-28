import {Router} from 'express'
import authorizationMiddleware from '../middleware/authentication'
import { asyncError } from '../middleware/errorHandler'
import { createUserCharity, getUserCharity } from '../controlers/userCharity'
export const userCharityRouter=Router()
userCharityRouter.get('/',authorizationMiddleware([]),asyncError(getUserCharity))
userCharityRouter.post('/create',authorizationMiddleware(['SUBSCRIBER','ADMIN']),asyncError(createUserCharity))