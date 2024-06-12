import { Box, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex as="header" py={4} justifyContent="space-between" alignItems="center" borderBottom="1px" borderColor="gray.200">
        <Heading as="h1" size="lg">My Personal Blog</Heading>
        <Flex as="nav">
          <Link href="#" mx={2}>Home</Link>
          <Link href="#" mx={2}>About</Link>
          <Link href="#" mx={2}>Blog</Link>
        </Flex>
      </Flex>

      <Box as="main" py={8}>
        <Heading as="h2" size="md" mb={4}>Blog Posts</Heading>
        <VStack spacing={4} align="stretch">
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Placeholder Blog Post Title</Heading>
            <Text mt={4}>This is a placeholder for a blog post. More content coming soon!</Text>
          </Box>
        </VStack>
      </Box>

      <Flex as="footer" py={4} justifyContent="center" borderTop="1px" borderColor="gray.200">
        <Text>© 2023 My Personal Blog. All rights reserved.</Text>
      </Flex>
    </Container>
  );
};

export default Index;