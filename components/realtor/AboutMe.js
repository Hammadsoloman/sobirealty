import {
  Box,
  HStack,
  Icon,
  ListItem,
  SimpleGrid,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Paragraph from "../global/Paragraph";
import Heading2 from "../global/Heading2";
import Image from "next/image";
import Heading3 from "../global/Heading3";
import PrimaryButton from "../global/PrimaryButton";
import { MdEmail, MdOutlineArrowForwardIos } from "react-icons/md";
import { FaGooglePlusG, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function AboutMe() {
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
        <Heading3>cheryl-dene spring, esq.</Heading3>

        <Paragraph>
          Cheryl-Dene is a Florida lawyer, mediator and realtor-broker. She
          brings to the table her ability to resolve and defuse high-conflict
          situations. After spending several years litigating family divorce
          matters and business disputes, she pivoted her focus to act as a
          realtor ad litem and mediator to parties. As part of her services, she
          provides updates and reports to the Court. She also testifies at
          hearings and trial.
        </Paragraph>
        <Paragraph isBold>Experience beyond Conflict</Paragraph>
        <UnorderedList>
          <ListItem>Florida Real Estate & Business Broker</ListItem>
          <ListItem>Florida Real Estate Attorney</ListItem>
          <ListItem>
            Title Agent for The Fund & Old Republic National Title
          </ListItem>
          <ListItem>Closing Attorney</ListItem>
          <ListItem>Florida Supreme Court Certified Mediator</ListItem>
          <ListItem>
            Adjunct Faculty for Broward College - Florida Real Estate Sales
            Associate Course
          </ListItem>
        </UnorderedList>
        <Paragraph>
          Cheryl-Dene&apos;s ability to help parties through the sales process
          of their assets, is critical to reduce attorney fees, costs, and
          extended litigation. Her navigation of the sales process, aggressive
          negotiation skills, and marketing strategies will serve clients,
          owners, and trustees well.{" "}
        </Paragraph>
        <HStack spacing={5} >
          <Link href={"/"}>
            <Icon as={FaLinkedin} w={10} h={10} />
          </Link>{" "}
          <Link href={"/"}>
            <Icon as={FaGooglePlusG} w={10} h={10} />
          </Link>{" "}
          <Link href={"/"}>
            <Icon as={MdEmail} w={10} h={10} />
          </Link>{" "}
          <Link href={"/"}>
            <Icon as={FaWhatsapp} w={10} h={10} />
          </Link>
        </HStack>
      </VStack>
      <Box borderRadius={"md"} overflow={"hidden"}>
        <Image
          src={"/assets/cheryl-dene.webp"}
          alt="cheryl-dene"
          width={700}
          height={700}
          style={{ margin: "auto" }}
        />
      </Box>
    </SimpleGrid>
  );
}
