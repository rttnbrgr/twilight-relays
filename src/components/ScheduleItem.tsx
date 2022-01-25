import { Box, Text } from "@chakra-ui/react";

type ScheduleItemProps = {
  time: string;
  type?: string;
  title: string;
  children?: React.ReactNode;
};

const entryStyles = {
  // new
  border: "1px solid white",
  my: "3",
  display: "flex",
  // ported
  lineHeight: "1",
  alignContent: "flex-start",
  alignItems: "center",
  mb: "1rem"
};

const timeStyles = {
  // new
  // px: 2,
  // py: 1,
  // borderRadius: "full",
  // bg: "black",
  // color: "white",
  // display: "inline-flex",
  // lineHeight: 1
  // ported
  fontSize: "200%",
  flex: "0 0 4em",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "clip",
  background: "black",
  lineHeight: "2",
  marginRight: "0.75rem",
  color: "#d7df22",
  textAlign: "center",
  paddingRight: "0.2rem"
};

const infoWrapStyles = {
  flex: "0 1 11em"
};

const typeStyles = {
  color: "black",
  lineHeight: "1",
  fontSize: "0.75rem",
  textTransform: "uppercase",
  textAlign: "left",
  width: "100%",
  paddingBottom: "0.125em"
};

const titleStyles = {
  fontSize: "180%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "clip",
  flex: "0 1 11em",
  position: "relative",
  color: "#111"
};

const ScheduleItem = ({ time, type, title, children }: ScheduleItemProps) => (
  <Box className="entry" {...entryStyles}>
    <Box className="time" {...timeStyles}>
      {time}
    </Box>
    <Box className="info-wrap" {...infoWrapStyles}>
      <Box className="type" {...typeStyles}>
        {type}
      </Box>
      <Box className="title" {...titleStyles}>
        {title}
      </Box>
    </Box>
  </Box>
);

export default ScheduleItem;
