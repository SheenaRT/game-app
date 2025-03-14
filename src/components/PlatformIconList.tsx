import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo} from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from '../hooks/useGames';
import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
const iconMap: {[key: string]: IconType}= {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web:BsGlobe
}

  return (
    <HStack marginY={1} spacing='1.1px'>
      {platforms.map((platform) => (
        <Icon color='#6c757d' as={iconMap[platform.slug]} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
