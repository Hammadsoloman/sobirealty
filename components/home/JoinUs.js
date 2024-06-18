import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Heading2 from "../global/Heading2";
import Paragraph from "../global/Paragraph";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import Background from "@/public/assets/bg1.png";
import Image from "next/image";
import PrimaryButton from "../global/PrimaryButton";
import Link from "next/link";

export default function JoinUs() {
  return (
    <SimpleGrid
      as={"section"}
      columns={{ base: 1, md: 2 }}
      p={{ base: 10, md: 24 }}
      bg={"blue.50"}
      style={{
        backgroundImage: `url(/assets/home/broker.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        // backgroundSize: "contain",
      }}
      backgroundSize={{ base: "cover", md: "contain" }}
      pos={"relative"}
    >
      <Box
        pos={"absolute"}
        top={0}
        h={0}
        w={"100%"}
        height={"100%"}
        filter={"blur(5px)"}
        bg={"rgba(0,0,0,0.2)"}
        display={{ base: "block", md: "none" }}
      />
      <Box display={{ base: "none", md: "block" }}>
        {/* <Image src={"/assets/home/broker.jpg"} alt="join us"/>*/}
      </Box>
      <VStack
        justify={"flex-start"}
        align={"flex-start"}
        justifyContent={"center"}
        zIndex={1}
        spacing={10}
      >
        <Text fontWeight={"bold"}  color={{ base: "white", xl: "brand.black" }} fontSize={{base:"lg",md:"xl"}} >BECOME AN AGENT</Text>
        <Heading2>Demand More From Your Brokerage</Heading2>
        <Paragraph color={{ base: "white", xl: "gray.500" }}>
          Grow your business and brand with a brokerage that isn’t afraid of
          making the old guard uncomfortable.
        </Paragraph>
<Link href={"/become-an-agent"}>
        <PrimaryButton title={"Join Us"} icon={<MdOutlineArrowForwardIos />} /></Link>
      </VStack>
    </SimpleGrid>
  );
}
