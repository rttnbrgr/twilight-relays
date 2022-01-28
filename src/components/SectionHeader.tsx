import { Box, Text } from "@chakra-ui/react";

// #custom_block1 h1 {
//   color: black;
//   padding-bottom: 0.25em;
//   line-height: 1.1em;
//   border-bottom: 4px solid black;
//   max-width: 1200px;
//   margin: 0 auto 1rem
// }

// #whoiam h1, #custom_block1 h1, #custom_block2 h1, #history h1 {
//   text-align: center;
//   font-size: 3em;
//   font-weight: bold;
//   margin: 0 0 4% 0;
//   letter-spacing: 0.1em;
//   font-family: "Work Sans";
//   text-transform: uppercase;
// }

// const sectionHeaderStyles = {
//   color: "white",
//   pb: 1,
//   lh: 1,
//   borderBottomWidth: "4px",
//   bordercolor: "white",
//   // textAlign: "center",
//   fontSize: "3em",
//   fontWeight: "600"
//   // casing: "uppercase"
// };

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
