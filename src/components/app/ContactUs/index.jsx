import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Img,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
import Form from "./Form";

  
  const ContactUs = () => {
    return (
      <>
        <Box>
          <Box
            pt={{ base: "30px", md: "30px", sm: "30px", lg: "150px", xl: "150px" }}
            pb={{ base: "30px", md: "30px", sm: "30px", lg: "94px", xl: "94px" }}
            px={{ base: "30px", md: "30px", sm: "30px", lg: "90px", xl: "90px" }}
           bg={'linear-gradient(90deg, #eb4e23 0, #000 50%)'}
          >
            <Container maxW={"1580px"} mx={"auto"} p="0px">
              <Flex
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
                flexWrap={"wrap"}
                gap={{
                  base: "45px",
                  sm: "45px",
                  md: "45px",
                  xxl: "0px",
                  xxxl: "0px",
                }}
              >
                <Box width={'100%'}>
                  <Heading
                    fontSize={{
                      base: "50px",
                      sm: "55px",
                      md: "56px",
                      lg: "56px",
                      xxl: "56px",
                      xxxl: "56px",
                    }}
                    fontFamily={"ABCNormal, sans-serif"}
                    lineHeight={{
                      base: "65px",
                      sm: "65px",
                      md: "70px",
                      lg: "70px",
                      xxl: "108px",
                      xxxl: "108px",
                    }}
                    fontWeight={"700"}
                    maxW={{
                      base: "100%",
                      sm: "100%",
                      md: "100%",
                      lg: "100%",
                      xxl: "60%",
                      xxxl: "60%",
                    }}
                    mb={"35px"}
                    color={'white'}
                  >
                    Lets get something started.
                  </Heading>
                  <Box
                    maxW={{
                      base: "100%",
                      sm: "100%",
                      md: "100%",
                      lg: "1240px",
                      xl: "1240px",
                      xxl: "1240px",
                      xxxl: "1240px",
                    }}
                  >
                  <Form/>
                  </Box>
                </Box>
                
              </Flex>
            </Container>
          </Box>
         
        </Box>
      </>
    );
  };
  
  export default ContactUs;
  