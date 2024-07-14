// components/Widget.js
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Stack,
  Container,
} from "@chakra-ui/react";

export default function GovermentFees() {
  return (
    <Container
     maxW={"1240px"}
      p={"0px"}
      rounded="3xl"
      textAlign="center"
      mx="auto"
      display={'flex'}
      justifyContent={'center'}
        bgGradient="linear-gradient(90deg,#eb4e23 0,#000 50%)"
    >
      <Box
      
        color="white"
        p={'60px'}
        maxW={{base:'100%',sm:'100%',md:'100%',xxl:'60%',xxxl:'60%'}}
        w={'100%'}
      >
        <Heading
          as="h2"
          fontSize={{base:'35px',sm:'35px',md:'40px',xxl:'50px',xxxl:'50px'}}
          lineHeight={{base:'45px',sm:'45px',md:'55px',xxl:'60px',xxxl:'60px'}}
          fontFamily={"ABCNormal, sans-serif"}
          fontWeight={'500'}
          mb={2}
        >
          Pay only 650€ including government fee
        </Heading>
        <Flex justify="center" mb={4}></Flex>
        <Text fontSize="32px" fontWeight="semibold" mb={2}>
          FROM
        </Text>
        <Text 
        fontSize={{base:'50px',sm:'50px',md:'60px',xxl:'90px',xxxl:'90px'}}
        fontWeight="bold" color="orange.500" mb={2}>
          650€
        </Text>
        <Button
          bg="white"
          color="black"
          py={2}
          px={6}
          rounded="full"
          fontWeight="semibold"
          mx="auto"
          rightIcon={
            <Image alt="arrow" src="/ArrowUpRight.svg" />
          }
        >
          Get started
        </Button>
      </Box>
    </Container>
  );
}
