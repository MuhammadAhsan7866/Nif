import {
  Box,
  Image,
  Flex,
  Heading,
  Text,
  Button,
  Img,
  Link,
} from "@chakra-ui/react";

export default function Expats() {
  return (
    <Box  maxW={{
      base: "100%",
      md: "768px",
      lg: "1240px",
      xl: "1280px",
      xxl: "1280px",
      xxxl: "1240px",
    }}
    margin={'auto'}
    px={{base:'20px',sm:'20px',md:'auto'}}
    > 
      <Heading
        as="h2"
        fontSize={{
          base: "25px",
          md: "30px",
          lg: "40px",
          xl: "50px",
          xxl: "50px",
        }}
        lineHeight={{
          base: "32px",
          md: "40px",
          lg: "52px",
          xl: "52px",
          xxl: "52px",
        }}
        fontWeight="500"
        mb={{ base: "8px", md: "45px" }}
        fontFamily={"ABCNormal,sans-serif!important"}
        
      >
        Trusted by expats for safe, reliable, and efficient services
      </Heading>
      <Box
        pos="relative"
        mx="auto"
        rounded="lg"
        overflow="hidden"
        minH={{ base: "409px", md: "350px",lg:'500px',xxl:'400px',xxxl:'400px' }}
      >
        <Image
          src="/businessgrl.png"
          alt="business girl"
          w="100%"
          minH={{base:'450px',sm:'450px',md:'350px',lg:'500px',xxl:'450px',xxxl:'450px'}}
          objectFit="cover"
        />
        <Flex
          pos="absolute"
          inset="0"
          bgOpacity="50%"
          align="center"
          p={{ base: "20px", md: "45px" }}
        >
          <Box
            p={{ base: "20px", md: "30px" }}
            color="white"
            maxW={{ base: "100%", md: "400px",lg:'500px',xxl:'600px',xxxl:'600px' }}
            bgColor="rgb(255 255 255 / 27%)"
            backdropFilter="blur(8px)"
            borderRadius={"20px"}
          >
            <Box>
              <Text
              fontWeight={"500"}
              fontFamily={"ABCNormal,sans-serif!important"}
              color={'white'}
              fontSize={{
                base: "30px",
                sm: "30px",
                md: "28px",
                lg: "33px",
                xxl: "48px",
                xxxl: "48px",
              }}
              mb={'15px'}
              
              >
                Obtain your NIF
              </Text>
              <Text
                mb={{ base: "20px", md: "30px" }}
                fontSize={{
                  base: "14px",
                  md: "16px",
                  lg: "20px",
                  xl: "20px",
                  xxl: "20px",
                }}
                lineHeight={{
                  base: "25px",
                  md: "25px",
                  lg: "32px",
                  xl: "32px",
                  xxl: "32px",
                }}
                fontWeight={"400"}
                fontFamily={"ABCNormal,sans-serif!important"}
              >
                Start by applying for a Portuguese NIF number and then get your
                bank account and then create a Portuguese company. Steered by
                our encouraging team of specialists.
              </Text>
              <Link href="/NifForm">
                <Button
                  colorScheme="white"
                  bg={"#A73719"}
                  color={"white"}
                  p={"12px 24px"}
                  borderRadius={"100px"}
                  fontSize={"16px"}
                  fontWeight={"500"}
                  lineHeight={"18px"}
                  _hover={{ bg: "#7f2a14" }}
                >
                  Apply for a NIF
                  <Img
                    ml={"12px"}
                    src="/ArrowUpRightwhite.svg"
                    alt="Arrow Up Right white"
                  />
                </Button>
              </Link>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
