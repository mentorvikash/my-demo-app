"use client";

import { Box, Button, HStack, Theme } from "@chakra-ui/react";
import Title from "../Common/Title";

function ChakraTheme() {
  return (
    <>
      <Box gap={2}>
        <Title>Apply theme</Title>
        <Theme appearance="dark" p={4}>
          <HStack>
            <Button p={2} variant={"surface"}>
              This is my button text
            </Button>
          </HStack>
        </Theme>
        <Theme appearance="light" p={4}>
          <HStack>
            <Button p={2} variant={"surface"}>
              This is my button text
            </Button>
          </HStack>
        </Theme>
      </Box>

      <Box>
        <Title>Apply nested theme</Title>
        <Box>
          Hello Normal <Button>Click me</Button>
          <Theme appearance="dark" colorPalette="red">
            <Box p="10px" borderWidth="1px">
              hello dark
              <Button colorPalette={"red"} variant="solid" px={5}>
                {" "}
                click dark
              </Button>
              <Theme appearance="light" colorPalette="pink">
                <Box p="10px" borderWidth="1px">
                  hello light{" "}
                  <Button variant="surface" px={5}>
                    click light
                  </Button>
                </Box>
              </Theme>
            </Box>
          </Theme>
        </Box>
      </Box>
    </>
  );
}

export default ChakraTheme;
