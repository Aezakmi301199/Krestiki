import React from 'react'
import classes from './Game.module.css'
import batle from '../../../img/battle.png'
import draw from '../../../img/draw.png'
import '../../../App.css'
import AddToFriendButton from '../../buttons/buttonAddToFriend/AddToFriendButton'
const Game = ({game_id,winner,loser,user1,user2,data_start}) => {
    if ((winner || loser) === null){     
    return   <div className={classes.game}>

        <h4 className={classes.data_start}>{data_start}</h4>
        <div className={classes.id}>Игра №{game_id}</div>
        <div className={classes.batle}>
            <div className="flex_col">
            <h2>Игрок1</h2>
            <span className={classes.user}>{user1}</span>
            </div>
            <img src={draw} className={classes.font_size15px15px} />
            <div className="flex_col">
            <h2>Игрок2</h2>
            <span className={classes.user}>{user2}</span>
            </div>
        </div>
        <AddToFriendButton textContent={'Просмотреть игру'}/>
        </div>
    } else {
        return (
            <div className={classes.game}>
                <h4 className={classes.data_start}>{data_start}</h4>
                <h2 className={classes.id}>Игра №{game_id}</h2>
                <div className={classes.batle}>
                  <div className={classes.flex_col}>
                  <h2>Winner</h2>
                  <span className={classes.winner}>{winner}</span>
                </div>
                <img src={batle} className={classes.font_size15px15px} />
                  <div className={classes.flex_col}>
                  <h2>Loser</h2>
                  <span className={classes.loser}>{loser}</span>
                </div>
                </div>
                <AddToFriendButton textContent={'Просмотреть игру'}/>
        </div>)
    }

}

export default Game