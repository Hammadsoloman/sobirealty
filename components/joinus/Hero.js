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
  SimpleGrid,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiTarget } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import PrimaryButton from "../global/PrimaryButton";
import Paragraph from "../global/Paragraph";
import Heading2 from "../global/Heading2";

export default function Hero() {
  const src = useBreakpointValue({
    base: "/assets/backgroundvideomobile.mp4",
    lg: "/assets/backgroundvideo.mp4",
  });
  console.log(src);

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
        display={{ base: "none", lg: "block" }}
      >
        <source src={"/assets/backgroundvideo.mp4"} type="video/mp4" />
      </Box>
      <Box
        as="video"
        autoPlay
        loop
        muted
        id="backgroundVideo"
        zIndex={-1}
        width={"100%"}
        display={{ base: "block", lg: "none" }}
      >
        <source src={"/assets/backgroundvideomobile.mp4"} type="video/mp4" />
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
        <Heading
          as={"h1"}
          fontSize={{ base: "4xl", md: "8xl" }}
          textAlign={"left"}
          mb={10}
        >
          Become A<br />
          SOBIREALTY.
          <br />
          Agent Icon
        </Heading>

        <PrimaryButton title={" Join Us"} />
      </VStack>
    </Box>
  );
}
