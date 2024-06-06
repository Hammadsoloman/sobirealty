import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Container,
  Box,
  HStack,
  VStack,
} from "@chakra-ui/react";
import Heading2 from "../global/Heading2";

const faqs = [
  { question: "Question", answer: "Answer" },
  { question: "Question", answer: "Answer" },
  { question: "Question", answer: "Answer" },
  { question: "Question", answer: "Answer" },
  { question: "Question", answer: "Answer" },
  { question: "Question", answer: "Answer" },
  { question: "Question", answer: "Answer" },
];
export default function FAQs() {
  return (
    <Container spacing={5} maxW={"8xl"}>
      <Heading2>FAQs</Heading2>
      <Accordion allowToggle my={10} >
        {faqs.map((faq, idx) => (
          <AccordionItem key={idx}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                  {faq.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
