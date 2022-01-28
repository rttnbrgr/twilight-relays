import { Box, Text, Container, VStack, SimpleGrid } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import DesktopNav from "../components/DesktopNav";
import SectionHeader from "../components/SectionHeader";
import ImageBlockCTA from "../components/ImageBlockCTA";
import { imageBlocks } from "../lib/imageBlocks";
import { schedule } from "../data";
import ScheduleItem from "../components/ScheduleItem";

const Index = () => (
  <Box>
    <Banner />
    <DesktopNav />

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
    <Box id="schedule" layerStyle="colorScheme.onAlt">
      <Container>
        <SectionHeader>Schedule</SectionHeader>
        <SimpleGrid display="grid" width="100%" columns={2} columnGap="4em">
          {schedule.map((x, i) => (
            <ScheduleItem {...x} key={i} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>

    {/* Bumper */}
    <Box py="8" />
  </Box>
);

export default Index;
