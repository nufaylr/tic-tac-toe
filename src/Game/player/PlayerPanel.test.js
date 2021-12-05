import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, fireEvent } from "@testing-library/react";
import PlayerPanel from "./PlayerPanel";
import { PLAYER_1 } from "./";

describe("PlayerPanel", () => {
  afterEach(cleanup);
  test("active player X and rest button", () => {
    const onResetGame = jest.fn();
    const { getByText } = render(
      <PlayerPanel active_player={PLAYER_1} onRest={onResetGame} />
    );
    fireEvent.click(getByText(/Reset/i));
    expect(getByText(/X Turn/i)).toBeInTheDocument();
    expect(onResetGame).toHaveBeenCalledTimes(1);
  });
});
