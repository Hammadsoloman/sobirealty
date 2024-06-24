import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import regions from "@/data/regions";
import Heading2 from "../global/Heading2";
import Paragraph from "../global/Paragraph";
import { Link } from "@chakra-ui/next-js";
import { useState } from "react";

export default function SubHero() {
  const [backgroundImage, setBackgroundImage] = useState("");

  return (
    <Box
      as="section"
      px={{ base: 4, md: 24 }}
      py={{ base: 6, md: 28 }}
      bg={"gray.100"}
      overflow={"hidden"}
      borderTopRadius={{ base: "10px", md: "50px" }}
      pos={"relative"}
      top={{ base: "-25px", md: "-90px" }}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <Box pr={{base:0,md:48}} >
        <Paragraph isBold fontSize={{ base: "xl", md: "3xl" }}>
          Put your property in front of more potential buyers worldwide than
          anyone else.{" "}
        </Paragraph>
        </Box>
        <Paragraph color={"black"} >
          Work with a dedicated SOBIREALTY. agent who will listen to your needs and
          goals, use data and creativity to optimize your property for potential
          buyers, and stand beside you for every step of the selling process. We
          welcome expectations because we hold ourselves to the highest standard
          and know that our success is defined by yours. If you’re considering
          selling your home, or just want to get a sense of your home’s value,
          we would love to connect.
        </Paragraph>
      </SimpleGrid>
    </Box>
  );
}
