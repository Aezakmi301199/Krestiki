import { dbGame } from "../db.js";
  class Messages {
    async getAllKnexMessages(limit) 
    { return await dbGame('messages')
    .join('users', 'users.id', '=', 'messages.user_id')
    .select('users.login','messages.message','messages.id')
    .orderBy('messages.id', 'desc')
    .limit(limit)
    }
    async createKnexMessage (user_id,message) 
    { 
        let {login} =  await dbGame('users').select('login').where({id:user_id}).first()
        if (login){            
              let [id] = await dbGame('messages').insert({
                user_id,
                message
            }).returning('id');
             id = id.id
            console.log(id,login,message)
            return {
                id,
                login,
                message
            }
        } else{
            throw new Error('Пользователя с таким USER_ID не существуует');
        } 
    }
}

export default new Messages();
