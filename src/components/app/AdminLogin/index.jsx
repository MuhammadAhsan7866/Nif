import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Container,
  Img,
} from "@chakra-ui/react";
import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
      valid = false;
    }

    if (!password) {
      errors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (email !== "getmenif@yopmail.com" || password !== '12345678') {
        alert("email or password is incorrect");
      }else
      window.location.replace("/AdminDashboard");
    } else {
      console.log("Form is invalid");
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bgImage={"url('path_to_your_background_image.jpg')"}
      bgSize={"cover"}
      bgPosition={"center"}
    >
      <Stack
        spacing={8}
        mx={"auto"}
        maxW={"650px"}
        py={12}
        px={6}
        w={"100%"}
        bg={"white"}
        rounded={"20px"}
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
      >
        <Stack align={"center"}>
          <Img src="/logonif.png" />
          <Heading
            fontSize={"50px"}
            lineHeight={"80px"}
            fontFamily={"ABCNormal, sans-serif"}
            fontWeight={"700"}
            color={"#1A1A1A"}
          >
            Admin Login
          </Heading>
        </Stack>
        <Box p={8}>
          <Stack spacing={4}>
            <FormControl id="email" isInvalid={errors.email}>
              <FormLabel color={'#1A1A1A'} fontSize={'14px'} lineHeight={'14px'} fontWeight={'600'}>Email address</FormLabel>
              <Input type="email" value={email} onChange={handleEmailChange} />
              {errors.email && <Text color="red.500">{errors.email}</Text>}
            </FormControl>
            <FormControl id="password" isInvalid={errors.password}>
              <FormLabel color={'#1A1A1A'} fontSize={'14px'} lineHeight={'14px'} fontWeight={'600'}>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
              {errors.password && <Text color="red.500">{errors.password}</Text>}
            </FormControl>
            <Stack spacing={10}>

              <Button
                bg={"#A73719"}
                color={"white"}
                borderRadius={'50px'}
                _hover={{
                  bg: "#7f2a14",
                }}
                onClick={handleSubmit}
              >
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
