import {
  Box,
  Container,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Paragraph from "../global/Paragraph";
import Heading2 from "../global/Heading2";
import Image from "next/image";
import Heading3 from "../global/Heading3";
import PrimaryButton from "../global/PrimaryButton";
import { MdCheckCircle, MdOutlineArrowForwardIos } from "react-icons/md";

const Items = [
  "Broker Priced Opinion",
  "Testimony at Court Hearings & Trial Submitting Reports to Court",
  "Negotiations",
  "Contract drafting & seller documents at closing",
];

export default function Services() {
  return (
    <Container
      as={"section"}
      //px={{ base: 4, md: 24 }}
      py={{ base: 14, md: 32 }}
      maxW={"7xl"}
    >
      <Heading2 isCentred>Services Included</Heading2>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        pos={"relative"}
        mt={10}
      >
        <Box borderRadius={"md"} overflow={"hidden"}>
          <Image
            src={"/assets/regions/miami.jpg"}
            alt=""
            width={500}
            height={500}
          />
        </Box>
        <VStack align={"flex-start"} justify={"center"} >
        <List spacing={5}>
          {Items.map((item, idx) => (
            <ListItem key={idx}>
              <ListIcon as={MdCheckCircle} color="green.500" w={6} h={6} />
              <Text as={"span"} fontWeight={"bold"} fontSize={"lg"}>
                {item}
              </Text>
            </ListItem>
          ))}
        </List>
        </VStack>
      </SimpleGrid>
    </Container>
  );
}
