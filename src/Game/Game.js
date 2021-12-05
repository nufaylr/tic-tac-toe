import React from "react";
import { Board, BoardOverlay } from "./board/";
import Square from "./Square";
import { PLAYER_1, PlayerSquare, PlayerPanel } from "./player";
import useGame from "./useGame";

const getDefaultGameState = () => {
  return {
    squares: new Array(9).fill(null),
    active_player: PLAYER_1,
  };
};

function Game() {
  const { gameState, onSquareClick, resetGame, winningCombination, message } =
    useGame(getDefaultGameState());
  const { squares, active_player } = gameState;

  const onResetGame = () => {
    resetGame(getDefaultGameState());
  };

  return (
    <>
      <PlayerPanel active_player={active_player} onRest={onResetGame} />
      <Board
        winCombination={winningCombination}
        boardOverlay={
          message ? (
            <BoardOverlay message={message} onRest={onResetGame} />
          ) : null
        }
      >
        {squares.map((player, index) => (
          <Square
            key={index}
            id={index}
            onClick={(squareId) => {
              onSquareClick(squareId, active_player);
            }}
          >
            {player ? <PlayerSquare player={player} /> : null}
          </Square>
        ))}
      </Board>
    </>
  );
}

export { Game, getDefaultGameState };
