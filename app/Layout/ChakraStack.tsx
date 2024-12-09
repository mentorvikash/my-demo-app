import React from "react";
import Title from "../Common/Title";
import Decorative from "../Common/Decorative";
import { Box, HStack, Stack, VStack, StackSeparator } from "@chakra-ui/react";

function ChakraStack() {
  return (
    <>
      <Box>
        <Title>Basic stack usecase</Title>
        <Stack
          height={{ base: "150px", md: "50px" }}
          direction={{ base: "column", md: "row" }}
          gap="10px"
        >
          <Decorative>Item 1</Decorative>
          <Decorative>Item 2</Decorative>
          <Decorative>Item 3</Decorative>
        </Stack>
      </Box>

      <Box>
        <Title>Basic HStack usecase</Title>
        <HStack height={"60px"} gap="10px">
          <Decorative>Item 1</Decorative>
          <Decorative>Item 2</Decorative>
          <Decorative>Item 3</Decorative>
        </HStack>
      </Box>

      <Box>
        <Title>Basic VStack usecase</Title>
        <VStack height={"150px"} gap="10px">
          <Decorative>Item 1</Decorative>
          <Decorative>Item 2</Decorative>
          <Decorative>Item 3</Decorative>
        </VStack>
      </Box>

      <Box>
        <Title>Stack with seperator</Title>
        <Stack
          height={{ base: "150px", md: "50px" }}
          direction={{ base: "column", md: "row" }}
          separator={<StackSeparator />}
          gap={5}
        >
          <Decorative>Item 1</Decorative>
          <Decorative>Item 2</Decorative>
          <Decorative>Item 3</Decorative>
        </Stack>
      </Box>
    </>
  );
}

export default ChakraStack;
