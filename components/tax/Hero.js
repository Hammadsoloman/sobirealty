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
  Stack,
  Text,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  SimpleGrid,
} from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";

import HeroBackgroundImage from "@/public/assets/regions/los.jpg";
import Image from "next/image";
import PrimaryButton from "../global/PrimaryButton";
import Heading2 from "../global/Heading2";
import OutlineButton from "../global/OutlineButton";

export default function Hero() {
  return (
    <Box
      as="header"
      h="100vh"
      backgroundImage={"url(/assets/court.jpg)"}
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      pos={"relative"}
    >
      <Box w={"full"} h={"full"} bg={"rgba(0,0,0,0.4)"} />
      <VStack
        pos={"absolute"}
        top={0}
        left={0}
        w={"full"}
        h={"full"}
        pt={40}
        color={"white"}
        justify={"center"}
        align={"center"}
      >
        <Heading
          as={"h1"}
          fontSize={{ base: "4xl", md: "6xl" }}
          textAlign={"center"}
        >
          We only get paid <br />
          if you get a tax reduction!!
        </Heading>
        <PrimaryButton
          title={"View Sample Report"}
          icon={<MdKeyboardArrowDown />}
        />
      </VStack>
    </Box>
  );
}
