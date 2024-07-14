// src/components/UploadBlogs.js
import React, { useState } from "react";
import { Box, Button, Image, Input, Textarea, VStack } from "@chakra-ui/react";

const UploadBlogs = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box p={'30px'} boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'} borderRadius={'15px'}>
      <VStack spacing={4} align="stretch">
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          placeholder="Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Input
          placeholder="Year"
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <Input type="file" accept="image/*" onChange={handleImageUpload} />
        {imagePreview && (
          <Box w={'100%'} minH={'100%'} >
            <Image src={imagePreview} alt="Uploaded Image" />
          </Box>
        )}
        <Button
          colorScheme="#0F172A"
          onClick={() => console.log({ title, description, date, year, image })}
          bg={"#0F172A"}
          color={"white"}
          maxW={"300px"}
          w={"100%"}
        >
          Upload
        </Button>
      </VStack>
    </Box>
  );
};

export default UploadBlogs;
