import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  ButtonGroup,
  Img,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [headerBg, setHeaderBg] = useState("transparent");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setHeaderBg("#1A1A1A");
    } else {
      setHeaderBg("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box bg={headerBg} px={4} position="fixed" width="100%" zIndex={10}>
      <Flex
        h={"100px"}
        alignItems="center"
        justifyContent="space-between"
        maxW={"1240px"}
        m={"auto"}
        p={"12px"}
      >
        <Box>
          <Link href="http://localhost:3000/">
          <Img src="/logo.png" />
          </Link>
        
        </Box>

        <Flex alignItems="center" display={{ base: "none", md: "flex" }}>
          <HStack
            as="nav"
            spacing={4}
            display={{
              base: "none",
              md: "none",
              lg: "block",
              xxl: "block",
              xxxl: "block",
            }}
          >
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                color="white"
                bg={"transparent"}
                _hover={{ color: "gray.400" }}
                _focus={{ boxShadow: "none", bg: "transparent" }}
                _active={{ bg: "transparent" }}
                
              >
                Services
              </MenuButton>
              <MenuList>
                <MenuItem as={Link} href="/GetNif"
                _hover={{bg:'#A73719',color:'white'}}
               
                fontSize={'16px'}
                lineHeight={'18px'}
                fontWeight={'500'}
                >
                  Get Nif
                </MenuItem>
                <MenuItem as={Link} href="/GetNiss"
                _hover={{bg:'#A73719',color:'white'}}>
                  Get Niss
                </MenuItem>
                <MenuItem as={Link} href="/BankAccount"
                _hover={{bg:'#A73719',color:'white'}}
                >
                  Get Bank Account
                </MenuItem>
                <MenuItem as={Link} href="/CompanyPortugal"
                _hover={{bg:'#A73719',color:'white'}}
                >
                  Create Company
                </MenuItem>
              </MenuList>
            </Menu>
            {/* <Link href="#">
              <Button
                color="white"
                bg={"transparent"}
                colorScheme="transparent"
                aria-label="Pricing"
                _hover={{ color: "gray.400" }}
              >
                Pricing
              </Button>
            </Link> */}
            <Link href="#">
              <Button
                color="white"
                bg={"transparent"}
                colorScheme="transparent"
                aria-label="Contact Us"
                _hover={{ color: "gray.400" }}
              >
                Contact Us
              </Button>
            </Link>
          </HStack>
        </Flex>

        <Flex
          alignItems="center"
          display={{
            base: "none",
            md: "none",
            lg: "block",
            xxl: "block",
            xxxl: "block",
          }}
        >
          <ButtonGroup spacing={4}>
            <Link href={"https://wa.me/message/YSBWOOKTVDLTC1"}>
              <Button
                bg={"transparent"}
                colorScheme="transparent"
                border={"1px solid white"}
                px={"24px"}
                borderRadius={"100px"}
                h={"50px"}
                _hover={{ bg: "white", color: "black", border: "none" }}
              >
                <Img src="/whatsapp.png" mr={"10px"} />
                Talk to an expert
              </Button>
            </Link>

            <Link href="/NifForm">
              <Button
                colorScheme="white"
                bg={"#A73719"}
                color={"white"}
                p={"12px 24px"}
                borderRadius={"100px"}
                fontSize={"16px"}
                fontWeight={"600"}
                lineHeight={"18px"}
                _hover={{ bg: "#7f2a14" }}
                h={"50px"}
              >
                Apply NIF
                <Img
                  ml={"12px"}
                  src="/ArrowUpRightwhite.svg"
                  alt="Arrow Up Right white"
                />
              </Button>
            </Link>
          </ButtonGroup>
        </Flex>

        <IconButton
          size="md"
          icon={<HamburgerIcon color="white" />}
          aria-label="Open Menu"
          display={{
            base: "block",
            md: "block",
            lg: "none",
            xxl: "none",
            xxxl: "none",
          }}
          onClick={onOpen}
          bg={"transparent"}
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            <Stack as="nav" spacing={4}>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  w="100%"
                  bg={"transparent"}
            
                  _hover={{ color: "gray.400" }}
                  _focus={{ boxShadow: "none", bg: "transparent" }}
                  _active={{ bg: "transparent" }}
                  onMouseEnter={onOpen}
                  onMouseLeave={onClose}
                >
                  Services
                </MenuButton>
                <MenuList >
                  <MenuItem as={Link} href="/GetNif"
                  
                  >
                    Get Nif
                  </MenuItem>
                  <MenuItem as={Link} href="/GetNiss">
                    Get Niss
                  </MenuItem>
                  <MenuItem as={Link} href="/BankAccount">
                    Get Bank Account
                  </MenuItem>
                  <MenuItem as={Link} href="/CompanyPortugal">
                    Create Company
                  </MenuItem>
                </MenuList>
              </Menu>
              {/* <Link href="#">
                <Button
                  color="black"
                  bg={"transparent"}
                  colorScheme="transparent"
                  aria-label="Pricing"
                  w="100%"
                  _hover={{color:'#A73719'}}
                >
                  Pricing
                </Button>
              </Link> */}
              <Link href="#">
                <Button
                  color="black"
                  bg={"transparent"}
                  colorScheme="transparent"
                  aria-label="Contact Us"
                  w="100%"
                >
                  Contact Us
                </Button>
              </Link>
              <Link href={"https://wa.me/message/YSBWOOKTVDLTC1"}>
                <Button
                  bg={"#A73719"}
                  color={"white"}
                  colorScheme="transparent"
                  border={"1px solid white"}
                  px={"24px"}
                  borderRadius={"100px"}
                  h={"50px"}
                  w="100%"
                >
                  <Img src="/whatsapp.png" mr={"10px"} />
                  Talk to an expert
                </Button>
              </Link>

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
                  h={"50px"}
                  w="100%"
                >
                  Apply NIF
                  <Img
                    ml={"12px"}
                    src="/ArrowUpRightwhite.svg"
                    alt="Arrow Up Right white"
                  />
                </Button>
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
