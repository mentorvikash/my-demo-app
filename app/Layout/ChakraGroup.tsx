"use client";

import { Button, Group, Span, Stack, Badge } from "@chakra-ui/react";
import Title from "../Common/Title";

function ChakraGroup() {
  return (
    <>
      <Stack>
        <Title>Group two button</Title>
        <Group>
          <Button bg={"blue.200"} px={2} variant="solid">
            Btn 1
          </Button>
          <Button bg={"blue.200"} px={2} variant="solid">
            Btn 2
          </Button>
        </Group>
      </Stack>
      <Stack>
        <Title>Group span</Title>
        <Group>
          <Span bg="gray.300" px={2}>
            span 1
          </Span>
          <Span bg="gray.300" px={2}>
            span 2
          </Span>
          <Span bg="gray.300" px={2}>
            span 3
          </Span>
        </Group>
      </Stack>

      <Stack>
        <Title>Group 2 button with attached prop</Title>
        <Group attached>
          <Button bg={"green.200"} px={2} variant="solid">
            buy
          </Button>
          <Button bg={"red.200"} px={2} variant="solid">
            sell
          </Button>
        </Group>
      </Stack>

      <Stack>
        <Title>Group span with attached</Title>
        <Group attached>
          <Badge variant={"solid"} width={"100px"} colorPalette="purple" px={2}>
            Badge 1
          </Badge>
          <Badge variant={"solid"} colorPalette="green" px={2}>
            Badge 2
          </Badge>
        </Group>
      </Stack>

      <Stack>
        <Title>Group span with attached</Title>
        <Group grow>
          <Button bg={"red.300"} variant="solid">
            First
          </Button>
          <Button bg={"blue.300"} variant="outline">
            Second
          </Button>
          <Button bg={"green.300"} variant="subtle">
            Third
          </Button>
        </Group>
      </Stack>
    </>
  );
}

export default ChakraGroup;
