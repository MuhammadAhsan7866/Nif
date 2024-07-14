// pages/index.js
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  Image,
  Img,
} from "@chakra-ui/react";
export default function NifLandingPage() {
  return (
    <>
      <Box
        as="section"
        bg="#1A1A1A"
        color="white"
        pt={{
          base: "130px",
          sm: "130px",
          md: "150px",
          lg: "150px",
          xxl: "200px",
          xxxl: "200px",
        }}
        pos={"relative"}
        px={{
          base: "30px",
          sm: "30px",
          md: "30px",
          lg: "40px",
          xxl: "100px",
          xxxl: "100px",
        }}
        pb={{
          base: "48px",
          sm: "48px",
          md: "150px",
          lg: "150px",
          xxl: "200px",
          xxxl: "200px",
        }}
      >
        <Container maxW="1240px" p={"0px"}>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            pos={"relative"}
            zIndex={"1"}
          >
            <Box flex="1" mb={{ base: 8, md: 0 }} mr={{ md: 8 }}>
              <Heading
                as="h1"
                fontSize={{
                  base: "45px",
                  sm: "45px",
                  md: "45px",
                  lg: "55px",
                  xxl: "56px",
                  xxxl: "56px",
                }}
                mb={6}
                maxW={"500px"}
                fontWeight={"500"}
                lineHeight={"55px"}
              >
                Your move to Portugal made
                <br />
                <Text
                  as="span"
                  bgGradient="linear-gradient(90deg, #fff, #21bf43 85%, #e2927c 104%)"
                  bgClip="text"
                >
                  Simple
                </Text>
                <Text
                  as="span"
                  bgGradient="linear(90deg, #fff, #eb4e23 85%, #e2927c 104%)"
                  bgClip="text"
                >
                
                  <br />
                  Hassle free
                </Text>
              </Heading>
              <Text
                fontSize={{
                  base: "16px",
                  sm: "16px",
                  md: "16px",
                  lg: "24px",
                  xxl: "24px",
                  xxxl: "24px",
                }}
                lineHeight={"1.75rem"}
                fontWeight={"400"}
                mb={6}
                color={"rgb(185 184 184)"}
                fontFamily={"ABCNormal,sans-serif!important"}
              >
                Portugal’s Best Relocation Website
              </Text>
              <List spacing={2}>
                <Flex flexDirection={"column"} gap={"15px"}>
                  <ListItem
                    display="flex"
                    alignItems="center"
                    fontSize="16px"
                    lineHeight={"30px"}
                    fontWeight={"400"}
                    gap={"10px"}
                    color={"rgb(185 184 184)"}
                    fontFamily={"ABCNormal,sans-serif!important"}
                  >
                    <Img src="testistar.svg" alt="testistar" />
                    Get your NIF, NISS and SNS number
                  </ListItem>
                  <ListItem
                    display="flex"
                    alignItems="center"
                    fontSize="16px"
                    lineHeight={"30px"}
                    fontWeight={"400"}
                    gap={"10px"}
                    color={"rgb(185 184 184)"}
                    fontFamily={"ABCNormal,sans-serif!important"}
                  >
                    <Img src="testistar.svg" alt="testistar" />
                    Obtain your Portuguese Bank account
                  </ListItem>
                  <ListItem
                    display="flex"
                    alignItems="center"
                    fontSize="16px"
                    lineHeight={"30px"}
                    fontWeight={"400"}
                    gap={"10px"}
                    color={"rgb(185 184 184)"}
                    fontFamily={"ABCNormal,sans-serif!important"}
                  >
                    <Img src="testistar.svg" alt="testistar" />
                    Set up a Portuguese company
                  </ListItem>
                </Flex>
              </List>
            </Box>
            <Box flex="1" display={"flex"} justifyContent={"center"}>
              <Image
                src="/bannerphoto.png"
                alt="bannerphoto"
                rounded="lg"
                shadow="lg"
              />
            </Box>
          </Flex>
        </Container>
        <Img
          pos={"absolute"}
          top={"0"}
          right={"0"}
          zIndex={"0"}
          src="/lyerbg.svg"
          alt="lyerbg"
          maxW={"50%"}
          maxH={"100%"}
        />
      </Box>
    </>
  );
}
