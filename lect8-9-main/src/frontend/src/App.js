import React, { useEffect } from 'react'
import {BrowserRouter} from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import AppRouter from './AppRouter/AppRouter.jsx';
import Store from './Store/Store.js';

export const store = new Store();
export const AuthContext = React.createContext({
  store
})

const App = () => {


  return (
    <AuthContext.Provider value={{store}}>
          <BrowserRouter>
          <Navbar/>
          <AppRouter/>
        </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
/*

        <BrowserRouter>
          <Navbar/>
          <AppRouter/>
        </BrowserRouter>

*/