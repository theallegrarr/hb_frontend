import React, {useState, useEffect} from 'react';
import mario from '../icons/mario.png';
import mana from '../icons/mana.png';

const rows = [];
const columns = [];
let executed = false;

export default function Board({ rows, columns, position, setBoardConfig, boardConfig }){
  const [changedPosition, setPosition] = useState(position);
  if(position && position !== changedPosition){
    setPosition(position);
  } 

  useEffect(() => {
    
  }, [])

  return(
  <>
    <p>{rows} rows and {columns} columns</p>
    <BoardComponent 
    rowCount={rows} 
    columnCount={columns} 
    position={changedPosition}
    setBoardConfig={setBoardConfig}
    boardConfig={boardConfig}
    setPosition={setPosition} />
  </>);
}

function BoardComponent({ rowCount, columnCount, position, setBoardConfig, boardConfig, setPosition }){
  let gameBoard = [];
  if(position){
    for (let i = 0; i < rowCount; i++) {
      let boardRow = []
      for (let j = 0; j < columnCount; j++) {
        boardRow.push(<div
          key={`${i}_${j}`}
          id={`${i}_${j}`}
          className='cell'>
            <img src={mario} alt='mario' className='marioclass' style={{ display: `${ i+'_'+j === Math.round(rowCount/2)+'_'+Math.round(columnCount/2) ? 'block' : 'none' }`, maxWidth: '20px' }}/>
            <img src={mana} alt='mana' style={{ display: 'none', maxWidth: '20px' }} />
          </div>)
        rows.push(i);
        columns.push(j);
      }
      gameBoard.push(<div className="board-row">{ boardRow }</div>);
    }

    document.addEventListener('keydown', (e) => {
        e.preventDefault();
        const allowedKeys = {
            37: "left",
            38: "up",
            39: "right",
            40: "down"
        };
        moveMario(allowedKeys[e.keyCode], position, setBoardConfig, boardConfig, rowCount, columnCount, setPosition)
      }, false)
  }
  return gameBoard;
}

function moveMario(allowedKeys, position, setBoardConfig, boardConfig, rows, columns, setPosition) {
  switch (allowedKeys) {
    case "left": 
      if(position) {
        const nextSpot=getNext(position,'left',rows,columns);
        setPosition(nextSpot);
        console.log('left',nextSpot)
        document.getElementById(`${position}`).getElementsByClassName('marioclass')[0].style.display = 'none';
        document.getElementById(nextSpot).getElementsByClassName('marioclass')[0].style.display = 'block';
        setBoardConfig({ ...boardConfig, position: nextSpot });
        executed=true;
      }
      break
    case "right": 
      if(position) {
        const nextSpot=getNext(position,'right',rows,columns);
        console.log('left',nextSpot)
        document.getElementById(`${position}`).getElementsByClassName('marioclass')[0].style.display = 'none';
        document.getElementById(nextSpot).getElementsByClassName('marioclass')[0].style.display = 'block';
        setBoardConfig({ ...boardConfig, position: nextSpot });
        executed=true;
      }
      break
    case "up": 
      console.log('up')
      break
    case "down": 
      console.log('down')
      break
    default:
      break
  }
}

function getNext(current, move, rows, columns) {
  const row = parseInt(current.split('_')[0]);
  const column = parseInt(current.split('_')[1]);

  if(move === 'left') {
    if(column > 0) {
      const nextMove = (row + '_' + (column-1)).toString();
      return nextMove;
    }
  }
  if(move === 'right') {
    if(column < columns) {
      const nextMove = (row + '_' + (column+1)).toString();
      return nextMove;
    }
  }
}