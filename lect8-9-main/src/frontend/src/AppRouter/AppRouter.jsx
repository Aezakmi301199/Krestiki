import React, { useContext, useEffect } from 'react'
import {Routes,Route, Navigate} from "react-router-dom";
import { AuthContext } from '../App.js';
import Auth from '../pages/Auth'
import Games from '../pages/Games';
import ListUsers from '../pages/ListUsers';
import Main from '../pages/Main'
import Rating from '../pages/Rating';
import Registration from '../pages/Registration'
import {observer} from "mobx-react-lite";

const AppRouter = () => {
  const {store} =useContext(AuthContext)
  return (
      store.isAuth
      ? <Routes>
          <Route path="/play" element={<Main />}/>
          <Route path="/users" element={<ListUsers/>}/>
          <Route path="/rating" element={<Rating/>}/>
          <Route path="/games" element={<Games/>}/>
          <Route path="*" element={<Navigate to="/reg" replace />}/> 
        </Routes>
      : <Routes>
          <Route path="/auth" element={<Auth />}/>
          <Route path="/reg" element={<Registration />}/>
          <Route path="/play" element={<Main />}/>
          <Route path="/users" element={<ListUsers/>}/>
          <Route path="/rating" element={<Rating/>}/>
          <Route path="/games" element={<Games/>}/>
          <Route path="*" element={<Navigate to="/reg" replace />}/> 
        </Routes>
  
    
  )
}

export default observer(AppRouter)