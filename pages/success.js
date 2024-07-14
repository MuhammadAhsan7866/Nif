import React from "react";
import { Box } from "@chakra-ui/react";
import Success from "../src/components/app/NifForm/PaymentSuccess";

const Home = () => {
  return (
    <>
    
      <Box
        p={{ base: "20px", sm: "20px", md: "30px", xxl: "50px", xxxl: "100px" }}
        bg={'#a5a4a4'}
        h={'100vh'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Success />
      </Box>
   
      
    </>
  );
};

export default Home;
