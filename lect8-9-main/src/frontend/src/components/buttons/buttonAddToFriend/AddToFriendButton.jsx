import React from 'react'
import classes from './AddToFriendButton.module.css'
const AddToFriendButton = ({textContent,onClick}) => {

  return (
    <button onClick={onClick} className={classes.addToFriendButton}>
       {textContent}
    </button>
  )
}

export default AddToFriendButton