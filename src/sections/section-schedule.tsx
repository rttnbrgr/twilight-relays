import {
  Box,
  Container,
  Flex,
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  SimpleGrid
} from "@chakra-ui/react";

import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import { schedule } from "../data";
import SectionHeader from "../components/SectionHeader";
import ScheduleItem from "../components/ScheduleItem";

const scheduleStyles = {
  display: "grid",
  width: "100%",
  columns: 2,
  columnGap: "4em"
  // font-family: "Consolas","Inconsolata";
};

const SectionSchedule = () => {
  console.log("schedule", schedule);
  return (
    <div id="custom_block1">
      <Box id="schedule" bg="altBg">
        <Container maxW="1000px">
          <SectionHeader>Schedule</SectionHeader>
          <SimpleGrid {...scheduleStyles}>
            {schedule.map((x, i) => (
              <ScheduleItem {...x} key={i} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </div>
  );
};

export { SectionSchedule };
