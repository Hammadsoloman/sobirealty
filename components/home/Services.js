import { Box, Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Heading2 from "../global/Heading2";
import PrimaryButton from "../global/PrimaryButton";
import { motion } from "framer-motion";
import Heading3 from "../global/Heading3";

const ITEMS = [
  {
    title: "Buyers",
    imageURL: "/assets/properties/property_3.jpg",
    link: "/buy",
  },
  {
    title: "Sellers",
    imageURL: "/assets/properties/property_2.jpg",
    link: "/sell",
  },
  {
    title: "Realtor Ad Litem",
    imageURL: "/assets/properties/property_4.jpg",
    link: "/realtor-ad-litem",
  },
  {
    title: "Distressed Sales",
    imageURL: "/assets/properties/property_1.jpg",
    link: "/",
  },
];

export default function Services() {
  return (
    <Container maxW={"7xl"} pb={{ base: 10, md: 20 }}>
      <Heading2>Our Services</Heading2>
      <Box my={5} h={1} />
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
        {ITEMS.map((item, idx) => (
          <Box key={idx} mx={"auto"}  as={motion.div}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 2,
              delay: (idx+1) * 0.2,
            },
          }}
          viewport={{ once: true, amount: 0.2 }}>
            <VStack justify={"center"} align={"flex-start"} spacing={5}>
              <Link href={item.link}>
                <Box>
                  <Box pos={"relative"} borderRadius={"md"} overflow={"hidden"}>
                    <Image
                      src={item.imageURL}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="zoom"
                    />
                  </Box>
                  <Heading3>{item.title}</Heading3>
                </Box>
              </Link>
              <Link href={item.link}>
                <PrimaryButton title={"Learn More"} />
              </Link>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}
