import MessageButton from '../buttons/messageButton/MessageButton';
import Message from '../Message/Message';
import classes from './Chat.module.css';
import '../../App.css';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
const Chat = ({statusConnect,setStatusConnect}) => {
  const socket = useRef();
  const lastMessage = useRef();
  const [messages,setMessages] = useState([]);
  const [messageValue,setMessageValue] = useState('')
  const [limit,setLimit] = useState(100);
  const socketConnect = async() => {
    socket.current = new WebSocket('ws://localhost:1500/');
    socket.current.onopen = () => {
      console.log('Сокет открыт');
      setStatusConnect(true);
      const message = {
        method:'connection',    
      }
      comeToLastMessage();
      socket.current.send(JSON.stringify(message))
    }
    socket.current.onmessage =  async (event) => {
       event = JSON.parse(event.data)
      if (event.message.length > 0 && event.method === 'message') {
       let message =  await axios.post('/messages',event)
       message = message.data
       
       setMessages( prev => [...prev,message])
       // if (message.user_id){
       //  comeToLastMessage();
       // }
       comeToLastMessage();
      } else {return}
    }
  }
  const sendMessage = async () => {
    const message = {
      user_id:4,
      message:messageValue,
      method:'message'
    }
    socket.current.send(JSON.stringify(message));
    setMessageValue('');
  }
  const getMessages = async () => {
   const response = await axios.get(`/messages`,{
     params:{
       limit:limit,
     }

   });
   setMessages(response.data)
  }
  useEffect( ()=>{
    (async() => {
      await getMessages();
      comeToLastMessage()
    })();
  },[])
  const comeToLastMessage =  ( ) =>{
      setTimeout(() => {
        lastMessage.current?.scrollIntoView();
      },100)

  }

  return  (
    statusConnect ? 
  <div className={[classes["chat"], classes["chatPosEl"] ].join(" ")}  >
      <input className={classes.input_chat}
        value={messageValue} 
        onChange={(e) => setMessageValue(e.target.value)} 
        placeholder='Напишите сообщение'
        onKeyDown={(e) => e.key === 'Enter' ? sendMessage():'' }
      ></input>
    <div className='height300px'> 
      {messages.map((mess,index) => {
        if (messages.length === index+1) {
          return <Message 
            innerRef={lastMessage}
            key={mess.id} 
            login={mess.login} 
            message={mess.message}/>
        } else {
          return  <Message 
              key={mess.id} 
              login={mess.login} 
              message={mess.message}/>
        }})} 
      </div>
    <MessageButton id='button-chat' onClick={sendMessage}>'Отправить сообщение'</MessageButton>
  </div>
  : 

  <div className={[classes["chat"], classes["chatPosEl"] ].join(" ")} >
  <div className='height300px'> 
        {messages.map( (mess,index) => {
          if (messages.length === index+1) {
            return <Message 
            innerRef={lastMessage}
              key={mess.id} 
              login={mess.login} 
              message={mess.message}/>
          } else {
            return  <Message 
                key={mess.id} 
                login={mess.login} 
                message={mess.message}/>
          }
        })
        }
        <MessageButton id='button-chat' onClick={socketConnect}>'Войти в чат'</MessageButton>
      </div>
  </div>  


    
  )
}

export default Chat
