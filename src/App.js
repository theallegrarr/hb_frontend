import React, { useState, useEffect } from 'react';
import Board from './components/board';
import logo from './logo.svg';
import './App.css';

function App() {
  const [boardConfig, setBoardConfig] = useState({
    row: 0,
    column: 0,
    position: '',
  });

  useEffect(() => {
    let rows = prompt('Number of rows');
    let columns = prompt('Number of columns');
    let position = (Math.round(rows/2)+'_'+Math.round(columns/2)).toString();
    if(columns && rows && position) {
      setBoardConfig({ row: rows, column: columns, position: position });
    }
  }, [])

  return (
    <div className="App">
      <Board 
      rows={boardConfig.row} 
      columns={boardConfig.column} 
      position={boardConfig.position}
      setBoardConfig={setBoardConfig}
      boardConfig={boardConfig} />
    </div>
  );
}

export default App;
