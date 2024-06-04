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
import { FiTarget } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <Box
      as="header"
      pos={"relative"}
      // h={"100vh"}
      color={"white"}
      overflow={"hidden"}
    >
      <Box
        as="video"
        autoPlay
        loop
        muted
        id="backgroundVideo"
        zIndex={-1}
        width={"100%"}
        // pos={"absolute"}
        // top={0}
        // left={0}
      >
        <source src={"/assets/backgroundvideo.mp4"} type="video/mp4" />
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
        justify={"flex-end"}
        align={"flex-start"}
        px={20}
        pb={"30vh"}
      >
        <Heading as={"h1"} fontSize={"6xl"} textAlign={"left"}>
          Become A<br />
          SOBIREALTY.
          <br />
          Agent Icon
        </Heading>
        <Button colorScheme={"blue"} borderRadius={"3xl"} size={"lg"} mt={5}>
          Join Us
        </Button>
      </VStack>
    </Box>
  );
}
