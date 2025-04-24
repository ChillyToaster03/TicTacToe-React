import { useState } from 'react';
import Tictactoeunit from './Tictactoeunit';
import calculateWinner from './Calculate-winner';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  
  const handleClick = (i) => {
    // Prevent moves if square is taken, game is won, or it's a draw
    if (squares[i] || winner || isDraw) return;
    
    const newSquares = [...squares];
    newSquares[i] = turn;
    setSquares(newSquares);

    // Check for winner or draw
    const gameWinner = calculateWinner(newSquares);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (newSquares.every(square => square !== null)) {
      setIsDraw(true);
    } else {
      setTurn(turn === "X" ? "O" : "X");
    }
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setTurn("X");
    setWinner(null);
    setIsDraw(false);
  };

  // Determine game status message
  let status;
  if (winner) {
    status = `Winner: ${winner}!`;
  } else if (isDraw) {
    status = "Game ended in a draw!";
  } else {
    status = `Next player: ${turn}`;
  }

  return (
    <div className='container'>
      <h1>Tic-Tac-Toe</h1>
      <p className={`status ${winner ? 'winner' : isDraw ? 'draw' : ''}`}>{status}</p>
      
      <div className='row'>
        <Tictactoeunit value={squares[0]} onClick={() => handleClick(0)} />
        <Tictactoeunit value={squares[1]} onClick={() => handleClick(1)} />
        <Tictactoeunit value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className='row'>
        <Tictactoeunit value={squares[3]} onClick={() => handleClick(3)} />
        <Tictactoeunit value={squares[4]} onClick={() => handleClick(4)} />
        <Tictactoeunit value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className='row'>
        <Tictactoeunit value={squares[6]} onClick={() => handleClick(6)} />
        <Tictactoeunit value={squares[7]} onClick={() => handleClick(7)} />
        <Tictactoeunit value={squares[8]} onClick={() => handleClick(8)} />
      </div>

      {(winner || isDraw) && (
        <button className='reset-button' onClick={resetGame}>
          Play Again
        </button>
      )}
    </div>
  );
}

export default App;