// components/CallToAction.js

import { Box, Heading, Text, Button, Link, Icon, Img } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const CallToAction = () => {
  return (
    <Box
      bgGradient="linear-gradient(256.68deg, #A73719 0.71%, #1A1A1A 59.57%);"
      color="white"
      p={8}
      borderRadius="22px"
      maxW="1240px"
      mx="auto"
      textAlign="left"
    >
      <Box w={{base:'100%',sm:'100%',md:'100%',xxl:'70%',xxxl:'70%'}}>
        <Heading
          as="h1"
          fontSize={{base:'30px',sm:'30px',md:'40px',lg:'50px',xxl:'56px',xxxl:'56px'}}
          lineHeight={{base:'40px',sm:'40px',md:'55px',lg:'3.5rem',xxl:'3.5rem',xxxl:'3.5rem'}}
          fontWeight={"500"}
         
          mb={4}
        >
          Take first step towards your new life in Portugal
        </Heading>
        <Text
         fontSize={{base:'20px',sm:'20px',md:'30px',lg:'40px',xxl:'20px',xxxl:'20px'}}
         lineHeight={{base:'40px',sm:'40px',md:'55px',lg:'80px',xxl:'60px',xxxl:'60px'}}
          fontWeight={"400"}
        
          mb={"55px"}
        >
          Apply for your NIF number.
        </Text>
      </Box>

      <Link href="/NifForm" _hover={{ textDecoration: "none" }}>
        <Button
          colorScheme="white"
          bg={"#A73719"}
          color={"white"}
          p={"12px 24px"}
          borderRadius={"100px"}
          fontSize={"16px"}
          fontWeight={"500"}
          lineHeight={"18px"}
          _hover={{ bg: "#722c19" }}
        >
          Apply Now
          <Img ml={"12px"} src="/arrowwhite.svg" alt="arrowwhite" />
        </Button>
      </Link>
    </Box>
  );
};

export default CallToAction;
