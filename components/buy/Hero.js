//import backgroundVideo from "@/public/assets/backgroundvideo.mp4"

import {
  Box,
  Button,
  HStack,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";


import HeroBackgroundImage from "@/public/assets/regions/los.jpg";
import Image from "next/image";
import PrimaryButton from "../global/PrimaryButton";

export default function Hero() {
  return (
    <Box
      as="header"
      pos={"relative"}
      maxH={"60vh"}
      color={"white"}
      overflow={"hidden"}
    >
      <Box  zIndex={-1} width={"100vw"}>
        <Image src={HeroBackgroundImage} alt="" style={{minWidth:"100%"}} />
      </Box>
      <Box
        pos={"absolute"}
        top={0}
        left={0}
        w={"full"}
        h={"full"}
        bg={"rgba(0,0,0,0.4)"}
      />
      <VStack
        pos={"absolute"}
        top={0}
        left={0}
        w={"full"}
        h={"full"}
        justify={"center"}
        align={"center"}
      >
        <Heading as={"h1"}    fontSize={{ base: "4xl", md: "6xl" }} textAlign={"center"}>
          Your New Home <br />
          Awaits
        </Heading>
        <PrimaryButton title={" Explore Our Properties"} icon={<MdKeyboardArrowDown />} />
      </VStack>
    </Box>
  );
}
