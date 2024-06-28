import React, { useEffect, useState } from "react";

// 0 1 2
// 3 4 5
// 6 7 8

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  const handleClick = (getCurrentSquare) => {
    let cpySquares = [...squares];
    if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
    cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  };

  const getWinner = () => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [1, 4, 7],
      [0, 3, 6],
      [2, 4, 6],
      [0, 4, 8],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[y] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  };

  useEffect(() => {
    if (!getWinner(squares) && squares.every((el) => el !== "")) {
      setStatus("This is a draw!!, Please restart the game");
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}, Please restart the game`);
    } else {
      setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  return (
    <div>
      Tic Tac Toe
      <hr />
      <div
        className="mt-5"
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "250px",
        }}
      >
        {squares.map((el, i) => {
          return (
            <Square id={i} key={i} squares={el} handleClick={handleClick} />
          );
        })}
      </div>
      <div className="mt-5 mb-5">
        <h1>{status}</h1>
      </div>
      <button
        style={{
          border: "1px solid gray",
          padding: "6px 20px",
          marginTop: "20px",
        }}
        onClick={() => {
          setIsXTurn(true);
          setSquares(Array(9).fill(""));
        }}
      >
        Restart
      </button>
    </div>
  );
};

function Square({ squares, handleClick, id }) {
  return (
    <button
      style={{
        border: "1px solid gray",
        background: "#ddd",
        width: "70px",
        height: "70px",
        flex: "0 0 33.3333%",
      }}
      disabled={squares}
      onClick={() => handleClick(id)}
    >
      {squares}
    </button>
  );
}

export default TicTacToe;
