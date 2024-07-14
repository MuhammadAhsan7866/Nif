// pages/index.js
import { Box, Heading, Grid, Flex, Image, Text, Link, Button } from '@chakra-ui/react';

const cards = [
  {
    imgSrc: "https://placehold.co/40x40",
    title: "Fast Track Process",
    description: "Registration complete in 3 business days."
  },
  {
    imgSrc: "https://placehold.co/40x40",
    title: "Company / personal NIF",
    description: "Get your company or personal tax number quickly and easily."
  },
  {
    imgSrc: "https://placehold.co/40x40",
    title: "Extra shareholder",
    description: "Add an extra shareholder to your Portuguese company."
  },
  {
    imgSrc: "https://placehold.co/40x40",
    title: "Portuguese virtual address",
    description: "Get a virtual address, perfect for global entrepreneurs."
  },
  {
    imgSrc: "https://placehold.co/40x40",
    title: "Tax representation",
    description: "For entrepreneurs who reside outside of the EU/EEA."
  }
];

export default function UploadsDocx() {
  return (
    <Box bg="gray.100" p={8} rounded="lg">
      <Heading 
      textAlign="center"  
      fontSize={{ base: "29px", sm: "29px", md: "50px" }}
      lineHeight={{ base: "42px", sm: "42px", md: "64px" }}
      fontFamily={"ABCNormal, sans-serif"}
      fontWeight={"500"}
      mb={"40px"}
      color={"#1A1A1A"}
      >
      Upload these three documents
      </Heading>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={4}>
        {cards.slice(0, 3).map((card, index) => (
          <Box key={index} bg="white" p={6} rounded="lg" shadow="md">
            <Flex alignItems="center" mb={4}>
              <Image src={card.imgSrc} alt={card.title} boxSize="40px" mr={2} />
              <Heading fontSize="md" fontWeight="semibold">{card.title}</Heading>
            </Flex>
            <Text color="gray.600" mb={4}>{card.description}</Text>
          </Box>
        ))}
      </Grid>
      <Box textAlign="center" mt={8}>
       <Link>
       <Button
          bg="black"
          color="white"
          py={2}
          px={6}
          rounded="full"
          fontWeight="semibold"
          mx="auto"
          _hover={{ bg: "#A73719" }}
          rightIcon={<Image alt="arrow" src="/ArrowUpRightwhite.svg" />}
        >
          Get started
        </Button>
       </Link>
      </Box>
    </Box>
  );
}
