import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  IconButton,
  Stack,
  Container,
  Img,
  Collapse,
} from "@chakra-ui/react";

const faqData = [
  {
    question: "What Is NIF And Why Do I Need It?",
    answer:
      "The acronym NIF stands for Número de Identificação Fiscal, which is also referred to as Número de contribuinte and serves as the Portuguese taxpayer identification number. This identification is mandatory for any transaction or process in Portugal, whether it involves obtaining a visa, signing a rental agreement, or entering into a mobile phone contract.",
  },
  {
    question: "How Long Will It Take To Get NIF?",
    answer:
      "The time it takes to get a NIF can vary, but typically it takes a few days to a couple of weeks depending on the method of application and the current processing times.",
  },
  {
    question: "What Is Included In The Cost?",
    answer:
      "The cost includes the processing fee for the application, any service fees charged by the agency or representative, and any additional costs that may arise depending on specific circumstances.",
  },
  {
    question: "Who Will Be My Fiscal Representative?",
    answer:
      "Your fiscal representative will be a professional appointed to handle your tax matters in Portugal. This could be an accountant, lawyer, or a specialized service provider.",
  },
  {
    question: "Is It Possible To Get NIF For A Child?",
    answer:
      "Yes, it is possible to get a NIF for a child. The process involves providing the necessary documentation, including the child's identification and proof of guardianship.",
  },
];

export default function Faq() {
  const [openIndexes, setOpenIndexes] = useState([0]); // Initialize with the first item open

  const handleToggle = (index) => {
    setOpenIndexes((prevState) =>
      prevState.includes(index)
        ? prevState.filter((i) => i !== index)
        : [...prevState, index]
    );
  };

  const padding = {
    base: "30px",
    lg: "40px",
    xxl: "100px",
    xxxl: "100px",
  };
  const paddingTop = {
    base: "30px",
    lg: "40px",
    xxl: "0px",
    xxxl: "0px",
  };
  return (
    <Box bg="white" color="black" pb={padding} px={padding} pt={paddingTop}>
      <Container p="0px" maxW={"48.75rem"}>
      <Heading
            as="h1"
            fontSize={{
              base: "30px",
              sm: "30px",
              md: "40px",
              xxl: "50px",
              xxxl: "50px",
            }}
            lineHeight={{
              base: "34px",
              sm: "34px",
              md: "40px",
              xxl: "70px",
              xxxl: "70px",
            }}
            fontWeight={"500"}
            mb={'45px'}
          >
            Questions? We’re glad you asked
          </Heading>
        <Box mb={6}>
          <Flex
            align="center"
            mb="25px"
            fontSize="24px"
            fontWeight="600"
            lineHeight="28px"
            justifyContent="flex-start"
            gap="10px"
          >
            <Img src="/testistar.svg" alt="star icon" />
            FAQ’s
          </Flex>
        
        </Box>
        <Stack spacing={4}>
          {faqData.map((faq, index) => (
            <Box key={index} borderBottom="1px solid #a9a9a9" pb={4}>
              <Flex
                justify="space-between"
                align="center"
                cursor="pointer"
                onClick={() => handleToggle(index)}
              >
                <Heading
                  as="h2"
                  fontSize={{
                    base: "16px",
                    sm: "16px",
                    md: "16px",
                    
                  }}
                  fontWeight="500"
                  lineHeight="28px"
                >
                  {faq.question}
                </Heading>
                <IconButton
                  icon={
                    <Img
                      src={
                        openIndexes.includes(index) ? "/minus.svg" : "/plus.svg"
                      }
                      alt={
                        openIndexes.includes(index)
                          ? "Collapse icon"
                          : "Expand icon"
                      }
                    />
                  }
                  variant="unstyled"
                  aria-label={
                    openIndexes.includes(index) ? "Collapse" : "Expand"
                  }
                />
              </Flex>
              <Collapse in={openIndexes.includes(index)}>
                <Text
                  mt="25px"
                  fontSize={"16px"}
                  fontWeight="400"
                  lineHeight="32px"
                >
                  {faq.answer}
                </Text>
              </Collapse>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
