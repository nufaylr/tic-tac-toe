import { Flex, Spacer, Box, Text, Button } from "@chakra-ui/react";
import Player from "./Player";
import O from "./O.svg";
import X from "./X.svg";

const PlayerPanel = ({ active_player, onRest }) => {
  return (
    <Flex mb={10} mt={10} textAlign="center" gap={4}>
      <Player
        name="Player 1"
        icon={<X width="50%" colour="#fff" strokeWidth="5" />}
        colour="#2bcf78"
      />
      <Spacer />
      <Box w="20%">
        <Text fontSize="2xl" color="white" mt="5" data-testid="test-current-player">
          {active_player} Turn
        </Text>
        <Button colorScheme="teal" size="sm" onClick={onRest}>
          Reset
        </Button>
      </Box>
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
