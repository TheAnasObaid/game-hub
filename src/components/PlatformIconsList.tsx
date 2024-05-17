import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  FaAndroid,
  FaAppStore,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindowClose,
  FaXbox,
} from "react-icons/fa";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  platforms: { platform: Platform }[];
}

const PlatformIconsList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindowClose,
    xbox: FaXbox,
    linux: FaLinux,
    playstation: FaPlaystation,
    mac: FaApple,
    ios: FaAppStore,
    android: FaAndroid,
  };
  return (
    <HStack spacing={1} marginY={2}>
      {platforms.map(({ platform }) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
