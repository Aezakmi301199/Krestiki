import {config} from '../database/config/config.js'
import jwt from 'jsonwebtoken'
import ApiError from '../back/exceptions/ApiError.js';
import TokenService from '../back/Services/TokenService.js';
export default function (req,res,next) {
    if (req.method === 'OPTIONS') {
        next();
    }
    try {
        const authToken = req.headers.authorization
        if (authToken === undefined  ) {
            throw ApiError.UnAuthrizationError()
        }
        let token = req.headers.authorization.split(' ')[1]
        if (token === undefined  ) {
            throw ApiError.UnAuthrizationError()
        }
        let userInfo =  TokenService.validateAccesToken(token)
        if (userInfo == null){
            throw ApiError.UnAuthrizationError()
        }
        req.user = userInfo
        next()
    } catch(e) {
        console.log(e)
        return  next(ApiError.UnAuthrizationError())
    }
}
//return res.status(403).json("Пользователь не авторизован")