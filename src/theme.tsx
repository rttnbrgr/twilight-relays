import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  mono: `'Inconsolata', monospace`,
  sans: `'Work Sans', sans-serif`
};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em"
});

const colorsBrand = {
  black: "#16161D",
  volt: "#d7df22",
  white: "white"
};

const colorTokens = {
  bg: colorsBrand.black,
  onBg: colorsBrand.white,
  altBg: colorsBrand.volt,
  onAlt: colorsBrand.black // not in use
};

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        bg: colorTokens.bg,
        color: colorTokens.onBg
      }
    }
  },
  colors: {
    black: "#16161D",
    brand: { ...colorsBrand },
    ...colorTokens
  },
  fonts,
  breakpoints,
  layerStyles: {
    sectionBase: {
      py: 4
    }
  },
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
      fontWeight: "800",
      textTransform: "uppercase",
      fontFamily: "sans"
    },
    navLink: {
      // ported
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      fontFamily: "sans",
      fontSize: "xl",
      fontWeight: "700"
    },
    bodyLarge: {
      textTransform: "uppercase",
      letterSpacing: "1px",
      fontFamily: "sans",
      fontSize: "xl",
      fontWeight: "700"
    }
  },
  components: {
    Container: {
      baseStyle: {
        border: "3px solid pink",
        maxW: "1000px"
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
