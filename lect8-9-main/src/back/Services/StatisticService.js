import Statistics from "../../database/statistics/Statistics.js";
class StatisticService {
        async getAll () { 
           let messageAll = await Statistics.getAllStatistics();          
           return messageAll;
        }

}
export default new StatisticService();