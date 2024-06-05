import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

import businessInsider from "../../public/assets/logos/business-insider.png";
import crains from "@/public/assets/logos/crains.png";
import forbes from "@/public/assets/logos/forbes.png";
import foxBusiness from "@/public/assets/logos/fox-business.png";
import logoLuxuryDaily from "@/public/assets/logos/logo-luxury-daily.png";
import mansion from "@/public/assets/logos/mansion.png";
import newBloombergLogo from "@/public/assets/logos/new_bloomberg_logo.png";
import nyTimes from "@/public/assets/logos/ny-times.png";
import cnbc from "@/public/assets/logos/cnbc.png";
import Image from "next/image";

export default function Marquees() {
  return (
    <Stack  as="section" direction={{base:"column",md:"row"}}  bg={"gray.100"} pl={{base:4,md:24}} pt={{base:4,md:24}} pb={{base:4,md:24}}>
      <Text whiteSpace={"nowrap"} fontWeight={"bold"} fontSize={"sm"} >
        FEATURED IN
      </Text>
      <Marquee
        pauseOnHover
        gradientWidth={200}
        gradient={true}
        gradientColor={"#EDF2F7"}
        autoFill
        speed={50}
      >
        <Image
          src={businessInsider}
          alt="business Insider"
          style={{ maxWidth: 150, padding: "0 20px" }}
        />{" "}
        <Image
          src={crains}
          alt="crains"
          style={{ maxWidth: 150, padding: "0 20px" }}
        />{" "}
        <Image
          src={forbes}
          alt="forbes"
          style={{ maxWidth: 150, padding: "0 20px" }}
        />{" "}
        <Image
          src={foxBusiness}
          alt="foxBusiness"
          style={{ maxWidth: 150, padding: "0 20px" }}
        />{" "}
        <Image
          src={logoLuxuryDaily}
          alt="logoLuxuryDaily"
          style={{ maxWidth: 150, padding: "0 20px" }}
        />{" "}
        <Image
          src={mansion}
          alt="mansion"
          style={{ maxWidth: 150, padding: "0 20px" }}
        />{" "}
        <Image
          src={newBloombergLogo}
          alt="newBloombergLogo"
          style={{ maxWidth: 150, padding: "0 20px" }}
        />{" "}
        <Image
          src={nyTimes}
          alt="nyTimes"
          style={{ maxWidth: 150, padding: "0 20px" }}
        />{" "}
        <Image
          src={cnbc}
          alt="cnbc"
          style={{ maxWidth: 150, padding: "0 20px" }}
        />
      </Marquee>
    </Stack>
  );
}
