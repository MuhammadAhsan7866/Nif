// pages/anotherPage.js

import { Box, Container, Flex, Heading, Img } from "@chakra-ui/react";

import CompanyFormation from "../../src/components/app/GetNif";
import LayoutWrapper from "../../src/components/core/LayoutWrapper";
import DebitCard from "../../src/components/app/BankAccount/DebitCard";
import TestimonialSlider from "../../src/components/app/NifLandingPage/TestimonialSlider";
import Faq from "../../src/components/app/NifLandingPage/Faq";
import FastEsay from "../../src/components/app/BankAccount/FastEsay";

export default function AnotherPage() {
  return (
    <LayoutWrapper>
      <CompanyFormation
        bgImage="/BankAcc.png"
        headingText="A Secure Portuguese Bank account"
        descriptionText="Different description text goes here."
        listItems={[
          "First item for another page",
          "Second item for another page",
          "Third item for another page",
          "Fourth item for another page",
        ]}
        bannerImageSrc="/business_lp_hero.png"
         ButtonText='Apply for account'
      />
      <Box py={{ base: "30px", lg: "40px", xxl: "100px" }}>
        <FastEsay/>
      </Box>
      <Box>
        <DebitCard/>
      </Box>
     
      <Box p={{ base: "30px", lg: "60px", xl: "80px", xxl: "100px" }} bg="#F4F8F8">
        <Container p="0" maxW="1240px">
          <Flex
            align="center"
            mb={2}
            fontSize="20px"
            fontWeight="600"
            lineHeight="28px"
            color="#1A1A1A"
            justify="flex-start"
            gap="10px"
          >
            <Img src="/testistar.svg" />
            Testimonials
          </Flex>
          <Heading
            as="h1"
            fontSize={{ base: "25px", md: "50px", xxl: "56px" }}
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
        <Faq />
      </Box>
    </LayoutWrapper>
  );
}
