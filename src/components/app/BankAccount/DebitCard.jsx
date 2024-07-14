import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Img,
    Link,
    List,
    ListItem,
    Text,
  } from "@chakra-ui/react";
  
  export default function DebitCard() {
    const listItems = [
      "Get your NIF, NISS and SNS number",
      "Obtain your Portuguese Bank account",
      "Set up a Portuguese company",
      "All remotely"
    ];
  
    return (
      <Box
        bgImage="linear-gradient(160deg,#131313 40%,#4d4d4d)"
        bgColor="#131313"
        py="64px"
        pos="relative"
      >
        <Container p="0" maxW="1240px" pos="relative">
          <Flex
            direction={{ base: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
            px={8}
          >
            <Box
              w={{ base: "100%", md: "50%" }}
              mb={{ base: 8, md: 0 }}
              p={{ base: 0, md: 0,lg:8,xxl:8 }}
              rounded="xl"
            >
              <Heading
                as="h1"
                fontSize={{
                  base: "25px",
                  md: "35px",
                  lg: "40px",
                  xxl: "56px",
                }}
                mb={6}
                maxW="547px"
              fontFamily={"ABCNormal, sans-serif"}
                color="white"
                fontWeight={'500'}
              >
                Your move to Portugal made.
                <Text as="span"> Simple Hassle free</Text>
              </Heading>
  
           
  
              <Link href="/NifForm">
                <Button
                  colorScheme="white"
                  bg="#7f2a14"
                  color="white"
                  p="12px 24px"
                  borderRadius="100px"
                  fontSize="16px"
                  fontWeight="600"
                  lineHeight="18px"
                  _hover={{ bg: "#7f2a14" }}
                  mt="35px"
                >
                  Start Today
                  <Img
                    ml="12px"
                    src="/ArrowUpRightwhite.svg"
                    alt="Arrow Up Right Icon"
                  />
                </Button>
              </Link>
            </Box>
          </Flex>
        </Container>
        <Img
          pos="absolute"
          top={{base:'auto',sm:'auto',md:'auto',xxl:'0',xxxl:'0'}}
          right="0"
          w={{base:'',sm:'',md:'65.6%',xxl:'75.6%',xxxl:'34.6%'}}
          src="/business_cards.png"
          alt="Business Cards"
          bottom={{base:'0',sm:'0'}}
        />
      </Box>
    );
  }
  