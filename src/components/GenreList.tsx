import { ListItem, UnorderedList } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <UnorderedList>
      {genres.map((genre) => (
        <ListItem key={genre.id}>{genre.name}</ListItem>
      ))}
    </UnorderedList>
  );
};

export default GenreList;
