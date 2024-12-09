import { Box } from "@chakra-ui/react";

function Decorative({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Box bg={"pink.300"} w={"100%"} h={"100%"}>
        {children}
      </Box>
    </>
  );
}

export default Decorative;
