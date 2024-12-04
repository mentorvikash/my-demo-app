import React from "react";
import { Box, Image, HStack, Badge, Icon, Text } from "@chakra-ui/react";
import { HiStar } from "react-icons/hi";

function ChakraBox() {
  return (
    <>
      {/* <Box
        bg={"red"}
        p={5}
        textAlign={"center"}
        m={2}
        as={"section"}
        // borderWidth={5}
        // borderRadius={5}
        shadow={"lg"}
        borderColor={"black"}
        _hover={{
          bg: "green",
          color: "white",
          textAlign: "start",
        }}
      >
        THIS IS OUR BOX
      </Box> */}

      <Box display={"flex"} justifyContent={"center"} mt={5}>
        <Box maxW={"sm"} borderWidth={1}>
          <Image src="https://bit.ly/2Z4KKcF" width={400} />
          <Box p={4}>
            <HStack gap={1} fontWeight={"medium"}>
              <Badge bg={"#0D9488"} color={"white"}>
                SuperHost
              </Badge>
              <Icon color={"orange.400"}>
                <HiStar />
              </Icon>
              <Text>4.5 (3.4)</Text>
            </HStack>
            <Text fontWeight={"md"}>
              Modern home in city center in the heart of historic Los Angeles
            </Text>
            <HStack color={"fg.muted"}>
              <Text>$435 • 3 beds</Text>
            </HStack>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ChakraBox;
