import {Router} from "express"
import authorizationMiddleware from "../middleware/authentication"
import { asyncError } from "../middleware/errorHandler"
import { dashboardOverview } from "../controlers/draw"
import { getDashboardStats } from "../controlers/dashboard/getDashboardStats"
export const dashboardRouter=Router()
dashboardRouter.get('/',authorizationMiddleware([]),asyncError(dashboardOverview))
dashboardRouter.get('/admin/',authorizationMiddleware(['ADMIN']),asyncError(getDashboardStats))