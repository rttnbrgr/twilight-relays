import { Box, Text, VStack, HStack, BoxProps } from "@chakra-ui/react";

type ScheduleItemProps = {
  time: string;
  type?: string;
  title: string;
  children?: React.ReactNode;
};

const ScheduleItem = ({ time, type, title, children }: ScheduleItemProps) => (
  <HStack
    className="entry"
    spacing="2"
    justifyContent="flex-start"
    alignItems={{
      base: "flex-start",
      sm: "center"
    }}
    // mb="1rem"
    // debug
    // border="1px solid white"
  >
    <Box
      className="time"
      textStyle="scheduleTime"
      textAlign="center"
      layerStyle="colorScheme.altDark"
      flexBasis={{
        base: "15%",
        sm: "25%"
      }}
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
      <Text textStyle="scheduleTitle">{title}</Text>
    </VStack>
  </HStack>
);

export default ScheduleItem;
