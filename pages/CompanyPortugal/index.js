// pages/index.js

import { Box, Container, Flex, Heading, Img } from "@chakra-ui/react";
import CompanyFormation from "../../src/components/app/GetNif";
import LayoutWrapper from "../../src/components/core/LayoutWrapper";
import TestimonialSlider from "../../src/components/app/NifLandingPage/TestimonialSlider";
import Faq from "../../src/components/app/NifLandingPage/Faq";
import CompanyPortugal from "../../src/components/app/CompanyPortugal/PortugalSteps";
import GovermentFees from "../../src/components/app/CompanyPortugal/GovermentFees";
import StartSteps from "../../src/components/app/CompanyPortugal/CompanyStartSteps";
import Roof from "../../src/components/app/CompanyPortugal/LaunchBusiness";

const Home = () => {
  return (
    <LayoutWrapper>
      <CompanyFormation
        bgImage="/com.png"
        headingText="The easiest way to open your Company in Portugal"
        ButtonText="Get Apply"
        bannerImageSrc="/bannerphoto.png"
      />
      <Box
        p={{
          base: "25px",
          sm: "25px",
          md: "30px",
          xxl: "100px",
          xxxl: "100px",
        }}
      >
        <CompanyPortugal />
      </Box>
      <Box>
        <GovermentFees />
      </Box>
      <Box py={{ base: 16, md: 24 }}>
        <StartSteps />
      </Box>
      {/* <Box>
        <BusinessRoof/>
      </Box> */}
      <Box
        p={{base:'25px',sm:'25px',md:'30px',xxl:'90px',xxxl:'100px'}}
        bgImage="url('/ellipse-background.png')" // Replace with your image URL
        bgSize="cover"
        bgPosition="center"
        minH="65vh" // Ensures the Box takes at least the full viewport height
        
      >
        <Roof />
      </Box>
      <Box
        p={{ base: "30px", lg: "60px", xl: "80px", xxl: "100px" }}
        bg="#F4F8F8"
      >
        <Container p="0" maxW={"1240px"}>
          <Flex
            align="center"
            mb={2}
            fontSize="24px"
            fontFamily="Public Sans"
            fontWeight="600"
            lineHeight="28px"
            color="#1A1A1A"
            justify={{ base: "flex-start", md: "flex-start" }}
            gap="10px"
          >
            <Img src="/testistar.svg" />
            Testimonials
          </Flex>
          <Heading
            as="h1"
            fontSize={{ base: "25px", md: "50px", xxl: "56px" }}
            fontWeight="500"
            lineHeight={{ base: "35px", md: "64px", xxl: "64px" }}
            fontFamily={"ABCNormal, sans-serif"}
            w={{ base: "100%", lg: "80%", xxl: "65%" }}
            mb="40px"
            color="gray.900"
            textAlign="left"
            mt="15px"
          >
            Success stories
          </Heading>
          <TestimonialSlider />
        </Container>
      </Box>
      <Box>
        <Faq />
      </Box>
    </LayoutWrapper>
  );
};

export default Home;
