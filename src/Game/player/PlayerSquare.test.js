import { cleanup, render } from "@testing-library/react";
import PlayerSquare from "./PlayerSquare";
import { PLAYER_1, PLAYER_2 } from "./";

describe("PlayerSquare", () => {
  afterEach(cleanup);
  test("player svg X icon", () => {
    const { getByTestId } = render(<PlayerSquare player={PLAYER_1} />);
    expect(getByTestId("test-icon-x")).toBeInTheDocument();
  });
  test("player svg O icon", () => {
    const { getByTestId } = render(<PlayerSquare player={PLAYER_2} />);
    expect(getByTestId("test-icon-o")).toBeInTheDocument();
  });
});
