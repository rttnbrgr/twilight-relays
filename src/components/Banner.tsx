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
    base: 3,
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
    base: "center",
    sm: "center"
  },
  height: {
    base: "14"
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
        <ChakraImage
          alt='"Twilight Relays"'
          src="https://res.cloudinary.com/rttnbrgr/image/upload/v1682619484/Asset_1_ocpupa.svg"
          minW="0"
          htmlHeight={141}
          htmlWidth={900}
        />
      </Container>
    </Flex>
  );
};

export default Banner;
