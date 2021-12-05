import { useState, useEffect } from "react";
import { PLAYER_1, PLAYER_2, getPlayerName } from "./player";

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const useGame = (defaultGameState) => {
  const [gameState, setGameState] = useState(defaultGameState);
  const [winningCombination, setWinningCombination] = useState(null);
  const [gameDraw, setGameDraw] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const checkCombinationMatch = WINNING_COMBINATIONS.filter(
      (winningIndexs) => {
        const squareValues = winningIndexs.map(
          (index) => gameState.squares[index]
        );
        const squareValuesWithSort = squareValues.sort();
        const player_1_win = Array(3).fill(PLAYER_1);
        const player_2_win = Array(3).fill(PLAYER_2);
        return (
          player_1_win.toString() === squareValuesWithSort.toString() ||
          player_2_win.toString() === squareValuesWithSort.toString()
        );
      }
    );

    if (checkCombinationMatch.length === 1) {
      const combinationMatchString = checkCombinationMatch[0]
        .join(" ")
        .replace(/\s/g, "");
      setWinningCombination(combinationMatchString);
      return;
    }

    const checkForDraw = gameState.squares.some((square) => square === null);
    if (!checkForDraw) {
      setGameDraw(true);
    }
  }, [gameState.squares]);

  useEffect(() => {
    if (winningCombination) {
      const winMessage = `${getPlayerName(gameState.active_player)} WON!!`;
      setMessage(winMessage);
      return;
    }

    if (gameDraw) {
      const drawMessage = `Game draw try again!!`;
      setMessage(drawMessage);
      return;
    }
  }, [winningCombination, gameDraw, gameState.active_player]);

  const onSquareClick = (squareId, active_player) => {
    let newSquares = gameState.squares;
    newSquares[squareId] = active_player;
    const nextActivePlayer = active_player === PLAYER_1 ? PLAYER_2 : PLAYER_1;
    setGameState((prevState) => {
      return {
        ...prevState,
        squares: [...newSquares],
        active_player: nextActivePlayer,
      };
    });
  };

  const resetGame = (defaultGameState) => {
    if (defaultGameState) new Error("provide defaultGameState");
    setGameState(defaultGameState);
    setWinningCombination(null);
    setGameDraw(false);
    setMessage(null);
  };

  return {
    onSquareClick,
    resetGame,
    gameState,
    winningCombination,
    gameDraw,
    message,
  };
};

export default useGame ;
