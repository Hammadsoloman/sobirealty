import { Text } from "@chakra-ui/react";
import React from "react";

export default function Paragraph({ children, color,isCentred }) {
  return <Text color={color ?? "gray.500"} textAlign={isCentred?"center":"left"} >{children}</Text>;
}
