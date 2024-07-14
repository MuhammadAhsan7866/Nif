import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,

} from "@chakra-ui/react";
import DocumentCards from "../../core/DocumentsCards";
const customFeatures = [
  {
    title: "Certified copy of passport",
    description: "A limited liability Portuguese company with digital company documents.",
    icon: "/moretime.svg",
  },
  {
    title: "Proof of address",
    description: "Tax authority registration and online portal access.",
    icon: "/lesstress.svg",
  },
  {
    title: "Power of attorney",
    description: "Tax authority registration and online portal access.",
    icon: "/svemoney.svg",
  },
  // Add more features as needed
];
export default function DocumentSteps({ headingText }) {
  return (
    <Box
      py={{ base: 8, md: 24 }}
      px={{ base: 4, sm: 6, lg: 8 }}
      bgImage="url('/stepsbg.png')"
      bgSize="cover"
    >
      <Container maxW="7xl" textAlign="center">
        <Heading
          as="h2"
          fontSize={{ base: "29px", sm: "29px", md: "50px" }}
          lineHeight={{ base: "42px", sm: "42px", md: "64px" }}
          fontFamily={"ABCNormal, sans-serif"}
          fontWeight={"500"}
          mb={"40px"}
          color={"#1A1A1A"}
        >
        {headingText}
        </Heading>
      </Container>
      <DocumentCards features={customFeatures} />
      <Container maxW="7xl" mt={12} textAlign="center">
        <Button
          bg="black"
          color="white"
          py={2}
          px={6}
          rounded="full"
          fontWeight="semibold"
          mx="auto"
          _hover={{ bg: "#A73719" }}
          rightIcon={<Image alt="arrow" src="/ArrowUpRightwhite.svg" />}
        >
          Get started
        </Button>
      </Container>
    </Box>
  );
}
