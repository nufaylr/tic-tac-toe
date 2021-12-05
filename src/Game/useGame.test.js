import { renderHook, act } from "@testing-library/react-hooks";
import { cleanup } from "@testing-library/react";
import { getDefaultGameState } from "./Game";
import useGame from "./useGame";
import { PLAYER_1, PLAYER_2, getPlayerName } from "./player";

const testWinningCombination = [
  { win_combination: [0, 1, 2], expected: "012" },
  { win_combination: [3, 4, 5], expected: "345" },
  { win_combination: [6, 7, 8], expected: "678" },
  { win_combination: [0, 3, 6], expected: "036" },
  { win_combination: [1, 4, 7], expected: "147" },
  { win_combination: [2, 5, 8], expected: "258" },
  { win_combination: [0, 4, 8], expected: "048" },
  { win_combination: [2, 4, 6], expected: "246" },
];
let renderedHook = null;
const defaultSquares = new Array(9).fill(null);

describe("useGame", () => {
  afterEach(cleanup);
  beforeEach(() => {
    renderedHook = renderHook(() => useGame(getDefaultGameState()));
  });

  test("gameState", () => {
    const { result } = renderedHook;
    expect(result.current.gameState.squares).toEqual(defaultSquares);
    expect(result.current.gameState.active_player).toBe(PLAYER_1);
  });

  test("on square click with two players between 'X' and 'O',", () => {
    const { result } = renderedHook;
    act(() => {
      result.current.onSquareClick(0, PLAYER_1); // PLAYER_1 = X
      result.current.onSquareClick(1, PLAYER_2); // PLAYER_1 = O
    });
    expect(result.current.gameState.squares[0]).toBe("X");
    expect(result.current.gameState.squares[1]).toBe("O");
  });

  test.each(testWinningCombination)(
    "winning combination for %j",
    ({ win_combination, expected }) => {
      const { result } = renderedHook;
      act(() => {
        result.current.onSquareClick(win_combination[0], PLAYER_1);
        result.current.onSquareClick(win_combination[1], PLAYER_1);
        result.current.onSquareClick(win_combination[2], PLAYER_1);
      });
      expect(result.current.winningCombination).toBe(expected);
      const winnersName = getPlayerName(result.current.gameState.active_player);
      expect(result.current.message).toBe(`${winnersName} WON!!`);
    }
  );

  test("winning combination", () => {
    const { result } = renderedHook;
    act(() => {
      result.current.onSquareClick(0, PLAYER_1); // PLAYER_1 = X
      result.current.onSquareClick(1, PLAYER_2); // PLAYER_2 = O
    });
  });

  test("check for ties", () => {
    // tesging ties combination [0,1][2,4],[3,5][7,6][8]
    const { result } = renderedHook;
    act(() => {
      result.current.onSquareClick(0, PLAYER_1);
      result.current.onSquareClick(1, PLAYER_2);
      result.current.onSquareClick(2, PLAYER_1);
      result.current.onSquareClick(4, PLAYER_2);
      result.current.onSquareClick(3, PLAYER_1);
      result.current.onSquareClick(5, PLAYER_2);
      result.current.onSquareClick(7, PLAYER_1);
      result.current.onSquareClick(6, PLAYER_2);
      result.current.onSquareClick(8, PLAYER_1);
    });
    expect(result.current.message).toBe("Game draw try again!!");
    expect(result.current.gameDraw).toBe(true);
  });

  test("reset the game", () => {
    const { result } = renderedHook;
    act(() => {
      result.current.resetGame(getDefaultGameState());
    });
    expect(result.current.gameState.squares).toEqual(defaultSquares);
    // rest to default player as 1
    expect(result.current.gameState.active_player).toBe(PLAYER_1);
    expect(result.current.winningCombination).toBe(null);
    expect(result.current.gameDraw).toBe(false);
    expect(result.current.message).toBe(null);
  });

  afterAll(cleanup);
});
