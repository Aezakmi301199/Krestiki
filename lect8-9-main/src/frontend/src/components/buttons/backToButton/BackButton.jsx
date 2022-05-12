import React from 'react'
import classes from './BackButton.module.css'
const BackButton = ({onClick}) => {
 
  return (
    <button className={classes.btnReset} onClick={onClick}>Шаг назад</button>
  )
}

export default BackButton