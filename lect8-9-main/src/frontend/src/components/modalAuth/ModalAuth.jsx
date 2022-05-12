import React, { useContext, useEffect, useState } from 'react'
import classes from './ModalAuth.module.css'
import iconBack from '../../img/backIcon.png'
import RegButton from '../buttons/buttonReg/RegButton'
import RegButton2 from '../buttons/buttonReg2/RegButton2'
import { AuthContext } from '../../App'
import { useNavigate } from 'react-router-dom'

const ModalAuth = () => { 
 
  const {store} = useContext(AuthContext);
  const navigate = useNavigate()
  const [login,setLoginValue]=useState('');
  const [password,setPasswordValue]=useState('');
  const preventDefaultAndToLogin = async (e,action) => {
    e.preventDefault();
    let rez = await action
    if (rez?.errors) {
      console.log(rez.errors)
      for (let i=0;i<rez?.errors.length;i++){
        switch(rez.errors[i].param) {
            case 'password':
              setPasswordValue('Неверный пароль')
              break
            case 'login':
              setLoginValue('Неверный логин')
              break
            default:
              break;
        }
      }
    } else {
      navigate('/play')
    } 
  }
  
/*
  function timerId () {
    setInterval(() => console.log(store.isAuth), 2000);
  } 
  timerId()
*/

  return (
    <div className={classes.modalReg}>
      <form className={classes.formContent}>
        <img src={iconBack}/>
        <div className={classes.info}>
          <label className={classes.cell}>
           <h5>Логин</h5>
            <input 
            value={login} onChange={(e) => setLoginValue(e.target.value)} 
            type="text" placeholder='VatnyaMyaTa' className={login === 'Неверный логин'? classes.unValid : ''}/>
          </label>
          <label className={classes.cell}>
          <h5>Пароль</h5>
            <input 
            value={password} onChange={(e) => setPasswordValue(e.target.value)} type="password" 
            placeholder='astalavistababy' className={password === 'Неверный пароль'? classes.unValid : ''}/>
          </label>
        </div>
        <div className={classes.auth_line}>
          <RegButton onClick={(e) =>preventDefaultAndToLogin(e,store.login(login,password)) } textContent={'Войти'}/>
          <RegButton2 textContent={'Забыли пароль?'}/>
          <RegButton2 textContent={'Регистрация'}/>
        </div>
      </form>
    </div>
  )
}

export default ModalAuth