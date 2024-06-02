import { Box, Button, HStack, Input, Select, SimpleGrid, Text } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";
import properties from "@/data/properties";
import Link from "next/link";
import Image from "next/image";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function HomeSearch() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <Box as="main">
      <HStack spacing={4} p={4} >
        <Input placeholder="Address, City, Neighborhood, Zip Code" />
        <Select placeholder="Any Price">
          <option>13266</option>
        </Select>{" "}
        <Select >
          <option>0+ Beds</option>
        </Select>{" "}
        <Select >
          <option>0+ Baths</option>
        </Select>{" "}
        <Select placeholder="Any Property Type">
          <option>13266</option>
        </Select>{" "}
      
      </HStack>
      <SimpleGrid columns={2}>
        <SimpleGrid columns={2} spacing={10} height={"80vh"} overflow={"auto"}>
          {properties.map((property, idx) => (
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
        <Box w={"100%"} height={"80vh"}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
