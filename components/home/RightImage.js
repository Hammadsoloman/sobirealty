import {
  AspectRatio,
  Box,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Paragraph from "../global/Paragraph";
import Image from "next/image";
import { motion } from "framer-motion";
import Blob from "../global/Blob";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube } from "swiper";
import "swiper/css";
import "swiper/css/effect-cube";
import Heading2 from "../global/Heading2";
export default function RightImage() {
  return (
    <Box
      as={"section"}
      w={"full"}
      pt={{ base: 10, md: 20 }}
      bg={"blue.50"}
      overflow={"hidden"}
      borderTopRadius={{ base: "10px", md: "50px" }}
      pos={"relative"}
      top={{ base: "-25px", md: "-90px" }}
    >
      <Container maxW={"7xl"} py={{ base: 10, md: 20 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={20}>
          <VStack
            spacing={10}
            as={motion.div}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2,
              },
            }}
            viewport={{ amount: 0.5, once: true }}
            align={"flex-start"}
          >
            <Heading2>Welcome to Sobi Realty,</Heading2>
            <Paragraph>
              a premier boutique real estate brokerage firm dedicated to
              providing exceptional service and personalized solutions for all
              your real estate needs. With a wealth of knowledge and expertise
              in the industry, our team of experienced professionals is
              committed to helping you navigate the dynamic world of real estate
              with confidence and ease.
            </Paragraph>
            <Paragraph>
              At Sobi Realty, we understand that buying or selling a property is
              more than just a transaction; it&apos;s a significant milestone in
              your life. That&apos;s why we take the time to truly understand
              your goals, preferences, and unique circumstances, tailoring our
              approach to suit your individual requirements. Whether you&apos;re
              a first-time homebuyer, an investor, or a seasoned seller, we
              offer comprehensive services that cater to all aspects of
              residential and commercial real estate.
            </Paragraph>
          </VStack>
          <VStack
            justify={"center"}
            p={4}
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1,
              },
            }}
            viewport={{ once: true, amount: 0 }}
          >
            <Swiper
              effect={"cube"}
              cubeEffect={{
                shadow: false,
                slideShadows: false,
              }}
              modules={[Autoplay, EffectCube]}
              spaceBetween={0}
              slidesPerView={1}
              //  onActiveIndexChange={(swiper) => setCurrentIndex(swiper.realIndex)}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              speed={1500}
              style={{
                maxWidth: "100%",
                alignSelf: "center",
              }}
            >
              <SwiperSlide>
                <Image
                  src="/assets/home/real_estate_1.jpg"
                  alt=""
                  width={640}
                  height={427}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/assets/home/real_estate_2.jpg"
                  alt=""
                  width={640}
                  height={427}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/assets/home/real_estate_3.jpg"
                  alt=""
                  width={640}
                  height={427}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/assets/home/real_estate_4.jpg"
                  alt="school"
                  width={640}
                  height={427}
                />
              </SwiperSlide>
            </Swiper>
          </VStack>
          {/*    <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
            as={motion.div}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2,
              },
            }}
            viewport={{ amount: 0.5, once: true }}
          >
            <Blob
              w={"120%"}
              h={"120%"}
              position={"absolute"}
              top={"-10%"}
              left={-10}
              zIndex={0}
              color="#ffe1e1"
            />
            <HStack
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
              maxW={600}
              justify={"center"}
              align={"center"}
              zIndex={1}
            >
              <Image
                src={"/assets/court.jpg"}
                alt=""
                width={600}
                height={500}
              />
            </HStack>
          </Flex>*/}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
