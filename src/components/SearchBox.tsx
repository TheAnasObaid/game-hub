import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchBox = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        type="text"
        placeholder="Search games..."
        borderRadius={20}
        variant="filled"
      />
    </InputGroup>
  );
};

export default SearchBox;