import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../App.css'
import classes from './GameList.module.css'
import Game from './Game/Game';
import { makeNormalDateAndTime } from '../../logic/logicFunction';
const GamesList = () => {
    const [games,setGames] = useState([]);
    const getGames =  async () => {
        let games = await axios.get('/games')
        setGames(games.data)
    }

    useEffect( () => {
        getGames();
    }, [])
  return (
    <div className={classes.gameList}>
         {games 
         ? games.map(game => <Game 
          key={game.game_id} 
          game_id={game.game_id} 
          winner={game.winner} 
          loser={game.loser}
          user1={game.user1}
          user2={game.user2}
          data_start={makeNormalDateAndTime(game.data_start)}
          />)
         : <div>
         Нет значений
         </div> 
        }
    </div>
  )
}

export default GamesList