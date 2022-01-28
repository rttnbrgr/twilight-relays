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
    },
    colorScheme: {
      onAlt: {
        bg: "altBg",
        color: "onAlt"
      },
      altDark: {
        bg: "onAlt",
        color: "altBg"
      }
    }
  },
  textStyles: {
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
    },
    // get font families ✅
    // get sizes  ✅
    // get responsive sizes
    photoTitle: {
      fontFamily: "mono",
      fontSize: ["18px"],
      lineHeight: "1.5",
      textTransform: "uppercase",
      letterSpacing: "2px"
    },

    scheduleTime: {
      fontFamily: "mono",
      fontSize: ["14px", "28px"],
      fontWeight: "700",
      lineHeight: "2"
    },
    scheduleType: {
      fontFamily: "mono",
      lineHeight: "1",
      fontSize: "12px",
      textTransform: "uppercase",
      maxWidth: "224px"
    },
    scheduleTitle: {
      fontFamily: "mono",
      fontSize: "24px",
      lineHeight: "1"
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
