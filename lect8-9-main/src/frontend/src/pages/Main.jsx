import React, { useState } from 'react'
import '../App.css'
import Board from '../components/Board/Board'
import Chat from '../components/Chat/Chat'
import classes from './pagesCss/Main.module.css'
const Main = () => {
  const [statusConnect,setStatusConnect] = useState(false);
  
  return (
    <div className='backPage backPageimg'>
     <div className='wrapper'>
      <Board/>
      <div className={classes.right_col}>
        <Chat statusConnect={statusConnect} setStatusConnect={setStatusConnect} />
      </div>
    </div>
  </div>

  )
}

export default Main


