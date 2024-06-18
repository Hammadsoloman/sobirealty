import { Box, Container, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Paragraph from "../global/Paragraph";

export default function MiniStats() {
  return (
    <Container maxW={"7xl"} p={{ base: 10, md: 24 }}>
      <VStack spacing={10} pt={20}>
        <Paragraph color={"black"}>
          The most followed real estate brand in the world.
        </Paragraph>
        <Paragraph isBold color={"black"} isCentred>
          A synergistic PR plan is part and parcel of any successful home
          selling strategy. Put your home front and center and reach even more
          buyers with our unrivaled press exposure.
        </Paragraph>
      
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        w={"full"}
        justify={"center"}
        spacing={10}
        pt={20}
      >
        <VStack border={"1px solid #CCC"} borderRadius={"lg"} px={10} pb={5}>
          <Text fontSize={"7xl"} fontWeight={"bold"} color={"brand.primary"}>
            100M+
          </Text>
          <Text fontSize={"2xl"} fontWeight={"bold"} color={"brand.primary"}>
          annual impressions
          </Text>
        </VStack>
        <VStack border={"1px solid #CCC"} borderRadius={"lg"} px={10} pb={5}>
          <Text fontSize={"7xl"} fontWeight={"bold"} color={"brand.primary"}>
            6.5M+
          </Text>
          <Text fontSize={"2xl"} fontWeight={"bold"} color={"brand.primary"}>
          annual placements
          </Text>
        </VStack>
   
      </Stack>
    </Container>
  );
}
