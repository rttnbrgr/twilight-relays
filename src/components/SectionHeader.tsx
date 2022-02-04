import { Box, Text } from "@chakra-ui/react";

type SectionHeaderProps = {
  children?: React.ReactNode;
};

const sectionHeaderStyles = {
  color: "onBg",
  pb: 2,
  borderBottomWidth: "2px",
  borderColor: "onBg",
  textAlign: "center",
  mb: 4,
  maxWidth: "600px",
  mx: "auto"
};

const SectionHeader = ({ children = "section header" }: SectionHeaderProps) => (
  // <Box {...sectionHeaderStyles}>
  <Box
    color="onBg"
    pb={2}
    borderBottomWidth="2px"
    borderColor="onBg"
    textAlign="center"
    mb={4}
    maxWidth="600px"
    mx="auto"
  >
    <Text textStyle="sectionHeader">{children}</Text>
  </Box>
);

export default SectionHeader;
