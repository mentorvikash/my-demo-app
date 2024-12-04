import React from "react";
import {
  Center,
  Box,
  AbsoluteCenter,
  Circle,
  Square,
  HStack,
  Link,
} from "@chakra-ui/react";
import { LuArrowRight, LuPhone } from "react-icons/lu";

function ChakraCenter() {
  return (
    <>
      {/* <Square borderWidth={15}>
        <Box>Let's take this text to center.</Box>
      </Square> */}
      <HStack>
        <Center w={"40px"} h={"40px"} bg={"tomato"} color={"white"}>
          <LuPhone />
        </Center>
        <Center w={"40px"} h={"40px"} bg={"tomato"} color={"white"}>
          <Box as={"span"} fontWeight={"md"} fontSize={"lg"}>
            1
          </Box>
        </Center>
      </HStack>

      <Link href="#">
        <Center inline gap="4">
          <Box>Visit Chakra UI</Box>
          <LuArrowRight />
        </Center>
      </Link>

      <Box position="relative" h="200px" borderWidth={2} borderColor={"black"}>
        <AbsoluteCenter bg="tomato" p="4" color="white" axis="both">
          <LuPhone />
        </AbsoluteCenter>
      </Box>
    </>
  );
}

export default ChakraCenter;
