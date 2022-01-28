import { Box, Text, Container, VStack, SimpleGrid } from "@chakra-ui/react";
import { SectionSchedule } from "../sections";
import { Banner } from "../components/Banner";
import DesktopNav from "../components/DesktopNav";
import TextStyles from "../components/TextStyles";
import SectionHeader from "../components/SectionHeader";
import ImageBlockCTA from "../components/ImageBlockCTA";
import { imageBlocks } from "../lib/imageBlocks";

const Index = () => (
  <Box>
    <Banner />
    <DesktopNav />
    {/* <TextStyles /> */}
    {/* Info */}
    <Box>
      <Container>
        <SectionHeader>Info</SectionHeader>
        {/* Text */}
        <Text textStyle="bodyLarge" textAlign="center">
          Jesuit High School and Nike are Proud to present the Pacific
          Northwest’s premier high school track & field relay meet.
        </Text>
        {/* Blocks */}
        <SimpleGrid display="flex" flexWrap="wrap" columnGap="0">
          {imageBlocks.map(({ url, imageSrc, title }, i) => (
            <ImageBlockCTA
              url={url}
              imageSrc={imageSrc}
              title={title}
              key={i}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
    {/* Schedule */}
    <SectionSchedule />
    {/* Bumper */}
    <Box py="8" />
  </Box>
);

export default Index;
