
import Router from 'express';
const statisticRouter = new Router();
import StatisticsController from '../controllers/StatisticsController.js'
statisticRouter.get('/statistics',StatisticsController.getAllStatistic)
//statisticRouter.get('/statistics/:id',StatisticsController.getStatisticByID)
export default statisticRouter;
