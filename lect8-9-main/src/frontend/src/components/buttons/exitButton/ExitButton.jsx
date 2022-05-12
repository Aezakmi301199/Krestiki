import React, { useContext } from 'react'
import { AuthContext } from '../../../App'
import classes from './ExitButton.module.css'
import {observer} from "mobx-react-lite";
const ExitButton = ({textContent,onClick}) => {
   const {store} = useContext(AuthContext)

  return (
        <div className={[classes["btn"], classes["btn-one"] ].join(" ")}>
            <span className={classes.span} onClick={onClick} >{textContent}</span>
        </div>
  )
}

export default observer(ExitButton)
