import { extendTheme, ListItem } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em"
});

const colorsBrand = {
  black: "#16161D",
  volt: "#d7df22"
};

const theme = extendTheme({
  colors: {
    black: "#16161D",
    bg: "brand.black",
    onBg: "#fff",
    altBg: colorsBrand.volt,
    onAlt: colorsBrand.black,
    brand: { ...colorsBrand }
  },
  fonts,
  breakpoints,
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ["48px", "72px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-2%"
    },
    sectionHeader: {
      // fontSize: ["36px", "48px"],
      // fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
      lh: 1,

      fontSize: "3em",
      fontWeight: "600",
      textTransform: "uppercase"
    }
  },
  components: {
    Container: {
      baseStyle: {
        border: "1px solid pink"
      }
    },
    ListItem: {
      baseStyle: {
        // width: "initial"
      }
    }
  }
});

export default theme;
