import { dbGame } from "../../database/db.js";
import Games from "../../database/games/Games.js";
class GameService {
    /*
    create (user) {    
           const {login} = user;
           const userCreated = Users.createKnexUsers(login);
           return userCreated;
   }
    */
   async getAll () {
           const gameALL = await Games.getAllKnexGames();
           return gameALL;
   }
    async create (game) {
        const {users} = game; 
        const gameALL = await Games.createKnexGame(users);
        return gameALL;
    }
   /*
   
   async getByID (id) { 
       const gameOver = await Users.getKnexUsersByID(id);
       console.log(gameOver);
       return gameOver;
   }
   async upload (user) {
       const userUpload = await Users.uploadKnexUser(user); 
       return userUpload;
   }
   async delete (id) {
       const userDeleted = await Users.deleteKnexUsersByID(id); 
   }
   
   */
}

export default new GameService();

