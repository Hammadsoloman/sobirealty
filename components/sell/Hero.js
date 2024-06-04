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
import Paragraph from "../global/Paragraph";

export default function Hero() {
  return (
    <Box
      as="header"
      pos={"relative"}
      maxH={"60vh"}
      color={"white"}
      overflow={"hidden"}
    >
      <Box id="backgroundVideo" zIndex={-1} width={"100%"}>
        <Image src={HeroBackgroundImage} alt="" />
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
        <Heading as={"h1"} fontSize={"6xl"} textAlign={"center"}>
          Sell With The Best
        </Heading>
        <Paragraph>
          Receive a free home valuation from one of our property experts.
        </Paragraph>
        <HStack
          bg={"white"}
          color={"black"}
          px={10}
          pb={3}
          borderRadius={"50px"}
         // mt={10}
          spacing={5}
          align={"baseline"}
        >
          <Input placeholder="Enter your home address" size={"lg"} />
          <Button colorScheme={"blue"} borderRadius={"3xl"} size={"lg"} mt={5}>
            Continue
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
