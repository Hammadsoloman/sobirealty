//import backgroundVideo from "@/public/assets/backgroundvideo.mp4"

import {
  Box,
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
import Image from "next/image";
import HeroBackgroundImage from "@/public/assets/regions/los.jpg";
export default function Hero() {
  return (
    <Box bg={"black"} textAlign={"center"}>
      <Link href={"/"}>
        <Text color={"white"} p={3}>
          Click Here to Learn How SOBIREALTY, is Making Real Estate SIMPLE
        </Text>
      </Link>
      <Box
        as="header"
        pos={"relative"}
        color={"white"}
        overflow={"hidden"}
        borderTopRadius={"50px"}
      >
        <Box
          as="video"
          autoPlay
          loop
          muted
          id="backgroundVideo"
          zIndex={-1}
          width={"100%"}
          display={{ base: "none", md: "block" }}
        >
          <source src={"/assets/backgroundvideo.mp4"} type="video/mp4" />
        </Box>

        <Box zIndex={-1} width={"100%"} display={{ md: "block", md: "none" }}>
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
          pb={10}
        >
          <Heading
            as={"h1"}
            fontSize={{ base: "4xl", md: "6xl" }}
            textAlign={"center"}
          >
            Make A Move For{" "}
            <Box as="br" display={{ base: "none", md: "inline" }} />
            Your Future.
          </Heading>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            The Most Followed Real Estate Brand in the World.
          </Text>
          <HStack
            bg={"white"}
            color={"black"}
            px={{ base: 4, md: 10 }}
            py={{ base: 2, md: 5 }}
            borderRadius={"50px"}
            mt={{ base: 2, md: 10 }}
            spacing={{ base: 2, md: 5 }}
          >
            <Select defaultValue={"Buy"} border={"none"}>
              <option value="Buy">Buy</option>
              <option value="Buy">Sell</option>
            </Select>
            <InputGroup minW={{ base: "60vw", md: "40vw" }}>
              <Input placeholder="Search by address or area" />
              <InputRightElement>
                <FiTarget />
              </InputRightElement>
            </InputGroup>
            <IconButton
              icon={<FaSearch />}
              colorScheme={"facebook"}
              isRound
              aria-label="Find a Home"
              color={"white"}
              bg={"brand.primary"}
              _hover={{
                bg: "brand.secondary",
              }}
            />
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
}
