import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Img,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import ResponsiveCards from "./TabsFormDoc";
import NifImgSection from "./NifTabSection";

export default function DocumentSteps() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Container maxW={{ base: "100%", md: "960px", lg: "1240px" }} p={0}>
      <Box textAlign="left" mb={6}>
        <Heading
          as="h1"
          fontSize={{
            base: "25px",
            md: "40px",
            lg: "50px",
            xxl: "56px",
            xxxl: "56px",
          }}
          lineHeight={{
            base: "30px",
            md: "40px",
            lg: "60px",
            xxl: "65px",
            xxxl: "65px",
          }}
          fontWeight="500"
          mb="15px"
         
        >
          Get NIF. Bank Account. Company. NISS
        </Heading>
        <Text
          color="#1A1A1A"
          textAlign="left"
          mb="40px"
          fontSize={{
            base: "20px",
            md: "20px",
            lg: "30px",
            xxl: "30px",
            xxxl: "30px",
          }}
          lineHeight={'1.75rem'}
          fontWeight="400"
        
        >
          Conveniently. Cost Effectively. Efficiently. Safely.
        </Text>
      </Box>
      <Tabs variant="unstyled" onChange={(index) => setActiveTab(index)}>
        <TabList
          justifyContent="space-evenly"
          mb={6}
          gap={{ base: "25px", md: "25px" }}
          flexDir={{
            base: "column",
            md: "row",
            lg: "row",
            xl: "row",
            xxl: "row",
          }}
        >
          {[
            "NIF Number",
            "Bank Account",
            "Company Formation",
            "NISS Number",
          ].map((tab, index) => (
            <Tab
              key={index}
              py={2}
              px={4}
              rounded="full"
              bg={activeTab === index ? "#A73719" : "gray.200"}
              color={activeTab === index ? "white" : "gray.700"}
              _selected={{ bg: "#A73719", color: "white" }}
              maxW={{ base: "100%", md: "272px" }}
              w={{ base: "100%", md: "100%" }}
              boxShadow={"8px 8px 16px 0px #00000014"}
              fontSize={{
                base: "16px",
                md: "12px",
                lg: "16px",
                xxl: "16px",
                xxxl: "16px",
              }}
            >
              {tab}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel p={0}>
            <NifImgSection />
            <Box py={6}>
              <ResponsiveCards />
            </Box>
          </TabPanel>
          <TabPanel>{/* Content for Bank Account tab */}</TabPanel>
          <TabPanel>{/* Content for Company Formation tab */}</TabPanel>
          <TabPanel>{/* Content for NISS Number tab */}</TabPanel>
        </TabPanels>
      </Tabs>
      <Box textAlign="center" mt={6}>
        <Button
          colorScheme="white"
          bg={"#1A1A1A"}
          color={"white"}
          p={"12px 24px"}
          borderRadius={"100px"}
          fontSize={"16px"}
          fontWeight={"500"}
          lineHeight={"18px"}
          _hover={{ bg: "#3b3939" }}
        >
          Read More
          <Img ml={"12px"} src="/arrowwhite.svg" alt="arrowwhite" />
        </Button>
      </Box>
    </Container>
  );
}
