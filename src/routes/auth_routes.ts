import express from 'express'
import { asyncError } from '../middleware/errorHandler'
import { emailverification } from '../controlers/authentication/email_verification'
import registerUser from '../controlers/authentication/registerUser'
import LoginUser from '../controlers/authentication/loginUser'
import  authorizationMiddleware  from '../middleware/authentication'
import { refreshUser } from '../controlers/authentication/refresh'
import { logout } from '../controlers/authentication/logout'
import { registerWithGoogle } from '../controlers/authentication/google_auth'
const authRouter=express.Router()
authRouter.post('/email-verification',asyncError(emailverification))
authRouter.post('/register',asyncError(registerUser))
authRouter.post('/login',authorizationMiddleware([]),asyncError(LoginUser))
authRouter.get('/refresh',asyncError(refreshUser))
authRouter.get('/logout',authorizationMiddleware([]),asyncError(logout))
authRouter.post('/register-with-google',asyncError(registerWithGoogle))
export default authRouter