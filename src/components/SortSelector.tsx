import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            rightIcon={isOpen ? <BsChevronUp /> : <BsChevronDown />}
          >
            Order by: Relevance
          </MenuButton>
          <MenuList>
            <MenuItem>Relevance</MenuItem>
            <MenuItem>Date added</MenuItem>
            <MenuItem>Name</MenuItem>
            <MenuItem>Release</MenuItem>
            <MenuItem>Popularity</MenuItem>
            <MenuItem>Average Rating</MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default SortSelector;
