// components/Card.js
import { Box, Text, Button, Img, Link } from "@chakra-ui/react";

const ServiceCard = ({ title, description, buttonText, bgImage, link }) => {
  return (
    <Box
      position="relative"
      maxW={{
        base: "100%",
        sm: "100%",
        md: "330px",
        lg: "255px",
        xxl: "300px",
        xxxl: "300px",
      }}
      width="100%"
      height="400px"
      bgImage={`url(${bgImage})`}
      bgSize="cover"
      bgPosition="center"
      borderRadius="20px"
      overflow="hidden"
      border={"1px solid #3b3b3b"}
      boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
      _hover={{ mt: "-1rem" }}
      transition={"all .3s"}
      cursor={"pointer"}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.32)"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="flex-start"
        color="white"
        p="25px"
      >
        <Text
          fontSize="20px"
          fontWeight="400"
          lineHeight="30px"
          mb="16px"
          textAlign="left"
        >
          {title}
        </Text>
        <Text
          mb="25px"
          textAlign="left"
          fontSize="14px"
          lineHeight="1.1375rem"
          color={"#ffffffb3"}
        >
          {description}
        </Text>
        <Link href={link} passHref>
          <Button
            colorScheme="white"
            bg="white"
            color="#A73719"
            p="12px 24px"
            borderRadius="100px"
            fontWeight={"400"}
          >
            {buttonText}
            <Img ml="12px" src="/ArrowUpRight.svg" alt="Arrow Icon" />
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ServiceCard;
