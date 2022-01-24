import {
  Box,
  Flex,
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem
} from "@chakra-ui/react";
import navData from "../lib/nav";

const desktopNavLinkStyles = {
  px: 4,
  py: 2,
  display: "inline-flex",
  bg: "pink.500",
  // textstyles
  fontSize: "md"
  // textTransform: "uppercase"
};

const DesktopNav = props => (
  <Box as="nav" bg="brand.black">
    <List as="ul" display="flex" bg="red.600" justifyContent="center">
      {navData.map((x, i) => (
        <ListItem key={i}>
          <ChakraLink
            {...desktopNavLinkStyles}
            href={x.url}
            isExternal={x.external}
          >
            {x.text}
          </ChakraLink>
        </ListItem>
      ))}
    </List>
  </Box>
);

export default DesktopNav;
