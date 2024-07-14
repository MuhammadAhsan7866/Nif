// components/Widget.js
import { Box, Image, Text, Button, VStack, useColorModeValue } from "@chakra-ui/react";

export default function PaymentSuccesAlert() {
  return (
    <Box
      maxW="600px"
      w={'100%'}
      mx="auto"
      bg={useColorModeValue("white", "gray.800")}
      rounded="xl"
      shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      overflow="hidden"
      p={8}
      textAlign="center"
    >
      <VStack spacing={4}>
        <Image
          src="/confrim.png"
          alt="success-icon"
         
         
        />
        <Text fontSize="35px" fontWeight="bold" color={useColorModeValue("gray.900", "gray.100")}>
        €69.00
        </Text>
        <Text fontSize="25px" fontWeight="semibold" color={useColorModeValue("gray.700", "gray.300")}>
          Payment Successful!
        </Text>
        <Text color={useColorModeValue("gray.600", "gray.400")} mt={1}>
          The payment has been done successfully.
          <br />
          Thanks for being there with us.
        </Text>
       
      </VStack>
    </Box>
  );
}
