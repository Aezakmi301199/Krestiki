export function checkWinnerTiktakToe (board) {

    const symbol = ['Vanya','Petya']
    const winPosition = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for ( let i = 0; i<symbol.length;i++) {
        for (const pos of winPosition) {
            let isWin = true;
            for (const cell of pos) {
                isWin = isWin && board[cell] === symbol[i]
            }
            if (isWin){
                return symbol[i];
            }
        }
    }
    return false;
}
export const makeNormalDate = (date) => {
    date = Date.parse(date);
    return date = new Date(date).toLocaleDateString();
  }

  export const makeNormalDateAndTime = (date) => {
    date = Date.parse(date);
    date = new Date(date).toLocaleDateString();
    let time = new Date(date).toLocaleTimeString()
    return `${date} ${time}`
  }
  export const fdf = () =>  {
    let ifYourDayWasALastDay = new Date();
    ifYourDayWasALastDay.setHours(0, 0, 0, 0);
    return ifYourDayWasALastDay
}
