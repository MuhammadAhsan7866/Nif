import React, { useState } from 'react';
import {
  Box,
  Text,
  Heading,
  Grid,
  GridItem,
  Button,
  useColorModeValue,
  Container,
  Flex,
  Img,
} from "@chakra-ui/react";

export default function OtherServices() {
  const [visibleServices, setVisibleServices] = useState(9);
  const bg = useColorModeValue("gray.100", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.400");

  const services = [
    {
      title: "Get SNS User Number",
      description: "Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      iconservice: "/moretime.svg",
    },
    {
      title: "Tax representation",
      description: "Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      iconservice: "/moretime.svg",
    },
    {
      title: "Open activity in Finances",
      description: "Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      iconservice: "/moretime.svg",
    },
    {
      title: "Reset your SAPA credentials",
      description: "Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      iconservice: "/moretime.svg",
    },
    {
      title: "Translation and Notary services",
      description: "Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      iconservice: "/moretime.svg",
    },
    {
      title: "Get Portuguese Birth / Marriage certificate",
      description: "Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      iconservice: "/moretime.svg",
    },
    {
      title: "Register marriage",
      description: "Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      iconservice: "/moretime.svg",
    },
    {
      title: "Get Visa",
      description: "Passive income (D7), Digital Nomad (D8), Job Seekers (D9),Independent Worker (D2), Family based (D6)",
      iconservice: "/moretime.svg",
    },
    {
      title: "Get Nationality based on",
      description: "Ancestry and Naturalization",
      iconservice: "/moretime.svg",
    },
    {
      title: "Accountancy services",
      description: "Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      iconservice: "/moretime.svg",
    },
    {
      title: "Virtual address",
      description: "Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      iconservice: "/moretime.svg",
    },

  ];

  const handleSeeMore = () => {
    setVisibleServices((prev) => prev + 2);
  };

  return (
    <Box p={{ base: '30px', sm: '30px', md: '35px', xxl: '70px', xxxl: '100px' }}>
      <Container maxW={"1240px"} p={"0px"}>
        <Box textAlign="center" mb={8}>
          <Flex justifyContent={"center"} alignItems={"center"} gap={"5px"}>
            <Img src="/testistar.svg" />
            <Text
              fontSize="20px"
              lineHeight={"28px"}
              color={"#1A1A1A"}
              fontWeight={"600"}
            >
              Services
            </Text>
            <Img src="/testistar.svg" />
          </Flex>

          <Heading
            as="h1"
            fontSize={{ base: '30px', sm: '30px', md: '40px', xxl: '55px', xxxl: '55px' }}
            lineHeight={{ base: '45px', sm: '45px', md: '45px', xxl: '55px', xxxl: '55px' }}
            fontFamily={"ABCNormal, sans-serif"}
            fontWeight="500"
            my={"40px"}
          >
            Other services page
          </Heading>
        </Box>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "repeat(3, 1fr)" }}
          gap={8}
        >
          {services.slice(0, visibleServices).map((service, index) => (
            <GridItem
              key={index}
              bg={bg}
              p={8}
              rounded="18px"
              shadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              _hover={{
                bg: "linear-gradient(90deg, #eb4e23 0%, #000 50%)",
                "& h2, & p": {
                  color: "white",
                },
              }}
              cursor={'pointer'}
            >
              <Img src={service.iconservice} mb={"25px"} />
              <Heading
                as="h2"
                fontWeight="semibold"
                fontSize={"25px"}
                lineHeight={"30px"}
                mb={"13px"}
                transition="color 0.3s"
              >
                {service.title}
              </Heading>
              <Text
                mt={2}
                fontWeight="400"
                fontSize={"18px"}
                lineHeight={"30px"}
                color={"#7B7A7A"}
                transition="color 0.3s"
              >
                {service.description}
              </Text>
            </GridItem>
          ))}
        </Grid>
        {visibleServices < services.length && (
          <Box textAlign="center" mt={8}>
            <Button
              colorScheme="#A73719"
              bg={"#A73719"}
              size="lg"
              rounded="full"
              shadow="md"
              _hover={{ bg: "#A73719" }}
              onClick={handleSeeMore}
            >
              See More Services
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}
