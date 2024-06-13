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
import PrimaryButton from "../global/PrimaryButton";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

export default function ContactForm() {
  return (
    <Container as={"section"} maxW={"6xl"} py={10}>
      <Paragraph>PROPERTY TAX REDUCTION</Paragraph>
      <Heading2>Get In Touch</Heading2>
      <Paragraph>We’d love to hear from you. Contact us below:</Paragraph>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
        <VStack as={"form"} spacing={5}>
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
          <HStack w={"full"}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input />
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
            <Textarea placeholder="" noOfLines={5} />
          </FormControl>
          <PrimaryButton title={"Submit"} />
        </VStack>
        <VStack align={"flex-start"}>
          <Heading as={"h3"} fontSize={"lg"}>
            Property Tax Reduction
          </Heading>
          <Paragraph>Florida State Wide Appeals.</Paragraph>
          <Paragraph>We service all counties</Paragraph>
          <Divider my={4} />
          {/*  <APIProvider apiKey={process.env.GOOGLE_MAPS_API_KEY}>
            <Map
              style={{ width: "100%", height: "100%" }}
              defaultCenter={{ lat: 27.6648, lng: 81.5158 }}
              defaultZoom={7}
              gestureHandling={"greedy"}
              disableDefaultUI={true}
              
            />
  </APIProvider>*/}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28823.451101634088!2d-80.48742396386072!3d25.440557311850768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9e0cb35a8cf39%3A0xf7bdead0fe918320!2sFlorida%20City%2C%20FL%2C%20USA!5e0!3m2!1sen!2sdz!4v1718306769510!5m2!1sen!2sdz"
            width="100%"
            height="100%"
            style={{border:0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </VStack>
      </SimpleGrid>
    </Container>
  );
}
