
import Router from 'express';
import UserController from '../controllers/UserController.js'
const userRouter = new Router();
import {body,validationResult} from 'express-validator';
import authMiddleWare from '../../middleWare/authMiddleWare.js';
import { findUserByEmail, findUserByLogin } from '../utils/functions.js';
userRouter.get('/users',UserController.getAllUser)
userRouter.get('/users/:id',authMiddleWare,UserController.getUserByID)
userRouter.get('/activate/:link',UserController.activateMail)
userRouter.post('/reg',
body('password').isLength({min:3,max:40}),
body('email').isEmail().custom(async (value) => {
    if (await findUserByEmail(value)) {
        throw 'emailInBase'
    } 
}),
body('login').notEmpty().custom(async (value) => {
    if (await findUserByLogin(value)) {
        throw 'loginInBase'
    } 
}),
body('repeatPassword').notEmpty(),
body('phone').isMobilePhone()
,UserController.registrateUser )
userRouter.post('/login',UserController.loginUser)
userRouter.post('/logout',authMiddleWare,UserController.logoutUser)
userRouter.put('/users',authMiddleWare,UserController.uploadUser)
userRouter.get('/refresh',UserController.refreshToken)
userRouter.delete('/users/:id',UserController.deleteUser)
export default userRouter;

/*

body('repeatPassword').custom( value => {
    if (value !=  body('password').value()){ throw 3}
})*/