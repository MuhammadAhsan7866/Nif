import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const DocumentCards = ({ features }) => {
  return (
    <Container maxW="7xl" mt={12} p={"0px"}>
      <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap={5}>
        {features.map((feature, index) => (
          <Box
            key={index}
            rounded="lg"
            shadow="lg"
            overflow="hidden"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box
              p={6}
              bg={"#EDF2F7"}
              boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
            >
              <Image
                boxSize="48px"
                src={feature.icon}
                alt={`${feature.title} icon`}
                mb={4}
              />
              <Heading
                as="h3"
                fontWeight="semibold"
                fontSize={{base:'20px',sm:'20px',md:'25px'}}
                lineHeight={"30px"}
                mb={"13px"}
                color={"#1A1A1A"}
              >
                {feature.title}
              </Heading>
              <Text
                mt={3}
                fontWeight="400"
                fontSize={"18px"}
                lineHeight={"30px"}
                color={"#7B7A7A"}
              >
                {feature.description}
              </Text>
            </Box>
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default DocumentCards;
