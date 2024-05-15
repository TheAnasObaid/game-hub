import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { ListItem, Text, UnorderedList } from "@chakra-ui/react";

interface Game {
  id: string;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));

    console.log(games);
  }, []);

  return (
    <>
      {error ? (
        <Text>{error}</Text>
      ) : (
        <UnorderedList>
          {games.map((game) => (
            <ListItem key={game.id}>{game.name}</ListItem>
          ))}
        </UnorderedList>
      )}
    </>
  );
};

export default GameGrid;
