
import  Messages  from "../../database/messages/Messages.js";
class MessageService {
        async getAll (params) {
           const {limit} = params
           let messageAll = await Messages.getAllKnexMessages(limit);
           
           messageAll.reverse()
           return messageAll;
        }
        async create (messageResponse) {
           const {user_id,message}= messageResponse;
           const userCreated = Messages.createKnexMessage(user_id,message);
           return userCreated;
        }
}
export default new MessageService();