import { SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";
import Paragraph from "../global/Paragraph";
import Heading2 from "../global/Heading2";
import PrimaryButton from "../global/PrimaryButton";

export default function Ready() {
  return (
    <SimpleGrid
      as={"section"}
      columns={{ base: 1, md: 2 }}
      bg={"gray.50"}
      px={{ base: 4, md: 24 }}
      py={{ base: 14, md: 32 }}
    
    >
      <VStack align={"flex-start"}>
        <Heading2>Are You Ready?</Heading2>
      </VStack>
      <VStack spacing={10} >
        <Paragraph isBold >
          If you got this far, it means you are excited. And so are we. Let s
          set up your one-on-one conversation and start shaping the future of
          real estate together!
        </Paragraph>
        <PrimaryButton title={"Get In Touch"} />
      </VStack>
    </SimpleGrid>
  );
}
