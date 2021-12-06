import { cleanup, render, within, fireEvent } from "@testing-library/react";
import { Game } from "./Game";

describe("Game", () => {
  afterEach(cleanup);
  test("render game board with 9 squares with empty play", () => {
    const { getByTestId } = render(<Game />);
    const withinBoard = within(getByTestId("test-board-squares"));
    const squaresBtn = withinBoard.getAllByRole("button");
    expect(squaresBtn.length).toBe(9);
    const playIcons = withinBoard.queryByTestId(/test-icon-x/i);
    expect(playIcons).toBeNull();
  });

  test("squares illegal moves", () => {
    const { getByTestId } = render(<Game />);
    const squaresBtn = within(getByTestId("test-board-squares")).getAllByRole(
      "button"
    );
    fireEvent.click(squaresBtn[0]);
    expect(squaresBtn[0]).toHaveAttribute("disabled");
  });
});
