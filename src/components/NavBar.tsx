import { HStack, Image, Link } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBox from "./SearchBox";

const NavBar = () => {
  return (
    <HStack spacing={5}>
      <Link href="/">
        <Image src={logo} boxSize="48px" />
      </Link>
      <SearchBox />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
