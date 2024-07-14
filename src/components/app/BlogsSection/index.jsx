import {
  Box,
  Heading,
  Text,
  Image,
  Link,
  Flex,
  Button,
  Img,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const blogs = [
  {
    title: "Nunc Vulputate Libero Et Velit Interdum, Ac",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    image: "/blog1.png",
  },
  {
    title: "Nunc Vulputate Libero Et Velit Interdum, Ac",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    image: "/blog2.png",
  },
  {
    title: "Nunc Vulputate Libero Et Velit Interdum, Ac",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    image: "/blog3.png",
  },
  {
    title: "Nunc Vulputate Libero Et Velit Interdum, Ac",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    image: "/blog1.png",
  },
  {
    title: "Nunc Vulputate Libero Et Velit Interdum, Ac",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    image: "/blog1.png",
  },
];

const BlogSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 10000);
    getBlogs();
    return () => clearInterval(interval);
  }, []);
  const [blogs, setBlogs] = useState();
  const getBlogs = async () => {
    const blogs = await axios.get('http://localhost:4000/posts');
    setBlogs(blogs.data.posts);
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      {blogs && blogs.map((blog, index) => (
        <Box key={index} p={4}>
          <Box bg="white" shadow="lg" rounded="20px">
            <Image
              src={blog.url}
              alt={`Blog ${index + 1}`}
              w="full"
              objectFit="cover"
              roundedTop="20px"
            />
            <Box p={6}>
            <Text
                fontSize="20px"
                fontWeight="400"
                lineHeight="32px"
                color="#7B7A7A"
                mb="22px"
              >
                {new Date(blog.date).toLocaleDateString()}
              </Text>
              <Heading
                as="h2"
                fontSize="24px"
                fontWeight="600"
                lineHeight="34px"
                color="#1A1A1A"
                my="18px"
              >
                {blog.title}
              </Heading>
              <Text
                fontSize="20px"
                fontWeight="400"
                lineHeight="32px"
                color="#7B7A7A"
                mb="22px"
              >
                {blog.description}
              </Text>
              <Link href="#" _hover={{ textDecoration: "none" }}>
                <Button
                  colorScheme="white"
                  bg="#A73719"
                  color="white"
                  p="12px 24px"
                  borderRadius="100px"
                  fontSize="16px"
                  fontWeight="500"
                  lineHeight="18px"
                  _hover={{ bg: "#722c19" }}
                >
                  Read Blog
                  <Img ml="12px" src="/arrowwhite.svg" alt="Arrow" />
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      ))}
    </Slider>
  );
};

export default function BlogSection() {
  return (
    <Box maxW="1240px" mx="auto">
      <Box mb={8}>
        <Flex
          align="center"
          mb={2}
          fontSize="24px"
          fontFamily="Public Sans"
          fontWeight="600"
          lineHeight="28px"
          color="#1A1A1A"
          gap="10px"
        >
          <Img src="/testistar.svg" alt="Testistar" />
          Our Blogs
        </Flex>
        <Box w={{ base: "100%", xxl: "65%" }}>
          <Heading
            as="h1"
            fontSize={{ base: "40px", md: "50px", xxl: "56px" }}
            lineHeight={{ base: "3.5rem", md: "3.5rem", xxl: "3.5rem" }}
            fontWeight="500"
          
            color="#1A1A1A"
            mb={4}
            mt="18px"
          >
            Stay Tuned
          </Heading>
          <Text
            fontSize={{ base: "20px", md: "20px", xxl: "20px" }}
            lineHeight={{ base: "40px", md: "40px", xxl: "50px" }}
            fontWeight="400"
          fontFamily={"ABCNormal, sans-serif"}
            color="#1A1A1A"
          >
            Stay updated on Portugal’s current affairs. Learn. Enable. Pioneer.
          </Text>
        </Box>
      </Box>
      <BlogSlider />
    </Box>
  );
}
