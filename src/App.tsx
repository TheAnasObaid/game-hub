import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      gap="8px"
    >
      <GridItem p="4" area={"nav"} bg={"coral"} rounded="8px">
        Nav
      </GridItem>
      <Show above={"lg"}>
        <GridItem p="4" area={"aside"} bg={"gold"} rounded="8px">
          Aside
        </GridItem>
      </Show>
      <GridItem p="4" area={"main"} bg={"dodgerblue"} rounded="8px">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
