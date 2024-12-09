import { Bleed, Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import Decorative from "../Common/Decorative";
import Title from "../Common/Title";

function ChakraBleed() {
  return (
    <>
      <Box p="10" rounded="sm" borderWidth="1px">
        <Title>Bleed: use inline prop to bleed horizontally</Title>
        <Bleed inline="10" h={20}>
          <Decorative> This is the decorative text</Decorative>
        </Bleed>
        <Stack mt="6">
          <Heading size="md">Heading text</Heading>
          <Text>this is lorem text</Text>
        </Stack>
      </Box>

      <Box p="10" rounded="sm" borderWidth="1px">
        <Title>Bleed: use block prop to bleed vertically</Title>
        <Bleed block={5} h={20}>
          <Decorative> This is the decorative text</Decorative>
        </Bleed>
        <Stack mt="6">
          <Heading size="md">Heading text</Heading>
          <Text>this is lorem text</Text>
        </Stack>
      </Box>

      <Box p="10" rounded="sm" borderWidth="1px" h={"200px"}>
        <Title>Bleed with inlineStart inlineEnd (horizontally)</Title>
        <Stack mb={20}>
          <Bleed inlineStart={5} h={10}>
            <Decorative> This is the decorative text</Decorative>
          </Bleed>
          <Bleed inlineEnd={5} h={10}>
            <Decorative> This is the decorative text</Decorative>
          </Bleed>
        </Stack>
        <Title>Bleed with BlockStart BlockEnd (vertically)</Title>
        <Stack mt={8}>
          <Bleed blockStart={10} h={10}>
            <Decorative> This is the decorative text</Decorative>
          </Bleed>
          <Bleed blockEnd={5} h={10}>
            <Decorative> This is the decorative text</Decorative>
          </Bleed>
        </Stack>
        <Stack mt="6">
          <Heading size="md">Heading text</Heading>
          <Text>this is lorem text</Text>
        </Stack>
      </Box>
    </>
  );
}

export default ChakraBleed;
