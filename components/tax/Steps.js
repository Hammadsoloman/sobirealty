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

const steps = [
  {
    title: "Locate My Property",
    description: "",
  },
  {
    title: "Choose a Report",
    description: "",
  },
  {
    title: "Submit your appeal",
    description: "",
  },
];

export default function Steps() {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  const ActiveStepComponent = () => {
    switch (activeStep) {
      case 1:
        return (
          <VStack w={"100%"} h={"full"} justify={"space-between"}>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input />
            </FormControl>
            <HStack w={"full"} flexDir={"row-reverse"}>
              {/*<PrimaryButton
                title={"Back"}
                onClick={() => setActiveStep(activeStep - 1)}
        />*/}
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
            <Box w={"full"}>
              <FormControl>
                <FormLabel>Property Type</FormLabel>
                <Select placeholder="Select Property Type">
                  <option>Residential</option>
                  <option>Commercial</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>External Factors</FormLabel>
                <Textarea
                  placeholder="Describe all physical problems with your home that you believe impact your valuation.  Examples:  cracked foundation, old/damaged roof, non-hurricane impact windows/doors, pool leak, lack of updated rooms/kitchen, old HVAC systems, old/copper plumbing, dated electrical, damaged concrete, damaged driveway. "
                  noOfLines={3}
                />
              </FormControl>
              <FormControl>
                <FormLabel>
                  External Factors Influencing your Property
                </FormLabel>
                <Textarea
                  placeholder="External factors influencing property valuation include location, environmental aspects, zoning laws, and neighborhood quality.  Is the property located close to airports, highway, commercial properties, crime areas. or high traffic areas? "
                  noOfLines={3}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Government Factors:</FormLabel>
                <Textarea
                  placeholder="If applicable, do you currently have code violations, zoning violations, or other administrative matters associated with the property. "
                  noOfLines={3}
                />
              </FormControl>
            </Box>
            <HStack w={"full"} flexDir={"row-reverse"}>
              <PrimaryButton
                title={"Next"}
                onClick={() => setActiveStep(activeStep + 1)}
              />
              <PrimaryButton
                title={"Back"}
                onClick={() => setActiveStep(activeStep - 1)}
              />
            </HStack>
          </VStack>
        );
      case 3:
        return (
          <VStack w={"100%"} h={"full"} justify={"space-between"}>
            <Box w={"full"}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl>
                <FormLabel>Tel</FormLabel>
                <Input type="tel" />
              </FormControl>
              <FormControl>
                <FormLabel>Best time to call </FormLabel>
                <Input type="date" />
              </FormControl>
            </Box>
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
      w={{base:'90vw',md: 400}}
      h={600}
      boxShadow={"lg"}
      color="brand.black"
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
