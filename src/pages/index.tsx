import { Box, Text, Container, VStack } from "@chakra-ui/react";
import { SectionInfo, SectionSchedule } from "../sections";
import { Banner } from "../components/Banner";
import DesktopNav from "../components/DesktopNav";
import TextStyles from "../components/TextStyles";

const Index = () => (
  <Box>
    <Banner />
    <DesktopNav />
    {/* <TextStyles /> */}
    <SectionInfo />
    <SectionSchedule />
    {/* Bumper */}
    <Box py="8" />
  </Box>
);

export default Index;
