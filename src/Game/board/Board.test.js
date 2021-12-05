import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, fireEvent } from "@testing-library/react";
import { Board, BoardOverlay } from "./";

describe("Board", () => {
  afterEach(cleanup);
  test("board overlay with message", () => {
    const winningCombination = "012";
    const message = "test message";
    const onResetGame = jest.fn();
    const { getByText } = render(
      <Board
        winCombination={winningCombination}
        boardOverlay={<BoardOverlay message={message} onRest={onResetGame} />}
      />
    );
    expect(getByText(/test message/i)).toBeInTheDocument();
    fireEvent.click(getByText(/Play Again/i));
    expect(onResetGame).toHaveBeenCalledTimes(1);
  });
});
