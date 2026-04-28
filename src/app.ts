import express from 'express'
import { requestLogger } from './middleware/req_logger'
import authRouter from './routes/auth_routes'
import { userRouter } from './routes/user'
import cookieParser from "cookie-parser"
import charityRouter from './routes/charity_routes'
import golfScoreRouter from './routes/golf_score_routes'
import { globalErrorHandler, notFoundHandler} from './middleware/errorHandler'
import { corsConfig } from './config/cors_config'
import cors from "cors"
import { subscriptionOrderRouter } from './routes/subscriptionOrder_routes'
import { subscriptionModelRouter } from './routes/subscriptionModel_routes'
import { userCharityRouter } from './routes/userCharity_routes'
import Drawrouter from './routes/draw_routes'
import participantRouter from './routes/participant_routes'
import winnerrouter from './routes/winner_routes'
import { dashboardRouter } from './routes/dashboard-routes'

const app=express()
app.use(cors(corsConfig))
app.use(cookieParser())
app.use(express.json())
app.use(requestLogger)

app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)
app.use('/api/charity',charityRouter)
app.use('/api/golf-score',golfScoreRouter)
app.use('/api/subscription-model',subscriptionModelRouter)
app.use('/api/payment',subscriptionOrderRouter)
app.use('/api/user-charity',userCharityRouter)
app.use('/api/draw',Drawrouter)
app.use('/api/participant',participantRouter)
app.use('/api/winner',winnerrouter)
app.use('/api/dashboard',dashboardRouter)
app.use(notFoundHandler)

app.use(globalErrorHandler)

export default app
