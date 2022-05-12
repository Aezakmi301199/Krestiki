import React, { useContext, useEffect, useState } from 'react'
import classes from './ModalReg.module.css'
import iconBack from '../../img/backIcon.png'
import RegButton from '../buttons/buttonReg/RegButton'
import RegButton2 from '../buttons/buttonReg2/RegButton2'
import App, { AuthContext } from '../../App'
import { useNavigate } from 'react-router-dom'
const ModalReg = () => {
  const {store} = useContext(AuthContext);
  const [login,setLoginValue]=useState('');
  const [email,setEmailValue]=useState('');
  const [phone,setPhoneNumberValue]=useState('');
  const [password,setPasswordValue]=useState('');
  const [repeatPassword,setRepeatPasswordValue]=useState('');
  const navigate = useNavigate('');

   const setPreventDefaultAndRegistration = async (e,action) => {
    e.preventDefault();
    let rez = await action
    if (rez?.errors) {
      for(let i=0;i<rez?.errors.length;i++){
        switch(rez.errors[i].param) {
          case 'password':
            setPasswordValue('Неверные данные')
            break;
          case 'login':
            switch(rez.errors[i]?.msg) {
              case 'Invalid value':
                setLoginValue('Некорректный логин')
                break;
              case "loginInBase":
                setLoginValue('Логин занят')
                break;
            default:
              break
            }
              break
          case 'repeatPassword':
            console.log('fd')
            setRepeatPasswordValue('пароли не совпадают')
            break;
          case 'phone':
            setPhoneNumberValue('Неверно набран номер')
            break;
            case 'email':
          switch(rez.errors[i]?.msg) {
            case 'Invalid value':
                setEmailValue('Некорректный email')
                break;
            case "emailInBase":
                setEmailValue('Email занят')
                break;
            default:
                break
              }  
            default:
              break;  
          /*
          default:
            console.log('Привет'); 
            break
          */
        }
    }
       
    } else {
      navigate('/auth')
    }
  }



 

  return (
    <div className={classes.modalReg}>
      <form className={classes.formContent}>
        <img src={iconBack} alt='Background'/>
        <div className={classes.info}>
          <label className={classes.cell}>
           <h5>Логин</h5>
            <input value={login} onChange={(e) => setLoginValue(e.target.value)} type="text" id="name" 
            className={login === 'Некорректный логин' || login === 'Логин занят' ? classes.unValid : ''}
            placeholder='VatnyaMyaTa'/>
          </label>
          <label className={classes.cell}>
          <h5>Email</h5>
            <input value={email} onChange={(e) => setEmailValue(e.target.value)} type="email"
            placeholder='VatnayaMyata@gmail.com' className={email === 'Некорректный email' || email === 'Email занят'? classes.unValid : ''}/>
          </label>
        </div>
        <div className="div">
          <label className={classes.cell}>
              <h5>Номер телефона</h5> 
                <input value={phone} onChange={(e) =>
                   setPhoneNumberValue(e.target.value)} type="tel" id="tel" placeholder='89123816139'
                   className={phone === 'Неверно набран номер' ? classes.unValid : ''}
                   />
          </label>
        </div>
        <div className={classes.password_flex}>
          <label className={classes.cell}>
            <h5>Пароль</h5>
              <input value={password} onChange={(e) => setPasswordValue(e.target.value)} type="password" id="password"
               placeholder='aezakmi301199' className={password === 'Неверные данные' ? classes.unValid : ''}/>
          </label>
          <label className={classes.cell}>
            <h5>Повторите пароль</h5>
              <input value={repeatPassword} onChange={(e) => setRepeatPasswordValue(e.target.value)}
               type="password" id="password-repeat" placeholder='aezakmi301199' 
               className={repeatPassword === 'пароли не совпадают' ? classes.unValid : ''}/>
          </label>
        </div>
        <div className={classes.buttons}>
          <RegButton textContent={'Зарегистрироваться'} 
          onClick={(e) =>setPreventDefaultAndRegistration(e,store.registration(login,password,email,phone,repeatPassword))}/>
          <RegButton2  textContent={'Авторизоваться'}/>
        </div>
      </form>
    </div>
  )
}

export default ModalReg


/*

for(let i=0;i<rez?.errors.length;i++){
          switch(rez.errors[i].param) {
            case 'password':
              setPasswordValue('Неверные данные')
              break;
            case 'email':
              switch(rez.errors[i]?.msg) {
                case 'Invalid value':
                  setEmailValue('Некорректный email')
                  break;
              case "emailInBase":
                  setEmailValue('Email занят')
                  break;
              default:
                break
              }
            case 'login':
              console.log('Как я сюда попалН:')
              switch(rez.errors[i]?.msg) {
                case 'Invalid value':
                  setLoginValue('Некорректный email')
                  break;
                case "loginInBase":
                  setLoginValue('Email занят')
                  break;
              default:
                break
              }
                break
            case 'repeatPassword':
              setRepeatPasswordValue('пароли не совпадают')
              break;
            case 'phone':
              setPhoneNumberValue('Неверно набран номер')
            default:
              console.log('Привет'); 
              break;
          }
      }


*/


/*


 for(let i=0;i<rez.errors.length;i++){
        if (rez?.errors.param === 'password' ) {
          setPasswordValue('Неверные данные')
        } else if (rez?.errors.param === 'email'){
          switch(rez.errors[i]?.msg) {
            case 'Invalid value':
              setEmailValue('Некорректный email')
              break;
          case "emailInBase":
              setEmailValue('Email занят')
              break;
          default:
            break
          }
        } else if (rez.errors[i].param === 'login') {
          switch(rez.errors[i]?.msg) {
            case 'Invalid value':
              setLoginValue('Некорректный логин')
              break;
            case "loginInBase":
              setLoginValue('Логин занят')
              break;
          default:
            break
          }
        } else if (rez.errors[i].param='repeatPassword') {
          setRepeatPasswordValue('пароли не совпадают')
        } else if (rez.errors[i].param='phone') {
          setPhoneNumberValue('Неверно набран номер')
        }




*/