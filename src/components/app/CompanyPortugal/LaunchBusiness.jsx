// components/Widget.js

import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Link,
  VStack,
} from "@chakra-ui/react";

export default function Roof() {
  return (
    <Box>
      <Container p={0}maxW={"1240px"}>
        <VStack spacing={8} align="center" mb={8} textAlign="center">
          <Heading
            fontSize={{
              base: "35px",
              sm: "35px",
              md: "40px",
              xxl: "48px",
              xxxl: "48px",
            }}
            lineHeight={{
              base: "45px",
              sm: "45px",
              md: "55px",
              xxl: "48px",
              xxxl: "48px",
            }}
          fontFamily={"ABCNormal, sans-serif"}
            fontWeight="500"
            mb="45px"
          >
            Everything you need to launch a business under one roof
          </Heading>
        </VStack>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
        >
          <Box
            bgImage="url('/Card1.webp')" // Replace with your image URL
            bgSize="cover"
            bgPosition="center"
            color="white"
            minH={"450px"}
            p={6}
            rounded="15px"
            shadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          >
            <Heading size="md" mb={4}>
              Company setup
            </Heading>
          </Box>
          <Box
            bgImage="url('/Card2.webp')" // Replace with your image URL
            bgSize="cover"
            bgPosition="center"
            color="black"
            minH={"450px"}
            p={6}
            rounded="15px"
            shadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          >
            <Heading size="md" mb={4}>
              Business bank account
            </Heading>
          </Box>
          <Box
            bgImage="url('/Card3.webp')" // Replace with your image URL
            bgSize="cover"
            bgPosition="center"
            color="black"
            minH={"450px"}
            p={6}
            rounded="15px"
            shadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          >
            <Heading size="md" mb={4}>
              Certified Accountant
            </Heading>
          </Box>
          <Box
            bgImage="url('/Card3.webp')" // Replace with your image URL
            bgSize="cover"
            bgPosition="center"
            color="black"
            p={6}
            rounded="15px"
            shadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            minH={"450px"}
          >
            <Heading size="md" mb={4}>
              Virtual Address
            </Heading>
          </Box>
        </Grid>
        <VStack mt={8} align="center">
          <Link href="https://wa.me/message/YSBWOOKTVDLTC1">
          <Button
          mt={'45px'}
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
            Want to know more? Talk to an expert
          </Button>
          </Link>
     
        </VStack>
      </Container>
    </Box>
  );
}
