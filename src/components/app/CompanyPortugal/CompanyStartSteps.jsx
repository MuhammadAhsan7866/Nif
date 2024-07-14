import { Box, Button, Container, Grid, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';

const features = [
  {
    title: "Fill out the form",
    description: "A limited liability Portuguese company with digital company documents.",
    icon: "/moretime.svg",
   
  },
  {
    title: "Upload the documents",
    description: "Tax authority registration and online portal access.",
    icon: "/lesstress.svg",
   
  },
  {
    title: "Make payment",
    description: "Partner with Portuguese industry experts dedicated to your success.",
    icon: "/svemoney.svg",
    
  }
];

export default function StartSteps() {
  return (
    <Box 
      py={{ base: 16, md: 24 }} 
      px={{ base: 4, sm: 6, lg: 8 }} 
      bgImage="url('/stepsbg.png')" 
      bgSize="cover"
    >
      <Container maxW="7xl" textAlign="center">
        <Heading 
          as="h2" 
          fontSize={{base:'35px',sm:'35px',md:'40px',xxl:'50px',xxxl:'50px'}}
          lineHeight={{base:'45px',sm:'45px',md:'55px',xxl:'60px',xxxl:'60px'}}
          fontFamily={"ABCNormal, sans-serif"}
          fontWeight={"500"}
          mb={"40px"}
          color={'#1A1A1A'}
        >
       Start your company in three easy steps
        </Heading>
        
      </Container>
      <Container maxW="7xl" mt={12} p={'0px'}>
        <Grid 
          templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} 
          gap={5}
         
        >
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
              <Box p={6} bg={'#EDF2F7'} boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}
               _hover={{
                bg: "linear-gradient(90deg, #eb4e23 0%, #000 50%)",
                "& h3, & p": {
                  color: "white",
                },
              }}
              cursor={'pointer'}
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
                  fontSize={"25px"}
                  lineHeight={"30px"}
                  mb={"13px"}
                  color={'#1A1A1A'}
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
      <Container maxW="7xl" mt={12} textAlign="center">
      <Button
          bg="black"
          color="white"
          py={2}
          px={6}
          rounded="full"
          fontWeight="semibold"
          mx="auto"
          _hover={{bg:'#A73719'}}
          rightIcon={
            <Image alt="arrow" src="/ArrowUpRightwhite.svg" />
            
          }
        >
          Get started
        </Button>
        
      </Container>
    </Box>
  );
}
