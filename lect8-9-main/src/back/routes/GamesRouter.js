import Router from 'express';
import GamesController from '../controllers/GamesController.js'
const gamesRouter = new Router();

gamesRouter.get('/games',GamesController.getAllGames)
gamesRouter.post('/games',GamesController.createGame)
export default gamesRouter;
