import React from 'react'
import classes from './MessageButton.module.css'
const MessageButton = (props) => {
  return (
    <button  {...props} className={classes.messageButton} onClick={props.onClick} >
      {props.children}</button>
  )
}

export default MessageButton