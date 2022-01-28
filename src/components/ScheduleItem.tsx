import {
  Box,
  Text,
  ResponsiveValue,
  VStack,
  HStack
  // WhiteSpace,
  // Position
} from "@chakra-ui/react";

type ScheduleItemProps = {
  time: string;
  type?: string;
  title: string;
  children?: React.ReactNode;
};

const unverifiedStyles = {
  whiteSpace: "nowrap" as ResponsiveValue<WhiteSpace>,
  overflow: "hidden",
  textOverflow: "clip"
};

const ScheduleItem = ({ time, type, title, children }: ScheduleItemProps) => (
  <HStack
    className="entry"
    spacing="2"
    justifyContent="flex-start"
    alignItems="center"
    mb="1rem"
    // debug
    // border="1px solid white"
  >
    <Box
      className="time"
      {...unverifiedStyles}
      textStyle="scheduleTime"
      textAlign="center"
      // layerStyle="colorScheme.altDark"
      layerStyle="colorScheme.altDark"
      flexBasis="25%"
      flexGrow={0}
      flexShrink={0}
    >
      {time}
    </Box>
    <VStack
      spacing="0"
      align="start"
      flexBasis="75%"
      flexGrow={0}
      flexShrink={0}
    >
      <Text textStyle="scheduleType">{type}</Text>
      <Text textStyle="scheduleTitle" {...unverifiedStyles}>
        {title}
      </Text>
    </VStack>
  </HStack>
);

export default ScheduleItem;
