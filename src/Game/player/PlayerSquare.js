import O from "./O.svg";
import X from "./X.svg";
import { PLAYER_1, PLAYER_2 } from "./";

const PlayerSquare = ({ player }) => {
  return player === PLAYER_1 ? <X /> : player === PLAYER_2 ? <O /> : null;
};

export default PlayerSquare;
