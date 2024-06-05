import properties from "@/data/properties";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  ButtonGroup,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import Heading2 from "../global/Heading2";
import { LuCode } from "react-icons/lu";

import Link from "next/link";
import { FaFilter } from "react-icons/fa";
import { useRef } from "react";
import { Beds, Baths } from "@/lib/filters";
import OutlineButton from "../global/OutlineButton";

export default function AllProperties() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Box as={"section"} p={{ base: 4, md: 24 }}>
      <HStack justify={"space-between"}>
        <Heading2>Featured Properties</Heading2>

        <OutlineButton title={"Filters"} icon={<FaFilter />} onClick={onOpen} />
      </HStack>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={{ base: 4, md: 10 }}
        mt={{ base: 4, md: 20 }}
      >
        {properties
          .filter((property) => property.isFeatured)
          .map((property, idx) => (
            <Link key={idx} href={"/"}>
              <Box>
                <Box pos={"relative"} borderRadius={"md"} overflow={"hidden"}>
                  <Image
                    src={property.image}
                    alt={property.address}
                    width={500}
                    height={400}
                    className="zoom"
                  />
                  <Text
                    as={"span"}
                    bg={"gray.100"}
                    pos={"absolute"}
                    top={3}
                    left={4}
                    borderRadius={"md"}
                    py={1}
                    px={2}
                    fontWeight={"bold"}
                    color={"black"}
                    fontSize={"sm"}
                  >
                    FOR SALE
                  </Text>
                  <Text
                    as={"span"}
                    bg={"black"}
                    pos={"absolute"}
                    bottom={0}
                    left={0}
                    color={"white"}
                    py={2}
                    pl={2}
                    pr={6}
                    borderRadius={"0.5rem 100px 0 0"}
                  >
                    SOBIREALTY, Signature
                  </Text>
                </Box>
                <Text fontWeight={"bold"} mt={2}>
                  ${property.price.toLocaleString()}{" "}
                </Text>
                <Text noOfLines={2}>{property.address} </Text>
              </Box>
            </Link>
          ))}
      </SimpleGrid>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filters</DrawerHeader>

          <DrawerBody>
            <Heading as={"h4"}>Filter By Features</Heading>
            <Text>Beds</Text>
            <ButtonGroup size="sm" isAttached variant="outline">
              {Beds.map((item, idx) => (
                <Button key={idx}>{item}</Button>
              ))}
            </ButtonGroup>
            <Text>Baths</Text>
            <ButtonGroup size="sm" isAttached variant="outline">
              {Baths.map((item, idx) => (
                <Button key={idx}>{item}</Button>
              ))}
            </ButtonGroup>
            <RangeSlider aria-label={["min", "max"]} defaultValue={[30, 80]}>
              <RangeSliderTrack bg="red.100">
                <RangeSliderFilledTrack bg="tomato" />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={6} index={0}>
                <Box color="tomato" as={LuCode} />
              </RangeSliderThumb>
              <RangeSliderThumb boxSize={6} index={1}>
                <Box color="tomato" as={LuCode} />
              </RangeSliderThumb>
            </RangeSlider>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Reset Filters
            </Button>
            <Button colorScheme="blue">Filter</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
