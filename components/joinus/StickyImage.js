import { Box, SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";
import Paragraph from "../global/Paragraph";
import Heading2 from "../global/Heading2";
import Image from "next/image";
import Heading3 from "../global/Heading3";

export default function StickyImage() {
  return (
    <SimpleGrid
      as={"section"}
      columns={{ base: 1, md: 2 }}
      px={{ base: 4, md: 24 }}
      py={{ base: 14, md: 32 }}
      spacing={10}
      pos={"relative"}
    >
      <Box>
        <Image
          src={"/assets/regions/miami.jpg"}
          alt=""
          width={700}
          height={700}
        />
      </Box>
      <VStack align={"flex-start"} spacing={10}>
        <Paragraph isBold>WHAT YOU CAN LOOK FORWARD TO</Paragraph>
        <Heading3>Boost Your Average Deal Size by Double-Digits</Heading3>
        <Paragraph>
          We empower agents to realize unprecedented growth in average deal
          size. In a market where every edge counts, backing yourself with the
          most followed real estate brand in the world elevates you to a level
          most only dream of reaching. High-value transactions await, and
          SERHANT. is the key to helping you unlock them.
        </Paragraph>
        <Heading3>Experience Exponential Growth in Lead Generation</Heading3>
        <Paragraph>
          Take control of your narrative with our suite of unique,
          industry-leading services, including a full-scale in-house studio for
          your branding needs. Gain unparalleled authority and credibility,
          because when you succeed, we all do. With SERHANT., you&apos;re not
          just growing a brand; you&apos;re building an empire.
        </Paragraph>
        <Heading3>
          Save Hours Per Week with State-of-the-Art Tech & Talented Advisors
        </Heading3>
        <Paragraph>
          Why let cumbersome processes eat away your valuable time? Our
          state-of-the-art technology cuts hours off your workflow. Spend your
          time where it matters most: closing deals and providing exceptional
          service. At SERHANT., our technology and people serve you, not the
          other way around.
        </Paragraph>
        <Heading3>
          Build a World-Class Brand & Amplify Your Real Estate Following
        </Heading3>
        <Paragraph>
          Back your brand and your business with a full-service creative
          workshop, an award-winning cinema-quality content studio, and the
          proven formulas and modern strategies that built the most followed
          real estate brand on the planet. Supercharge your reach, capitalize on
          shifting consumer trends to social media, and establish yourself as a
          leading voice in your market and on the global stage.
        </Paragraph>
      </VStack>
    </SimpleGrid>
  );
}
