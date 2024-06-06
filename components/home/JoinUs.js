import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Heading2 from "../global/Heading2";
import Paragraph from "../global/Paragraph";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import Background from "@/public/assets/bg1.png";
import Image from "next/image";
import PrimaryButton from "../global/PrimaryButton";

export default function JoinUs() {
  return (
    <SimpleGrid
      as={"section"}
      columns={{ base: 1, md: 2 }}
      p={{base:10,md:24}}
      bg={"gray.100"}
      style={{
        backgroundImage: `url(/assets/bg1.png)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        backgroundSize: "contain",
      }}
    >
      <Box display={{ base: "none", md: "block" }} />
      <VStack
        justify={"flex-start"}
        align={"flex-start"}
        justifyContent={"center"}
        
      >
        <Text fontWeight={"bold"}>BECOME AN AGENT</Text>
        <Heading2>Demand More From Your Brokerage</Heading2>
        <Paragraph>
          Grow your business and brand with a brokerage that isn’t afraid of
          making the old guard uncomfortable.
        </Paragraph>
      
        <PrimaryButton title={"Join Us"} icon={<MdOutlineArrowForwardIos />} />
      </VStack>
    </SimpleGrid>
  );
}
