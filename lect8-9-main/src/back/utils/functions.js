import { dbGame } from "../../database/db.js";

export const getNowTimeAndDate = () =>  {
    let ifYourDayWasALastDay = new Date();
    ifYourDayWasALastDay.setHours(0, 0, 0, 0);
    return ifYourDayWasALastDay
}
export const findUserByID = async (id) =>{
    return await dbGame('users').select('id','login','create_at','role').where({id,status:'active'}).first()
 }
export const findUserByLogin = async (login) =>{
    return await dbGame('users').select('id','login','role').where({login}).first()
  }
export  const findUserByEmail = async (email) =>{
     return await dbGame('infoaboutusers').select('user_id').where({email}).first()
   }
  
export const findHashPassByLogin = async (login) =>{
     return await dbGame('users').select('password').where({login}).first()
   }
export const checkUserLink = async (activLink) =>{
    return await dbGame('infoaboutusers').select('activationLink').where({activationLink:activLink}).first()
  }