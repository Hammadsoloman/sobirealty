import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import PrimaryButton from "../global/PrimaryButton";
import { useFormik, FieldArray, FormikProvider } from "formik";
import * as Yup from "yup";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { useState } from "react";
export default function ContactUs({defaultTopic=""}) {
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      tel: "",
      topic: defaultTopic,
      address: "",
      message: "",
      acceptance: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email().required("Required"),
      tel: Yup.number().required("Required"),
      topic: Yup.string().required("Required"),
      address: Yup.object().nullable().required("Required"),
      message: Yup.string().required("Required"),
      acceptance: Yup.bool()
        .oneOf([true], "You must accept the terms and conditions")
        .required(),
    }),
    onSubmit: (values, { resetForm }) => {
      //alert(JSON.stringify(values, null, 2));
      handelSubmitMessage(values,resetForm);
    },
  });

  const [loading, setLoading] = useState();
  const handelSubmitMessage = async (values, resetForm) => {
    setLoading(true);
    try {
      const response = await fetch("/api/contact/getintouch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: { ...values },
        }),
      });
      if (response.status === 200) {
        toast({
          description: "Message sent successfully!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        resetForm();
      } else {
        toast({
          description: "Something went wrong, Please refresh and try again!",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (err) {
      toast({
        description: "Something went wrong, Please refresh and try again!",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SimpleGrid
      id="contact-us"
      as={"section"}
      columns={{ base: 1, md: 2 }}
      p={{ base: 4, md: 24 }}
      bg={"#00A3EE"}
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
        p={{ base: 4, md: 20 }}
        spacing={10}
        color={"black"}
        maxW={700}
        onSubmit={formik.handleSubmit}
      >
        <FormControl
          isRequired
          isInvalid={formik.touched.name && formik.errors.name}
        >
          <Input
            id="name"
            placeholder="Name *"
            {...formik.getFieldProps("name")}
          />
          <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={formik.touched.email && formik.errors.email}
        >
          <Input
            id="email"
            placeholder="Email *"
            type="email"
            {...formik.getFieldProps("email")}
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={formik.touched.tel && formik.errors.tel}
        >
          <Input
            id="tel"
            placeholder="Phone *"
            type="tel"
            {...formik.getFieldProps("tel")}
          />
          <FormErrorMessage>{formik.errors.tel}</FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={formik.touched.topic && formik.errors.topic}
          isRequired
        >
          <Select
            placeholder="Select a Topic"
            id="topic"
            {...formik.getFieldProps("topic")}
          >
            <option value={"Buying"}>Buying</option>
            <option value={"Selling"}>Selling</option>
            {/*  <option>Joining the company</option>*/}
          </Select>
          <FormErrorMessage>{formik.errors.topic}</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={formik.touched.address && formik.errors.address}
        >
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
              isClearable: true,
            }}
          />
          <FormErrorMessage>{formik.errors.address}</FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={formik.touched.message && formik.errors.message}
        >
          <Textarea
            placeholder="Your Message *"
            noOfLines={4}
            resize={"vertical"}
            id="message"
            {...formik.getFieldProps("message")}
          />
          <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={formik.touched.acceptance && formik.errors.acceptance}
        >
          <Checkbox
            id="acceptance"
            name="acceptance"
            colorScheme="green"
            isChecked={formik.values.acceptance}
            onChange={formik.handleChange}
          >
            By providing SOBIREALTY. your contact information, you acknowledge
            and agree to our Privacy Policy and consent to receiving marketing
            communications, including through automated calls, texts, and
            emails, some of which may use artificial or prerecorded voices. This
            consent isn’t necessary for purchasing any products or services and
            you may opt out at any time. To opt out from texts, you can reply,
            ‘stop’ at any time. To opt out from emails, you can click on the
            unsubscribe link in the emails. Message and data rates may apply.
          </Checkbox>
          <FormErrorMessage> {formik.errors.acceptance}</FormErrorMessage>
        </FormControl>
        <PrimaryButton title={"Contact Us"} isLoading={loading} type="submit" />
      </VStack>
    </SimpleGrid>
  );
}
