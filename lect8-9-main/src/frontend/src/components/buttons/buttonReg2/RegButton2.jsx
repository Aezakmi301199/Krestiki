import React from 'react'
import classes from './RegButton2.module.css'
const RegButton2 = ({onClick,textContent}) => {
 
  return (
    <button className={[classes["btn"], classes["fourth"] ].join(" ")}>{textContent}</button>
  )
}

export default RegButton2