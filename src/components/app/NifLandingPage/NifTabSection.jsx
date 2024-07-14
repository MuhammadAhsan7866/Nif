import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

const NifImgSection = () => {
  return (
    <Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        bgImage="url('/group.png')"
        bgSize="cover"
        bgPos="top"
        p={{
          base: "20px",
          sm: "20px",
          md: "20px",
          lg: "30px",
          xxl: "40px",
          xxxl: "40px",
        }}
        rounded="24px"
        minH={{
          base: "100%",
          sm: "100%",
          md: "350px",
          lg:'350px',
          xxl:'450px',
          xxxl:'450px'
         
        }}
      >
        <Box
          maxW={{
            base: "100%",
            sm: "100%",
            md: "450px",
            lg: "450px",
            xxl: "550px",
            xxxl: "550px",
          }}
          w={{
            base: "100%",
            md: "100%",
            lg: "100%",
            xxl: "50%",
            xxxl: "50%",
          }}
          p={6}
          bgColor="rgb(255 255 255 / 35%)"
          backdropFilter="blur(8px)"
          rounded="24px"
        >
          {/* <Heading
            as="h1"
            fontSize={{
              base: "20px",
              sm: "20px",
              md: "40px",
              lg: "40px",
              xxl: "48px",
              xxxl: "48px",
            }}
            fontWeight="500"
            lineHeight={{
              base: "30px",
              sm: "30px",
              md: "50px",
              lg: "50px",
              xxl: "50px",
              xxxl: "50px",
            }}
            mb={"30px"}
            color={"black"}
            
          >
            Embark on a new journey to{" "}
            <Text as="span" color="#A73719">
              Portugal’s new chapter
            </Text>
          </Heading> */}
          <List
            spacing={2}
            color="gray.700"
            mb={{
              base: "50px",
              sm: "50px",
              md: "50px",
              
            }}
          >
            <ListItem
              fontSize={{
                base: "16px",
                sm: "16px",
                md: "20px",
                lg: "20px",
                xxl: "20px",
                xxxl: "20px",
              }}
              lineHeight={{
                base: "23px",
                sm: "23px",
                md: "30px",
                lg: "30px",
                xxl: "30px",
                xxxl: "30px",
              }}
              fontWeight={"400"}
              color={"black"}
            >
              Get your NIF
            </ListItem>
            <ListItem
              fontSize={{
                base: "16px",
                sm: "16px",
                md: "20px",
                lg: "20px",
                xxl: "20px",
                xxxl: "20px",
              }}
              lineHeight={{
                base: "25px",
                sm: "25px",
                md: "32px",
              }}
              fontWeight={"400"}
              color={"black"}
            >
              Apply in minutes.
            </ListItem>
            <ListItem
              fontSize={{
                base: "16px",
                sm: "16px",
                md: "20px",
                lg: "20px",
                xxl: "20px",
                xxxl: "20px",
              }}
              lineHeight={"32px"}
              fontWeight={"400"}
              color={"black"}
            >
              From your mobile Phone.
            </ListItem>
            <ListItem
              fontSize={{
                base: "16px",
                sm: "16px",
                md: "20px",
                lg: "20px",
                xxl: "20px",
                xxxl: "20px",
              }}
              lineHeight={"32px"}
              fontWeight={"400"}
              color={"black"}
            >
              No need to visit any government office.
            </ListItem>
          </List>
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
              Order NIF
              <Img
                ml={"12px"}
                src="/ArrowUpRightwhite.svg"
                alt="Arrow pointing upwards and to the right"
              />
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default NifImgSection;
