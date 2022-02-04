import React from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Container,
  Flex,
  FlexProps,
  IconButton,
  Image as ChakraImage,
  Spacer
} from "@chakra-ui/react";
import { BoxProps } from "@chakra-ui/react";

const bannerStyles: FlexProps = {
  justifyContent: "center",
  alignItems: "center",
  py: {
    base: 2,
    sm: 4,
    md: 8
  },
  // layerStyle: "mqDebug",
  bg: "brand.black",
  zIndex: 1,
  position: "relative"
};

const bannerChildStyles: BoxProps = {
  display: "flex",
  justifyContent: {
    base: "space-between",
    sm: "center"
  },
  height: {
    base: "10",
    sm: "12",
    md: "14"
  },
  pl: {
    base: 0,
    sm: 4,
    md: 8
  }
};

type BannerProps = {
  toggleIsOpen: () => void;
  isOpen: Boolean;
};

export const Banner = ({ toggleIsOpen, isOpen }: BannerProps) => {
  let activeIcon = isOpen ? <CloseIcon /> : <HamburgerIcon />;

  return (
    <Flex {...bannerStyles}>
      <Container {...bannerChildStyles}>
        <IconButton
          aria-label="Menu"
          icon={activeIcon}
          size="lg"
          height="auto"
          flexBasis="10"
          flexGrow="0"
          flexShrink="0"
          display={{
            base: "inline-flex",
            sm: "none"
          }}
          onClick={toggleIsOpen}
          bg="transparent"
          _hover={{
            bg: "transparent"
          }}
        />
        <Spacer
          display={{
            base: "inline-flex",
            sm: "none"
          }}
          flexBasis="6"
          flexShrink={0}
        />
        <ChakraImage
          alt='"Twilight Relays"'
          src="https://twilight-relays.surge.sh/assets/banner.svg"
          minW="0"
        />
      </Container>
    </Flex>
  );
};

export default Banner;
