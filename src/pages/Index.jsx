import React, { useState } from "react";
import { Box, Heading, Input, Button, Text, Stack, Image, Link, Wrap, WrapItem } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Simulated search results
    const dummyResults = [
      {
        title: "Open Source 3D Printing Technology",
        description: "Explore the latest advancements in open source 3D printing and its applications in various industries.",
        link: "#",
        image: "https://images.unsplash.com/photo-1611505908502-5b67e53e3a76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50aW5nfGVufDB8fHx8MTcxMjM5MTEwMnww&ixlib=rb-4.0.3&q=80&w=1080",
      },
      {
        title: "Quantum Computing Research Papers",
        description: "Access a collection of research papers on quantum computing, covering topics such as quantum algorithms and quantum hardware.",
        link: "#",
        image: "https://images.unsplash.com/photo-1617839625591-e5a789593135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxxdWFudHVtJTIwY29tcHV0aW5nfGVufDB8fHx8MTcxMjM5MTEwMnww&ixlib=rb-4.0.3&q=80&w=1080",
      },
      {
        title: "Renewable Energy Engineering",
        description: "Discover innovative engineering solutions for renewable energy sources like solar, wind, and hydro power.",
        link: "#",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3l8ZW58MHx8fHwxNzEyMzkxMTAzfDA&ixlib=rb-4.0.3&q=80&w=1080",
      },
    ];

    setResults(dummyResults);
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8} textAlign="center">
        Research Science Engineering Search Engine
      </Heading>
      <Stack direction={["column", "row"]} spacing={4} align="center" justify="center" mb={8}>
        <Input placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} size="lg" w={["100%", "400px"]} />
        <Button leftIcon={<FaSearch />} colorScheme="blue" size="lg" onClick={handleSearch}>
          Search
        </Button>
      </Stack>
      {results.length > 0 && (
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Search Results
          </Heading>
          <Wrap spacing={8}>
            {results.map((result, index) => (
              <WrapItem key={index} flexBasis={["100%", "50%", "33.33%"]}>
                <Box borderWidth={1} borderRadius="lg" overflow="hidden" boxShadow="md">
                  <Image src={result.image} alt={result.title} />
                  <Box p={4}>
                    <Heading as="h3" size="md" mb={2}>
                      <Link href={result.link}>{result.title}</Link>
                    </Heading>
                    <Text>{result.description}</Text>
                  </Box>
                </Box>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      )}
    </Box>
  );
};

export default Index;
