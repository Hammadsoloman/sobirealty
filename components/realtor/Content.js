import {
  Box,
  Container,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import Heading2 from "../global/Heading2";
import Paragraph from "../global/Paragraph";

export default function Content() {
  return (
    <Container maxW={"full"} bg={"gray.100"}>
      <Box as="section"  maxW={"6xl"} mx={"auto"} >
        <Heading2 isCentred>WHAT IS A REALTOR AD LITEM?</Heading2>
        <Paragraph>
          A Realtor Ad Litem, also known as a &quot;Realtor Special Magistrate&quot; is a
          licensed real estate broker appointed by the court to list, complete
          and finalize the sale of real estate. The role of a Realtor Ad Litem
          is commonly utilized in family court cases, but it can also be
          effectively employed in probate/contested estate matters, either
          through mutual agreement by parties or selection by a judicial
          officer.{" "}
        </Paragraph>
        <Text>Types of Proceedings:</Text>
        <UnorderedList>
          <ListItem>Divorce Proceedings</ListItem>
          <ListItem>Civil Litigation </ListItem>
          <ListItem>Partition Actions</ListItem>
          <ListItem>Bankruptcy Proceedings</ListItem>
          <ListItem>Probate Proceedings</ListItem>
        </UnorderedList>
      </Box>
    </Container>
  );
}
