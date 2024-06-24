import { SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";
import Paragraph from "../global/Paragraph";
import Heading2 from "../global/Heading2";

export default function SubHero() {
  return (
    <SimpleGrid
      as={"section"}
      columns={{ base: 1, md: 2 }}
      bg={"gray.50"}
      px={{ base: 4, md: 24 }}
      py={{ base: 14, md: 32 }}
    >
      <VStack align={"flex-start"}>
        <Paragraph isBold>THE SOBIREALTY. DIFFERENCE</Paragraph>
        <Heading2>Respect For Your Talent. Value For Your Business.</Heading2>
      </VStack>
      <Paragraph>
        Don&lsquo;t just join another brokerage; become part of a revolution.
        The SOBIREALTY Difference is an ecosystem designed for ambitious, driven,
        and forward-thinking luxury real estate agents like you. The future of
        real estate is here—don&lsquo;t miss your opportunity to be a part of
        it.
      </Paragraph>
    </SimpleGrid>
  );
}
