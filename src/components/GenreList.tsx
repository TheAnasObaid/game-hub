import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getOptimizedImages from "../services/get-images";

interface Props {
  onSelectedGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <VStack spacing={5} alignItems={"flex-start"}>
      <Heading fontSize="32px">Genres</Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image
                src={getOptimizedImages(genre.image_background)}
                boxSize="32px"
                borderRadius={3}
                objectFit="cover"
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectedGenre(genre)}
                fontSize="md"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default GenreList;
