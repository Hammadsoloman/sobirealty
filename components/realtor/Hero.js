import {
  Box,
  Container,
  Divider,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Heading1 from "../global/Heading1";
import Paragraph from "../global/Paragraph";
import Heading3 from "../global/Heading3";
import { LuCheckCircle } from "react-icons/lu";

const Items = ["Real Estate Broker", "Mediator", "Lawyer", "Ad Litem"];

export default function Hero() {
  return (
    <VStack
      as="header"
      // h="100vh"
      //  backgroundImage={"url(/assets/court.jpg)"}
      //   backgroundPosition={"center"}
      //  backgroundRepeat={"no-repeat"}
      //  backgroundSize={"cover"}
      //  pos={"relative"}
    >
      <Box
        w={"full"}
        h="60vh"
        backgroundImage={"url(/assets/home/broker.jpg)"}
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
      />
      <Container maxW={"7xl"}>
        <Heading1
          title={"What is a Realtor Ad Litem"}
          style={{ paddingBottom: 16 }}
        />
        <Paragraph>
          During litigation the Court appoints a Realtor Ad Litem to act on
          behalf of the “property” or “business” when owners are unavailable or
          unwilling to do so. The Attorney Realtor Ad Litem advocates and
          negotiates for the best and highest sales value, while managing
          conflict situations between the parties. The Attorney Realtor Ad
          Litem, testifies at hearings, trial and attend depositions, regarding
          the transaction.
        </Paragraph>
      </Container>

      <SimpleGrid columns={{ base: 1, md: 4 }} py={10}>
        {Items.map((item, idx) => (
          <VStack key={idx}>
            <Icon as={LuCheckCircle} w={16} h={16} color="green.500" />
            <Heading3> {item} </Heading3>
          </VStack>
        ))}
      </SimpleGrid>
    </VStack>
  );
}
