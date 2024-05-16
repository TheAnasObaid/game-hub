import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getOptimizedImages from "../services/get-images";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack marginY={2}>
            <Image
              src={getOptimizedImages(genre.image_background)}
              boxSize="32px"
              borderRadius={3}
              objectFit="cover"
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
