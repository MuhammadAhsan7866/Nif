import React, { useState, useRef } from "react";
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

const BlogsList = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "Blog 1", description: "Description 1", date: "2022", image: null },
    { id: 2, title: "Blog 2", description: "Description 2", date: "2023", image: null },
    { id: 3, title: "Blog 3", description: "Description 3", date: "2024", image: null },
  ]);
  const [blogToDelete, setBlogToDelete] = useState(null);
  const [blogToEdit, setBlogToEdit] = useState(null);
  const [editFormData, setEditFormData] = useState({ id: null, title: "", description: "", date: "", image: null });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();
  const cancelRef = useRef();

  const handleDelete = () => {
    setBlogs(blogs.filter((blog) => blog.id !== blogToDelete));
    onClose();
  };

  const handleOpenDeleteDialog = (id) => {
    setBlogToDelete(id);
    onOpen();
  };

  const handleOpenEditDialog = (blog) => {
    setEditFormData(blog);
    setBlogToEdit(blog.id);
    onEditOpen();
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    setEditFormData((prev) => ({ ...prev, image: URL.createObjectURL(e.target.files[0]) }));
  };

  const handleEditSubmit = () => {
    setBlogs((prev) =>
      prev.map((blog) =>
        blog.id === blogToEdit ? { ...blog, ...editFormData } : blog
      )
    );
    onEditClose();
  };

  return (
    <Box>
      <Heading mb="35px"  fontFamily={'Space Grotesk'} fontWeight={'700'} lineHeight={'60px'} fontSize={'40px'}>
        All Uploaded Blogs List
      </Heading>
      <Box bg="white" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" p="30px">
        <Box>
          <Table>
            <Thead>
              <Tr>
                <Th fontSize="16px" lineHeight="24px" fontWeight="600" fontFamily="Space Grotesk">Title</Th>
                <Th fontSize="16px" lineHeight="24px" fontWeight="600" fontFamily="Space Grotesk">Description</Th>
                <Th fontSize="16px" lineHeight="24px" fontWeight="600" fontFamily="Space Grotesk">Date/Years</Th>
                <Th fontSize="16px" lineHeight="24px" fontWeight="600" fontFamily="Space Grotesk">Image</Th>
                <Th fontSize="16px" lineHeight="24px" fontWeight="600" fontFamily="Space Grotesk">Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {blogs.map((blog) => (
                <Tr key={blog.id}>
                  <Td>{blog.title}</Td>
                  <Td>{blog.description}</Td>
                  <Td>{blog.date}</Td>
                  <Td>{blog.image ? <Img src={blog.image} boxSize="50px" objectFit="cover" /> : "No image"}</Td>
                  <Td>
                    <IconButton
                      icon={<EditIcon />}
                      onClick={() => handleOpenEditDialog(blog)}
                      mr={2}
                    />
                    <IconButton
                      icon={<DeleteIcon />}
                      onClick={() => handleOpenDeleteDialog(blog.id)}
                      colorScheme="red"
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>

          <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
            <AlertDialogOverlay>
              <AlertDialogContent maxWidth='600px' w='100%'>
                <AlertDialogHeader fontSize="lg" fontWeight="bold" color={'white'} bg={'#1D2740'}>
                  Delete Blog
                </AlertDialogHeader>
                <AlertDialogBody >
                  Are you sure you want to delete this blog?
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="red" onClick={handleDelete} ml={3}>
                    Delete
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>

          <Modal isOpen={isEditOpen} onClose={onEditClose} >
            <ModalOverlay />
            <ModalContent maxWidth='700px' w='100%'>
              <ModalHeader color={'white'} bg={'#1D2740'}>Edit Blog</ModalHeader>
              <ModalCloseButton color={'white'} />
              <ModalBody bg={'#0F172A'} color={'white'}>
                <FormControl id="title" mb={4}>
                  <FormLabel>Title</FormLabel>
                  <Input
                    type="text"
                    name="title"
                    value={editFormData.title}
                    onChange={handleEditChange}
                  />
                </FormControl>
                <FormControl id="description" mb={4}>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    name="description"
                    value={editFormData.description}
                    onChange={handleEditChange}
                  />
                </FormControl>
                <FormControl id="date" mb={4}>
                  <FormLabel>Date</FormLabel>
                  <Input
                    type="text"
                    name="date"
                    value={editFormData.date}
                    onChange={handleEditChange}
                  />
                </FormControl>
                <FormControl id="image" mb={4}>
                  <FormLabel>Upload Image</FormLabel>
                  <Box border={'1px solid #E0E5F2'} h='100%' py={'10px'} px={'10px'} borderRadius={'8px'}>
                  <Input type="file" onChange={handleImageUpload} border={'none'} h={'100%'} />
                 
                  </Box>
                  {editFormData.image && <Img src={editFormData.image} alt="uploaded" style={{ marginTop: '10px', maxWidth: '100%' }} />}
                </FormControl>
              </ModalBody>
              <ModalFooter color={'white'} bg={'#1D2740'}>
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
