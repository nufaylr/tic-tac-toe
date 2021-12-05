import { Box, Center, Text, Button } from "@chakra-ui/react";

const BoardOverlay = ({ message, onRest }) => {
  return (
    <Box
      bg="rgb(59 44 157 / 80%)"
      w="100%"
      h="100%"
      color="white"
      zIndex="overlay"
      pos="absolute"
      rounded="md"
      alignItems="center"
    >
      <Center m="10" color="white">
        <Text fontSize="4xl" fontWeight="extrabold">
          {message}
        </Text>
      </Center>
      <Center>
        <Button colorScheme="teal" size="lg" onClick={onRest}>
          Play Again
        </Button>
      </Center>
    </Box>
  );
};

export default BoardOverlay;
