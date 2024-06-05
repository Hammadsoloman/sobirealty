import { Heading } from "@chakra-ui/react";

export default function Heading2({ children }) {
  return (
    <Heading as={"h2"} color={"brand.primary"} fontSize={{base:"4xl",md:"5xl"}}>
      {children}
    </Heading>
  );
}
