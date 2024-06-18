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
import { FaPlay } from "react-icons/fa6";

import PrimaryButton from "../global/PrimaryButton";
export default function ParallaxVideo() {
  return (
    <VStack
      as={"section"}
      px={{ base: 4, md: 24 }}
      py={{ base: 14, md: 80 }}
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
        <Heading2>3-Year Anniversary Film</Heading2>

        <PrimaryButton title={"Play"} icon={<FaPlay />} />
      </VStack>
    </VStack>
  );
}
