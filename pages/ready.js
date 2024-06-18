import {
  Box,
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
import Heading2 from "@/components/global/Heading2";
import Paragraph from "@/components/global/Paragraph";
import PrimaryButton from "@/components/global/PrimaryButton";

export default function Ready() {
  return (
    <Box as="main" bg={"#00A3EE"}>
      <Container as={"section"} maxW={"4xl"} py={32}>
        <Heading2>Are you SOBIREALTY. ready?</Heading2>
        <Paragraph color={"white"}>
          If you're interested in joining the greatest real estate brokerage in
          the history of the world, fill out the form below so we can get back
          in touch with you.
        </Paragraph>

        <VStack
          as={"form"}
          spacing={5}
          p={20}
          bg={"white"}
          borderRadius={"lg"}
          mt={10}
        >
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
            <FormLabel>Region You're Interested in Joining</FormLabel>
            <Select placeholder="Select option">
              <option>Miami</option>
              <option>Miami</option>
              <option>Miami</option>
              <option>Miami</option>
              <option>Miami</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Tell Us Why You Want to Be Here</FormLabel>
            <Textarea placeholder="" noOfLines={5} />
          </FormControl>
          <PrimaryButton title={"Submit"} />
        </VStack>
      </Container>
    </Box>
  );
}
