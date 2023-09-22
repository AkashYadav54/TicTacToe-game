import './styles.scss';
import { useState } from 'react';
import './components/Board';
import Board from './components/Board';
import { calculateWinner } from './winner';

function App() {
  const [squares, setsquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const winner = calculateWinner(squares);
  const nextPlayer = isXNext ? 'X' : 'O';
  const showStatus = winner
    ? `winner is ${winner}`
    : `Next Player Is ${nextPlayer}`;
  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) {
      return;
    }

    setsquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition == position) {
          return isXNext ? 'X' : 'O';
        }
        return squareValue;
      });
    });
    setIsXNext(currentIsXNext => !currentIsXNext);
  };
  return (
    <div className="app">
      <h2>{showStatus}</h2>

      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}
export default App;
