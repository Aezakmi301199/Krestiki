import React from 'react'
import classes from './InputSt.module.css'
const InputSt = ( props) => {
  return (
    <input {...props}  className={classes.inputSt}/> 
  )
}

export default InputSt
//className={classes}