import { Box, Text, Container, SimpleGrid } from "@chakra-ui/react";
import SectionHeader from "../components/SectionHeader";
import ImageBlockCTA from "../components/ImageBlockCTA";
import { imageBlocks } from "../lib/imageBlocks";

const SectionInfo = () => (
  <Box bg="green.300">
    <Container>
      <SectionHeader>Info</SectionHeader>
      {/* Text */}
      <Text textStyle="bodyLarge" textAlign="center">
        Jesuit High School and Nike are Proud to present the Pacific Northwest’s
        premier high school track & field relay meet.
      </Text>
      {/* Blocks */}
      <SimpleGrid display="flex" flexWrap="wrap" columnGap="0">
        {imageBlocks.map(({ url, imageSrc, title }, i) => (
          <ImageBlockCTA url={url} imageSrc={imageSrc} title={title} key={i} />
        ))}
      </SimpleGrid>
    </Container>
  </Box>
);

export { SectionInfo };
