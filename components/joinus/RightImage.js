import { Box, SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";
import Paragraph from "../global/Paragraph";
import Heading2 from "../global/Heading2";
import Image from "next/image";
import Heading3 from "../global/Heading3";
import PrimaryButton from "../global/PrimaryButton";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Link from "next/link";

export default function RightImage() {
  return (
    <SimpleGrid
      as={"section"}
      columns={{ base: 1, md: 2 }}
      bg={"gray.50"}
      px={{ base: 4, md: 24 }}
      py={{ base: 14, md: 32 }}
      spacing={10}
      pos={"relative"}
    >
      <VStack align={"flex-start"} spacing={10} justify={"center"}>
        <Paragraph isBold>EARN MORE</Paragraph>
        <Heading3>Increase Your Earning Potential at SOBIREALTY.</Heading3>
        <Paragraph>
          Discover your true earning potential at SOBIREALTY., where agents earn on
          average four times more than industry standards.* You are not just an
          agent; you are a business. We recognize that and invest in your
          success, making your profitability our priority.
        </Paragraph>
        <Link href={"/ready"}>
        <PrimaryButton title={"Join Us"} icon={<MdOutlineArrowForwardIos />} /></Link>
      </VStack>
      <Box borderRadius={"md"} overflow={"hidden"}>
        <Image
          src={"/assets/regions/miami.jpg"}
          alt=""
          width={700}
          height={700}
        />
      </Box>
    </SimpleGrid>
  );
}
