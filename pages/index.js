import React from "react";
import { Box } from "@chakra-ui/react";
import HomePageCards from "../src/components/app/NifLandingPage/CardsCompany";
import Expats from "../src/components/app/NifLandingPage/Expacts";
import DocumentSteps from "../src/components/app/NifLandingPage/DcumentSteps";
import CardSlider from "../src/components/app/NifLandingPage/PricingCard";
import TestimonialSection from "../src/components/app/NifLandingPage/Testimonial";
import BlogSection from "../src/components/app/BlogsSection";
import CallToAction from "../src/components/app/NifLandingPage/CallToAction";
import Faq from "../src/components/app/NifLandingPage/Faq";
import LayoutWrapper from "../src/components/core/LayoutWrapper";
import LandingSection from "../src/components/app/NifLandingPage";
const landingSectionContent = {
  heading: {
    title: "Your move to Portugal made.",
    highlight: " Simple Hassle free",
  },
  subheading: "Portugal’s Best Relocation Website",
  listItems: [
    {
      icon: "testistar.svg",
      alt: "testistar",
      text: "Get your NIF, NISS and SNS number",
    },
    {
      icon: "testistar.svg",
      alt: "testistar",
      text: "Obtain your Portuguese Bank account",
    },
    {
      icon: "testistar.svg",
      alt: "testistar",
      text: "Set up a Portuguese company",
    },
    { icon: "testistar.svg", alt: "testistar", text: "All remotely" },
  ],
  bannerImage: { src: "/bannerphoto.png", alt: "bannerphoto" },
  bgImage: { src: "/lyerbg.svg", alt: "lyerbg" },
   bgColor: "#1A1A1A"
};
const Home = () => {
  return (
    <>
      <LayoutWrapper>
        <LandingSection {...landingSectionContent} />
        <Box>
          <HomePageCards />
        </Box>
        <Box>
          <Expats />
        </Box>
        <Box
          py={{
            base: "30px",
            sm: "30px",
            md: "30px",
            lg: "40px",
            xxl: "100px",
            xxxl: "100px",
          }}
          px={{
            base: "30px",
            sm: "30px",
            md: "30px",
            lg: "40px",
            xxl: "100px",
            xxxl: "100px",
          }}
        >
          <DocumentSteps />
        </Box>
        <Box>
          <CardSlider />
        </Box>
        <Box
          p={{
            base: "30px",
            md: "30px",
            lg: "60px",
            xl: "80px",
            xxl: "100px",
            xxxl: "100px",
          }}
          bg={"#F4F8F8"}
        >
          <TestimonialSection />
        </Box>
        <Box
          py={{
            base: "30px",
            sm: "30px",
            md: "30px",
            lg: "40px",
            xxl: "100px",
            xxxl: "100px",
          }}
          px={{
            base: "30px",
            sm: "30px",
            md: "30px",
            lg: "40px",
            xxl: "100px",
            xxxl: "100px",
          }}
        >
          <BlogSection />
        </Box>
        <Box
          pb={{
            base: "20px",
            sm: "20px",
            md: "30px",
            lg: "40px",
            xxl: "100px",
            xxxl: "100px",
          }}
          px={{
            base: "20px",
            sm: "20px",
            md: "30px",
            lg: "40px",
            xxl: "100px",
            xxxl: "100px",
          }}
        >
          <CallToAction />
        </Box>
        <Box>
          <Faq />
        </Box>
      </LayoutWrapper>
    </>
  );
};

export default Home;
