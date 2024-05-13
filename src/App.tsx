import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <Show above={"lg"}>
        <GridItem area={"aside"} backgroundColor="coral">
          Aside
        </GridItem>
      </Show>
      <GridItem area={"main"} backgroundColor="dodgerBlue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
