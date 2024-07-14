// pages/index.js

import { Box, Container, Flex, Heading, Img } from "@chakra-ui/react";
import CompanyFormation from "../../src/components/app/GetNif";
import LayoutWrapper from "../../src/components/core/LayoutWrapper";
import Steps from "../../src/components/app/GetNif/Steps";
import TestimonialSlider from "../../src/components/app/NifLandingPage/TestimonialSlider";
import NIFRelatedServices from "../../src/components/app/GetNif/NifServices";
import Faq from "../../src/components/app/NifLandingPage/Faq";
import DocumentSteps from "../../src/components/app/GetNif/ThreeDocument";
import DocumentCards from "../../src/components/core/DocumentsCards";
import Packages from "../../src/components/app/CompanyPortugal/Pakages";
const customStepData = [
  {
    image: "/custom_image1.png",
    title: "Get your NIF number quickly and effortlessly",
    tasks: ["Fill out the form", "Upload the documents", "Make payment"],
  },

];

const Home = () => {
  return (
    <LayoutWrapper>
      <CompanyFormation
        bgImage="/nifbg.png"
        headingText="A NIF number from your mobile phone"
        descriptionText="Get your NIF number quickly and effortlessly"
        listItems={[
          "Get your NIF, NISS and SNS number",
          "Obtain your Portuguese Bank account",
          "Set up a Portuguese company",
          "All remotely",
        ]}
        bannerImageSrc="/banco.png"
         ButtonText='Apply for NIF'
      />
      <Box
        p={{ base: "20px", lg: "60px", xl: "80px", xxl: "100px" }}
      >
       <Steps stepData={customStepData}
       ImageSection='/group-img.webp'
       />
      </Box>
      <Box>
        <DocumentSteps
        headingText="Upload these three documents"
        />
         
      </Box>
      <Box  py={{ base: "20px", lg: "40px", xl: "50px", xxl: "50px" }}>
        <Packages/>
      </Box>
      <Box
        p={{ base: "30px", lg: "60px", xl: "80px", xxl: "100px" }}
        bg="#F4F8F8"
      >
        <Container p="0"maxW={"1240px"}>
          <Flex
            align="center"
            mb={2}
            fontSize="20px"
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
            fontSize={{ base: "24px", md: "50px", xxl: "56px" }}
            fontWeight="500"
            lineHeight={{ base: "35px", md: "56px", xxl: "56px" }}
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
        <NIFRelatedServices />
      </Box>
      <Box py={'70px'}>
        <Faq />
      </Box>
    </LayoutWrapper>
  );
};

export default Home;
