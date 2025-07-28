import { useState } from 'react';

const Game = ({ player1, player2, weapon1, weapon2 }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [score, setScore] = useState({ [weapon1]: 0, [weapon2]: 0 });
  const [winner, setWinner] = useState(null);

  const getCurrentPlayer = () => (xIsNext ? weapon1 : weapon2);
  const getCurrentName = () => (xIsNext ? player1 : player2);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = getCurrentPlayer();
    setBoard(newBoard);

    const win = checkWinner(newBoard);
    if (win) {
      setWinner(win);
      setScore((prev) => ({
        ...prev,
        [win]: prev[win] + 1,
      }));
    } else {
      setXIsNext(!xIsNext);
    }
  };

  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setXIsNext(true);
  };

  const getPlayerName = (symbol) => {
    return symbol === weapon1 ? player1 : player2;
  };

  return (
    <div className="mt-10 flex flex-col items-center">
      <div className="text-xl mb-4">
        <p>{player1} ({weapon1}): {score[weapon1]} | {player2} ({weapon2}): {score[weapon2]}</p>
        <p>
          {winner
            ? `${getPlayerName(winner)} wins!`
            : `Turn: ${getCurrentName()} (${getCurrentPlayer()})`}
        </p>
      </div>

      <div className="grid grid-cols-3">
        {board.map((cell, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`
              w-24 h-24 flex items-center justify-center text-4xl font-bold cursor-pointer border-black
              ${index < 6 ? 'border-b' : ''} 
              ${index % 3 !== 2 ? 'border-r' : ''}
            `}
          >
            {cell}
          </div>
        ))}
      </div>

      {(winner || board.every(cell => cell !== null)) && (
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={resetBoard}
        >
          Play Again
        </button>
      )}
    </div>
  );
};

export default Game;
