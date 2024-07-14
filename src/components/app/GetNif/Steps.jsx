import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  Container,
  Img,
  OrderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";

const Steps = ({ stepData,ImageSection }) => {
  return (
    <Container maxW={"1240px"} p="0px">
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify={{ base: "center", lg: "space-between" }}
        spacing={{ base: 6, lg: 0 }}
        lg={{ spaceX: 6 }}
        alignItems={"flex-start"}
      >
        <Img
          w={{ base: "100%", sm: "100%", md: "100%", xxl: "50%", xxxl: "50%" }}
          mb={{ base: "30px", sm: "30px", md: "30px", xxl: "0px", xxxl: "0px" }}
          // src="/group-img.webp"
          src= {ImageSection}
          alt="Group Image"
          borderRadius={'18px'}
        />
        <Box maxW="550px" w={"100%"}>
          <VStack
            mt={4}
            spacing={4}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
          >
            {stepData.map((step, index) => (
              <Flex align="start" key={index}>
                <Box ml={4}>
                  <Heading
                    as="h3"
                    fontSize={"25px"}
                    lineHeight={"40px"}
                    fontWeight={"700"}
                    mb={{base:'32px',sm:'32px',md:'40px',xxl:'50px',xxxl:'55px'}}
                  >
                    {step.title}
                  </Heading>
                  <OrderedList>
                    {step.tasks.map((task, taskIndex) => (
                      <ListItem
                        color={"#1A1A1A"}
                        fontSize={"20px"}
                        lineHeight={"28px"}
                        fontWeight={"400"}
                        mb={{base:'25px',sm:'25px',md:'40px',xxl:'45px',xxxl:'45px'}}
                        key={taskIndex}
                      >
                        {task}
                      </ListItem>
                    ))}
                  </OrderedList>
                </Box>
              </Flex>
            ))}
          </VStack>
          <Link href="/NifForm">
            <Button
              colorScheme="white"
              bg={"#A73719"}
              color={"white"}
              p={"10px 32px"}
              borderRadius={"100px"}
              fontSize={"18px"}
              fontWeight={"600"}
              lineHeight={"18px"}
              _hover={{ bg: "#7f2a14" }}
              h={"auto"}
              maxW={"300px"}
              w={"100%"}
              mt={{base:'20px',sm:'20px',md:'10px'}}
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
      </Flex>
    </Container>
  );
};

export default Steps;
