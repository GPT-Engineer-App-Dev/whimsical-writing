import { Heading, Link } from "@chakra-ui/react";
import { Box, Container, Flex, Text, VStack, Button, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container maxW="container.xl">
      <Flex as="header" py={4} justifyContent="space-between" alignItems="center" borderBottom="1px" borderColor="gray.200">
        <Heading as="h1" size="lg">My Personal Blog</Heading>
        <Flex as="nav">
          <Link as={RouterLink} to="/" mx={2}>Home</Link>
          <Link as={RouterLink} to="/about" mx={2}>About</Link>
          <Link as={RouterLink} to="/blog" mx={2}>Blog</Link>
        </Flex>
        <Button onClick={toggleColorMode} ml={4}>
          {colorMode === "light" ? "Dark Mode" : "Light Mode"}
        </Button>
      </Flex>

      <Box as="main" py={8}>
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Heading as="h2" size="md">Blog Posts</Heading>
          <Button as={RouterLink} to="/add-post" colorScheme="teal">Add New Post</Button>
        </Flex>
        <VStack spacing={4} align="stretch">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">{post.title}</Heading>
                <Text mt={4}>{post.content}</Text>
              </Box>
            ))
          ) : (
            <Text>No blog posts available. Add a new post!</Text>
          )}
        </VStack>
      </Box>

      <Flex as="footer" py={4} justifyContent="center" borderTop="1px" borderColor="gray.200">
        <Text>© 2023 My Personal Blog. All rights reserved.</Text>
      </Flex>
    </Container>
  );
};

export default Index;