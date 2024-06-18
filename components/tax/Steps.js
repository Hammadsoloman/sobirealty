import {
  Box,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Input,
  Select,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Textarea,
  VStack,
  useSteps,
} from "@chakra-ui/react";
import PrimaryButton from "../global/PrimaryButton";
import Heading2 from "../global/Heading2";
import {
  APIProvider,
  ControlPosition,
  MapControl,
  AdvancedMarker,
  Map,
  useMap,
  useMapsLibrary,
  useAdvancedMarkerRef,
  AdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { useState } from "react";
import PlaceAutocomplete from "../global/PlaceAutocomplete";
import { usePlacesWidget } from "react-google-autocomplete";

const steps = [
  {
    title: "Locate My Property",
    description: "",
  },
  {
    title: "Choose a Report",
    description: "",
  },
];

export default function Steps() {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  const [address, setAddress] = useState(null);

  const { ref } = usePlacesWidget({
    apiKey: process.env.GOOGLE_MAPS_API_KEY,
    onPlaceSelected: (place) => {
      console.log(place);

      // setAddress(place);
    },
  });

  console.log(address);

  const ActiveStepComponent = () => {
    switch (activeStep) {
      case 1:
        return (
          <VStack w={"100%"} h={"full"} justify={"space-between"}>
            <VStack spacing={4} >
              <FormControl isRequired >
                <FormLabel placeholder="Address">Address</FormLabel>
                <Input ref={ref} />{" "}
              </FormControl>
              <FormControl isRequired >
                <FormLabel placeholder="Email">Email</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl isRequired >
                <FormLabel placeholder="Phone number">Tel</FormLabel>
                <Input type="tel" />
              </FormControl>
              <FormControl isRequired >
                <FormLabel>Best time to call </FormLabel>
                <HStack>
                  <Input type="date" />
                  <Input type="time" />
                </HStack>
              </FormControl>
            </VStack>
            <HStack w={"full"} flexDir={"row-reverse"}>
              <PrimaryButton
                title={"Next"}
                onClick={() => setActiveStep(activeStep + 1)}
              />
            </HStack>
          </VStack>
        );
      case 2:
        return (
          <VStack w={"100%"} h={"full"} justify={"space-between"}>
            <VStack w={"full"} spacing={4} >
              <FormControl isRequired >
                <FormLabel>Property Type</FormLabel>
                <Select placeholder="Select Property Type">
                  <option>Residential</option>
                  <option>Commercial</option>
                </Select>
              </FormControl>
              <FormControl isRequired >
                <FormLabel>External Factors</FormLabel>
                <Textarea
                  placeholder="Describe all physical problems with your home that you believe impact your valuation.  Examples:  cracked foundation, old/damaged roof, non-hurricane impact windows/doors, pool leak, lack of updated rooms/kitchen, old HVAC systems, old/copper plumbing, dated electrical, damaged concrete, damaged driveway. "
                  noOfLines={3}
                />
              </FormControl>
              <FormControl isRequired >
                <FormLabel>
                  External Factors Influencing your Property
                </FormLabel>
                <Textarea
                  placeholder="External factors influencing property valuation include location, environmental aspects, zoning laws, and neighborhood quality.  Is the property located close to airports, highway, commercial properties, crime areas. or high traffic areas? "
                  noOfLines={3}
                />
              </FormControl>
              <FormControl isRequired >
                <FormLabel>Government Factors:</FormLabel>
                <Textarea
                  placeholder="If applicable, do you currently have code violations, zoning violations, or other administrative matters associated with the property. "
                  noOfLines={3}
                />
              </FormControl>
            </VStack>
            <HStack w={"full"} flexDir={"row-reverse"}>
              <PrimaryButton
                title={"Submit"}
                //onClick={() => setActiveStep(activeStep - 1)}
              />
              <PrimaryButton
                title={"Back"}
                onClick={() => setActiveStep(activeStep - 1)}
              />
            </HStack>
          </VStack>
        );

      default:
        return <></>;
    }
  };
  return (
    <VStack
      bg={"white"}
      zIndex={1}
      p={10}
      borderRadius={"lg"}
      w={{ base: "90vw", md: 400 }}
      h={650}
      boxShadow={"lg"}
      color="black"
    >
      <Stepper
        index={activeStep}
        // orientation={"vertical"}
        // height="400px"
        //  gap="0"
        colorScheme={"blue"}
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            {/*  <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
          </Box>*/}

            <StepSeparator />
          </Step>
        ))}
      </Stepper>

      <ActiveStepComponent />
    </VStack>
  );
}
