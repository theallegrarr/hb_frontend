import React, { useState, useEffect } from 'react';
import Board from './components/board';
import logo from './logo.svg';
import './App.css';

function App() {
  const [boardConfig, setBoardConfig] = useState({
    row: 0,
    column: 0,
  });

  useEffect(() => {
    let rows = prompt('Number of rows');
    let columns = prompt('Number of columns');
    if(columns)setBoardConfig({ row: rows, column: columns });
  }, [])

  return (
    <div className="App">
      <Board rows={boardConfig.row} columns={boardConfig.column} />
    </div>
  );
}

export default App;
