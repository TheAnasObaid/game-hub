import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            rightIcon={isOpen ? <BsChevronUp /> : <BsChevronDown />}
          >
            Platforms
          </MenuButton>
          <MenuList>
            {data.map((platform) => (
              <MenuItem key={platform.id}>{platform.name}</MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default PlatformSelector;
