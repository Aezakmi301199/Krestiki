import React from 'react'
import classes from './RatingUser.module.css'
const RatingUser = ({login,total,wins,loses,draw,winrate}) => {
  
    winrate = typeof(winrate) === 	"number" ?  `${winrate.toFixed(2)}` :winrate

    let winrateColor = 
    winrate > 80 ?  classes.great : 
    winrate > 60 ?  classes.good : 
    winrate > 40 ? classes.normal :
    winrate >20 ? classes.bad : 
    winrate < 20 ? classes.tupoi : classes.white
    
  return (
    <div className={classes.ratingUser}>
        <div className={classes.login}>{login}</div>
        <div className={classes.total}>{total}</div>
        <div className={classes.wins}>{wins}</div>
        <div className={classes.loses}>{loses}</div>
        <div className={classes.draw}>{draw}</div>
        <div className={winrateColor}>{winrate}</div>
    </div>
  )
}

export default RatingUser

