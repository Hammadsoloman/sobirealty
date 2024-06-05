import { Box, Divider, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

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
      <VStack
        w={"100%"}
        h={"100%"}
        bg={"rgba(0,0,0,0.5)"}
        justify={"center"}
        align={"center"}
        color={"white"}
      >
        <Heading
          as={"h1"}
          fontSize={{ base: "4xl", md: "6xl" }}
          textAlign={"center"}
        >
          REALTOR AD LITEM
        </Heading>
        <Divider w={"50vw"} borderColor={"brand.primary"} borderWidth={5} />
        <Image
          src={"/assets/bg2.png"}
          alt="divorce"
          width={1000}
          height={1000}
        />
      </VStack>
    </Box>
  );
}
