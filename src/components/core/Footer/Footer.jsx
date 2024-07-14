import {
  Box,
  Container,
  Text,
  Link,
  Flex,
  Divider,
  Img,
  keyframes
} from "@chakra-ui/react";

const FooterNif = () => {
  const padding = {
    base: "30px",
    lg: "40px",
    xxl: "100px",
    xxxl: "100px",
  };

  const linkStyle = {
    px: 4,
    py: 2,
    border: "1px solid #A73719",
    bg: "#FFF2EE",
    color: "#A73719",
    rounded: "full",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "32px",
    w: { base: "100%", md: "auto" },
  };
  const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;
  return (
    <Box bg="#F4F8F8" py={padding} px={padding}>
      <Container maxW={"1240px"} p="0px">
        <Flex justifyContent="space-between" alignItems="center" mb="25px">
          <Img src="/redlogo.png" />
          <Flex gap={{ base: "6px", md: "20px" }}>
            <Link
              href="#"
              _hover={{
                animation: `${pulse} 1s infinite`,
              }}
            >
              <Img src="/facebook.svg" alt="Facebook" />
            </Link>
            <Link
              href="#"
              _hover={{
                animation: `${pulse} 1s infinite`,
              }}
            >
              <Img src="/twitter.png" alt="Twitter" />
            </Link>
            <Link
              href="#"
              _hover={{
                animation: `${pulse} 1s infinite`,
              }}
            >
              <Img src="/linkedin.png" alt="LinkedIn" />
            </Link>
            <Link
              href="#"
              _hover={{
                animation: `${pulse} 1s infinite`,
              }}
            >
              <Img src="/whatsapp.png" alt="WhatsApp" />
            </Link>
          </Flex>
        </Flex>

        <Text
          mt={2}
          color="#7B7A7A"
          fontWeight="400"
          lineHeight="25px"
          fontSize="14px"
        >
          getmenif.com does not operate as a bank, accountant, tax/investment
          advisor, or law firm; rather, it serves as an intermediary that
          streamlines the process of collaborating with financial and legal
          professionals. Getmenif.com provide fiscal representation services for
          non-residents. It is important to note that our services do not
          constitute legal or financial advice, and we highly recommend seeking
          the guidance of a qualified solicitor or financial professional for
          tailored advice concerning your specific circumstances.
        </Text>

        <Divider my={6} borderColor="#7B7A7A" />
        <Flex
          align="center"
          mb="25px"
          fontSize="24px"
          fontWeight="600"
          lineHeight="28px"
          color="#1A1A1A"
          justifyContent="flex-start"
          gap="10px"
        >
          <Img src="/testistar.svg" />
          Associated concerns
        </Flex>
        <Flex
          mt={4}
          flexWrap="wrap"
          gap="25px"
          w={{ base: "100%", lg: "75%" }}
          textAlign="center"
        >
          {[
            "www.apply2migrate.com",
            "www.apply2study.com",
            "www.apply2work.com",
            "www.getusonline.tech",
            "www.adwaitstonex.com",
            "www.nejafahir.com",
            "www.apply2intern.com",
          ].map((link, index) => (
            <Link key={index} href={`http://${link}`} {...linkStyle}>
              {link}
            </Link>
          ))}
        </Flex>
        <Divider my={6} borderColor="#7B7A7A" />
        <Flex
          justify="space-between"
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: "15px", md: "0px" }}
        >
          <Text
            color="#1A1A1A !important"
            fontWeight="400"
            fontSize="12px"
            lineHeight="14px"
          >
            Copyright © 2023 getmenif.com. All Rights Reserved.
          </Text>
          <Flex
            spacing={4}
            flexDir={{ base: "column", md: "row" }}
            gap={{ base: "15px", md: "12px" }}
          >
            <Link
              href="#"
              _hover={{ textDecoration: "underline" }}
              fontSize={"12px"}
            >
              Terms & Conditions
            </Link>
            <Link
              href="#"
              _hover={{ textDecoration: "underline" }}
              fontSize={"12px"}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              _hover={{ textDecoration: "underline" }}
              fontSize={"12px"}
            >
              Cookie Policy
            </Link>
            <Link
              href="#"
              _hover={{ textDecoration: "underline" }}
              fontSize={"12px"}
            >
              Disclaimer
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default FooterNif;
