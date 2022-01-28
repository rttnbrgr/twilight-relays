import { Box, Container, Text, VStack } from "@chakra-ui/react";

type TextStylesProps = {};

const TextStyles = (props: TextStylesProps) => (
  <Box bg="green.400">
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
);

export default TextStyles;
