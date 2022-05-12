import userRouter from './routes/userRouter.js';   
import messageRouter from './routes/messageRouter.js';   
import express from 'express';
import expressWs from 'express-ws'; 
import gamesRouter from './routes/GamesRouter.js';
import statisticRouter from './routes/StatisticRouter.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import errorMiddleWare from '../middleWare/errorMiddleWare.js';
import { config } from '../database/config/config.js';
const port = 1500;
const AppServer = express();
const appSocketServer = expressWs(AppServer);
const appSocket = appSocketServer.getWss();
AppServer.use(express.json())
AppServer.use(cookieParser());
AppServer.use(cors({
    credentials:true,
    origin:config.api_client,
}));
AppServer.use('/',gamesRouter)
AppServer.use('/',userRouter)
AppServer.use('/',messageRouter)
AppServer.use('/',gamesRouter)
AppServer.ws('/', (ws, req) => {
    ws.on('message', (message) => {
        message = JSON.parse(message)
        switch (message.method) {
            case "connection":
                console.log('Появился новый пользователь')
                break
            case "message":
              messageAll(message);
                break
                default:
                    return 'Критические проблемы'
        }
    })
})
AppServer.use('/',statisticRouter)
AppServer.use(errorMiddleWare)

function messageAll(message){
    appSocket.clients.forEach(client => client.send(JSON.stringify(message)) )
}



function AppServerStart() {
    try {
        AppServer.listen(port, ()=>{
            console.log(`"Сервер запущен на порту ${port} http://localhost:1500`);
           // let date = new Date().toLocaleDateString(); 
        })
    } catch(e) {
        console.log(e.message)
    }
}

AppServerStart();

/*

const wss = new WebSocketServer({port:7000})

wss.on('connection', function connection(ws) {
    console.log('Выполнено соединение')
    ws.on('message', function message(data) {
      console.log('received: %s', data);
    });
    ws.send('something');
  });
*/