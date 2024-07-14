import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Grid,
  Heading,
  Input,
  Link,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  VStack,
  Flex,
  UnorderedList,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import PaymentSuccesAlert from "./PaymentSuccess";

const SectionHeading = ({ children, ...props }) => (
  <Heading
    as="h2"
  fontFamily={"ABCNormal, sans-serif"}
    fontSize={["24px", "28px", "32px"]} // Responsive font size
    lineHeight={["30px", "32px", "36px"]} // Responsive line height
    fontWeight="700"
    color="#1A1A1A"
    mb="2"
    {...props}
  >
    {children}
  </Heading>
);

const SectionText = ({ children, ...props }) => (
  <Text
    fontFamily="Public Sans"
    fontSize={["14px", "16px", "18px"]} // Responsive font size
    lineHeight={["20px", "20px", "20px"]} // Responsive line height
    fontWeight="400"
    color="#7B7A7A"
    mb="24px"
    {...props}
  >
    {children}
  </Text>
);

const FormInput = ({
  label,
  type = "text",
  isRequired = false,
  errorMessage,
  name,
  ...props
}) => (
  <FormControl isRequired={isRequired} isInvalid={errorMessage}>
    <FormLabel
      fontFamily="Public Sans"
      fontSize={["12px", "14px", "16px"]} // Responsive font size
      lineHeight={["12px", "14px", "16px"]} // Responsive line height
      fontWeight="600"
      color="#1A1A1A"
    >
      {label}
    </FormLabel>
    <Input name={name} type={type} {...props} />
    {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
  </FormControl>
);

const DocumentUpload = ({ title, description, checklist, onFileChange, name, value }) => {


  return (
    <Box mb="4">
      <Heading
        as="h3"
        mb="4"
      fontFamily={"ABCNormal, sans-serif"}
        fontSize={["24px", "28px", "32px"]} // Responsive font size
        lineHeight={["30px", "32px", "36px"]} // Responsive line height
        fontWeight="700"
        color="#1A1A1A"
      >
        {title}
      </Heading>
      {description?.map((desc, index) => (
        <Text
          key={index}
          mb="4"
          fontFamily="Public Sans"
          fontSize={["14px", "16px", "18px"]} // Responsive font size
          lineHeight={["20px", "20px", "20px"]} // Responsive line height
          fontWeight="400"
          color="#7B7A7A"
        >
          {desc}
        </Text>
      ))}
      {checklist && (
        <List spacing={3} pl="20px">
          {checklist?.map((item, index) => (
            <ListItem
              key={index}
              fontFamily="Public Sans"
              fontSize={["14px", "16px", "18px"]} // Responsive font size
              lineHeight={["16px", "18px", "20px"]} // Responsive line height
              fontWeight="400"
              color="#7B7A7A"
            >
              {item}
            </ListItem>
          ))}
        </List>
      )}
      <Box
        display="flex"
        border="1px solid #E0E5F2"
        borderRadius="10px"
        p="10px"
        mt="4"
      >
        <Input
          type="file"
          name={name}
          value={value}
          onChange={onFileChange} // Call handleFileChange when a file is selected
          sx={{
            "::file-selector-button": {
              mr: 4,
              py: 2,
              px: 4,
              borderRadius: "md",
              border: "none",
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "18px",
              bg: "#A73719",
              color: "white",
              _hover: { bg: "gray.200" },
              cursor: "pointer",
            },
          }}
          size="sm"
          color="gray.500"
          h="40px"
          border="none"
          cursor="pointer"
        />
      </Box>
    </Box>
  );
};

const DocumentInfo = {
  "Driver's License": {
    title: "Driver's License",
    description: [
      "A driver's license is an official document, often plastic and the size of a credit card, permitting a specific individual to operate one or more types of motorized vehicles.",
      "It usually includes the driver's name, date of birth, address, license number, and a photo of the individual.",
    ],
    checklist: [
      "Not expired.",
      "Ensure that you have the front part included, with the address/name stated.",
    ],
  },
  'First Page Of Bank Statement': {
    title: "First Page Of Bank Statement",
    description: [
      "The first page of a bank statement typically includes information about the account holder, the bank's name and logo, the account number, and the statement period.",
      "It may also include a summary of the account balance and recent transactions.",
    ],
    checklist: [
      "Ensure that the account holder's name and account number are clearly visible.",
      "The statement must be recent (usually within the last 3 months).",
    ],
  },
  'Utility Bill': {
    title: "Utility Bill",
    description: [
      "A utility bill is a document sent to a customer by a utility company (such as an electricity, gas, water, or telephone provider) detailing the charges for services provided during a certain period.",
      "It typically includes the customer's name and address, the billing period, the amount due, and payment instructions.",
    ],
    checklist: [
      "Ensure that the customer's name and address are clearly visible.",
      "The bill must be recent (usually within the last 3 months).",
    ],
  },
  'Other Official Document': {
    title: "Other Official Document",
    description: [
      "This category includes any other official document that may be required for identity verification or address confirmation purposes.",
      "Examples may include government-issued identification cards, residency permits, or official letters from government agencies.",
    ],
    checklist: [
      "Ensure that the document is valid and not expired.",
      "Check that the document contains the required information (e.g., name, date of birth, address).",
    ],
  },
};

export default function NifForm() {
  const [docInfo, setDocInfo] = useState({});
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
    passport: null,
    licenseFront: null,
    licenseBack: null,
    statement: null,
    bill: null
  });
  const [termsChecked, setTermsChecked] = useState(false);
  const [declarationChecked, setDeclarationChecked] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState("");
  const handleFileChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.files[0],
    }));
  };

  const handleChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // console.log(selectedDocument);
  const [documentFiles, setDocumentFiles] = useState({
    "license_front": null,
    "license_back": null,
    "bank_statement": null,
    "utility_bill": null,
    "other_document": null,
  });
  const [errors, setErrors] = useState({});

  const handleDocumentSelect = (documentType) => {
    console.log(documentType);
    if (documentType === 'First Page Of Bank Statement') {
      handleChange('documentType', 'statement')
    }
    if (documentType === 'Utility Bill') {
      handleChange('documentType', 'bill')
    }
    if (documentType === 'Other Official Document') {
      handleChange('documentType', 'document')
    }
    setSelectedDocument(documentType);
    setDocInfo(DocumentInfo[documentType]);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.email) formErrors.email = "Email is required";
    else if (!validateEmail(formData.email)) formErrors.email = "Invalid email address";

    if (!formData.phoneNumber) formErrors.phoneNumber = "Phone number is required";

    if (!formData.flatNumber) formErrors.flatNumber = "Flat Number is required";
    if (!formData.buildingNumber)
      formErrors.buildingNumber = "Building Number is required";
    if (!formData.supurbName) formErrors.supurbName = "Suburb Name is required";
    if (!formData.city) formErrors.city = "City Name is required";
    if (!formData.zip) formErrors.zip = "Zip/Postal Code is required";
    if (!formData.country) formErrors.country = "Country is required";

    if (!formData.surname) formErrors.surname = "Surname is required";
    if (!formData.firstName) formErrors.firstName = "First Name is required";
    if (!formData.dob) formErrors.dob = "Date of Birth is required";
    if (!formData.passportIssueCountry)
      formErrors.passportIssueCountry = "Passport Issuing Country is required";
    if (!formData.passportNumber)
      formErrors.passportNumber = "Passport Number is required";
    if (!formData.placeOfBirth) formErrors.placeOfBirth = "Place of Birth is required";

    if (!termsChecked)
      formErrors.termsChecked = "You must agree to the Terms and Conditions";
    if (!declarationChecked)
      formErrors.declarationChecked = "You must agree to the declaration";
    // if (!formData.licenseFront)
    //   formErrors.licenseFront = "Please upload front side of your cnic";
    // if (!formData.licenseBack) formErrors.licenseBack = "Please upload back side of your cnic";
    // if (!formData.passport)
    //   formErrors.passport = "Please upload front side of your cnic";
    // if (!formData.bankStatement) formErrors.bankStatement = "Please upload back side of your cnic";
    // if (!formData.utilityBill)
    //   formErrors.utilityBill = "Please upload front side of your cnic";
    // if (!formData.otherDocument) formErrors.otherDocument = "Please upload back side of your cnic";

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {

      const data = new FormData();
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

    } else {
      console.log("error in form")
    }
  };

  return (
    <Box
      maxW={{ base: "100%", sm: "100%", md: "100%", xxl: "80%", xxxl: "80%" }} // Responsive max width
      mx="auto"
      p={["4", "6", "8"]} // Responsive padding
      bg="white"
      rounded="lg"
      shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      pos={"relative"}
      mt={{ base: "25%", sm: "25%", md: "10%", xxl: "8%", xxxl: "8%" }}
    >
      <Heading
        as="h1"
      fontFamily={"ABCNormal, sans-serif"}
        fontSize={{
          base: "25px",
          sm: "25px",
          md: "35px",
          lg: "40px",
          xxl: "48px",
          xxxl: "48px",
        }}
        lineHeight={{
          base: "40px",
          sm: "40px",
          md: "40px",
          lg: "50px",
          xxl: "60px",
          xxxl: "60px",
        }}
        fontWeight="700"
        color="#A73719"
        mb="32px"
      >
        NIF Application Form
      </Heading>
      <VStack spacing="6" align="stretch">
        <Box>
          <SectionHeading>Applicant’s Information</SectionHeading>
          <SectionText>
            In case of minor please provide parents’ or legal guardian’s
            information
          </SectionText>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            gap="4"
          >
            <FormInput
              label="Email Address"
              type="email"
              name="email"
              placeholder="e.g johndoe@gmail.com"
              value={formData.email}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              isRequired
              errorMessage={errors.email}
            />
            <FormControl isRequired isInvalid={errors.phone} w={"100%"}>
              <FormLabel
                fontFamily="Public Sans"
                fontSize="14px"
                lineHeight="14px"
                fontWeight="600"
                color="#1A1A1A"
              >
                Phone Number
              </FormLabel>
              <PhoneInput
                w="100%"
                h="40px"
                country="us"
                value={formData.phoneNumber}
                onChange={(e) => handleChange('phoneNumber', e)}
                placeholder="e.g +1 555-0120"
              />
              {errors.phoneNumber && (
                <FormErrorMessage>{errors.phoneNumber}</FormErrorMessage>
              )}
            </FormControl>
          </Grid>
        </Box>

        <Box>
          <SectionHeading mt="32px">Residential Address</SectionHeading>
          <SectionText mb="32px">
            (Please note that the address must be a residential address outside
            Portugal, P. O. Box or business address cannot be accepted, and must
            match with the document provided as address proof)
          </SectionText>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            gap="30px"
          >
            <FormInput
              label="Flat Number"
              name="flatNumber"
              placeholder="Flat Number"
              value={formData.flatNumber}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              isRequired
              errorMessage={errors.flatNumber}
            />
            <FormInput
              label="Building Number"
              placeholder="Building Number"
              name='buildingNumber'
              value={formData.buildingNumber}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              isRequired
              errorMessage={errors.buildingNumber}
            />
            <FormInput
              label="Suburb Name"
              placeholder="Suburb Name"
              value={formData.supurbName}
              name="supurbName"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              isRequired
              errorMessage={errors.supurbName}
            />
            <FormInput
              label="City Name"
              placeholder="City Name"
              value={formData.city}
              name="city"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              isRequired
              errorMessage={errors.city}
            />
            <FormInput
              label="Zip/Postal Code"
              placeholder="Zip/Postal Code"
              value={formData.zip}
              name='zip'
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              isRequired
              errorMessage={errors.zip}
            />
            <FormInput
              label="Country"
              placeholder="Country"
              name='country'
              value={formData.country}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              isRequired
              errorMessage={errors.country}
            />
          </Grid>
        </Box>

        <Box>
          <SectionHeading my="32px">
            Applicant’s Passport Information
          </SectionHeading>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            gap="30px"
          >
            <FormInput
              label="Surname"
              placeholder="Surname"
              name="surname"
              value={formData.surname}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              isRequired
              errorMessage={errors.surname}
            />
            <FormInput
              label="First Name"
              placeholder="First Name"
              value={formData.firstName}
              name='firstName'
              onChange={(e) => handleChange(e.target.name, e.target.value)} isRequired
              errorMessage={errors.firstName}
            />
            <FormInput
              label="Middle Name"
              placeholder="Middle Name"
              value={formData.middleName}
              name='middleName'
              onChange={(e) => handleChange(e.target.name, e.target.value)} />
            <FormInput
              label="Date of Birth"
              type="date"
              placeholder="Date of Birth"
              value={formData.dob}
              name='dob'
              onChange={(e) => handleChange(e.target.name, e.target.value)} isRequired
              errorMessage={errors.dateOfBirth}
            />
            <FormInput
              label="Passport Issuing Country"
              placeholder="Passport Issuing Country"
              value={formData.passportIssueCountry}
              name='passportIssueCountry'
              onChange={(e) => handleChange(e.target.name, e.target.value)} isRequired
              errorMessage={errors.passportCountry}
            />
            <FormInput
              label="Passport Number"
              placeholder="Passport Number"
              value={formData.passportNumber}
              name='passportNumber'
              onChange={(e) => handleChange(e.target.name, e.target.value)} isRequired
              errorMessage={errors.passportNumber}
            />
            <FormInput
              label="Place of Birth"
              placeholder="Place of Birth"
              value={formData.placeOfBirth}
              name='placeOfBirth'
              onChange={(e) => handleChange(e.target.name, e.target.value)} isRequired
              errorMessage={errors.placeOfBirth}
            />
          </Grid>
          <Flex
            gap={"35px"}
            mt={"30px"}
            flexDir={{ base: "column", sm: "column", md: "row" }}
          >
            <Box>
              <Heading
                as="h2"
                mb="32px"
              fontFamily={"ABCNormal, sans-serif"}
                fontSize="18px"
                lineHeight="30px"
                fontWeight="600"
                color="#1A1A1A"
              >
                Were you born in Portugal?
              </Heading>
              <RadioGroup>
                <Stack direction="row">
                  <Radio onChange={(e) => handleChange('isPortuguese', true)} value="Yes" defaultChecked={formData.isPortuguese}>Yes</Radio>
                  <Radio onChange={(e) => handleChange('isPortuguese', false)} value="No" defaultChecked={formData.isPortuguese}>No</Radio>
                </Stack>
              </RadioGroup>
            </Box>
            <Box>
              <Heading
                as="h2"
                mb="32px"
              fontFamily={"ABCNormal, sans-serif"}
                fontSize="18px"
                lineHeight="30px"
                fontWeight="600"
                color="#1A1A1A"
              >
                Do you hold Portuguese nationality?
              </Heading>
              <RadioGroup>
                <Stack direction="row">
                  <Radio onChange={(e) => handleChange('portugueseNationality', true)} value="Yes" defaultChecked={formData.portugueseNationality}>Yes</Radio>
                  <Radio onChange={(e) => handleChange('portugueseNationality', false)} value="No" defaultChecked={formData.portugueseNationality}>No</Radio>
                </Stack>
              </RadioGroup>
            </Box>
          </Flex>
        </Box>
        <>
            <Heading
              fontSize={"25px"}
              lineHeight={"35px"}
              fontFamily={"ABCNormal, sans-serif"}
            >
              {" "}
              Passport{" "}
            </Heading>
            <UnorderedList>
              <ListItem fontSize={"20px"} lineHeight={"18px"} mb={"15px"}>
              A high-quality certified scanned copy of the applicants passport. EU Citizens can use their National ID Card. Photos of both sides of the ID must be provided.
              </ListItem>
              <ListItem fontSize={"20px"} lineHeight={"30px"}>
              No shadows  No light reflections Passport is not expired Signature is fully visible - All four corners of the document must be visible
              </ListItem>
            </UnorderedList>

            <Box mb="4">
              <Box
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  flex="1"
                  minWidth="45%"
                  mr="4"y
                >
                  <Text
                    color={"black"}
                    fontSize={"18px"}
                    lineHeight={"30ppx"}
                    fontWeight={"600"}
                    fontFamily={"ABCNormal, sans-serif"}
                  >
                    Upload Passport
                  </Text>
                  <Box
                    display="flex"
                    flex="1"
                    border="1px solid #E0E5F2"
                    borderRadius="10px"
                    p="10px"
                    mt="4"
                  >
                    <Input
                      type="file"
                      name="passport"
                      onChange={handleFileChange}
                      sx={{
                        "::file-selector-button": {
                          mr: 4,
                          py: 2,
                          px: 4,
                          borderRadius: "md",
                          border: "none",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "18px",
                          bg: "#A73719",
                          color: "white",
                          _hover: { bg: "gray.200" },
                          cursor: "pointer",
                        },
                      }}
                      size="md"
                      color="gray.500"
                      h="40px"
                      border="none"
                      cursor="pointer"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </>
        <Box>
          <Heading
            as="h2"
          fontFamily={"ABCNormal, sans-serif"}
            fontSize={{
              base: "25px",
              sm: "25px",
              md: "35px",
              lg: "40px",
              xxl: "48px",
              xxxl: "48px",
            }}
            lineHeight={{
              base: "40px",
              sm: "40px",
              md: "40px",
              lg: "50px",
              xxl: "60px",
              xxxl: "60px",
            }}
            fontWeight="700"
            color="#A73719"
            my="32px"
          >
            Upload Documents
          </Heading>



          <Box mb="4">
            <Heading
              as="h3"
              mb="18px"
            fontFamily={"ABCNormal, sans-serif"}
              fontSize="24px"
              lineHeight="30px"
              fontWeight="700"
              color="#1A1A1A"
              mt="32px"
            >
              Upload documents
            </Heading>
            <Box w={"100%"}>
              <Select
                placeholder="Select Document"
                onChange={(e) => handleDocumentSelect(e.target.value)}
                w={{
                  base: "100%",
                  sm: "100%",
                  md: "100%",
                  xxl: "50%",
                  xxxl: "50%",
                }}
                mb={'25px'}
              >
                {Object.keys(DocumentInfo).map((document) => (
                  <option key={document} value={document}>
                    {document}
                  </option>
                ))}
              </Select>
              {selectedDocument != "Driver's License" && docInfo && (
                <DocumentUpload
                  title={docInfo.title}
                  description={docInfo.description}
                  checklist={docInfo.checklist}
                  onFileChange={handleFileChange}
                  name={formData.documentType}
                  value={formData.document}
                />
              )}
            </Box>
          </Box>
        </Box>
        {/* ================== */}

        {selectedDocument === "Driver's License" && (
          <>
            <Heading
              fontSize={"25px"}
              lineHeight={"35px"}
              fontFamily={"ABCNormal, sans-serif"}
            >
              {" "}
              Drivers License{" "}
            </Heading>
            <UnorderedList>
              <ListItem fontSize={"20px"} lineHeight={"18px"} mb={"15px"}>
                Not expired.
              </ListItem>
              <ListItem fontSize={"20px"} lineHeight={"30px"}>
                Ensure that you have the front part included, with the
                address/name stated
              </ListItem>
            </UnorderedList>

            <Box mb="4">
              <Box
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  flex="1"
                  minWidth="45%"
                  mr="4"
                >
                  <Text
                    color={"black"}
                    fontSize={"18px"}
                    lineHeight={"30ppx"}
                    fontWeight={"600"}
                    fontFamily={"ABCNormal, sans-serif"}
                  >
                    Driver license (upload front)
                  </Text>
                  <Box
                    display="flex"
                    flex="1"
                    border="1px solid #E0E5F2"
                    borderRadius="10px"
                    p="10px"
                    mt="4"
                  >
                    <Input
                      type="file"
                      name="licenseFront"
                      onChange={handleFileChange}
                      sx={{
                        "::file-selector-button": {
                          mr: 4,
                          py: 2,
                          px: 4,
                          borderRadius: "md",
                          border: "none",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "18px",
                          bg: "#A73719",
                          color: "white",
                          _hover: { bg: "gray.200" },
                          cursor: "pointer",
                        },
                      }}
                      size="md"
                      color="gray.500"
                      h="40px"
                      border="none"
                      cursor="pointer"
                    />
                  </Box>
                </Box>

                <Box
                  display="flex"
                  flexDirection="column"
                  flex="1"
                  minWidth="45%"
                >
                  <Text
                    color={"black"}
                    fontSize={"18px"}
                    lineHeight={"30ppx"}
                    fontWeight={"600"}
                    fontFamily={"ABCNormal, sans-serif"}
                  >Driver license (upload back)</Text>
                  <Box
                    display="flex"
                    flex="1"
                    border="1px solid #E0E5F2"
                    borderRadius="10px"
                    p="10px"
                    mt="4"
                  >
                    <Input
                      type="file"
                      name="licenseBack"
                      onChange={handleFileChange}
                      sx={{
                        "::file-selector-button": {
                          mr: 4,
                          py: 2,
                          px: 4,
                          borderRadius: "md",
                          border: "none",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "18px",
                          bg: "#A73719",
                          color: "white",
                          _hover: { bg: "gray.200" },
                          cursor: "pointer",
                        },
                      }}
                      size="md"
                      color="gray.500"
                      h="40px"
                      border="none"
                      cursor="pointer"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </>
        )}

        {/* ================== */}
        <Box>
          <Checkbox
            isChecked={termsChecked}
            onChange={(e) => setTermsChecked(e.target.checked)}
            isInvalid={errors.termsChecked}
            alignItems={"flex-start"}
          >
            I have read, understood, and agree to the{" "}
            <Link href="#" style={{ color: "#3182ce" }}>
              Terms and Conditions
            </Link>
            .
          </Checkbox>
          <Checkbox
            mt="4"
            isChecked={declarationChecked}
            onChange={(e) => setDeclarationChecked(e.target.checked)}
            isInvalid={errors.declarationChecked}
            alignItems={"flex-start"}
          >
            I hereby declare that this is the first registration I have done for
            the purpose of obtaining a Personal Taxpayer’s Number and that the
            statements, documents, and signatures expressed in it correspond to
            the truth without any omission in relation to them.
          </Checkbox>
        </Box>

        <Box>
          <Heading
            as="h2"
            mb="32px"
          fontFamily={"ABCNormal, sans-serif"}
            fontSize="24px"
            lineHeight="30px"
            fontWeight="700"
            color="#1A1A1A"
          >
            Do you need a bank account also?
          </Heading>
          <RadioGroup>
            <Stack direction="row">
              <Radio onChange={(e) => handleChange('needBankAccount', true)} value="Yes" defaultChecked={formData.needBankAccount}>Yes</Radio>
              <Radio onChange={(e) => handleChange('needBankAccount', false)} value="No" defaultChecked={formData.needBankAccount}>No</Radio>
            </Stack>
          </RadioGroup>
          <Button
            bg={"#A73719"}
            fontSize={"16px"}
            lineHeight={"18px"}
            fontWeight={"500"}
            borderRadius={"100px"}
            p={"12px 24px"}
            color={"white"}
            mt="4"
            colorScheme="#A73719"
            _hover={{ bg: "#7b2b16" }}
            onClick={handleSubmit}
          >
            Pay now
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}
