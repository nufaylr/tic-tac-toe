import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
import Game from "./Game";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#3c2b9d",
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container>
        <Game />
      </Container>
    </ChakraProvider>
  );
}

export default App;
