// pages/index.js
import { Box, Container, Flex, SimpleGrid } from "@chakra-ui/react";
import ServiceCard from "./ServicesCard";

const HomePageCards = () => {
  return (
    <Box
      pb={{
        base: "50px",
        sm: "50px",
        md: "50px",
        lg: "70px",
        xxl: "100px",
        xxxl: "100px",
      }}
      pt={"50px"}
      px={{
        base: "20px",
        sm: "20px",
        md: "30px",
        lg: "40px",
        xxl: "100px",
        xxxl: "100px",
      }}
    >
      <Container maxW={"1240px"} mt={{ base: "auto", md: "-150px" }} p={"0px"}>
        <Flex
          justify={"center"}
          alignItems={"center"}
          gap={"20px"}
          flexDir={{base:'column',sm:'column',md:'row'}}
          flexWrap={{base:'nowrap',sm:'nowrap',md:'wrap',lg:'nowrap',xxl:'nowrap',xxxl:'nowrap'}}
        >
          <ServiceCard
            title="Get NIF"
            description="Our streamlined process makes obtaining a NIF number for Portugal fast, easy, and convenient."
            buttonText="Get NIF"
            bgImage="/nicard.png"
            altText="NIF"
            link="/GetNif"
          />
          <ServiceCard
            title="Get Bank Account"
            description="Our efficient process ensures opening a bank account in Portugal is quick, simple, and hassle-free."
            buttonText="Get Bank Account"
            bgImage="/bannker.png"
            altText="Bank Account"
            link="/BankAccount"
          />
          <ServiceCard
            title="Create Company"
            description="Our service offers the fastest, simplest, and most cost-effective way to create a company in Portugal."
            buttonText="Create Company"
            bgImage="/cp.png"
            altText="Create Company"
            link="/CompanyPortugal"
          />
          <ServiceCard
            title="Get Niss"
            description="Our simplified approach makes getting an NISS number in Portugal straightforward and hassle-free."
            buttonText="Get NISS"
            bgImage="/nissbg.png"
            altText="NISS"
            link="/GetNiss"
          />
        </Flex>
        {/* <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={4}>
       
        </SimpleGrid> */}
      </Container>
    </Box>
  );
};

export default HomePageCards;
