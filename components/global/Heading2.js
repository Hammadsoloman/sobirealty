import { Heading } from "@chakra-ui/react";

export default function Heading2({ children,isCentred }) {
  return (
    <Heading as={"h2"} color={"brand.primary"} textAlign={isCentred?"center":"left"} fontSize={{base:"4xl",md:"5xl"}}>
      {children}
    </Heading>
  );
}
