import {Router} from "express"
import authorizationMiddleware from "../middleware/authentication"
import { asyncError } from "../middleware/errorHandler"
import { checkPaymentStatus, confirmPayment, createSubscriptionOrder, getOrders } from "../controlers/subscriptionOrder"

export const subscriptionOrderRouter=Router()
subscriptionOrderRouter.post('/create-subscriptionOrder',authorizationMiddleware([]),asyncError(createSubscriptionOrder))
subscriptionOrderRouter.post('/status',authorizationMiddleware([]),asyncError(checkPaymentStatus))
subscriptionOrderRouter.post('/confirm-payment',authorizationMiddleware([]),asyncError(confirmPayment))
subscriptionOrderRouter.get('/orders',asyncError(getOrders))