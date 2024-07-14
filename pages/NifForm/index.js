import React from "react";
import { Box } from "@chakra-ui/react";
import NifForm from "../../src/components/app/NifForm/Index";
import LayoutWrapper from "../../src/components/core/LayoutWrapper";

const Home = () => {
  return (
    <>
    <LayoutWrapper>
      <Box
        p={{ base: "20px", sm: "20px", md: "30px", xxl: "50px", xxxl: "100px" }}
        bg={'linear-gradient(90deg,#eb4e23 0,#000 50%)'}
      >
        <NifForm />
      </Box>
    </LayoutWrapper>
      
    </>
  );
};

export default Home;
