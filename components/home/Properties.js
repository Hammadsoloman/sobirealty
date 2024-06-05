import properties from "@/data/properties";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Heading2 from "../global/Heading2";
import Paragraph from "../global/Paragraph";
import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import PrimaryButton from "../global/PrimaryButton";

export default function Properties() {
  return (
    <Box as={"section"} p={{ base: 4, md: 24 }}>
      <Heading2>Featured Properties</Heading2>
      <Paragraph>
        Check out some of our most exclusive houses, apartments, townhomes,
        penthouses, and more.
      </Paragraph>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={{ base: 4, md: 10 }}
        mt={{ base: 5, md: 20 }}
      >
        {properties
          .filter((property) => property.isFeatured)
          .map((property, idx) => (
            <Link key={idx} href={"/"}>
              <Box>
                <Box pos={"relative"} borderRadius={"md"} overflow={"hidden"}>
                  <Image
                    src={property.image}
                    alt={property.address}
                    width={500}
                    height={400}
                    className="zoom"
                  />
                  <Text
                    as={"span"}
                    bg={"gray.100"}
                    pos={"absolute"}
                    top={3}
                    left={4}
                    borderRadius={"md"}
                    py={1}
                    px={2}
                    fontWeight={"bold"}
                    color={"black"}
                    fontSize={"sm"}
                  >
                    FOR SALE
                  </Text>
                  <Text
                    as={"span"}
                    bg={"black"}
                    pos={"absolute"}
                    bottom={0}
                    left={0}
                    color={"white"}
                    py={2}
                    pl={2}
                    pr={6}
                    borderRadius={"0.5rem 100px 0 0"}
                  >
                    SOBIREALTY, Signature
                  </Text>
                </Box>
                <Text fontWeight={"bold"} mt={2}>
                  ${property.price.toLocaleString()}{" "}
                </Text>
                <Text noOfLines={2}>{property.address} </Text>
              </Box>
            </Link>
          ))}
      </SimpleGrid>
      <PrimaryButton title={"View More"} icon={<MdOutlineArrowForwardIos />} />
    </Box>
  );
}
