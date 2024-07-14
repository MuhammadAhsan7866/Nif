import { Box, Text, Img } from "@chakra-ui/react";
import Slider from "react-slick";
import { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const blogs = [
  {
    description:
      "“Obtaining a NIF with getmenif.com was a seamless and speedy process. The team was extremely accommodating and readily available to provide assistance throughout the journey. Using their services has been a delightful experience, and I received my NIF in less than 2 business days. I'm grateful that I chose them over other alternatives, and I wholeheartedly recommend their services without hesitation.”",
    reviewname: "HITESH SHAH",
    country: "USA",
  },
  {
    description:
      "“Obtaining a NIF with getmenif.com was a seamless and speedy process. The team was extremely accommodating and readily available to provide assistance throughout the journey. Using their services has been a delightful experience, and I received my NIF in less than 2 business days. I'm grateful that I chose them over other alternatives, and I wholeheartedly recommend their services without hesitation.”",
    reviewname: "HITESH SHAH",
    country: "USA",
  },
  {
    description:
      "“Obtaining a NIF with getmenif.com was a seamless and speedy process. The team was extremely accommodating and readily available to provide assistance throughout the journey. Using their services has been a delightful experience, and I received my NIF in less than 2 business days. I'm grateful that I chose them over other alternatives, and I wholeheartedly recommend their services without hesitation.”",
    reviewname: "HITESH SHAH",
    country: "USA",
  },
  {
    description:
      "“Obtaining a NIF with getmenif.com was a seamless and speedy process. The team was extremely accommodating and readily available to provide assistance throughout the journey. Using their services has been a delightful experience, and I received my NIF in less than 2 business days. I'm grateful that I chose them over other alternatives, and I wholeheartedly recommend their services without hesitation.”",
    reviewname: "HITESH SHAH",
    country: "USA",
  },
  {
    description:
      "“Obtaining a NIF with getmenif.com was a seamless and speedy process. The team was extremely accommodating and readily available to provide assistance throughout the journey. Using their services has been a delightful experience, and I received my NIF in less than 2 business days. I'm grateful that I chose them over other alternatives, and I wholeheartedly recommend their services without hesitation.”",
    reviewname: "HITESH SHAH",
    country: "USA",
  },
];

const TestimonialSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2, // Default to 2
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
      {blogs.map((blog, index) => (
        <Box key={index} p={4}>
          <Box bg="white" shadow="lg" rounded="20px" p={"25px"}>
            <Img src="/testi-icon.png" />
            <Box>
              <Text
                fontSize="16px"
                fontWeight="400"
                lineHeight="30px"
                color="#7B7A7A"
                my="22px"
              >
                {blog.description}
              </Text>
              <Text
                fontSize="24px"
                fontWeight="600"
                lineHeight="28px"
                color="#A73719"
                mb={"7px"}
              >
                {blog.reviewname}
              </Text>
              <Text
                fontSize="16px"
                fontWeight="400"
                lineHeight="30px"
                color="#1A1A1A"
              >
                {blog.country}
              </Text>
            </Box>
          </Box>
        </Box>
      ))}
    </Slider>
  );
};

export default TestimonialSlider;
