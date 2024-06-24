import { SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";
import Paragraph from "../global/Paragraph";
import Heading2 from "../global/Heading2";
import PrimaryButton from "../global/PrimaryButton";

export default function Estimation() {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      p={{ base: 4, md: 24 }}
      bg={"#00A3EE"}
      color={"white"}
      spacing={10}
    >
      <VStack align={"flex-start"} spacing={10} >
        <Paragraph color={"white"} isBold>
          NEWSLETTER
        </Paragraph>
        <Heading2 color={"white"}>
          NEWSLETTER The Best Minds inReal Estate
        </Heading2>
        <Paragraph color={"white"}>
          Get the latest from the SOBIREALTY. Universe directly into your inbox.
        </Paragraph>
        <PrimaryButton title={"Sign Up"} />
      </VStack>
      
      <VStack bg={"white"} borderRadius={"lg"} mx={{base:2,md:20}} p={{base:4,md: 20}} spacing={{base:5,md:10}} align={"flex-start"} >
        <Paragraph>HOME VALUATION</Paragraph>
        <Heading2>How Much Is My Property Worth</Heading2>
        <Paragraph>
          Get your free valuation report and connect with a SOBIREALTY. Agent to
          talk about your home.
        </Paragraph>
        <PrimaryButton title={"Get Estimate"} />
      </VStack>
    </SimpleGrid>
  );
}
