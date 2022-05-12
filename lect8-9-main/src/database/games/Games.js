import { dbGame } from "../db.js";
  class Games {
    async getAllKnexGames () 
    { 
        return await dbGame({g:'games'})
        .leftJoin({w:'players'}, function () {
            this
              .on('g.id','=','w.game_id')
              .andOn('g.winner_id','=','w.user_id')})
        .leftJoin({l:'players'}, function () {
            this
              .on('g.id','=','l.game_id')
              .andOn('g.winner_id','!=','l.user_id')})
        .leftJoin({login_winner:'users'}, {'w.user_id' : 'login_winner.id'})
        .leftJoin({login_loser:'users'}, {'l.user_id' : 'login_loser.id'})
        .leftJoin({pl1:'players'}, {'g.id' : 'pl1.game_id'})
        .leftJoin({user1:'users'}, {'user1.id' : 'pl1.user_id'})
        .leftJoin({pl2:'players'}, 'g.id' ,'=', 'pl2.game_id')
        .leftJoin({user2:'users'}, 'user2.id' ,'=','pl2.user_id')
        .distinctOn('game_id')
        .select({
            game_id:'g.id',
            data_start:'g.create_game',
            winner:'login_winner.login',
            loser:'login_loser.login',
            user1:'user1.login',
            user2:'user2.login'
         
        })
    }   
    async createKnexGame(users){
        console.log('vozsh')
        console.log(users)
        const [{id:gameId}] = await dbGame('games').insert({}).returning('id')
        await dbGame('players').insert(users.map((userID,idx) => ({            
                user_id:userID,
                game_id:gameId,
                number:idx+1
        })))
        return gameId;
        /*
              const d = await dbGame({pl:'players'})
        .insert(users.map( (userID,idx) => {
            user_id:userID
            game_id:,
            number:1+idx
        } ))
        */
    }
}

export default new Games();

/*

     .select(
           {
              game_id:'g.id',
              winner:'g.id'
           }
        )
*/





/*
async createKnexMessage (user_id,message) 
    { 
        if (await dbGame('users').where({user_id})){
              let [id] = await dbGame('messages').insert({
                user_id,
                message
            }).returning('id');
             id = id.id
             let login = await dbGame('users').select('login').where({user_id});
             login = login[0].login
            return {
                id,
                login,
                message
            }
        } else{
            throw new Error('Пользователя с таким USER_ID не существуует');
        } 
    }
*/