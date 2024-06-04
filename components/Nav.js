import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  HStack,
  List,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Sticky from "react-stickynode";
import { FaSearch } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import { throttle } from "lodash";
import { SlMenu } from "react-icons/sl";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Background from "@/public/assets/bg1.png";
export default function Nav() {
  const router = useRouter();
  const BreakpointValue = useBreakpointValue(
    {
      base: "base",
      lg: "lg",
    },
    {
      // Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
      // (Defaults to 'base')
      fallback: "lg",
    }
  );
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isEnabled, setIsEnabled] = useState(true);
  useEffect(() => {
    console.log(router);
    if (router.pathname === "/home-search") {
      setIsEnabled(false);
    } else {
      setIsEnabled(true);
    }
  }, [router]);
  const [isSticky, setIsSticky] = useState(false);
  const handelScroll = (e) => {
    if (window.scrollY < 50) {
      setIsSticky(false);
    } else {
      setIsSticky(true);
    }
  };
  const throttledHandelScroll = useMemo(
    () =>
      throttle(handelScroll, 200, {
        leading: true,
        trailing: true,
      }),
    []
  );
  useEffect(() => {
    document.addEventListener("scroll", throttledHandelScroll);
    return () => {
      document.removeEventListener("scroll", throttledHandelScroll);
      throttledHandelScroll.cancel();
    };
  }, [throttledHandelScroll]);
  return (
    <>
      {isEnabled ? (
        <Box pos={"absolute"} top={0} left={0} w={"98.9vw"} overflow={"hidden"}>
          <Sticky
            enabled={true}
            top={isSticky || !isCollapsed ? 30 : 80}
            innerZ={2}
            innerActiveClass={"stickyElem"}
          >
            <Box
              h={isCollapsed ? "5rem" : "90vh"}
              px={16}
              py={isSticky || !isCollapsed ? 4 : 0}
              fontWeight={"bold"}
              color={isSticky || !isCollapsed ? "black" : "white"}
              w={isSticky ? "95vw" : "full"}
              bg={isSticky || !isCollapsed ? "white" : "transparent"}
              borderRadius={"50px"}
              mx={"auto"}
              boxShadow={isSticky ? "lg" : "none"}
              overflow={"hidden"}
            >
              <HStack as="nav" justify={"space-between"} align={"flex-start"}>
                <Text fontSize={"3xl"}>SOBIREALTY</Text>
                <HStack spacing={5}>
                  {isCollapsed && BreakpointValue==="lg" && (
                    <>
                      <Link href={"/buy"}>Buy</Link>
                      <Link href={"/sell"}>Sell</Link>
                      <Link href={"/become-an-agent"}>Join Us</Link>
                    </>
                  )}
                  <Link href={"/"}>1-8777-SOBIREALTY</Link>
                  <Button
                    as={Link}
                    href={"/home-search"}
                    rounded="3xl"
                    rightIcon={<FaSearch />}
                    colorScheme={isSticky ? "blue" : "gray"}
                  >
                    Find a Home
                  </Button>
                  <Button
                    rounded="3xl"
                    rightIcon={isCollapsed ? <SlMenu /> : <MdClose />}
                    variant={"outline"}
                    color={isSticky || !isCollapsed ? "black" : "white"}
                    _hover={{
                      color: isSticky || !isCollapsed ? "black" : "white",
                    }}
                    onClick={() => setIsCollapsed(!isCollapsed)}
                  >
                    {isCollapsed ? "Menu" : ""}
                  </Button>
                </HStack>
              </HStack>
              {!isCollapsed && (
                <SimpleGrid columns={2}>
                  <Box pr={16}>
                    <Image src={Background} alt="" />
                  </Box>
                  <VStack
                    justify={"center"}
                    align={"flex-start"}
                    pl={20}
                    fontSize={"5xl"}
                  >
                    <Link href={"/buy"}>Buy</Link>
                    <Link href={"/sell"}>Sell</Link>
                    <Link href={"/become-an-agent"}>Join Us</Link>
                    <Link href={"/#contact-us"}>Contact Us</Link>
                  </VStack>
                </SimpleGrid>
              )}
            </Box>
          </Sticky>
        </Box>
      ) : (
        <HStack
          as="nav"
          justify={"space-between"}
          px={16}
          py={4}
          fontWeight={"bold"}
          color={"black"}
          w={"full"}
          bg={"transparent"}
          borderRadius={"50px"}
          mx={"auto"}
          boxShadow={"none"}
        >
          <Text fontSize={"3xl"}>SOBIREALTY</Text>
          <HStack spacing={5}>
            <Link href={"/buy"}>Buy</Link>
            <Link href={"/sell"}>Sell</Link>
            <Link href={"/become-an-agent"}>Join Us</Link>
            <Link href={"/"}>1-8777-SOBIREALTY</Link>
            <Button
              as={Link}
              href={"/home-search"}
              rounded="3xl"
              rightIcon={<FaSearch />}
              colorScheme={"blue"}
            >
              Find a Home
            </Button>
            <Button
              rounded="3xl"
              rightIcon={<SlMenu />}
              variant={"outline"}
              color={"black"}
              _hover={"black"}
            >
              Menu
            </Button>
          </HStack>
        </HStack>
      )}
    </>
  );
}
