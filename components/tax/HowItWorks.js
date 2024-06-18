import { Box, Container, SimpleGrid, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Heading2 from "../global/Heading2";
import Paragraph from "../global/Paragraph";
import Heading3 from "../global/Heading3";
const Steps = [
  {
    title: "Search For Savings",
    description:
      "Use the Search Box above to find out if you’re a candidate for savings.",
    imgURL: "/assets/tax/Step1.jpg",
  },
  {
    title: "Build Your Report",
    description: "Get custom evidence for lower taxes, in about 2 minutes!",
    imgURL: "/assets/tax/Step2.webp",
  },
  {
    title: "Submit Your Protest",
    description:
      "Use our report to win your protest & maximize your savings at your hearing.",
    imgURL: "/assets/tax/Step3.webp",
  },
];
export default function HowItWorks() {
  return (
    <Box pos={"relative"} top={-100} >
      <Box
        //  position={"absolute"}
        pointerEvents={"none"}
        w={"100%"}
        left={0}
        right={0}
        style={{
          backgroundImage:
            "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDEyODAgMTQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiMwMGEzZWUiPjxwYXRoIGQ9Ik0xMjgwIDMuNEMxMDUwLjU5IDE4IDEwMTkuNCA4NC44OSA3MzQuNDIgODQuODljLTMyMCAwLTMyMC04NC4zLTY0MC04NC4zQzU5LjQuNTkgMjguMiAxLjYgMCAzLjRWMTQwaDEyODB6IiBmaWxsLW9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTAgMjQuMzFjNDMuNDYtNS42OSA5NC41Ni05LjI1IDE1OC40Mi05LjI1IDMyMCAwIDMyMCA4OS4yNCA2NDAgODkuMjQgMjU2LjEzIDAgMzA3LjI4LTU3LjE2IDQ4MS41OC04MFYxNDBIMHoiIGZpbGwtb3BhY2l0eT0iLjUiLz48cGF0aCBkPSJNMTI4MCA1MS43NmMtMjAxIDEyLjQ5LTI0Mi40MyA1My40LTUxMy41OCA1My40LTMyMCAwLTMyMC01Ny02NDAtNTctNDguODUuMDEtOTAuMjEgMS4zNS0xMjYuNDIgMy42VjE0MGgxMjgweiIvPjwvZz48L3N2Zz4=)",
          backgroundSize: "100% 100px",
          bottom: 0,
          height: "100px",
          zIndex: 1,
          transform: "scale(1,1)",
        }}
      />
      <Box bg={"#00A3EE"} py={20} >
        <Heading2 color={"white"} isCentred >100% RISK-FREE GUARANTEE</Heading2>
        <Paragraph color={"white"} isCentred>
          Reduce your property taxes with our report, or your money back!
        </Paragraph>
      </Box>
      <Box
        //  position={"absolute"}
        pointerEvents={"none"}
        w={"100%"}
        left={0}
        right={0}
        style={{
          backgroundImage:
            "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI4NXB4IiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwYTNlZSI+PHBhdGggZD0iTTY0MCAxNDBMMTI4MCAwSDB6IiBmaWxsLW9wYWNpdHk9Ii41Ii8+PHBhdGggZD0iTTY0MCA5OGw2NDAtOThIMHoiLz48L2c+PC9zdmc+)",
          backgroundSize: "100% 85px",
          top: 0,
          height: "85px",
          zIndex: 1,
          transform: "scale(1,1)",
        }}/>
      <Container as={"section"} maxW={"7xl"} p={{ base: 10, md: 24 }}>
        <Paragraph>PROPERTY TAX PROTEST</Paragraph>
        <Heading2>How It Works</Heading2>
        <Box my={10} />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {Steps.map((step, idx) => (
            <VStack
              key={idx}
              spacing={4}
              align={{ base: "center", md: "flex-start" }}
            >
              <Image
                src={step.imgURL}
                alt={step.title ?? ""}
                width={338}
                height={182}
              />
              <Heading3>{step.title} </Heading3>
              <Paragraph>{step.description} </Paragraph>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
