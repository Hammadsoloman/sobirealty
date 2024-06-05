import { Heading } from "@chakra-ui/react";
import React from "react";

export default function Heading1({ title }) {
  return (
    <Heading
      as={"h1"}
      fontSize={{ base: "4xl", md: "6xl" }}
      textAlign={"center"}
    >
      {title}
    </Heading>
  );
}
