import { Box, Flex, Text, Image, Link, Button, Img } from "@chakra-ui/react";

const services = [
  {
    title: "NIF Number",
    price: "69€",
    features: [
      "NIF Number",
      "NIF Password",
      "Fiscal Representative for one year",
      "Apply online minutes.",
      "Turnaround time 5 working days.",
    ],
  },
  {
    title: "Bank Account",
    price: "250€",
    features: [
      "Portuguese bank account",
      "Debit Card Online",
      "Online and mobile Banking",
      "Open remotely",
    ],
  },
  {
    title: "Company Formation",
    price: "675€",
    features: [
      "Portuguese Company with your choice of name",
      "Government fee included",
      "Business Bank Account",
      "Virtual Address*",
      "Accountancy services*",
      "Open remotely",
    ],
  },
  {
    title: "NISS Number",
    price: "69€",
    features: [
      "NIF Number",
      "NIF Password",
      "Fiscal Representative for 1 year",
      "Apply online minutes.",
      "Turnaround time 5 working days.",
    ],
  },
];

const Card = ({ title, price, features }) => (
  <Box
    border="1px solid #7B7A7A"
    borderRadius="24px"
    w={"100%"}
    h={"500px"}
    _hover={{
      background: "linear-gradient(180deg, #1A1A1A 0%, #A73719 100%)",
      color: "white",
      transition: "background 0.3s ease",
      "& svg": {
        color: "white",
      },
      "& .price": {
        color: "white",
      },
      "& a": {
        color: "white",
      },
      "& img.read-more": {
        content: "url('/arrowwhite.svg')",
        filter: "invert(100%)",
      },
    }}
  >
    <Box spacing={4} align="start" justifyContent={"space-between"}>
      <Box p={"20px"} borderBottom={"1px solid #7B7A7A"}>
        <Text fontSize="20px" fontWeight="700" lineHeight={"32px"} mb={"13px"}>
          {title}
        </Text>
        <Text
          className="price"
          fontSize="40px"
          fontWeight="700"
          lineHeight={"51px"}
          fontFamily={"ABCNormal, sans-serif"}
          color="#A73719"
        >
          {price}
        </Text>
      </Box>
      <Flex p={"20px"}>
        <Flex
          justifyContent={"space-between"}
          flexDir={"column"}
          h={"330px"}
          w={"100%"}
        >
          <Flex spacing={2} align="start" flexDir={"column"} gap={"13px"}>
            {features.map((feature, index) => (
              <Flex key={index} gap={"12px"}>
                <Image boxSize="20px" src="/pinktick.svg" alt="check" />
                <Text fontSize={"14px"}>{feature}</Text>
              </Flex>
            ))}
          </Flex>
          <Link
            color={"black"}
            fontWeight="500"
            fontSize={"16px"}
            lineHeight={"18px"}
            href="#"
            _hover={{ textDecoration: "none" }}
            display={"flex"}
            gap={"12px"}
            alignItems={"center"}
          >
            Learn More 
          </Link>
        </Flex>
      </Flex>
    </Box>
  </Box>
);

export default function CardDisplay() {
  return (
    <Box maxW="1240px" mx="auto" p={6}>
      <Text
        fontSize={{
          base: "22px",
          sm: "22px",
          md: "50px",
          lg: "56px",
          xxl: "56px",
          xxxl: "56px",
        }}
        fontWeight="500"
        lineHeight={{
          base: "35px",
          sm: "35px",
          md: "64px",
          lg: "65px",
          xxl: "65px",
          xxxl: "65px",
        }}
        color={"#1A1A1A"}
        mb={2}
      >
        Get cost-effective services
      </Text>
      <Text
        fontSize={{
          base: "16px",
          sm: "16px",
          md: "20px",
          lg: "25px",
          xxl: "30px",
          xxxl: "30px",
        }}
        fontWeight="400"
        lineHeight={{
          base: "25px",
          sm: "25px",
          md: "30px",
          
        }}
        mb={8}
      >
        One flat fee. Safe. Secure. Reliable.
      </Text>
      <Flex wrap="wrap" justifyContent="space-between" gap={6}>
        {services.slice(0, 4).map((service, i) => (
          <Box
            key={i}
            flex={{ base: "0 1 100%", md: "0 1 48%", lg: "0 1 23%" }}
          >
            <Card {...service} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
