import { Box, SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";
import Paragraph from "../global/Paragraph";
import Heading2 from "../global/Heading2";
import Image from "next/image";
import Heading3 from "../global/Heading3";
import PrimaryButton from "../global/PrimaryButton";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function LeftImage() {
  return (
    <SimpleGrid
      as={"section"}
      columns={{ base: 1, md: 2 }}
    
      px={{ base: 4, md: 24 }}
      py={{ base: 14, md: 32 }}
      spacing={10}
      pos={"relative"}
    >
      <Box borderRadius={"md"} overflow={"hidden"}>
        <Image
          src={"/assets/regions/miami.jpg"}
          alt=""
          width={700}
          height={700}
        />
      </Box>
      <VStack align={"flex-start"} spacing={10} justify={"center"}>
        <Paragraph isBold>EARN MORE</Paragraph>
        <Heading3>Join a Network of Over 20,000 Like-Minded Agents</Heading3>
        <Paragraph>
          Join a network of over 20,000 agents who are shaping the future of
          real estate. Our proven models and systems are not just
          theories—they re practices that have stood the test of success. Here,
          mentorship is mutual, and wisdom is shared. It is not just about
          individual success; it is about collective growth.
        </Paragraph>
        <PrimaryButton title={"Join Us"} icon={<MdOutlineArrowForwardIos />} />
      </VStack>
    </SimpleGrid>
  );
}
