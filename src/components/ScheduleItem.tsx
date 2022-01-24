import { Box, Text } from "@chakra-ui/react";

type ScheduleItemProps = {
  time: string;
  type?: string;
  title: string;
  children?: React.ReactNode;
};

const entryStyles = {
  border: "1px solid white",
  my: "3"
};

const timeStyles = {
  px: 2,
  py: 1,
  borderRadius: "full",
  bg: "black",
  color: "white",
  display: "inline-flex",
  lineHeight: 1
  //
};

const ScheduleItem = ({ time, type, title, children }: ScheduleItemProps) => (
  <Box className="entry" {...entryStyles}>
    <Box className="time" {...timeStyles}>
      {time}
    </Box>
    <Box className="info-wrap">
      <div className="type">{type}</div>
      <div className="title">{title}</div>
    </Box>
  </Box>
);

export default ScheduleItem;
