import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Img,
  Link,
  Button,
} from "@chakra-ui/react";

export default function CompanyFormation({
  bgImage,
  headingText,
  ButtonText,
  bannerImageSrc,
}) {
  return (
    <Box
      as="section"
      bgImage={`url(${bgImage})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      color="white"
      pb={{
        base: "48px",
        sm: "48px",
        md: "150px",
        lg: "150px",
        xxl: "180px",
        xxxl: "180px",
      }}
      pt={{
        base: "130px",
        sm: "130px",
        md: "150px",
        lg: "150px",
        xxl: "180px",
        xxxl: "180px",
      }}
      pos="relative"
      px={{ base: "30px", lg: "40px", xxl: "100px" }}
    >
      <Container maxW="1240px" p="0">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          pos="relative"
          zIndex="1"
        >
          <Box flex="1" mb={{ base: 8, md: 0 }} mr={{ md: 8 }}>
            <Heading
              as="h1"
              fontSize={{ base: "48px", md: "48px", lg: "40px", xxl: "56px" }}
              mb={{base:'32px',sm:'32px',md:'50px',xxl:'70px',xxxl:'70px'}}
              maxW="547px"
            fontFamily={"ABCNormal, sans-serif"}
              lineHeight={{ base: "57px", md: "56px", lg: "56px", xxl: "56px" }}
              fontWeight="500"
            >
              {headingText}
            </Heading>
            <Link href="/NifForm">
              <Button
                colorScheme="white"
                bg={"#A73719"}
                color={"white"}
                p={"12px 24px"}
                borderRadius={"100px"}
                fontSize={"18px"}
                fontWeight={"500"}
                lineHeight={"18px"}
                _hover={{ bg: "#7f2a14" }}
                h={"50px"}
               
              >
                {ButtonText}
                <Img
                  ml={"12px"}
                  src="/ArrowUpRightwhite.svg"
                  alt="Arrow Up Right white"
                />
              </Button>
            </Link>
           
          </Box>
          <Box flex="1" display="flex" justifyContent="center">
            <Image
              src={bannerImageSrc}
              alt="Banner Photo"
              rounded="lg"
              shadow="lg"
              w={{base:'100%',sm:'100%',md:'70%'}}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
