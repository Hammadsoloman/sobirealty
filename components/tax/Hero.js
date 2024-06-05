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
      pos={"relative"}
    //  minH={{ base: "100vh", lg: "70vh" }}
      color={"white"}
      overflow={"hidden"}
    >
      <Box zIndex={-1} width={"100vw"}>
        <Image src={HeroBackgroundImage} alt="" style={{ minWidth: "100%",minHeight:"100%" }} />
      </Box>
      <Box
        pos={"absolute"}
        top={0}
        left={0}
        w={"full"}
        h={"full"}
        bg={"rgba(0,0,0,0.4)"}
      />
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        pos={"absolute"}
        top={0}
        left={0}
        w={"full"}
        h={"full"}
        pt={40}
      >
        <VStack h={"100%"} justify={"space-between"} py={10} align={"center"}>
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
        <VStack
          as={"form"}
          bg={"white"}
          boxShadow={"lg"}
          borderRadius={"md"}
          color={"black"}
          maxW={"550px"}
          p={10}
          h={"min-content"}
          mx={"auto"}
        >
          <Heading2>Start Your Property Tax Evaluation</Heading2>
          <FormControl>
            <FormLabel>County</FormLabel>
            <Select placeholder="Select country">
              <option>Florida</option>
              <option>Kansas</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>
          <OutlineButton title={"Search For Saving"} />
        </VStack>
      </SimpleGrid>
    </Box>
  );
}
