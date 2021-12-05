import { Box } from "@chakra-ui/react";

const Square = ({ children, onClick, id }) => (
  <Box
    as="button"
    bg="#322167"
    height="150px"
    rounded="md"
    onClick={() => onClick(id)}
    disabled={children ? true : false}
  >
    {children}
  </Box>
);

export default Square;
