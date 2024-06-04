import {
  Box,
  Button,
  Checkbox,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Textarea,
  VStack,
} from "@chakra-ui/react";

export default function ContactUs() {
  return (
    <SimpleGrid
    id="contact-us"
      as={"section"}
      p={24}
      columns={2}
      bg={"#131176"}
      color={"white"}
    >
      <VStack justify={"center"}>
        <Heading as={"h2"} fontSize={"6xl"}>
          Get in Touch
        </Heading>
      </VStack>
      <VStack
        as={"form"}
        bg={"white"}
        borderRadius={"lg"}
        p={20}
        spacing={10}
        color={"black"}
        maxW={700}
      >
        <Input placeholder="Name *" size={"lg"} />
        <Input placeholder="Email *" type="email" size={"lg"} />
        <Input placeholder="Phone *" type="tel" size={"lg"} />
        <Select placeholder="Select a Topic">
          <option>Buying</option>
          <option>Selling</option>
          <option>Joining the company</option>
        </Select>
        <Textarea placeholder="Your Message *" noOfLines={4} />
        <Checkbox>
          By providing SERHANT. your contact information, you acknowledge and
          agree to our Privacy Policy and consent to receiving marketing
          communications, including through automated calls, texts, and emails,
          some of which may use artificial or prerecorded voices. This consent
          isn’t necessary for purchasing any products or services and you may
          opt out at any time. To opt out from texts, you can reply, ‘stop’ at
          any time. To opt out from emails, you can click on the unsubscribe
          link in the emails. Message and data rates may apply.
        </Checkbox>
        <Button
          type="submit"
          colorScheme={"blue"}
          borderRadius={"3xl"}
          size={"lg"}
          mt={5}
        >
          Submit
        </Button>
      </VStack>
    </SimpleGrid>
  );
}
