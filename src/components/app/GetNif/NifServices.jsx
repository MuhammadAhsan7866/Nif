import {
  Box,
  Container,
  Flex,
  Image,
  Heading,
  List,
  ListItem,
  useColorModeValue,
  Img,
  Link,
  Button,
} from "@chakra-ui/react";

export default function NIFRelatedServices() {
  const textColor = useColorModeValue("#1A1A1A", "#1A1A1A");
  const subTextColor = useColorModeValue("#1A1A1A", "#1A1A1A");

  const features = [
    "Get NIF number within 24h",
    "Get NIF password",
    "Get a certified copy of NIF",
    "Remove current representative",
    "Change your address on NIF",
  ];

  return (
    <Box
      backgroundImage="url('/busniessbg.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      py="100px"
    >
      <Container maxW={"1240px"}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          px={6}
        >
          <Box
            flexBasis={{ base: "100%", md: "50%" }}
            display="flex"
            justifyContent="center"
          >
            <Image
              src="/hero_phones.png"
              alt="Mobile App Screens"
              boxSize="full"
              maxW="md"
            />
          </Box>
          <Box flexBasis={{ base: "100%", md: "50%" }} mt={{ base: 8, md: 0 }}>
            <Heading
              as="h2"
              fontSize={{base:'33px',sm:'33px',md:'45px'}}
              lineHeight={{base:'41px',sm:'41px',md:'50px'}}
              fontWeight="500"
            fontFamily={"ABCNormal, sans-serif"}
              color={textColor}
              mb="35px"
            >
              Other NIF related services
            </Heading>
            <List
              spacing={2}
              fontSize={{base:'18px',sm:'18px',md:'20px'}}
              lineHeight="30px"
              fontWeight="400"
              color={subTextColor}
            >
              {features.map((feature, index) => (
                <ListItem
                  key={index}
                  display="flex"
                  alignItems="center"
                  my="20px"
                >
                  <Img src="/testistar.svg" alt="Feature Icon" mr={2} />
                  {feature}
                </ListItem>
              ))}
            </List>
            <Link href="/NifForm">
            <Button
              colorScheme="white"
              bg={"#A73719"}
              color={"white"}
              p={"10px 32px"}
              borderRadius={"100px"}
              fontSize={"18px"}
              fontWeight={"600"}
              lineHeight={"18px"}
              _hover={{ bg: "#7f2a14" }}
              h={"auto"}
              maxW={"300px"}
              w={"100%"}
              mt={"20px"}
            >
              Apply for a NIF
              <Img
                ml={"12px"}
                src="/ArrowUpRightwhite.svg"
                alt="Arrow Up Right white"
              />
            </Button>
          </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
