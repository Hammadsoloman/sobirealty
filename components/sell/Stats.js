import { Box, Container, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Paragraph from "../global/Paragraph";

export default function Stats() {
  return (
    <Box as={"section"}>
      <Box borderRadius={"lg"} overflow={"hidden"} w={"90vw"} mx={"auto"} >
        <Image
          src={"/assets/house.jpg"}
          alt=""
          width={1500}
          height={1900}
          style={{ margin: "auto" }}
        />
      </Box>
      <Container maxW={"7xl"} p={{ base: 10, md: 24 }}>
        <VStack spacing={10} pt={20}>
          <Paragraph color={"black"}>
            The most followed real estate brand in the world.
          </Paragraph>
          <Paragraph isBold color={"black"} isCentred>
            With the drastic increase in buyers engaging via social media,
            selling your home most effectively demands working with the brand
            that pioneered the real estate content genre.
          </Paragraph>
          <Paragraph
            isBold
            fontSize={{ base: "2xl", md: "4xl" }}
            color={"brand.primary"}
          >
            WHY EVERYONE IS SELLING WITH SERHANT.
          </Paragraph>
        </VStack>
        <Stack
          direction={{ base: "column", md: "row" }}
          w={"full"}
          justify={"space-between"}
          pt={20}
        >
          <VStack border={"1px solid #CCC"} borderRadius={"lg"} px={10} pb={5}>
            <Text fontSize={"7xl"} fontWeight={"bold"} color={"brand.primary"}>
              100M+
            </Text>
            <Text fontSize={"2xl"} fontWeight={"bold"} color={"brand.primary"}>
              impressions per month
            </Text>
          </VStack>
          <VStack border={"1px solid #CCC"} borderRadius={"lg"} px={10} pb={5}>
            <Text fontSize={"7xl"} fontWeight={"bold"} color={"brand.primary"}>
              6.5M+
            </Text>
            <Text fontSize={"2xl"} fontWeight={"bold"} color={"brand.primary"}>
              followers
            </Text>
          </VStack>
          <VStack border={"1px solid #CCC"} borderRadius={"lg"} px={10} pb={5}>
            <Text fontSize={"7xl"} fontWeight={"bold"} color={"brand.primary"}>
              16B+
            </Text>
            <Text fontSize={"2xl"} fontWeight={"bold"} color={"brand.primary"}>
              total impressions
            </Text>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
}
