import {
  Heading,
  SimpleGrid,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";
import Heading2 from "../global/Heading2";
import Paragraph from "../global/Paragraph";
import Background from "@/public/assets/bg1.png";
import Image from "next/image";
export default function Stats() {
  return (
    <SimpleGrid
      as={"section"}
      columns={{ base: 1, md: 2 }}
      p={{ base: 10, md: 24 }}
      style={{
        backgroundImage: `url(/assets/home/florida.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      pos={"relative"}
     // my={{ base: 10, md: 24 }}
    >
      <Box
        pos={"absolute"}
        top={0}
        h={0}
        w={"100%"}
        height={"100%"}
        filter={"blur(5px)"}
        bg={"rgba(0,0,0,0.4)"}
      />
      <VStack
        justify={"flex-start"}
        align={"flex-start"}
        justifyContent={"center"}
        spacing={{ base: 4, md: 10 }}
        zIndex={1}
        color={"white"}
      >
        <Text fontWeight={"bold"} fontSize={{ base: "lg", md: "xl" }}>
          GLOBAL REACH
        </Text>
        <Heading2>Gain Access to the Best Network in the World</Heading2>
        <Text fontWeight={"bold"} fontSize={{ base: "lg", md: "xl" }}>
          Buy and sell homes all over the world with a referral network spanning
          more than one hundred countries and countless thousands of trusted
          real estate professionals.
        </Text>

        <SimpleGrid columns={2} w={"full"} spacing={10}>
          <Stat>
            <StatNumber
              fontWeight={"bold"}
              fontSize={{ base: "2xl", md: "5xl" }}
            >
              6
            </StatNumber>
            <StatLabel fontWeight={"bold"} fontSize={{base:"lg",md: "xl"}}>
              continents
            </StatLabel>
          </Stat>
          <Stat>
            <StatNumber fontWeight={"bold"}  fontSize={{ base: "2xl", md: "5xl" }}>
              128+
            </StatNumber>
            <StatLabel fontWeight={"bold"} fontSize={{base:"lg",md: "xl"}}>
              contries
            </StatLabel>
          </Stat>
          <Stat>
            <StatNumber fontWeight={"bold"}  fontSize={{ base: "2xl", md: "5xl" }}>
              25K+
            </StatNumber>
            <StatLabel fontWeight={"bold"} fontSize={{base:"lg",md: "xl"}}>
              agents
            </StatLabel>
          </Stat>
          <Stat>
            <StatNumber fontWeight={"bold"}  fontSize={{ base: "2xl", md: "5xl" }}>
              6.8M+
            </StatNumber>
            <StatLabel fontWeight={"bold"} fontSize={{base:"lg",md: "xl"}}>
              social followers
            </StatLabel>
          </Stat>
        </SimpleGrid>
      </VStack>
      <Box display={{ base: "none", md: "block" }} />
    </SimpleGrid>
  );
}
