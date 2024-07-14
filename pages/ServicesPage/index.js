import React from "react";

import LayoutWrapper from "../../src/components/core/LayoutWrapper";
import { Box, Container, Heading } from "@chakra-ui/react";
import OrderForm from "../../src/components/app/OrderForm";
import OtherServices from "../../src/components/app/ServicesPage";

const Home = () => {
  return (
    <>
      <LayoutWrapper>
        <Box bg={"linear-gradient(90deg, #eb4e23 0, #000 50%)"}>
          <Container
            maxW={"1240px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            h={"40vh"}
          >
            <Heading
            fontSize={{base:'30px',sm:'30px',md:'40px',xxl:'55px',xxxl:'55px'}}
            lineHeight={{base:'45px',sm:'45px',md:'45px',xxl:'55px',xxxl:'55px'}}
            fontWeight={'500'}
            color={'white'}
            >Others Services</Heading>
          </Container>
        </Box>
        <Box>
          <OtherServices />
        </Box>
      </LayoutWrapper>
    </>
  );
};

export default Home;
