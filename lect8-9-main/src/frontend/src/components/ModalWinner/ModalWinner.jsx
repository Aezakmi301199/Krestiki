import React, { useState } from 'react'
import classes from './ModalWinner.module.css'
import trophy from '../../img/trophy.png'
const ModalWinner = ({rez}) => {
  const [visible,setVisible] = useState(rez)
  const removeModalWinner = () => {setVisible('')}
  
  const res = rez === 'Ничья' ? 'Боевая ничья' : `Winner - ${rez}`
  return (
    <div className={ visible ? classes["modalBack"] : classes["passive"] } onClick={removeModalWinner}>
        <div className={classes.modalContent}>
          {res}
        </div>
        <img src={trophy} className={classes.sizePicture200x200} alt='trophy'/>
    </div>
  )
}

export default ModalWinner