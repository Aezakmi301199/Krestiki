import jwt from "jsonwebtoken";
import { config } from "../../database/config/config.js";
import { dbGame } from "../../database/db.js";
import {getNowTimeAndDate} from '../utils/functions.js';
const checkRefreshTokenByID = async (userID) =>{
    return await dbGame('refreshtokens').select('id').where({user_id:userID}).first()
 }
 
class TokenService {
    async generateTokens(id,login,role,config) {
        const payload = {
            id,
            login,
            role
        }

        const accessToken = jwt.sign(payload,config.secret_acces,{expiresIn:'1h'})
        const refreshToken = jwt.sign(payload,config.secret_refresh,{expiresIn:'30d'})
        return {
            accessToken,
            refreshToken
        }
    }

    async saveRefreshToken (userID,refreshToken) {
        const info = await checkRefreshTokenByID(userID)
        if (info) {
             await dbGame('refreshtokens').where({user_id:userID}).update({ token:refreshToken});
        } else {
            const nowDate= getNowTimeAndDate();
            await dbGame('refreshtokens').where({userID}).insert({
                user_id:userID,
                token:refreshToken,
                updated_at:nowDate
            })
        }
    }
    async deleteRefreshToken (refreshToken) {
    await dbGame('refreshtokens')
        .where({token:refreshToken})
        .del();
    }
     validateAccesToken (accesToken) {
        try {
            return jwt.verify(accesToken,config.secret_acces) // payload
        } catch(e) {
            return null
        }
    }
     validateRefreshToken (refreshToken) {
        try {
        return jwt.verify(refreshToken,config.secret_refresh) // payload
        } catch(e) {
            return null
        }
    }
    async findRefreshTokenByID (userId) {
        return await dbGame('refreshtokens').where({user_id:userId}).select('token').first();
    }
}

export default new TokenService();

