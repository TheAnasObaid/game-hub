import { HStack, Image, Link } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Link href="/">
        <Image src={logo} boxSize="48px" />
      </Link>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
