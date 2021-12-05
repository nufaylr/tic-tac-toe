import PlayerSquare from "./PlayerSquare";
import PlayerPanel from "./PlayerPanel";

const PLAYER_1 = "X";
const PLAYER_2 = "O";

const getPlayerName = (player) => {
  if (player === PLAYER_1) return "Player 2";
  if (player === PLAYER_2) return "Player 1";
};

export { PLAYER_1, PLAYER_2, PlayerPanel, PlayerSquare, getPlayerName };
