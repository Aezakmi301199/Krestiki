import React, { useState } from 'react'
import BlockButton from '../../buttons/blockButton/BlockButton'
import AddToFriendButton from '../../buttons/buttonAddToFriend/AddToFriendButton'
import ColorButton from '../../buttons/colorButton/ColorButton'
import ModalToAddFriend from '../../modalToAddFriend/ModalToAddFriend'
import classes from './User.module.css'
const User = ({user_status,user_id,user_login,data_reg}) => {
    const [miniModalVisible,setMiniModalVisible] = useState(false); 
  return (
    <div  className={classes.user}>  
        <ModalToAddFriend visible={miniModalVisible} setVisible = {setMiniModalVisible} />
        <div className={classes.user_id}>
            {user_id}
        </div>
        <div className={classes.user_login}>
            {user_login}
        </div>
        <div className="status">
            {user_status === 'Статус' ? user_status : <ColorButton textContent={user_status} />}
        </div>
        <div className="data_created">
            {data_reg}
        </div>
        {typeof(user_id) == "string" ? <AddToFriendButton onClick={()=>setMiniModalVisible(true)} textContent={'Добавить друга'}/> :   <BlockButton textContent={'Заблокировать'}/>  }
    </div>
        
  )
}

export default User