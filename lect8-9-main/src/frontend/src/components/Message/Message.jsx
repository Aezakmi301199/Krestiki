import React from 'react'
import classes from './Message.module.css'
import messagePhoto from '../../img/message.png'
const Message = ({login,message,innerRef}) => {
  if (innerRef) {
    return (
      <div ref={innerRef} className={classes.mess}>
          <img id={classes.fontSize30px} src={messagePhoto}/>
          <h2 id ={classes.login}>{login}</h2>
          <h2 id ={classes.messageSettings}>{message}</h2>
      </div>
    )  
  } else {
      return (
        <div className={classes.mess}>
            <img id={classes.fontSize30px} src={messagePhoto}/>
            <h2 id ={classes.login}>{login}</h2>
            <h2 id ={classes.messageSettings}>{message}</h2>
        </div>
    )
  }


}

export default Message
