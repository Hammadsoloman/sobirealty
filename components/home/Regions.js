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

export default function Regions() {
  const [backgroundImage, setBackgroundImage] = useState("");
 
  return (
    <Box
      as="section"
      p={24}
      bg={"gray.100"}
      overflow={"hidden"}
      borderTopRadius={"50px"}
      pos={"relative"}
      top={"-90px"}
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(237,242,247,1) 70%, rgba(255,255,255,0) 79%),
url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        backgroundSize: "cover",
      }}
      transition={"all 1s ease"}
    >
      <Grid
        // h="200px"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
      >
        <GridItem colSpan={1}>
          <Heading2>Our Regions</Heading2>
          <Paragraph>Discover the home you’ve been waiting for.</Paragraph>
        </GridItem>
        <GridItem colSpan={2}>
          <SimpleGrid columns={3} spacing={10}>
            {regions.map((region, idx) => (
              <Link key={idx} href={"/"}>
                <HStack
                  fontWeight={"bold"}
                  justify={"space-between"}
                  bg={"white"}
                  p={4}
                  borderRadius={"lg"}
                  _hover={{ bg: "blue.500" }}
                  onMouseEnter={() => setBackgroundImage(region.image)}
                  onMouseLeave={() => setBackgroundImage("")}
                >
                  <Text as={"span"}>{region.name}</Text>
                  <MdOutlineArrowForwardIos />
                </HStack>
              </Link>
            ))}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Box>
  );
}
