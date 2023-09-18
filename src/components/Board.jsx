import { useState } from 'react';
import Square from './Square';
const Board = () => {
  const [squares, setsquares] = useState(Array(9).fill(null));
  console.log(squares);
  const handleSquareClick = clickedPosition => {
    setsquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition == position) {
          return 'X';
        }
        return squareValue;
      });
    });
  };
  const renderSquare = position => {
    return (
      <Square
        value={squares[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };
  return (
    <div className="board">
      <h1 className="h1">Welcome to the Tic-Tac Toe Game</h1>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
