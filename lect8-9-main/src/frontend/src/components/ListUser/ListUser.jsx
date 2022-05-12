import React, { useEffect, useState } from 'react'
import classes from './ListUser.module.css'
import User from './User/User';
import { makeNormalDate } from '../../logic/logicFunction';
const ListUser = () => {
  const [users,setUsers] = useState([]);
  const getUsers = async () => {
    fetch('/users')
    .then(res => res.json())
    .then(res => setUsers(res));
  }
  useEffect(()=>{
    getUsers();
  },[])

  if (users == null) {
    return (<div>Eror</div>)
  }

  return (
    <div className={classes.listUser}>
      <h1 id={classes.h1_custom}>Список пользователей</h1>
      <User 
      user_id={'ID'} 
      user_login={'Логин'} 
      user_status={'Статус'} 
      data_reg={'Дата регистрации'} 
      data_updated={'Дата изменения'} />
      {[users.map(user =>
        <User key ={user.id}
         user_status={user.status} 
         user_id={user.id} 
         user_login = {user.login}
         data_reg ={makeNormalDate(user.create_at)}
         />
        )]}
    </div>
  )
}

export default ListUser
