
import StatisticService from '../Services/StatisticService.js'
class StatisticsController {

    async getAllStatistic (req,res) {
        try {
            const statistics = await StatisticService.getAll();
            res.json(statistics);
        } catch (e) {
            res.status(400).json(`${e.message}` )
        }
    }
   /*
    async getStatisticByID (req,res) {
        try {
            const game = await StatisticService.getByID(req.params.id);
             res.json(game);
        } catch (e) {
             res.status(400).json(`${e.message}` )
        }
    }
   */
}
export default new StatisticsController();