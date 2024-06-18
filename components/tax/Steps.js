import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormErrorMessage,
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
  Text,
  Textarea,
  VStack,
  useSteps,
} from "@chakra-ui/react";
import * as Yup from "yup";
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
import { useEffect, useState } from "react";
import PlaceAutocomplete from "../global/PlaceAutocomplete";
import { usePlacesWidget } from "react-google-autocomplete";
import { useFormik, FieldArray, FormikProvider } from "formik";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
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
  const handelTaxAppeal = async (values) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues: {
      address: "",
      email: "",
      tel: "",
      dateToCall: "",
      timeToCall: "",
      propertType: "",
      externalFactors: "",
      externalFactorsInflucers: "",
      governmentFactors: "",
    },
    validationSchema: Yup.object({
      address: Yup.object()
        // .shape({
        //   value: Yup.string().nullable(),
        //   label: Yup.string(),
        // })
        .nullable()
        .required("Required"),
      email: Yup.string().email().required("Required"),
      tel: Yup.number().required("Required"),
      dateToCall: Yup.string().required("Required"),
      timeToCall: Yup.string().required("Required"),
      propertType: Yup.string().required("Required"),
      externalFactors: Yup.string(),
      externalFactorsInflucers: Yup.string(),
      governmentFactors: Yup.string(),
    }),
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      handelTaxAppeal(values);
    },
  });

  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  const [isStep1Valid, setIsStep1Valid] = useState(false);
  useEffect(() => {
    setIsStep1Valid(
      StepOneValidation.isValidSync({
        address: formik.values.address,
        email: formik.values.email,
        tel: formik.values.tel,
        dateToCall: formik.values.dateToCall,
        timeToCall: formik.values.timeToCall,
      })
    );
  }, [
    formik.values.address,
    formik.values.email,
    formik.values.tel,
    formik.values.dateToCall,
    formik.values.timeToCall,
  ]);

  console.log(formik.values.address);
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
      as={"form"}
      onSubmit={formik.handleSubmit}
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

      {activeStep === 1 && (
        <VStack w={"100%"} h={"full"} justify={"space-between"}>
          <VStack spacing={4}>
            <FormControl
              isRequired
              isInvalid={formik.touched.address && formik.errors.address}
            >
              <FormLabel htmlFor="address">Address</FormLabel>
              <GooglePlacesAutocomplete
                apiKey={process.env.GOOGLE_MAPS_API_KEY}
                apiOptions={{ language: "en", region: "us" }}
                selectProps={{
                  value: formik.values.address,
                  onChange: (v) => {
                    console.log(v);
                    formik.setFieldValue("address", v);
                  },
                  placeholder: "Select location",
                  isClearable:true
                }}
              />
              {/*  <Input
                ref={ref}
                id="address"
                {...formik.getFieldProps("address")}
      />*/}
              <FormErrorMessage>{formik.errors.address}</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={formik.touched.email && formik.errors.email}
            >
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="you@email.com"
                {...formik.getFieldProps("email")}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={formik.touched.tel && formik.errors.tel}
            >
              <FormLabel htmlFor="tel">Tel</FormLabel>
              <Input
                id="tel"
                type="tel"
                placeholder="+15327656"
                {...formik.getFieldProps("tel")}
              />
              <FormErrorMessage>{formik.errors.tel}</FormErrorMessage>
            </FormControl>
            <VStack align={"flex-start"} spacing={0}>
              <FormLabel>
                Best time to call{" "}
                <Text as="span" color={"tomato"}>
                  *
                </Text>{" "}
              </FormLabel>
              <HStack>
                <FormControl
                  isRequired
                  isInvalid={
                    formik.touched.dateToCall && formik.errors.dateToCall
                  }
                >
                  <Input
                    type="date"
                    id="dateToCall"
                    //placeholder="you@email.com"
                    {...formik.getFieldProps("dateToCall")}
                  />
                  <FormErrorMessage>
                    {formik.errors.dateToCall}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  isRequired
                  isInvalid={
                    formik.touched.timeToCall && formik.errors.timeToCall
                  }
                >
                  <Input
                    type="time"
                    id="timeToCall"
                    //placeholder="you@email.com"
                    {...formik.getFieldProps("timeToCall")}
                  />
                  <FormErrorMessage>
                    {formik.errors.timeToCall}
                  </FormErrorMessage>
                </FormControl>
              </HStack>
            </VStack>
          </VStack>
          <HStack w={"full"} flexDir={"row-reverse"}>
            <PrimaryButton
              title={"Next"}
              onClick={() => setActiveStep(activeStep + 1)}
              isDisabled={!isStep1Valid}
            />
          </HStack>
        </VStack>
      )}
      {activeStep === 2 && (
        <VStack w={"100%"} h={"full"} justify={"space-between"}>
          <VStack w={"full"} spacing={4}>
            <FormControl
              isInvalid={
                formik.touched.propertType && formik.errors.propertType
              }
              isRequired
            >
              <FormLabel htmlFor="propertType">Property Type</FormLabel>
              <Select
                placeholder="Select Property Type"
                id="propertType"
                {...formik.getFieldProps("propertType")}
              >
                <option value={"Residential"}>Residential</option>
                <option value={"Commercial"}>Commercial</option>
              </Select>
            </FormControl>
            <FormControl
              isInvalid={
                formik.touched.externalFactors && formik.errors.externalFactors
              }
            >
              <FormLabel htmlFor="externalFactors">External Factors</FormLabel>
              <Textarea
                placeholder="Describe all physical problems with your home that you believe impact your valuation.  Examples:  cracked foundation, old/damaged roof, non-hurricane impact windows/doors, pool leak, lack of updated rooms/kitchen, old HVAC systems, old/copper plumbing, dated electrical, damaged concrete, damaged driveway. "
                noOfLines={3}
                resize={"vertical"}
                id="externalFactors"
                {...formik.getFieldProps("externalFactors")}
              />
              <FormErrorMessage>
                {formik.errors.externalFactors}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={
                formik.touched.externalFactorsInflucers &&
                formik.errors.externalFactorsInflucers
              }
            >
              <FormLabel htmlFor="externalFactorsInflucers">
                External Factors Influencing your Property
              </FormLabel>
              <Textarea
                placeholder="External factors influencing property valuation include location, environmental aspects, zoning laws, and neighborhood quality.  Is the property located close to airports, highway, commercial properties, crime areas. or high traffic areas? "
                noOfLines={3}
                resize={"vertical"}
                id="externalFactorsInflucers"
                {...formik.getFieldProps("externalFactorsInflucers")}
              />
              <FormErrorMessage>
                {formik.errors.externalFactorsInflucers}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={
                formik.touched.governmentFactors &&
                formik.errors.governmentFactors
              }
            >
              <FormLabel htmlFor="governmentFactors">
                Government Factors:
              </FormLabel>
              <Textarea
                placeholder="If applicable, do you currently have code violations, zoning violations, or other administrative matters associated with the property. "
                noOfLines={3}
                id="governmentFactors"
                resize={"vertical"}
                {...formik.getFieldProps("governmentFactors")}
              />
              <FormErrorMessage>
                {formik.errors.governmentFactors}
              </FormErrorMessage>
            </FormControl>
          </VStack>
          <HStack w={"full"} flexDir={"row-reverse"}>
            <PrimaryButton title={"Submit"} type="submit" />
            <PrimaryButton
              title={"Back"}
              onClick={() => setActiveStep(activeStep - 1)}
            />
          </HStack>
        </VStack>
      )}
    </VStack>
  );
}

const StepOneValidation = Yup.object({
  address: Yup.object()
    // .shape({
    //   value: Yup.string().nullable(),
    //   label: Yup.string(),
    // })
    .nullable()
    .required("Required"),
  email: Yup.string().email().required("Required"),
  tel: Yup.number().required("Required"),
  dateToCall: Yup.string().required("Required"),
  timeToCall: Yup.string().required("Required"),
});
