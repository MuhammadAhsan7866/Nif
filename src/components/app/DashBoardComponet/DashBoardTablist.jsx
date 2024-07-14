import {
  Flex,
  Image,
  Tab,
  TabList,
  Tabs,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
const tabItems = [
  {
    label: "Upload Blogs",
   
  },
  {
    label: "Blogs List",
    
  },

  { label: "Logout",},
];
const DashBoardTablist = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [activeTab, setActiveTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const handleSubTabChange = (index) => {
    setActiveSubTab(index);
  };
  return (
    <TabList borderLeft={"none"} w="100%" justifyContent={"flex-start"}>
      {tabItems.map((item, index) => (
        <Tab
          color="white"
          justifyContent={{ base: "center", xxl: "flex-start" }}
          key={index}
          textAlign={"left"}
          mb="40px"
          borderRadius={"4px"}
          _selected={{ borderBottom: "none", bg: "#F87222", color: "white" }}
          maxW={"341px"}
          w="100%"
          py="14px"
          px={{ base: "10px", xxl: "23px" }}
          bg={'grey'}
          
        >
          <Flex
            align="center"
            gap="24px"
            flexDirection={{ base: "column", xxl: "row" }}
          >
          
            <Text fontSize="20px" fontWeight="500" lineHeight={"150%"}>
              {item.label}
            </Text>
          </Flex>
        </Tab>
      ))}
    </TabList>
  );
};

export default DashBoardTablist;
