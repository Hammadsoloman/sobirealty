import { Heading } from "@chakra-ui/react";

export default function Heading3({ children,isCentred }) {
  return (
    <Heading as={"h3"} color={"brand.primary"} textAlign={isCentred?"center":"left"} fontSize={{base:"3xl",md:"4xl"}}>
      {children}
    </Heading>
  );
}
