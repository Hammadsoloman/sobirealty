import { Heading } from "@chakra-ui/react";

export default function Heading2({ children }) {
  return (
    <Heading as={"h2"} color={"#001A72"} fontSize={"5xl"}>
      {children}
    </Heading>
  );
}
