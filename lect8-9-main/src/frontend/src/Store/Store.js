import AuthService from "../Services/AuthService.js";
import {makeAutoObservable} from "mobx";
import { config } from "../config/config.js";
import axios from "axios";
export default class Store{
    user = {};
    isAuth = false;
    constructor() {
        makeAutoObservable(this);
     }    
     setAuth(respBool){
       console.log('Изменения')
        this.isAuth = respBool;
    }
     setUser (user){
        this.user = user;
    }

     async login (login,password) {
        try {
            const responseFromBack = await AuthService.login(login,password);
            console.log(responseFromBack)
            localStorage.setItem('accessToken',responseFromBack.data.accessToken);
            this.setAuth(true)
            this.user=responseFromBack.data.user
            if (responseFromBack) { return true}
        } catch(e){
            if (e.response?.data?.erros){
                console.log(e);
                return {
                    errors:e.response.data.erros
                }
            }
        }
       }
       async registration (login,password,email,phone,repeatPassword) {
        try {
            const responseFromBack = await AuthService.registration(login,password,email,phone,repeatPassword)
          
            //localStorage.setItem('accessToken',responseFromBack.accesToken)
            // this.setAuth(true);
            // this.setUser(responseFromBack.user)
            if (responseFromBack) {
                return true
            }
          //  res.redirect('vk.com');
        } catch(e){ 
            if (e.response?.data?.erros) {
                console.log(e);
                return {
                    errors:e.response.data.erros
                }
            }
        }
       }
       async logout () {
        try {
            const responseFromBack = await AuthService.logout()
            console.log(responseFromBack)
           localStorage.removeItem('accessToken');
           console.log('completed')
            this.setAuth(false);
            this.setUser({})
        } catch(e){
            console.log(e)
        }
       }

       
}


/*
async checkAuth() {
        try {
            const responseFromBack = await axios.get(`${config.api_url}/refresh`, {withCredentials: true})
            console.log(responseFromBack)
            localStorage.setItem('accessToken', responseFromBack.data.accessToken);
            this.setAuth(true);
            this.setUser(responseFromBack.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        } 
    }


*/