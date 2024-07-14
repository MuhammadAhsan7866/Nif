// pages/index.js

import { Box, Container, Flex, Heading, Img } from "@chakra-ui/react";
import CompanyFormation from "../../src/components/app/GetNif";
import LayoutWrapper from "../../src/components/core/LayoutWrapper";
import Steps from "../../src/components/app/GetNif/Steps";
import TestimonialSlider from "../../src/components/app/NifLandingPage/TestimonialSlider";
import NIFRelatedServices from "../../src/components/app/GetNif/NifServices";
import Faq from "../../src/components/app/NifLandingPage/Faq";
import DocumentSteps from "../../src/components/app/GetNif/ThreeDocument";
import NisDoc from "../../src/components/app/GetNiss/NissDocument";
const customStepData = [
  {
    image: "",
    title: "Get your NISS number quickly and safely",
    tasks: ["Fill out the form", "Upload the documents", "Make payment"],
  },

  // Add more steps as needed
];
const Home = () => {
  return (
    <LayoutWrapper>
      <CompanyFormation
        bgImage="/nisbgr.png"
        headingText="A NISS number from the comfort of your home"
        descriptionText="Get your NIF number quickly and effortlessly"
        listItems={[
          "Get your NIF, NISS and SNS number",
          "Obtain your Portuguese Bank account",
          "Set up a Portuguese company",
          "All remotely",
        ]}
        bannerImageSrc="/accounting-header.png"
        ButtonText='Get Niss'
      />
       <Box
        p={{ base: "20px", lg: "60px", xl: "80px", xxl: "100px" }}
      >
        <Steps stepData={customStepData}
       ImageSection='/businessroof.jpg'
       />
      </Box>
     <Box>
      <DocumentSteps
       headingText="Upload these three documents"
      />
     </Box>
     {/* <Box p={'100px'}>
      <NisDoc/>
     </Box> */}
     <Box
        p={{ base: "30px", lg: "60px", xl: "80px", xxl: "100px" }}
        bg="#F4F8F8"
      >
        <Container p="0"maxW={"1240px"}>
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
            lineHeight={{ base: "35px", md: "64px", xxl: "80px" }}
          fontFamily={"ABCNormal, sans-serif"}
            w={{ base: "100%", lg: "80%", xxl: "65%" }}
            mb="40px"
            color="gray.900"
            textAlign="left"
            mt="15px"
            
          >
            What people say about us
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
