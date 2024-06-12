import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Button, Flex, useColorMode } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Router>
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
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/add-post" element={<AddPost />} />
      </Routes>
    </Router>
  );
}

export default App;