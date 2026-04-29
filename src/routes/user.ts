import express from 'express'
import { asyncError } from '../middleware/errorHandler'
import { asignRole, deleteUser, handleIsActive, updateUser } from '../controlers/user/updateuser'
import { getUsers, getUserById } from '../controlers/user/getuser'
import authMiddleware from "../middleware/authentication"
import  requestPasswordChange from '../controlers/authentication/requestPasswordChange'
import  resetPassword from '../controlers/authentication/resetPassword'
import { getRecentUsers } from '../controlers/user/getRecentUsers'
export const userRouter=express.Router()

 userRouter.get('/',authMiddleware(['ADMIN']),asyncError(getUsers))
 userRouter.get('/recent',authMiddleware(['ADMIN']),asyncError(getRecentUsers))
 userRouter.get('/:id',authMiddleware([]),asyncError(getUserById))
 userRouter.put('/update',authMiddleware([]),asyncError(updateUser))
 userRouter.delete('/:id',authMiddleware(['ADMIN']),asyncError(deleteUser))
 userRouter.post('/request-password-change',authMiddleware([]),asyncError(requestPasswordChange))
 userRouter.post('/reset-password',authMiddleware([]),asyncError(resetPassword))
 userRouter.put("/asign-role/:id",authMiddleware(['ADMIN']),asyncError(asignRole))
 userRouter.put("/update-status/:id",authMiddleware(['ADMIN']),asyncError(handleIsActive))