import {
  Heading,
  SimpleGrid,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,Box
} from "@chakra-ui/react";
import Heading2 from "../global/Heading2";
import Paragraph from "../global/Paragraph";
import Background from "@/public/assets/bg1.png";
import Image from "next/image";
export default function Stats() {
  return (
    <SimpleGrid as={"section"} columns={2}  p={24}>
      <VStack align={"flex-start"} spacing={10} >
        <Text fontWeight={"bold"} >GLOBAL REACH</Text>
        <Heading2>
          Gain Access to the Best Network in the World
        </Heading2>
        <Paragraph>
          Buy and sell homes all over the world with a referral network spanning
          more than one hundred countries and countless thousands of trusted
          real estate professionals.
        </Paragraph>

        <SimpleGrid columns={2} w={"full"} spacing={10} >
          <Stat>
            <StatNumber fontWeight={"bold"} fontSize={"5xl"} >6</StatNumber>
            <StatLabel fontWeight={"bold"} fontSize={"xl"}>continents</StatLabel>
          </Stat>
          <Stat>
            <StatNumber fontWeight={"bold"} fontSize={"5xl"}>128+</StatNumber>
            <StatLabel fontWeight={"bold"} fontSize={"xl"}>contries</StatLabel>
          </Stat>
          <Stat>
            <StatNumber fontWeight={"bold"} fontSize={"5xl"}>25K+</StatNumber>
            <StatLabel fontWeight={"bold"} fontSize={"xl"}>agents</StatLabel>
          </Stat>
          <Stat>
            <StatNumber fontWeight={"bold"} fontSize={"5xl"}>6.8M+</StatNumber>
            <StatLabel fontWeight={"bold"} fontSize={"xl"}>social followers</StatLabel>
          </Stat>
        </SimpleGrid>
      </VStack>
      <Box pl={16} >
        <Image src={Background} alt="" />
      </Box>
    </SimpleGrid>
  );
}