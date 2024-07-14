import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Image,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    flatNumber: "",
    buildingNumber: "",
    city: "",
    zip: "",
    supurbName: "",
    country: "",
    surname: "",
    firstName: "",
    middleName: "",
    dob: "",
    passportIssueCountry: "",
    passportNumber: "",
    placeOfBirth: "",
    isPortuguese: "",
    portugueseNationality: "",
    documentType: "",
    needBankAccount: "",
    document: null,
  });

  const handleFileChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      document: e.target.files[0],
    }));
  };

  const handleChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const submitForm = async () => {
    const data = new FormData();
    debugger;
    for (const key in formData) {
      if (formData.hasOwnProperty(key) && key !== "document") {
        data.append(key, formData[key]);
      }
    }

    // Append the image file to the FormData object
    if (formData.document) {
      data.append("document", formData.document);
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/payment/create-checkout-session",
        data
      );

      // if (response.ok) {
      const result = await response.data;
      console.log("Success:", result);

      // Assuming the Stripe intent URL is in result.stripeIntentUrl
      const stripeIntentUrl = result.url;

      if (stripeIntentUrl) {
        // Open the Stripe intent URL in a new tab/window
        window.open(stripeIntentUrl, "_blank");
      } else {
        console.error("Stripe intent URL not found in response");
      }

      // } else {
      //   console.error('Error:', response.statusText);
      //   // Handle error
      // }
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  return (
    <Box
      bgGradient="linear(to-r, purple.400, blue.400)"
      p={6}
      rounded="lg"
      maxW="2xl"
      mx="auto"
    >
      <Heading as="h2" size="lg" color="purple.900">
        Applicants Information
      </Heading>
      <Text fontSize="sm" color="gray.700" mb={4}>
        In case of minor please provide parents or legal guardians information
      </Text>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4} mb={4}>
        <Input
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <Flex align="center" spaceX={2}>
          <Image src="https://placehold.co/20x20" alt="flag" boxSize="20px" />
          <Input
            placeholder="+351 - Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </Flex>
        <Input
          placeholder="Flat Number"
          name="flatNumber"
          value={formData.flatNumber}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <Input
          placeholder="Building Number"
          name="buildingNumber"
          value={formData.buildingNumber}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <Input
          placeholder="City Name"
          name="city"
          value={formData.city}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <Input
          placeholder="Zip / Postal Code"
          name="zip"
          value={formData.zip}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <Input
          placeholder="Suburb Name"
          name="supurbName"
          value={formData.supurbName}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <Input
          placeholder="Country"
          name="country"
          value={formData.country}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </Grid>

      <Heading as="h2" size="lg" color="purple.900">
        Applicants Passport Information
      </Heading>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4} mb={4}>
        <Input
          placeholder="Surname"
          name="surname"
          value={formData.surname}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />

        <Input
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />

        <Input
          placeholder="Middle Name"
          name="middleName"
          value={formData.middleName}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />

        <Input
          placeholder="mm/dd/yyyy"
          name="dob"
          value={formData.dob}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />

        <Input
          placeholder="Passport Issuing Country"
          name="passportIssueCountry"
          value={formData.passportIssueCountry}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />

        <Input
          placeholder="Passport Number"
          name="passportNumber"
          value={formData.passportNumber}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />

        <Input
          placeholder="Place Of Birth"
          name="placeOfBirth"
          value={formData.placeOfBirth}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </Grid>

      <Box mb={4}>
        <Text>Were you born in Portugal?</Text>
        <RadioGroup name="born_in_portugal">
          <Stack direction="row">
            <Radio
              name="isPortuguese"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              value="true"
            >
              Yes
            </Radio>
            <Radio
              name="isPortuguese"
              value="false"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            >
              No
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>

      <Box mb={4}>
        <Text>Do you hold Portuguese nationality?</Text>
        <RadioGroup name="portuguese_nationality">
          <Stack direction="row">
            <Radio
              name="portugueseNationality"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              value="true"
            >
              Yes
            </Radio>
            <Radio
              name="portugueseNationality"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              value="false"
            >
              No
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>

      <FormControl mb={4}>
        <FormLabel>Upload Document</FormLabel>
        <Input type="file" name="document" onChange={handleFileChange} />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Selection</FormLabel>
        <Select
          onChange={(e) => handleChange("documentType", e.target.value)}
          placeholder="----------------Select----------------"
        >
          <option value="aik">AIK</option>
          <option value="do">Do</option>
          <option value="teen">Teen</option>
        </Select>
      </FormControl>

      <FormControl mb={4}>
        <Checkbox>
          I have read, understood, and agree to the{" "}
          <Text as="a" color="blue.500" href="#">
            Terms and Conditions
          </Text>
          .
        </Checkbox>
      </FormControl>

      <FormControl mb={4}>
        <Checkbox>
          I hereby declare that this is the first registration I have done for
          the purpose of obtaining a Personal Number and that the statements,
          documents, and signatures expressed in it correspond to the truth
          without any omission in relation to them.
        </Checkbox>
      </FormControl>

      <Box mb={4}>
        <Text>Do you need a bank account also?</Text>
        <RadioGroup name="bank_account">
          <Stack direction="row">
            <Radio
              name="needBankAccount"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              value="true"
            >
              Yes
            </Radio>
            <Radio
              name="needBankAccount"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              value="false"
            >
              No
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>

      <Box mb={4}>
        <div className="g-recaptcha" data-sitekey="your_site_key"></div>
      </Box>

      <Button colorScheme="blue" w="full" onClick={() => submitForm()}>
        Pay Now
      </Button>
    </Box>
  );
};

export default OrderForm;
