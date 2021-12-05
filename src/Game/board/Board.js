import { SimpleGrid, Box } from "@chakra-ui/react";
import styles from "./Board.module.css";

const Board = ({ children, winCombination, boardOverlay }) => {
  const winClassName = winCombination ? `strike_win__${winCombination}` : ``;
  return (
    <Box pos="relative">
      {boardOverlay ? boardOverlay : null}
      <SimpleGrid
        columns={3}
        spacing={2}
        className={`${styles.strike_container} ${
          styles[winClassName] ? styles[winClassName] : ``
        }`}
        bg="#6747c5"
        rounded="md"
        boxShadow="dark-lg"
        p={2}
        data-testid="test-board-squares"
      >
        {children}
      </SimpleGrid>
    </Box>
  );
};

export default Board;
