
import { dbGame } from "../db.js";
  class Statistics {
    async getAllStatistics() 
    { 
      return await dbGame.select({
        login:'login',
        total :dbGame.raw('(wins+loses+draw)::integer'),
        wins:dbGame.raw('wins::integer'),
        loses:dbGame.raw('loses::integer'),
        draw:dbGame.raw('draw::integer'),
        winrate:dbGame.raw('wins::float / (wins+loses+draw)*100')
      }).from({
        statistics : dbGame({g:'games'})
          .leftJoin({p:'players'}, {'g.id' : 'p.game_id'})
          .leftJoin({u:'users'}, {'u.id' : 'p.user_id'})
          .select({
            login:'u.login',
            wins:dbGame.raw('count(g.winner_id = p.user_id or null)'),
            loses:dbGame.raw('count(g.winner_id != p.user_id and g.winner_id is not null or null)'),
            draw:dbGame.raw('count(g.winner_id is null or null)'),
          }).groupBy('u.id').orderBy('u.id')
      })

    }

}

export default new Statistics();
     
/*
return await dbGame('users')

.join('games', 'users.id', '=', 'games.user_id')
.select({
          login:dbGame.raw('count(users.)'),

        }

    'users.login','messages.message','messages.id')
.orderBy('messages.id', 'desc')
.limit(limit)
}



*/