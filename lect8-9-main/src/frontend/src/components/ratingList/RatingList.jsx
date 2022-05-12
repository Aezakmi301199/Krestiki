import React, { useEffect, useState } from 'react'
import RatingUser from './rating/RatingUser'
import classes from './RatingList.module.css'
const RatingList = () => {
  const [ratings,setRatings] = useState([])
  const getRating = async () => {
    fetch('/statistics')
    .then(res => res.json())
    .then(res => setRatings(res));
  
  }
  useEffect(()=>{
    getRating();
  },[])

  return (
    <div className={classes.rating_list}>
      <RatingUser         
              login={'Логин'}
              total={'Игры'}
              wins={'Победы'}
              loses={'Поражения'}
              draw={'Ничья'}
              winrate={'Винрейт'}
      />
        {ratings.map(rating => <RatingUser
          key={rating.login}
          login={rating.login}
          total={rating.total}
          wins={rating.wins}
          loses={rating.loses}
          draw={rating.draw}
          winrate={rating.winrate}
        />)}
    </div>
  )
}

export default RatingList