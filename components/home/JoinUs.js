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

export default function JoinUs() {
  return (
    <SimpleGrid as={"section"} columns={2} p={24} bg={"gray.100"}  >
      <Box pr={16} >
        <Image src={Background} alt="" />
      </Box>
      <VStack justify={"flex-start"} align={"flex-start"} justifyContent={"center"} >
        <Text fontWeight={"bold"}>BECOME AN AGENT</Text>
        <Heading2>Demand More From Your Brokerage</Heading2>
        <Paragraph>
          Grow your business and brand with a brokerage that isn’t afraid of
          making the old guard uncomfortable.
        </Paragraph>
        <Button
          colorScheme={"blue"}
          borderRadius={"3xl"}
          size={"lg"}
          mt={5}
          rightIcon={<MdOutlineArrowForwardIos />}
        >
          Join Us
        </Button>
      </VStack>
    </SimpleGrid>
  );
}
