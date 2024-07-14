import { Box, Flex, Image, Text, Input } from "@chakra-ui/react";
import React from "react";

const DashBoardHeader = () => {
  return (
    <Box
      px={{ base: "10px", xxxl: "69px" }}
      py={{ base: "60px", lg: "21px" }}
      borderBottom={"1px solid #E7E7E7"}
      bg={'#1D2740'}
      color={'white'}
    >
      <Flex
        justifyContent={"flex-end"}
        alignItems={{ base: "flex-start", md: "center" }}
        flexDirection={{ base: "column", md: "row" }}
        gap="10px"
      >
        <Box>
          <Flex
            alignItems={{ base: "flex-start", md: "center" }}
            gap="28px"
            flexDirection={{ base: "column", sm: "row" }}
          >
         
            <Flex gap="12px" alignItems={"center"}>
              <Image alt="img" src="/userimage.svg"></Image>
              <Box>
                <Text
                 
                  fontSize="16px"
                  fontWeight="600"
                  lineHeight={"150%"}
                >
                  Richard Hederson
                </Text>
                <Text
                 
                  fontSize="12px"
                  fontWeight="500"
                  lineHeight={"16px"}
                >
                  richardhederson@gmail.com
                </Text>
              </Box>
              <Image alt="img" src="/droptipicon.svg"></Image>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default DashBoardHeader;
