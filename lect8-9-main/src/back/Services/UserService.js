 import { dbGame } from "../../database/db.js";
 import  Users  from "../../database/users/Users.js";
class UserService {
    registrate (user) {    
            const {login,password,email,phone} = user;
            const userCreated = Users.registrateKnexUsers(email,login,password,phone);
            return userCreated;
    }
    async getAll () {
            const gameALL = await Users.getAllKnexUsers();
            return gameALL;
    }
    async getByID (id) { 
        const gameOver = await Users.getKnexUsersByID(id);
        return gameOver;
    }
    async upload (user) {
        
        const userUpload = await Users.uploadKnexUser(user); 
        return userUpload;
    }
    async delete (id) {
        const userDeleted = await Users.deleteKnexUsersByID(id); 
        return userDeleted
    }
    async activate (link) {
        const activate = await Users.activateKnex(link); 
        return activate
    }
    async login (user) {
        const {login,password} = user;
        user = await Users.loginKnex(login,password); 
        return user
    }
    async logout (cookie) {
        const {refreshToken} = cookie;
        await Users.logoutKnex(refreshToken); 
    }
    async refresh (cookie) {
        const {refreshToken} = cookie
        const user = await Users.refresh(refreshToken)
        return user
    }
}

export default new UserService();

/*
    async authAndTakeToken (user) {
        const {login,password} = user;
        const token = await Users.authAndTakeTokenKnex(login,password); 
        return token
    }
*/