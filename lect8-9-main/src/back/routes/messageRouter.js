import Router from 'express';
import MessageController from '../controllers/MessageController.js'
const messageRouter = new Router();

messageRouter.get('/messages',MessageController.getAllMessage)
messageRouter.post('/messages',MessageController.createMessage)
export default messageRouter;
