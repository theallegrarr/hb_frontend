import React from 'react';
import mario from '../icons/mario.png';
import mana from '../icons/mana.png';

const rows = [];
const columns = [];

export default function Board({ rows, columns }){
  
  return(
  <>
    <p>{rows} rows and {columns} columns</p>
    <BoardComponent rowCount={rows} columnCount={columns} />
  </>);
}

function BoardComponent({ rowCount, columnCount }){
  let gameBoard = [];
  for (let i = 0; i < rowCount; i++) {
    let boardRow = []
    for (let j = 0; j < columnCount; j++) {
      boardRow.push(<div
        key={`${i}_${j}`}
        id={`${i}_${j}`}
        className='cell'>
          <img src={mario} alt='mario' style={{ display: 'none', maxWidth: '20px' }}/>
          <img src={mana} alt='mana' style={{ display: 'none', maxWidth: '20px' }} />
        </div>)
      rows.push(i);
      columns.push(j);
    }
    gameBoard.push(<div className="board-row">{ boardRow }</div>);
  }
  return gameBoard;
}