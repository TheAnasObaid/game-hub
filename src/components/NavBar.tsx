import { HStack, Image, Link } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBox from "./SearchBox";

interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack spacing={5}>
      <Link href="/">
        <Image src={logo} boxSize="48px" />
      </Link>
      <SearchBox onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
