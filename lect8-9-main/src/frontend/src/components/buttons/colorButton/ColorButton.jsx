import React from 'react'
import classes from './ColorButton.module.css'
const ColorButton = ({textContent}) => {
   const colorBack =  textContent == 'active' ? classes['greenBack'] : classes['redBack']
  return (
    <button className={[colorBack,classes['colorButton']].join(' ')}>
        {textContent}
    </button>
  )
}

export default ColorButton