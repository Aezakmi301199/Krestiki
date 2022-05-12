import $api from "../utils/http_interceptors_axios.js";

export default class AuthService {
    static async registration (login,password,email,phone,repeatPassword) {
     return await $api.post('/reg',{login,password,email,phone,repeatPassword})
    }
    static async login (login,password) {
        return await $api.post('/login',{login,password}) 
        // Возвращает  return { accesToken,refreshToken,user:{id:user.id,login,role:user.role}}
     }
     static async logout () { // Отправляем вроде refreshToken из куки
        return await $api.post('/logout')
     }
}
