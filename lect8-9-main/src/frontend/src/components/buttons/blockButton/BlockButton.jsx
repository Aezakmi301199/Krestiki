import React, { useState } from 'react'
import classes from './BlockButton.module.css'
import blockedPicture from '../../../img/blocked.svg'
const BlockButton = ({textContent}) => {
    const [blockedPic,setBlockedPic] = useState(blockedPicture);
  return (
    <button className={classes.btn_block}>
       <img src = {blockedPic} className={classes.font_size10px10px} />
       <h4> {textContent}</h4>
    </button>
  )
}

export default BlockButton