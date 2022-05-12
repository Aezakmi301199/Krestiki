import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { dbGame } from "../db.js";
import {config} from '../../database/config/config.js'
import TokenService from '../../back/Services/TokenService.js';
import MailService from '../../back/Services/MailService.js';

import { v1 as uuidv1 } from 'uuid';

import {checkUserLink, findHashPassByLogin, findUserByEmail, findUserByID, findUserByLogin, getNowTimeAndDate} from '../../back/utils/functions.js';
import ApiError from '../../back/exceptions/ApiError.js';


  class Users {
   async registrateKnexUsers (email,login,password,phone) 
    {   

                const hashPass= bcrypt.hashSync(password,3);
                let user =await dbGame('users').insert({login,password:hashPass}).returning("*")
                user=user[0]
                const activateLink = uuidv1();
                if (phone === undefined) {
                    await dbGame('infoaboutusers').insert({user_id:user.id,email})
                } else {
                    await dbGame('infoaboutusers').insert({user_id:user.id,email,phoneNumber:phone})
                }
                await MailService.activateMail(email,`${config.api_url}/activate/${activateLink}`)
                await dbGame('infoaboutusers').update({activationLink:activateLink}).where({email})
                const {accessToken,refreshToken} = await TokenService.generateTokens(user.id,login,user.role,config)
                await TokenService.saveRefreshToken(user.id,refreshToken);
                return { accessToken,refreshToken,user:{id:user.id,login,role:user.role}}
    }
    async getAllKnexUsers () 
    { return await dbGame('users').select('id','login','status','create_at').where({status:'active'});
    }
    async getKnexUsersByID (id) 
    { 
        const checkUser = await findUserByID(id)
        if (checkUser) {
            return checkUser
        } else {
            throw  ApiError.BadRequest('Пользователя с таким id не существует',);
        }
    }
    async deleteKnexUsersByID (id) 
    { 
        let checkUser =  await dbGame('users').select('login').where({id}).first();
        if (checkUser) {
             // Но мы не удаляем а меняем статус return await dbGame('users').where({id}).del()
            await dbGame('users').where({id}).update({status: 'delete',updated_at:getNowTimeAndDate()});
            return 'Пользователь был успешно удален'
        } else {
            throw  ApiError.BadRequest('Пользователя с таким id не существует',);
        }
    } 
    async uploadKnexUser (user) 
    {
       const {id,password,status} = user;
        let checkUser =  await dbGame('users').select('login').where({id}).first();
        if (checkUser && password || checkUser && status) {
                const hashPass= bcrypt.hashSync(password,3);
                let ifYourDayWasALastDay = getNowTimeAndDate()
                console.log(ifYourDayWasALastDay)
                if (status && password) {
                    await dbGame('users').where({id}).update({password:hashPass,status,updated_at:ifYourDayWasALastDay});
                } else if( password) {
                    await dbGame('users').where({id}).update({password:hashPass,updated_at:ifYourDayWasALastDay});
                } else {
                    await dbGame('users').where({id}).update({status:hashPass,updated_at:ifYourDayWasALastDay});
                }
                return 'Данные были успешно изменёны';
        } else {
            throw  ApiError.BadRequest('Пользователя с таким id не существует',);
        }
    }
    async loginKnex (login,password) {
        let user =  await findUserByLogin(login) // OBJECT { ID,LOGIN,ROLE}
        if (user === undefined){
            throw ApiError.BadRequest('Неверный логин',[{param:'login',msg:'uncorrect'}]);
        }
        const {password:hashPassword} = await findHashPassByLogin(login)
        const passwordCheck = bcrypt.compareSync(password,hashPassword) 
        if (!passwordCheck) {
            
            throw  ApiError.BadRequest('Неверный пароль',[{param:'password',msg:'uncorrect'}]);
        }
        const {accessToken,refreshToken} = await TokenService.generateTokens(user.id,login,user.role,config)
        await TokenService.saveRefreshToken(user.id,refreshToken);
        return { accessToken,refreshToken,user:{id:user.id,login}}
    }
    async logoutKnex(refreshToken) {
        await TokenService.deleteRefreshToken(refreshToken)
    }
    async activateKnex (activLink) {
        let link = await checkUserLink(activLink) //OBJECT { activationLink}
        if (link === undefined) {
            throw  ApiError.BadRequest('Некорректная ссылка');
        }
        await dbGame('infoaboutusers').where({activationLink:activLink}).update({isActivated:true});
    }
    async refresh (oldrefreshToken) {
        if (!oldrefreshToken || undefined){
            throw ApiError.UnAuthrizationError()
        }

        const userInfo =  TokenService.validateRefreshToken(oldrefreshToken)
        if (userInfo === null) {
            throw ApiError.UnAuthrizationError()
        }
        const {token:refreshTokenFromDB} = await TokenService.findRefreshTokenByID(userInfo.id)
        console.log(refreshTokenFromDB)
        if (refreshTokenFromDB === null) {
            throw ApiError.UnAuthrizationError()
        }
        const {accessToken,refreshToken} = await TokenService.generateTokens(userInfo.id,userInfo.login,userInfo.role,config)
        await TokenService.saveRefreshToken(userInfo.id,refreshToken);
        return { accessToken,refreshToken}
    }
}

export default new Users();

//  const {password:unHashPass} = await dbGame('users').where({id}).select('password').first();
                //  console.log(unHashPass)
               //   const unHashPass = bcrypt.compareSync(password, hash)