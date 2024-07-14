import {
  Box,
  Flex,
  Table,
  Tbody,
  Tr,
  Td,
  Text,
  Button,
  useColorModeValue,
  Container,
  Heading,
} from "@chakra-ui/react";

const Packages = () => {
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const tableBgColor = useColorModeValue("white", "gray.800");

  const tableData = [
    {
      description: "Basic company creation cost (excl. State fee)",
      marketPrice: "From 1.000€",
      rauvaPrice: "From 500€",
      labelprices: "Market Prices",
      pricesbg: "rgb(150 150 150)",
    },
    {
      description: "Business account opening",
      marketPrice: "15€",
      rauvaPrice: "Free",
      highlight: true,
    },
  ];

  return (
    <Container p={"0px"} maxW={"1240px"} pos={"relative"}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        p={4}
      >
        <Box overflowX="auto" w="full">
          <Heading mb={"50px"}>Compare company creation packages</Heading>
          <Box overflowX="auto" w="full">
          <Table
            minW={{ base: "600px", sm: "600px", md: "auto" }}
            bg={tableBgColor}
            border="1px"
            borderColor={borderColor}
            h={"468px"}
          >
            <Tbody>
              {tableData.map((item, index) => (
                <Tr key={index}>
                  <Td
                    p={"32px 8px 32px 12px"}
                    borderBottom="1px"
                    borderRight="1px"
                    borderColor={borderColor}
                    fontSize={"20px"}
                    color={"black"}
                    fontWeight={"600"}
                  >
                    {item.description}
                  </Td>
                  <Td
                    py={"px"}
                    px={"32px"}
                    borderBottom="1px"
                    borderRight="1px"
                    borderColor={borderColor}
                    textAlign="center"
                    position="relative"
                    fontSize={"20px"}
                    color={"black"}
                    fontWeight={"600"}
                  >
                    {item.marketPrice}
                  </Td>
                  <Td
                    py={"px"}
                    px={"32px"}
                    borderBottom="1px"
                    borderRight="1px"
                    borderColor={borderColor}
                    textAlign="center"
                    fontSize={"20px"}
                    color={"black"}
                    fontWeight={"600"}
                  >
                    {item.rauvaPrice}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>

          </Box>
         
        </Box>

        {/* Box with image and content */}
        <Box
          bgImage="url('/pakgimg.webp')" // Replace with your actual image path
          bgSize="cover"
          bgPosition="center"
          h={"600px"}
          p={6}
          display={{ base: "none", md: "none", lg: "flex" }} // Hide on mobile, show on larger screens
          justifyContent={"center"}
          flexDir={"column"}
          alignItems={"center"}
          w={{ base: "full", md: "37%" }}
          color="black" // Text color
        >
          <Text
            as="h2"
            fontSize="xl"
            fontWeight="bold"
            color="orange.500"
            mb={4}
          >
            Rauva, with Supercharged
          </Text>
          <Flex
            flexDir="column"
            gap={"90px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text fontSize="lg">From 0€</Text>
            <Text fontSize="lg">Free</Text>
            <Text fontSize="lg">Free</Text>
            <Text fontSize="lg">Free</Text>
          </Flex>
          <Button
            mt={6}
            bg="black"
            color="white"
            py={2}
            px={4}
            rounded="full"
            w={"100%"}
          >
            Get started
          </Button>
        </Box>
      </Flex>
    </Container>
  );
};

export default Packages;
