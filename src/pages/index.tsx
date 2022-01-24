import {
  Box,
  Flex,
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Link
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { SectionInfo, SectionSchedule } from "../sections";
import { Banner } from "../components/Banner";
import DesktopNav from "../components/DesktopNav";

const Index = () => (
  <Box>
    <Banner />
    <DesktopNav />
    <SectionInfo />
    <SectionSchedule />
    {/* Bumper */}
    <Box py="8" />
  </Box>
);

export default Index;
