import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../App'
import classes from './Navbar.module.css'
import {observer} from "mobx-react-lite";
import ExitButton from '../buttons/exitButton/ExitButton';
const Navbar = () => {
  const {store} =useContext(AuthContext)
 
  console.log(store)
  return (
      store.isAuth
      ?  <nav className={classes.navbar}>
          <Link to="/games">Завершённые игры</Link>
          <Link to="/users">Список игроков</Link>
          <Link to="/rating">Рейтинг игроков</Link>
          <Link to="/play">Играть</Link>
          <ExitButton textContent={'Выйти'} onClick={ async (e) => {e.preventDefault(); await store.logout()}}> </ExitButton>
        </nav>
      :  <nav className={classes.navbar}>
          <Link to="/games">Завершённые игры</Link>
          <Link to="/users">Список игроков</Link>
          <Link to="/rating">Рейтинг игроков</Link>
          <Link to="/play">Играть</Link>
          <Link to="/reg">Регистрация</Link>
          <Link to="/auth">Авторизация</Link>
         </nav>
  )
}

export default observer(Navbar)
