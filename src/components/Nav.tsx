import {
  Box,
  BoxProps,
  Flex,
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  LinkProps as ChakraLinkProps,
  ListProps
} from "@chakra-ui/react";
import navData from "../lib/nav";

const navWrapperStyles: BoxProps = {
  as: "nav",
  bg: "brand.black",
  py: "1",
  transition: "all .3s ease",
  zIndex: 0,
  position: "relative"
};

const navListStyles: ListProps = {
  as: "ul",
  display: {
    base: "grid",
    sm: "flex"
  },
  justifyContent: "center",
  gridTemplateColumns: "repeat(2, 1fr)",
  textAlign: "center"
};

const navLinkStyles: ChakraLinkProps = {
  px: 4,
  py: {
    base: 3,
    sm: 1
  },
  display: "inline-flex",
  textStyle: "navLink",
  color: "whiteAlpha.600",
  _hover: {
    color: "white"
  }
};

const mobileNavHeight = "116px";

type NavProps = {
  isOpen: boolean;
};

const Nav = ({ isOpen }: NavProps) => {
  return (
    <Box
      {...navWrapperStyles}
      transform={{
        base: isOpen ? "translateY(0)" : `translateY(-${mobileNavHeight})`,
        sm: "none"
      }}
      height={{
        base: isOpen ? mobileNavHeight : 0,
        sm: "auto"
      }}
    >
      <List {...navListStyles}>
        {navData.map((x, i) => (
          <ListItem key={i}>
            <ChakraLink href={x.url} isExternal={x.external} {...navLinkStyles}>
              {x.text}
            </ChakraLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Nav;
