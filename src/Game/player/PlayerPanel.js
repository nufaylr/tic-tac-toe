import { Flex, Spacer } from "@chakra-ui/react";
import Player from "./Player";
import O from "./O.svg";
import X from "./X.svg";

const PlayerPanel = ({ active }) => {
  return (
    <Flex mb={10} mt={10} textAlign="center" gap={4}>
      <Player
        name="Player 1"
        icon={<X width="50%" colour="#fff" strokeWidth="5" />}
        colour="#2bcf78"
      />
      <Spacer />
      <Player
        name="Player 2"
        icon={<O width="50%" colour="#fff" strokeWidth="5" />}
        colour="#fecf31"
      />
    </Flex>
  );
};

export default PlayerPanel;
