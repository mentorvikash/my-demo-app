"use client";

import { Flex, Box, For, Center } from "@chakra-ui/react";
import Title from "../Common/Title";

function ChakraFlex() {
  return (
    <>
      <Box bg={"bg.success"} mx={4}>
        <For each={["space-between", "space-around", "space-evenly"]}>
          {(flexType) => (
            <Flex
              key={flexType}
              mt={5}
              justify={flexType}
              border={"1px solid black"}
              textAlign={"center"}
              color={"white"}
            >
              <Box h={5} w={"25%"} bg="tomato"></Box>
              <Flex
                h={5}
                w={"25%"}
                bg="tomato"
                justifyContent={"center"}
                align={"center"}
              >
                {flexType}
              </Flex>
              <Box h={5} w={"25%"} bg="tomato"></Box>
            </Flex>
          )}
        </For>
        <Title> Direction is column</Title>
        <Flex
          mt={5}
          direction={"column"}
          gap={2}
          padding={2}
          border={"1px solid black"}
        >
          <Box h={5} w={"100%"} bg="tomato"></Box>
          <Box h={5} w={"100%"} bg="tomato"></Box>
          <Box h={5} w={"100%"} bg="tomato"></Box>
        </Flex>
        <Title>Align itmem with align or alignItems props</Title>
        <Flex align={"Center"} justify={"space-evenly"}>
          <Box bg={"gray.500"} h={"20px"} w={"25%"}></Box>
          <Box bg={"gray.500"} h={"40px"} w={"25%"}></Box>
          <Box bg={"gray.500"} h={"60px"} w={"25%"}></Box>
        </Flex>
        <Title>using order props</Title>
        <Flex
          align={"Center"}
          textAlign={"center"}
          color={"white"}
          justify={"space-evenly"}
        >
          <Box order={1} bg={"gray.500"} h={"20px"} w={"25%"}>
            1
          </Box>
          <Box order={3} bg={"gray.500"} h={"20px"} w={"25%"}>
            2
          </Box>
          <Box order={2} bg={"gray.500"} h={"20px"} w={"25%"}>
            3
          </Box>
        </Flex>
        <Title>using wrap prop</Title>
        <Flex gap={2} wrap={"wrap"}>
          <Box minW={"400px"} h={"25px"} bg={"gray.500"}></Box>
          <Box minW={"400px"} h={"25px"} bg={"gray.500"}></Box>
          <Box minW={"400px"} h={"25px"} bg={"gray.500"}></Box>
          <Box minW={"400px"} h={"25px"} bg={"gray.500"}></Box>
          <Box minW={"400px"} h={"25px"} bg={"gray.500"}></Box>
        </Flex>
      </Box>
    </>
  );
}

export default ChakraFlex;
