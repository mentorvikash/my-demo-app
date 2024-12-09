import { Container, For, Stack, Heading, Center } from "@chakra-ui/react";
import Decorative from "../Common/Decorative";

function ChakraContainer() {
  return (
    <>
      <Stack>
        <For each={["xs", "sm", "md", "lg", "xl"]}>
          {(size) => (
            <Container key={size} maxW={size} fluid>
              <Decorative>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis veniam eos unde distinctio veritatis in excepturi
                dolor! Sunt dicta
              </Decorative>
            </Container>
          )}
        </For>
      </Stack>
      <Center>
        <Heading>2nd Example with fluid</Heading>
      </Center>
      <Container fluid>
        <Decorative>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum dolor
          incidunt dicta maxime? Maiores eveniet praesentium id, magni quidem
          nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
          dolor incidunt dicta maxime? Maiores eveniet praesentium id, magni
          quidem nihil.
        </Decorative>
      </Container>
    </>
  );
}

export default ChakraContainer;
