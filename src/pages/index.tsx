import { Box, Text, Container, VStack } from "@chakra-ui/react";
import { SectionInfo, SectionSchedule } from "../sections";
import { Banner } from "../components/Banner";
import DesktopNav from "../components/DesktopNav";

const Index = () => (
  <Box>
    <Banner />
    <DesktopNav />
    <Box bg="green.300">
      <Container>
        <VStack spacing="2" align="left">
          <Text textStyle="sectionHeader" lineHeight="1">
            sectionHeader
          </Text>
          <Text textStyle="scheduleTime" lineHeight="1">
            scheduleTime
          </Text>
          <Text textStyle="scheduleTitle" lineHeight="1">
            scheduleTitle
          </Text>
          <Text textStyle="bodyLarge" lineHeight="1">
            bodyLarge
          </Text>
          <Text textStyle="navLink" lineHeight="1">
            navLink
          </Text>
          <Text textStyle="photoTitle" lineHeight="1">
            photoTitle
          </Text>
          <Text textStyle="scheduleType" lineHeight="1">
            scheduleType
          </Text>
        </VStack>
      </Container>
    </Box>
    <SectionInfo />
    <SectionSchedule />
    {/* Bumper */}
    <Box py="8" />
  </Box>
);

export default Index;
