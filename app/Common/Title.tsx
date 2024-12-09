import { Center, Text } from "@chakra-ui/react";

function Title({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Center my={3}>
        <Text
          bg={"gray.500"}
          py={1}
          px={3}
          color={"white"}
          borderRadius={5}
          display={"inline"}
          fontSize={"xl"}
          fontWeight={"600"}
        >
          {children}
        </Text>
      </Center>
    </>
  );
}

export default Title;
