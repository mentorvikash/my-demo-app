import React from "react";
import { Box, Center } from "@chakra-ui/react";

const DecorativeBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <Center>
      <Box
        p="6"
        fontSize={"xl"}
        border="1px solid"
        borderColor="gray.300"
        borderRadius="md"
        bg="white"
        style={{
          backgroundImage:
            "repeating-linear-gradient(60deg, transparent, transparent 10px, #f2f2f2 10px, #f2f2f2 20px)",
          backgroundSize: "20px 20px",
        }}
      >
        {children}
      </Box>
    </Center>
  );
};

export default DecorativeBox;
