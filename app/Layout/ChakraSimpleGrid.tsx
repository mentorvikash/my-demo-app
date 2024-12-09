import { Box, SimpleGrid, GridItem } from "@chakra-ui/react";
import Title from "../Common/Title";
import Decorative from "../Common/Decorative";

function ChakraSimpleGrid() {
  return (
    <>
      <Box>
        <Title>simple grid example</Title>
        <SimpleGrid gap={3} columns={3} h={"150px"}>
          <Decorative>text 1</Decorative>
          <Decorative>text 2</Decorative>
          <Decorative>text 3</Decorative>
          <Decorative>text 4</Decorative>
        </SimpleGrid>
      </Box>
      <Box>
        <Title>SimpleGrid with auto responseive</Title>
        <SimpleGrid gap="30px" minChildWidth="sm" h="200px">
          <Decorative>item 1</Decorative>
          <Decorative>item 2</Decorative>
          <Decorative>item 3</Decorative>
          <Decorative>item 1</Decorative>
          <Decorative>item 2</Decorative>
          <Decorative>item 3</Decorative>
        </SimpleGrid>
      </Box>
      <Box>
        <Title>Responsive Design with GridItem and break points</Title>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: 2, md: 4, lg: 5 }}
          h={{ base: "auto", md: "200px", lg: "100px" }}
          textAlign={"center"}
        >
          <GridItem bg={"gray.300"} colSpan={{ base: 1, md: 1, lg: 1 }}>
            Item 1
          </GridItem>
          <GridItem bg={"gray.300"} colSpan={{ base: 1, md: 1, lg: 1 }}>
            Item 2
          </GridItem>
          <GridItem bg={"gray.300"} colSpan={{ base: 1, md: 1, lg: 1 }}>
            Item 2
          </GridItem>
          <GridItem bg={"gray.300"} colSpan={{ base: 1, md: 2, lg: 3 }}>
            Item 3
          </GridItem>
        </SimpleGrid>
      </Box>
      <Box>
        <Title>Use of rowGap and columnGap prop</Title>
        <SimpleGrid columns={2} rowGap={2} columnGap={4} height={"100px"}>
          <Decorative>item 1</Decorative>
          <Decorative>item 2</Decorative>
          <Decorative>item 3</Decorative>
          <Decorative>item 4</Decorative>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default ChakraSimpleGrid;
