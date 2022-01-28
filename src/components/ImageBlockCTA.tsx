import { LinkBox, LinkOverlay, AspectRatio, Image } from "@chakra-ui/react";

const ImageBlockCTA = ({ url, imageSrc, title }) => (
  <LinkBox
    as="article"
    flex="0 0 100%"
    mb="1.25rem"
    position="relative"
    flexBasis={["100%", "calc(33.33333% - 0.25rem)"]}
  >
    <AspectRatio ratio={16 / 9}>
      <Image src={imageSrc} objectPosition="top left" />
    </AspectRatio>
    <LinkOverlay
      href={url}
      display="block"
      textStyle="photoTitle"
      textAlign="center"
      layerStyle="colorScheme.altDark"
      py="1"
      transition="0.3s ease-in-out"
      _hover={{
        layerStyle: "colorScheme.onAlt"
      }}
    >
      {title}
    </LinkOverlay>
  </LinkBox>
);

export default ImageBlockCTA;
