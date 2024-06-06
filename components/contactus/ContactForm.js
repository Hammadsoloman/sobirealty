import {
  Container,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Heading2 from "../global/Heading2";
import Paragraph from "../global/Paragraph";

export default function ContactForm() {
  return (
    <Container as={"section"} maxW={"8xl"} py={10} >
      <Paragraph>PROPERTY TAX REDUCTION</Paragraph>
      <Heading2>Get In Touch</Heading2>
      <Paragraph>We’d love to hear from you. Contact us below:</Paragraph>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
        <VStack as={"form"} spacing={5} >
          <FormControl>
            <FormLabel>Property Type</FormLabel>
            <Select placeholder="Select inquiry reason">
              <option>Buy a House</option>
              <option>Sell a House</option>
              <option>Reduce my Property Taxes</option>
              <option>Appoint a Realtor Ad Litem</option>
              <option>Not sure, please call me</option>
            </Select>
          </FormControl>
          <HStack w={"full"} >
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input  />
            </FormControl>{" "}
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input />
            </FormControl>
          </HStack>
          <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl>
              <FormLabel>Tel</FormLabel>
              <Input type="tel" />
            </FormControl>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea
                placeholder=""
                noOfLines={5}
              />
            </FormControl>
        </VStack>
        <VStack align={"flex-start"}>
          <Heading as={"h3"} fontSize={"lg"} >Property Tax Reduction</Heading>
          <Paragraph>Florida State Wide Appeals.</Paragraph>
          <Paragraph>We service all counties</Paragraph>
          <Divider my={4} />
        </VStack>
      </SimpleGrid>
    </Container>
  );
}
