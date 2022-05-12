
import UserService from "../Services/UserService.js";
import {body,validationResult} from 'express-validator';
import { config } from "../../database/config/config.js";
import ApiError from "../exceptions/ApiError.js";

class UserController {
   async registrateUser (req,res,next) {
        try {
            let validationCheck = validationResult(req);
            const {password,repeatPassword} = req.body;
            if (password != repeatPassword ){
                validationCheck.errors.push({param:'repeatPassword'})
            }
            let errors= validationCheck.errors.length ;
            if (errors) {
                            throw ApiError.BadRequest('Введены некорректные данные',validationCheck.errors)
            } 
            const userOver = await UserService.registrate(req.body);
            res.cookie('refreshToken',userOver.refreshToken,{maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            res.json(userOver);
        } catch (e) {
            next(e)
        }
    }
    async getAllUser (req,res,next) {
        try {
            const users = await UserService.getAll();
            res.json(users)
        } catch (e) {
            next(e)
        }
    }
    async getUserByID (req,res,next) {
        try {
            const game = await UserService.getByID(req.params.id);
             res.json(game);
        } catch (e) {
            next(e)
        }
    }
    async uploadUser (req,res,next) {
        try {
            const userUpload = await UserService.upload(req.body); 
             res.json(userUpload);
        } catch (e) {
            res.status(400).json(`${e.message}` )
        }
    }
    async deleteUser (req,res,next) {
        try {
            const userDeleted = await UserService.delete(req.params.id);
            res.json(userDeleted)
        } catch (e) {
            next(e)
        }
    }
    async activateMail (req,res,next) {
        try {
            const link = req.params.link;
            await UserService.activate(link);
            return res.redirect(config.api_client);
        } catch (e) {
            next(e)
        }
    }
    async loginUser (req,res,next) {
        try {
            const user = await UserService.login(req.body)
            res.clearCookie('refreshToken');
            res.cookie('refreshToken',user.refreshToken,{maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            res.json(user)
        } catch (e) {
            next(e)
        }
    }
    async logoutUser (req,res,next) {
        try {
            await UserService.logout(req.cookies);
            res.clearCookie('refreshToken');
            res.status(200).json();
        } catch (e) {
            next(e)
        }
    }
    async refreshToken (req,res,next) {
        try {
           const user = await UserService.refresh(req.cookies)
            res.cookie('refreshToken', user.refreshToken)
            res.status(200).json()
        } catch(e) {
            next(e)
        }
    }
}
export default new UserController();

/*
    async authAndTakeToken (req,res) {
        try {
            const token = await UserService.authAndTakeToken(req.body);
            res.json(token)
        } catch (e) {
            res.status(400).json(`${e.message}` )
        }
    }
*/