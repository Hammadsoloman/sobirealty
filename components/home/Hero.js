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
       // h={"100vh"}
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
          // pos={"absolute"}
          // top={0}
          // left={0}
        >
          <source src={"/assets/backgroundvideo.mp4"} type="video/mp4" />
        </Box>
        <Box pos={"absolute"} top={0} left={0} w={"full"} h={"full"} bg={"rgba(0,0,0,0.4)"} />
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
            Make A Move For <br />
            Your Future.
          </Heading>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            The Most Followed Real Estate Brand in the World.
          </Text>
          <HStack
            bg={"white"}
            color={"black"}
            px={10}
            py={5}
            borderRadius={"50px"}
            mt={10}
            spacing={5}
          >
            <Select defaultValue={"Buy"} border={"none"} >
              <option value="Buy">Buy</option>
              <option value="Buy">Sell</option>
            </Select>
            <InputGroup minW={"40vw"}>
              <Input placeholder="Search by address or area" />
              <InputRightElement>
                <FiTarget />
              </InputRightElement>
            </InputGroup>
            <IconButton icon={<FaSearch />} colorScheme={"facebook"} isRound />
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
}
