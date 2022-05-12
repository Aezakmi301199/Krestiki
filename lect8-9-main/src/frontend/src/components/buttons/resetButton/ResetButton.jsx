import React from 'react'
import classes from './ResetButton.module.css'
const ResetButton = ({onClick}) => {
  return (
    <button className={classes.btnReset} onClick={onClick}>Сбросить</button>
  )
}

export default ResetButton