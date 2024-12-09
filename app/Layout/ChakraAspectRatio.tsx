import { AspectRatio, Box, Center, Image } from "@chakra-ui/react";
import Title from "../Common/Title";

function ChakraAspectRatio() {
  return (
    <>
      <Box>
        <Title>Create a layout of fix aspect ratio</Title>
        <AspectRatio bg="bg.muted" ratio={2 / 1}>
          <Center fontSize={"2xl"}> 2/1</Center>
        </AspectRatio>
      </Box>
      <Box>
        <Title>An image with 4/2 aspect ratio</Title>
        <AspectRatio bg="bg.muted" maxW={"lg"} ratio={4 / 2}>
          <Image
            src={"https://bit.ly/naruto-sage"}
            alt="cartoon"
            objectFit="cover"
          />
        </AspectRatio>
      </Box>
      <Box>
        <Title>An video 1:1 aspect ratio with iframe</Title>
        <AspectRatio bg="bg.muted" maxW={"lg"} ratio={1 / 1}>
          <iframe
            title="new cartoon"
            src={"https://www.youtube.com/embed/QhBnZ6NPOY0"}
            allowFullScreen
          />
        </AspectRatio>
      </Box>

      <Box>
        <Title>An Map with 16:9 aspect ratio with iframe</Title>
        <AspectRatio bg="bg.muted" maxW={"lg"} ratio={16 / 9}>
          <iframe
            title="new cartoon"
            src={
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
            }
            allowFullScreen
          />
        </AspectRatio>
      </Box>
    </>
  );
}

export default ChakraAspectRatio;
