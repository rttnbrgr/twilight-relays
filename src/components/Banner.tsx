import {
  Box,
  Container,
  Flex,
  Heading,
  Image as ChakraImage
} from "@chakra-ui/react";
import NextImage from "next/image";

type BannerProps = { title: string };

export const Banner = ({ title }: BannerProps) => (
  <Flex justifyContent="center" alignItems="center" py="4">
    <Container maxWidth="1000px">
      {/* menu button */}

      {/* banner */}
      <Box display="flex" justifyContent="center">
        <Heading fontSize="6vw" textAlign="center" display="none">
          {title}
        </Heading>
        <ChakraImage
          src="https://twilight-relays.surge.sh/assets/banner.svg"
          w="100%"
          maxWidth="800px"
        />
      </Box>
    </Container>
  </Flex>
);

Banner.defaultProps = {
  title: "Twilight Relays"
};

export default Banner;
