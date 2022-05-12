import React from 'react'
import classes from './RegButton.module.css'
const RegButton = ({onClick,textContent}) => {
 
  return (
    <div className={classes.body_button}>
      <button className={classes.button_hola} onClick={onClick}>
         {textContent}
      </button>
    </div>

  )
}

export default RegButton