import { Box, Flex, Heading, Image, Img, Link, keyframes } from "@chakra-ui/react";
import TestimonialsSlider from "./TestimonialSlider";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const TestimonialSection = () => {
  return (
    <Box bg={{ base: "gray.50", dark: "gray.900" }}>
      <Box maxW="1240px" mx="auto">
        <Flex
          align="center"
          mb={2}
          textColor={{ base: "gray.500", dark: "gray.400" }}
          fontSize="24px" fontWeight={'600'} lineHeight={'28px'} color={'#1A1A1A'}
          justifyContent={{ base: "flex-start", md: "flex-start" }}
          gap={'10px'}
        >
          <Img src="/testistar.svg"/>
          Testimonials
        </Flex>
        <Heading
          as="h1"
          fontSize={{
            base: "25px",
            base:'25px',
            md: "50px",
            lg: "56px",
            xxl: "56px",
            xxxl: "56px",
          }}
          fontWeight="500"
          lineHeight={{
            base: "35px",
            md: "64px",
            lg: "50px",
            xxl: "50px",
            xxxl: "50px",
          }}
         
          w={{ base: "100%", md: "100%", lg: "80%", xxl: "80%", xxxl: "65%" }}
          mb={"40px"}
          textColor={{ base: "gray.900", dark: "white" }}
          textAlign={{ base: "left", md: "left" }}
          mt={'15px'}
        >
          For expats. By expats.
        </Heading>
        <Box
          bgImage="url('testibg.png')"
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          w="100%"
          h={{ base: "400px", md: "378px" }}
          borderRadius="20px"
          display="flex"
          justifyContent={{ base: 'flex-start', md: "center" }}
          alignItems={{ base: 'flex-start', md: "center" }}
          position="relative"
          p={4}
          flexDirection={{ base: "column", md: "row" }}
          mb={'35px'}
        >
          <Box display={{ base: "none", md: "block" }} w={{ md: "50%" }}></Box>
          <Box
            w={{ base: "100%", md: "50%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Heading
              color="white"
              fontSize={{ base: "20px", md: "25px", lg: "30px" }}
              fontWeight="500"
              lineHeight={{ base: "30px", md: "35px", lg: "40px" }}
            
            >
              Founded by an expat, for expats and powered by an encouraging team
              of local specialists.
            </Heading>
          </Box>
          <Img
            src="/vijayimg.png"
            pos="absolute"
            left={{ base: "50%", md: "0", }}
            transform={{ base: "translateX(-50%)", md: "none" }}
            bottom={{ base: "0px", md: "0" }}
            w={{ base: "100%", md: "auto" }}
          />
          <Link href="https://www.linkedin.com/in/vcumar" isExternal>
            <Img 
              pos="absolute"
              right={{ base: "13px", md: "0px" }}
              bottom={{base: "11px", md: "12px",lg:'12px',xxl:'12px',xxl:'12px'}}
              left={{md:'37%',xxl:'23%',xxxl:'23%'}}
              w={{ base: "50px", md: "60px",lg:'60px',xxl:'55x',xxxl:'55px' }}
              src="/lindinicon.png"
              _hover={{
                animation: `${pulse} 1s infinite`,
              }}
            />
          </Link>
        </Box>
        <TestimonialsSlider/>
      </Box>
    </Box>
  );
};

export default TestimonialSection;
