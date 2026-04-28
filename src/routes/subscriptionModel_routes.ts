import {Router} from 'express'
import authorizationMiddleware from '../middleware/authentication'
import { asyncError } from '../middleware/errorHandler'
import {addSubscriptionModel, deleteSubscriptionModel, getSubscriptionModels, updateSubscriptionModel} from "../controlers/SubscriptionModel"
export const subscriptionModelRouter=Router()
subscriptionModelRouter.post("/add",authorizationMiddleware(['ADMIN']),asyncError(addSubscriptionModel))
subscriptionModelRouter.get("/",asyncError(getSubscriptionModels))
subscriptionModelRouter.put("/update/:id",authorizationMiddleware(['ADMIN']),asyncError(updateSubscriptionModel))
subscriptionModelRouter.delete("/delete/:id",authorizationMiddleware(['ADMIN']),asyncError(deleteSubscriptionModel))