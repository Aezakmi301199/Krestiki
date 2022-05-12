
import GameService from "../Services/GameService.js";


class GamesController {

    async getAllGames (req,res) {
        try {
            const games = await GameService.getAll();
            res.json(games)
        } catch (e) {
              res.status(400).json(`${e.message}` )
        }
    }
    async createGame (req,res) {
        try {
            const games = await GameService.create(req.body);
            res.json(games)
        } catch (e) {
              res.status(400).json(`${e.message}` )
        }
    }
}
export default new GamesController();

/*
async createUser (req,res) {
        try {
            const userOver = await UserService.create(req.body);
            res.json(userOver);
        } catch (e) {
            res.status(500).json(`Не все обязательные параметры указаны в теле запроса ${e.message}` )
        }
    }
*/

/*



return await dbGame({g:'games'})
.leftJoin({w:'players'}, function () {
    this
      .on('g.id','=','w.game_id')
      .andOn('g.winner_id','=','w.user_id')})
.leftJoin({l:'players'}, function () {
    this
      .on('g.id','=','l.game_id')
      .andOn('g.winner_id','!=','l.user_id')})
.leftJoin({login_winner:'users'}, {'w.user_id' : 'login_winner.id'})
.leftJoin({login_loser:'users'}, {'l.user_id' : 'login_loser.id'})
.leftJoin({pl1:'players'}, {'g.id' : 'pl1.game_id'})
.leftJoin({pl2:'players'}, 'g.id' ,'=', 'pl2.game_id'  && 'pl2.user_id','!=', 'pl1.user_id')
.distinctOn('winner_id')


*/