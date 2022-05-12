import React, { useContext } from 'react'
import { AuthContext } from '../App'
import '../App.css'
import ModalAuth from '../components/modalAuth/ModalAuth'

const Auth= () => {
  return (
    <div className='backPage backPageimg'>
      <ModalAuth/>
    </div>
  )
}

export default Auth