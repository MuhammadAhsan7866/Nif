import React, { useState, useRef, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Box,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Image,
  Img,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import axios from "axios";

const BlogsList = () => {
  const serverUrl='http://localhost/4000'
  const [blogs, setBlogs] = useState([
    // { id: 1, title: "Blog 1", description: "Description 1", date: "2022", image: null },
    // { id: 2, title: "Blog 2", description: "Description 2", date: "2023", image: null },
    // { id: 3, title: "Blog 3", description: "Description 3", date: "2024", image: null },
  ]);
  const [blogToDelete, setBlogToDelete] = useState(null);
  const [blogToEdit, setBlogToEdit] = useState(null);
  const [editFormData, setEditFormData] = useState({
    id: null,
    title: "",
    description: "",
    date: "",
    image: null,
  });
  const [image, setImage] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();
  const cancelRef = useRef();

  const handleOpenDeleteDialog = (id) => {
    console.log("in del", id);
    setBlogToDelete(id);
    onOpen();
  };

  const handleOpenEditDialog = (blog) => {
    setEditFormData(blog);
    setBlogToEdit(blog._id);
    onEditOpen();
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    setEditFormData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));

    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleEditSubmit = async () => {
    try {
      const formData = new FormData();
      if (editFormData.title) formData.append("title", editFormData.title);
      if (editFormData.description)
        formData.append("description", editFormData.description);
      if (editFormData.date) formData.append("date", editFormData.date);
      if (editFormData.image) {
        formData.append("file", editFormData.image);
      } else {
        alert("Invalid image file");
        return;
      }
      const response = await axios.put(
        `http://localhost:4000/posts/${blogToEdit}`,
        formData
      );
      if (response.data.status) {
        const editFormData = response.data.data;
        setBlogs((prev) =>
          prev.map((blog) =>
            blog._id === blogToEdit ? { ...blog, ...editFormData } : blog
          )
        );
        onEditClose();
        setImage(null)
        setEditFormData(null)
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:4000/posts");
      if (response.data.status) {
        setBlogs(response.data.posts);
        console.log(response.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const deleteBlog = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/posts/${blogToDelete}`
      );
      if (response.data.status) {
        setBlogs((prev) => prev.filter((blog) => blog._id !== blogToDelete));
        //  setBlogs(response.data.data)
        console.log(response.data.data);
        onClose();
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <Box>
      <Heading
        mb="35px"
        fontFamily={"ABCNormal, sans-serif"}
        fontWeight={"700"}
        lineHeight={"60px"}
        fontSize={"40px"}
      >
        All Uploaded Blogs List
      </Heading>
      <Box bg="white" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" p="30px">
        <Box>
          <Table>
            <Thead>
              <Tr>
                <Th
                  fontSize="16px"
                  lineHeight="24px"
                  fontWeight="600"
                fontFamily={"ABCNormal, sans-serif"}
                >
                  Title
                </Th>
                <Th
                  fontSize="16px"
                  lineHeight="24px"
                  fontWeight="600"
                fontFamily={"ABCNormal, sans-serif"}
                >
                  Description
                </Th>
                <Th
                  fontSize="16px"
                  lineHeight="24px"
                  fontWeight="600"
                fontFamily={"ABCNormal, sans-serif"}
                >
                  Date/Years
                </Th>
                <Th
                  fontSize="16px"
                  lineHeight="24px"
                  fontWeight="600"
                fontFamily={"ABCNormal, sans-serif"}
                >
                  Image
                </Th>
                <Th
                  fontSize="16px"
                  lineHeight="24px"
                  fontWeight="600"
                fontFamily={"ABCNormal, sans-serif"}
                >
                  Actions
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {blogs?.map((blog) => (
                <Tr key={blog._id}>
                  <Td>{blog.title}</Td>
                  <Td>{blog.description}</Td>
                  <Td>{blog.date}</Td>
                  <Td>
                    {blog.url ? (
                      <Img src={blog.url} boxSize="50px" objectFit="cover" />
                    ) : (
                      "No image"
                    )}
                  </Td>
                  <Td>
                    <IconButton
                      icon={<EditIcon />}
                      onClick={() => handleOpenEditDialog(blog)}
                      mr={2}
                    />
                    <IconButton
                      icon={<DeleteIcon />}
                      onClick={() => handleOpenDeleteDialog(blog._id)}
                      colorScheme="red"
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>

          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent maxWidth="600px" w="100%">
                <AlertDialogHeader
                  fontSize="lg"
                  fontWeight="bold"
                  color={"white"}
                  bg={"#1D2740"}
                >
                  Delete Blog
                </AlertDialogHeader>
                <AlertDialogBody>
                  Are you sure you want to delete this blog?
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="red" onClick={deleteBlog} ml={3}>
                    Delete
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>

          <Modal isOpen={isEditOpen} onClose={onEditClose}>
            <ModalOverlay />
            <ModalContent maxWidth="700px" w="100%">
              <ModalHeader color={"white"} bg={"#1D2740"}>
                Edit Blog
              </ModalHeader>
              <ModalCloseButton color={"white"} />
              <ModalBody bg={"#0F172A"} color={"white"}>
                <FormControl id="title" mb={4}>
                  <FormLabel>Title</FormLabel>
                  <Input
                    type="text"
                    name="title"
                    value={editFormData?.title}
                    onChange={handleEditChange}
                  />
                </FormControl>
                <FormControl id="description" mb={4}>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    name="description"
                    value={editFormData?.description}
                    onChange={handleEditChange}
                  />
                </FormControl>
                <FormControl id="date" mb={4}>
                  <FormLabel>Date</FormLabel>
                  <Input
                    type="text"
                    name="date"
                    value={editFormData?.date}
                    onChange={handleEditChange}
                  />
                </FormControl>
                <FormControl id="image" mb={4}>
                  <FormLabel>Upload Image</FormLabel>
                  <Box
                    border={"1px solid #E0E5F2"}
                    h="100%"
                    py={"10px"}
                    px={"10px"}
                    borderRadius={"8px"}
                  >
                    <Input
                      type="file"
                      onChange={handleImageUpload}
                      border={"none"}
                      h={"100%"}
                    />
                  </Box>
                  {image && (
                    <Img
                      src={image}
                      alt="uploaded"
                      style={{ marginTop: "10px", maxWidth: "100%" }}
                    />
                  )}
                </FormControl>
              </ModalBody>
              <ModalFooter color={"white"} bg={"#1D2740"}>
                <Button onClick={onEditClose}>Cancel</Button>
                <Button colorScheme="blue" onClick={handleEditSubmit} ml={3}>
                  Upload
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogsList;
