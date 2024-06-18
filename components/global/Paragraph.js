import { Text } from "@chakra-ui/react";
import React from "react";

export default function Paragraph({ children, color, isCentred, isBold }) {
  return (
    <Text
      color={color ?? "gray.500"}
      textAlign={isCentred ? "center" : "left"}
      fontSize={{ base: "xl", md: "xl" }}
      fontWeight={isBold ? "bold" : "none"}
    >
      {children}
    </Text>
  );
}
