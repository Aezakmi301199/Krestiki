import React from 'react'
import './Cell.css'              
import standart from '../../img/back.jpg'
import petya from '../../img/kr.svg'
import vanya from '../../img/null.png'
const Cell = ({roadToPic,onClick}) => {

  return (
    <div className='cell' onClick={onClick}>
      <img src={(roadToPic === null) ? standart : roadToPic === 'Petya' ? petya : vanya} alt='Ячейка'/>
    </div>
  )
}

export default Cell