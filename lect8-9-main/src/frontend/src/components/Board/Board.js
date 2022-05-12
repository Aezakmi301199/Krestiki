import React, { useState } from 'react'
import { checkWinnerTiktakToe } from '../../logic/logicFunction.js'
import BackButton from '../buttons/backToButton/BackButton.jsx'
import ResetButton from '../buttons/resetButton/ResetButton.jsx'


import Cell from '../Cell/Cell.js'
import ModalWinner from '../ModalWinner/ModalWinner.jsx'

import './Board.css'
const Board = () => {
  const  [board,setBoard] = useState(Array(9).fill(null));
  const  [stepPetya,setStepPetya] = useState(true);
  const  [counterBoard,stepCounterBoard] = useState({counter:0,completedSteps:[]});
  const winner =checkWinnerTiktakToe(board)
  const [winnerRes,setWinnerRes] = useState(winner)
  const cellclick = (index) => {
    let clonBoard = [...board];
    if (winner || clonBoard[index]) {return};
    //setStateWinner(checkWinnerTiktakToe(board))
    clonBoard[index] = stepPetya ? 'Petya' : 'Vanya';
    setBoard(clonBoard);
    setStepPetya(!stepPetya);
    stepCounterBoard({counter: counterBoard.counter+1, completedSteps: [...counterBoard.completedSteps,index]});
  }
  return (
    <div className='flex-center'>
      {winner ? <ModalWinner rez={winner} /> : counterBoard.counter === board.length ? <ModalWinner rez={'Ничья'}/> : '' }
        <div className='board'>
                  {board.map((cell,index) => <Cell key={index} roadToPic={cell} onClick={() => cellclick(index)} />)}
        </div>
        <div className='buttons'>
          <ResetButton onClick={()=> {
              setBoard(Array(9).fill(null));
              stepCounterBoard({counter:0,completedSteps:[]});
              setStepPetya(true)          
              }}/>
            <BackButton onClick={() => {
              const clonCounterBoard = {counter:counterBoard.counter-1,completedSteps:counterBoard.completedSteps};
              const indexLast = counterBoard.completedSteps.pop();
              stepCounterBoard(clonCounterBoard);
              const clonBoard =[...board];
              clonBoard[indexLast] = null;
              setBoard(clonBoard);
              setStepPetya(!stepPetya)
            }}/>
        </div>
    </div>

  )
}

export default Board