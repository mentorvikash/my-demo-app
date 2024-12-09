"use client";

import {
  Box,
  Float,
  Circle,
  Stack,
  Text,
  HStack,
  Avatar,
  Square,
} from "@chakra-ui/react";
import Title from "../Common/Title";

function ChakraFloat() {
  const postion = [
    "bottom-start",
    "bottom-end",
    "bottom-center",
    "top-start",
    "top-center",
    "top-end",
    "middle-start",
    "middle-center",
    "middle-end",
  ] as const;
  return (
    <>
      <Title>Float basic : need to define relative parent</Title>
      <Box pos={"relative"} h={100} w={100} bg={"gray.300"}>
        <Float>
          <Circle size={5} bg={"tomato"} color={"white"}>
            3
          </Circle>
        </Float>
      </Box>

      <Title>Different position</Title>
      <HStack gap={3} justify={"space-evenly"}>
        {postion.map((posi) => (
          <Stack key={posi}>
            <Text>{posi}</Text>
            <Box pos={"relative"} h={100} w={100} bg={"gray.300"}>
              <Float placement={posi}>
                <Circle size={5} bg={"tomato"} color={"white"}>
                  3
                </Circle>
              </Float>
            </Box>
          </Stack>
        ))}
      </HStack>

      <Box>
        <Title>offsetX props</Title>
        <HStack mt={10} gap={3} justifyContent={"space-evenly"}>
          <Box pos={"relative"} w={150} h={150} bg={"gray.500"}>
            <Float offsetX={-4}>
              <Circle size={5} bg={"purple"} color={"white"}>
                3
              </Circle>
            </Float>
          </Box>
          <Box pos={"relative"} w={150} h={150} bg={"gray.500"}>
            <Float offsetY={-4}>
              <Circle size={5} bg={"purple"} color={"white"}>
                3
              </Circle>
            </Float>
          </Box>
          <Box pos={"relative"} w={150} h={150} bg={"gray.500"}>
            <Float offset={4}>
              <Circle size={5} bg={"purple"} color={"white"}>
                3
              </Circle>
            </Float>
          </Box>
          <Box pos={"relative"} w={150} h={150} bg={"gray.500"}>
            <Float offset={-4}>
              <Circle size={5} bg={"purple"} color={"white"}>
                3
              </Circle>
            </Float>
          </Box>
        </HStack>
      </Box>
      <Box>
        <Title>Float with Avatar</Title>
        <Box display={"inline-block"} pos={"relative"}>
          <Avatar.Root size={"2xl"} shape="rounded">
            <Avatar.Image src="https://bit.ly/sage-adebayo"></Avatar.Image>
            <Avatar.Fallback>SA</Avatar.Fallback>
            <Float placement={"bottom-end"}>
              <Square bg={"green"} px={1} fontSize={"sm"} color={"white"}>
                New
              </Square>
            </Float>
          </Avatar.Root>
        </Box>
      </Box>
    </>
  );
}

export default ChakraFloat;
