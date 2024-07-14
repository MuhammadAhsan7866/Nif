import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Img,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function FastEasy() {
  return (
    <Container p="0" maxW="1240px">
      <Heading
        fontSize={{ base: "33px", sm: "33px", md: "56px" }}
        lineHeight={{ base: "41px", sm: "41px", md: "56px" }}
        fontWeight="500"
        fontFamily={"ABCNormal, sans-serif"}
        textAlign="center"
        maxW="80%"
        m="auto"
      >
        Open it remotely or in person
      </Heading>
      <Flex direction={{ base: "column", md: "row" }} gap={4} p={4} mt="35px">
        <Box
          flex="1"
          bgGradient="linear-gradient(217deg, #ffffff 0, #FED7E2 50%)"
          rounded="xl"
          p={8}
        >
          <Heading
            fontSize="20px"
            fontWeight="bold"
            lineHeight="30px"
            fontFamily={"ABCNormal, sans-serif"}
            mb="30px"
          >
            Open your bank account. Fast and Easy.
          </Heading>
          <List spacing={2}>
            <Flex flexDirection="column" gap="15px">
              {[
                "Fill out the form",
                "Upload the documents",
                "Make payment",
              ].map((item, index) => (
                <ListItem
                  key={index}
                  display="flex"
                  alignItems="center"
                  fontSize="16px"
                  lineHeight="30px"
                  fontWeight="400"
                  
                  gap="10px"
                >
                  <Img src="testistar.svg" alt="Testistar Icon" />
                  {item}
                </ListItem>
              ))}
            </Flex>
          </List>
          <Link href="/NifForm">
            <Button
              colorScheme="white"
              bg="#A73719"
              color="white"
              p="12px 24px"
              borderRadius="100px"
              fontSize="16px"
              fontWeight="500"
              lineHeight="18px"
              _hover={{ bg: "#7f2a14" }}
              mt="35px"
            >
              Apply for Account
              <Img
                ml="12px"
                src="/ArrowUpRightwhite.svg"
                alt="Arrow Up Right Icon"
              />
            </Button>
          </Link>
        </Box>

        <Box
          flex="1"
          bgGradient="linear-gradient(217deg, #eb4e23 0, #000 50%)"
          rounded="xl"
          p={6}
        >
          <Heading
            fontSize="20px"
            fontWeight="bold"
            lineHeight="30px"
            fontFamily={"ABCNormal, sans-serif"}
            color="white"
            mb="30px"
          >
            Upload these three documents
          </Heading>
          <List spacing={2} color="white">
            <Flex flexDirection="column" gap="15px">
              {[
                "Certified copy of passport",
                "Copy of NIF number",
                "Power of attorney",
              ].map((item, index) => (
                <ListItem
                  key={index}
                  display="flex"
                  alignItems="center"
                  fontSize="16px"
                  lineHeight="30px"
                  fontWeight="400"
                
                  gap="10px"
                >
                  <Img src="testistar.svg" alt="Testistar Icon" />
                  {item}
                </ListItem>
              ))}
            </Flex>
          </List>
          <Link href="/NifForm">
            <Button
              colorScheme="white"
              bg="#A73719"
              color="white"
              p="12px 24px"
              borderRadius="100px"
              fontSize="16px"
              fontWeight="500"
              lineHeight="18px"
              _hover={{ bg: "#7f2a14" }}
              mt="35px"
            >
              Apply for Account
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
  );
}
