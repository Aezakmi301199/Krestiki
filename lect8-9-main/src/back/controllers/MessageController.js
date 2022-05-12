
import MessageService from "../Services/MessageService.js";


class MessageController {
   async getAllMessage (req,res) {
        try {
            const messageOver = await MessageService.getAll(req.query);
            res.json(messageOver);
        } catch (e) {
            res.status(400).json(`${e.message}` )
        }
    }
    
    async createMessage (req,res) {
        try {
            // req = user_id,message
            const messageOver = await MessageService.create(req.body);
            res.json(messageOver);
        } catch (e) {
            res.status(400).json(`${e.message}` )
        }
    }
    
}
export default new MessageController();


