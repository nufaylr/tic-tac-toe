import { Box, Heading } from "@chakra-ui/react";

const Player = ({ name, icon, colour }) => {
  return (
    <Box
      colSpan={2}
      p={2}
      boxShadow="base"
      borderRadius="lg"
      bg={colour}
      w="20%"
    >
      <Box p={2}>{icon}</Box>
      <Box>
        <Heading fontSize="xl">{name}</Heading>
      </Box>
    </Box>
  );
};

export default Player;
