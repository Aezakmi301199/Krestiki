import React from 'react'
import InputSt from '../inputs/InputSt'
import classes from './ModalToAddFriend.module.css'

const ModalToAddFriend = ({visible,setVisible}) => {
  return (
    <div className={visible ? classes.modal : classes.modal_off}>
        <InputSt placeholder='Введите ID или логин пользователя'/>
        <button onClick={()=>setVisible(false)} className={classes.button_cancel}> X </button>
    </div>
  )
}

export default ModalToAddFriend