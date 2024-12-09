"use client";

import { Box, Grid, GridItem } from "@chakra-ui/react";
import Decorative from "../Common/Decorative";
import Title from "../Common/Title";

function ChakraGrid() {
  return (
    <>
      <Box>
        <Title>Basic Grid</Title>
        <Grid templateColumns="repeat(3,1fr )" h="25px" gap={3}>
          <Decorative>Item 1</Decorative>
          <Decorative>Item 2</Decorative>
          <Decorative>Item 3</Decorative>
        </Grid>
      </Box>
      <Box>
        <Title>Grid with GridItem </Title>
        <Grid templateColumns="repeat(3,1fr)" gap={3} color={"wheat"}>
          <GridItem bg={"gray.500"} textAlign={"center"}>
            Item 1
          </GridItem>
          <GridItem bg={"gray.500"} textAlign={"center"}>
            Item 2
          </GridItem>
          <GridItem bg={"gray.500"} textAlign={"center"}>
            Item 3
          </GridItem>
        </Grid>
      </Box>
      <Box>
        <Title>Grid with colspan</Title>
        <Grid
          templateColumns="repeat(4,1fr)"
          gap={3}
          textAlign={"center"}
          color={"white"}
        >
          <GridItem h={6} bg={"gray.500"} colSpan={2}>
            2fr
          </GridItem>
          <GridItem h={6} bg={"gray.500"} colSpan={1}>
            1fr
          </GridItem>
          <GridItem h={6} bg={"gray.500"} colSpan={1}>
            1fr
          </GridItem>
          <GridItem h={6} bg={"gray.500"} colSpan={4}>
            4fr
          </GridItem>
        </Grid>
      </Box>
      <Box>
        <Title>Page Layout with Grid</Title>
        <Grid
          h="200px"
          templateRows="repeat(2, 1fr)" // 2 rows, equally divided
          templateColumns="repeat(5, 1fr)" // 5 columns, equally divided
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={1}>
            <Box bg="blue.200" h="full" w="full">
              rowSpan=2
            </Box>
          </GridItem>
          <GridItem colSpan={2}>
            <Box bg="green.200" h="full" w="full">
              colSpan=2
            </Box>
          </GridItem>
          <GridItem colSpan={2}>
            <Box bg="red.200" h="full" w="full">
              colSpan=2
            </Box>
          </GridItem>
          <GridItem colSpan={4}>
            <Box bg="purple.200" h="full" w="full">
              colSpan=4
            </Box>
          </GridItem>
        </Grid>
      </Box>

      <Box>
        <Title>Grid with autoFlow</Title>
        <Grid
          h="75px"
          autoFlow="column dense"
          templateColumns="repeat(3, 1fr)"
          templateRows="repeat(2, 1fr )"
          gap={3}
        >
          <GridItem>
            <Decorative>Text</Decorative>
          </GridItem>
          <GridItem colSpan={2}>
            <Decorative>Text</Decorative>
          </GridItem>
          <GridItem>
            <Decorative>Text</Decorative>
          </GridItem>
          <GridItem>
            <Decorative>Text</Decorative>
          </GridItem>
        </Grid>
      </Box>

      <Box>
        <Title>Grid with autoColumns</Title>
        <Grid autoFlow={"column"} autoColumns={"150px"} gap={3} h="30px">
          <GridItem>
            <Decorative>2fr</Decorative>
          </GridItem>
          <GridItem>
            <Decorative>1fr</Decorative>
          </GridItem>
          <GridItem>
            <Decorative>2fr</Decorative>
          </GridItem>
          <GridItem>
            <Decorative>2fr</Decorative>
          </GridItem>{" "}
          <GridItem>
            <Decorative>2fr</Decorative>
          </GridItem>{" "}
          <GridItem>
            <Decorative>2fr</Decorative>
          </GridItem>
        </Grid>
      </Box>

      <Box>
        <Title>Grid with autoRow</Title>
        <Grid
          autoRows={"min-content"}
          templateColumns={"repeat(3,1fr)"}
          gap={3}
        >
          <GridItem h={25}>
            <Decorative>Text</Decorative>
          </GridItem>
          <GridItem h={25}>
            <Decorative>Text</Decorative>
          </GridItem>
          <GridItem h={25}>
            <Decorative>Text</Decorative>
          </GridItem>
          <GridItem h={25}>
            <Decorative>Text</Decorative>
          </GridItem>
          <GridItem h={25}>
            <Decorative>Text</Decorative>
          </GridItem>
          <GridItem h={25}>
            <Decorative>Text</Decorative>
          </GridItem>
        </Grid>
      </Box>

      <Box>
        <Title>Grid with templateAreas</Title>
        <Grid
          templateAreas={`"header header header" "sidebar main rightside" "footer footer footer"`}
          templateColumns={"1fr 3fr 1fr"}
          templateRows={"1fr 8fr 1fr"}
          gap={3}
          h={"500px"}
        >
          <GridItem area={"header"}>
            <Decorative>header</Decorative>
          </GridItem>
          <GridItem area={"sidebar"}>
            <Decorative>left sidebar</Decorative>
          </GridItem>
          <GridItem area={"main"}>
            <Decorative>main</Decorative>
          </GridItem>
          <GridItem area={"rightside"}>
            <Decorative>right sidebar</Decorative>
          </GridItem>
          <GridItem area={"footer"}>
            <Decorative>footer</Decorative>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default ChakraGrid;
