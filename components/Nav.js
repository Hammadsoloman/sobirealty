import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  HStack,
  IconButton,
  List,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  VStack,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import Sticky from "react-stickynode";
import { FaSearch } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { BiSolidDownArrow } from "react-icons/bi";


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

  const Main = ({ notSticky }) => {
    return (
      <Box
        h={isCollapsed ? "5rem" : "90vh"}
        px={{ base: 2, md: 16 }}
        py={notSticky ? 4 : isSticky || !isCollapsed ? 4 : 0}
        fontWeight={"bold"}
        color={
          notSticky ? "black" : isSticky || !isCollapsed ? "black" : "white"
        }
        w={isSticky ? "95vw" : "full"}
        bg={isSticky || !isCollapsed ? "white" : "transparent"}
        borderRadius={{ base: "20px", md: "50px" }}
        mx={"auto"}
        boxShadow={isSticky ? "lg" : "none"}
        overflow={"hidden"}
      >
        <HStack as="nav" justify={"space-between"} align={"flex-start"}>
          <Link href={"/"}>
            <Image
              src={"/assets/logo.svg"}
              width={80}
              height={200}
              alt="SOBIREALTY"
            />
          </Link>
          <HStack spacing={5}>
            {isCollapsed && BreakpointValue === "lg" && (
              <>
                <Link href={"/buy"}>Buy</Link>
                <Link href={"/sell"}>Sell</Link>

                <Menu flip={false}>
                  <MenuButton
                    as={Button}
                    rightIcon={<BiSolidDownArrow />}
                    variant={"unstyled"}
                  >
                    Agent
                  </MenuButton>
                  <MenuList>
                    <MenuItem
                      as={Link}
                      href={"/become-an-agent"}
                      color={"black"}
                    >
                      Join Us
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Link href={"/realtor-ad-litem"}>Realtor Ad Litem</Link>
                <Link href={"/property-tax-appeal"}>Property Tax Appeal</Link>
              </>
            )}
            <Link href={"/"}>1-8777-SOBIREALTY</Link>
            <Button
              as={Link}
              href={"/home-search"}
              rounded="3xl"
              rightIcon={<FaSearch />}
              //colorScheme={isSticky ? "blue" : "gray"}
              border={"none"}
              style={{ textDecoration: "none" }}
              color={"white"}
              bg={"brand.primary"}
              _hover={{
                bg: "brand.secondary",
              }}
              display={{ base: "none", md: "flex" }}
            >
              Find a Home
            </Button>
            <IconButton
              aria-label="Find a Home"
              icon={<FaSearch />}
              as={Link}
              border={"none"}
              style={{ textDecoration: "none" }}
              color={"white"}
              bg={"brand.primary"}
              _hover={{
                bg: "brand.secondary",
              }}
              href={"/home-search"}
              display={{ base: "flex", md: "none" }}
              isRound
            />
            {isCollapsed ? (
              <Button
                rounded="3xl"
                rightIcon={isCollapsed ? <SlMenu /> : <MdClose />}
                variant={"outline"}
                color={"brand.primary"}
                borderColor={"brand.primary"}
                _hover={{
                  color: "brand.secondary",
                  borderColor: "brand.secondary",
                }}
                onClick={() => setIsCollapsed(!isCollapsed)}
                display={{ base: "none", md: "flex" }}
              >
                Menu
              </Button>
            ) : (
              <IconButton
                aria-label="Menu"
                icon={isCollapsed ? <SlMenu /> : <MdClose />}
                variant={"outline"}
                color={"brand.primary"}
                borderColor={"brand.primary"}
                _hover={{
                  color: "brand.secondary",
                  borderColor: "brand.secondary",
                }}
                onClick={() => setIsCollapsed(!isCollapsed)}
                display={{ base: "none", md: "flex" }}
                isRound
              />
            )}

            <IconButton
              aria-label="Menu"
              icon={isCollapsed ? <SlMenu /> : <MdClose />}
              variant={"outline"}
              color={"brand.primary"}
              borderColor={"brand.primary"}
              _hover={{
                color: "brand.secondary",
                borderColor: "brand.secondary",
              }}
              onClick={() => setIsCollapsed(!isCollapsed)}
              display={{ base: "flex", md: "none" }}
              isRound
            />
          </HStack>
        </HStack>
        {!isCollapsed && (
          <SimpleGrid columns={2}>
            <Box pr={{ base: 2, md: 16 }}>
              <Image src={Background} alt="" />
            </Box>
            <VStack
              justify={"center"}
              align={"flex-start"}
              pl={{ base: 2, md: 20 }}
              fontSize={{ base: "3xl", md: "5xl" }}
            >
              <Link href={"/buy"}>Buy</Link>
              <Link href={"/sell"}>Sell</Link>
              <Link href={"/become-an-agent"}>Join Us</Link>
              <Link href={"/realtor-ad-litem"}>Realtor Ad Litem</Link>
                <Link href={"/property-tax-appeal"}>Property Tax Appeal</Link>
              <Link href={"/#contact-us"}>Contact Us</Link>
            </VStack>
          </SimpleGrid>
        )}
      </Box>
    );
  };
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
            <Main />
          </Sticky>
        </Box>
      ) : (
        <Main notSticky />
      )}
    </>
  );
}
