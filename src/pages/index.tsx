import { Box, Text, Container, VStack, SimpleGrid } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import Nav from "../components/Nav";
import SectionHeader from "../components/SectionHeader";
import ImageBlockCTA from "../components/ImageBlockCTA";
import { imageBlocks } from "../lib/imageBlocks";
import { schedule } from "../lib/schedule";
import ScheduleItem from "../components/ScheduleItem";
import useToggle from "../hooks/index";

const Index = () => {
  const [isOn, toggleIsOn] = useToggle(false);
  return (
    <Box>
      <Banner toggleIsOpen={toggleIsOn} isOpen={isOn} />
      <Nav isOpen={isOn} />

      {/* Info */}
      <Box layerStyle="sectionBase">
        <Container>
          <SectionHeader>Info</SectionHeader>
          {/* Text */}
          <Text
            textStyle="bodyLarge"
            textAlign="center"
            maxWidth="600"
            mx="auto"
            mb="4"
          >
            Jesuit High School and Nike are Proud to present the Pacific
            Northwest’s premier high school track & field relay meet.
          </Text>
          {/* Blocks */}
          <SimpleGrid
            // display="flex"
            // flexWrap="wrap"
            columnGap="4"
            rowGap="4"
            maxWidth={{
              base: "316px",
              sm: "initial"
            }}
            mx={{ base: "auto" }}
            columns={{
              base: 1,
              sm: 3
            }}
          >
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
      <Box id="schedule" layerStyle="sectionBase">
        <Container>
          <SectionHeader>Schedule</SectionHeader>
          <SimpleGrid
            display="grid"
            width="100%"
            columns={{
              base: 1,
              sm: 2
            }}
            columnGap="4em"
            rowGap="4"
            maxWidth={{
              base: "316px",
              sm: "initial"
            }}
            mx={{ base: "auto" }}
          >
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
};

export default Index;
