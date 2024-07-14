import React, { useState } from "react";
import { Flex, Box, Heading, Text, Img } from "@chakra-ui/react";

const ResponsiveCards = () => {
  const [cardData] = useState([
    {
      title: "Apply in 3 simple steps.",
      steps: [
        { img: "/makepayment.svg", text: "Make Payment" },
        { img: "/uploadicon.svg", text: "Upload Documents" },
        { img: "/fillform.svg", text: "Fill Form" },
      ],
    },
    {
      title: "Only 3 documents required.",
      steps: [
        { img: "/fillform.svg", text: "Power of attorney" },
        { img: "/proveadress.svg", text: "Proof of address" },
        { img: "/passport.svg", text: "Passport copy" },
      ],
    },
  ]);

  return (
    <Flex
      direction={{
        base: "column",
        lg: "row",
      }}
      my="30px"
      gap="30px"
    >
      {cardData.map((card, index) => (
        <Box
          key={index}
          bg="#F1F5F5"
          borderRadius="24px"
          p={{ base: "20px", sm: "20px", md: "35px" }}
          w="100%"
          textAlign="center"
        >
          <Heading
            fontSize={{ base: "20px", sm: "20px", md: "32px" }}
            lineHeight="40px"
            fontWeight="500"
            mb="35px"
            textAlign={"left"}
         
          >
            {card.title}
          </Heading>
          <Flex
            direction={{
              base: "column",
              xxl: "row",
            }}
            gap="10px"
            alignItems={{
              base: "flex-start",
              sm: "flex-start",
              md: "flex-start",
              xxl: "center",
              xxxl: "center",
            }}
            justify="space-between"
          >
            {card.steps.map((step, stepIndex) => (
              <Flex
                key={stepIndex}
                gap="10px"
                align="center"
                my={["10px", "0"]}
              >
                <Img src={step.img} alt={step.text} />
                <Text fontSize="15px" lineHeight="30px" fontWeight="400">
                  {step.text}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Box>
      ))}
    </Flex>
  );
};

export default ResponsiveCards;
