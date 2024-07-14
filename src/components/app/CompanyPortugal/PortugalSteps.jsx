import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  SimpleGrid,
  useColorModeValue,
  Container,
  Link,
  Button,
  Img,
} from "@chakra-ui/react";

const cardData = [
  {
    title: "More Time",
    description: "Set up your business from the comfort of your home.",
    imgSrc: "/moretime.svg",
    alt: "moretime",
  },
  {
    title: "Less Stress",
    description: "Set up your business from the comfort of your home.",
    imgSrc: "lesstress.svg",
    alt: "lesstress",
  },
  {
    title: "Save money",
    description: "Set up your business from the comfort of your home.",
    imgSrc: "/svemoney.svg",
    alt: "svemoney",
  },
];

const CompanyPortugal = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const cardBgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.900", "white");

  return (
    <Container bg={bgColor} p={"0px"} maxW={"1240px"}>
      <Heading
        as="h2"
        fontSize={{base:'30px',sm:'30px',md:'40px',xxl:'50px',xxxl:'50px'}}
        lineHeight={{base:'40px',sm:'40px',md:'40px',xxl:'50px',xxxl:'50px'}}
        fontFamily={"ABCNormal, sans-serif"}
        fontWeight={"500"}
        mb={"40px"}
        color={textColor}
      >
        Create and Run your Portuguese company cost-effectively
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {cardData.slice(0, 3).map((card, index) => (
          <Box key={index} p={"32px"} bg={cardBgColor} rounded="15px" boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}
          _hover={{
            bg: "linear-gradient(90deg, #eb4e23 0%, #000 50%)",
            "& h2, & p": {
              color: "white",
            },
          }}
          cursor={'pointer'}
          >
            <Image
              src={card.imgSrc}
              alt={card.alt}
              ContainerSize="40px"
              mb={"25px"}
            />
            <Text
              fontWeight="semibold"
              fontSize={"25px"}
              lineHeight={"30px"}
              mb={"13px"}
              color={textColor}
            >
              {card.title}
            </Text>
            <Text
              fontWeight="400"
              fontSize={"18px"}
              lineHeight={"30px"}
              color={"#7B7A7A"}
            >
              {card.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
      <Flex  justifyContent={'center'} alignItems={'center'} mt={'35px'}>
      <Link href="/NifForm">
        <Button
          colorScheme="white"
          bg={"#A73719"}
          color={"white"}
          p={"12px 24px"}
          borderRadius={"100px"}
          fontSize={"18px"}
          fontWeight={"600"}
          lineHeight={"18px"}
          _hover={{ bg: "#7f2a14" }}
          h={"50px"}
         
          m={'auto'}
        >
          Apply Company Account
          <Img
            ml={"12px"}
            src="/ArrowUpRightwhite.svg"
            alt="Arrow Up Right white"
          />
        </Button>
      </Link>
      </Flex>
      
    </Container>
  );
};

export default CompanyPortugal;
