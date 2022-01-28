import {
  Box,
  Flex,
  Link as ChakraLink,
  Text,
  Container,
  LinkBox,
  LinkOverlay,
  AspectRatio,
  Image,
  SimpleGrid
} from "@chakra-ui/react";
import SectionHeader from "../components/SectionHeader";

const fooData = [
  {
    url: "https://www.athletic.net/TrackAndField/meet/440410/info",
    imageSrc: "https://twilight-relays.surge.sh/assets/TR18_WebSquares-1.jpg",
    title: "Info"
  },
  {
    url: "https://www.athletic.net/TrackAndField/meet/440410/info/133218",
    imageSrc: "https://twilight-relays.surge.sh/assets/TR18_WebSquares-2.jpg",
    title: "Records"
  },
  // {
  //   url: "https://live.athletictiming.net/meets/2446",
  //   imageSrc: "https://twilight-relays.surge.sh/assets/TR18_WebSquares-2.jpg",
  //   title: "Results"
  // },
  {
    url: "https://www.twilight-relays.com/eprofile.php?event_id=96&amp;do=videos&amp;video_id=273064",
    imageSrc: "https://twilight-relays.surge.sh/assets/TR18_WebSquares-3.jpg",
    title: "Live Webcast"
  }
];

const BlockCTA = ({ url, imageSrc, title }) => (
  <LinkBox
    as="article"
    // display="flex"
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

const SectionInfo = () => (
  <Box bg="green.300">
    <Container>
      <SectionHeader>Info</SectionHeader>
      {/* Text */}
      <Text textStyle="bodyLarge" textAlign="center">
        Jesuit High School and Nike are Proud to present the Pacific Northwest’s
        premier high school track & field relay meet.
      </Text>
      {/* Blocks */}
      <SimpleGrid display="flex" flexWrap="wrap" columnGap="0">
        {fooData.map(({ url, imageSrc, title }, i) => (
          <BlockCTA url={url} imageSrc={imageSrc} title={title} key={i} />
        ))}
      </SimpleGrid>
    </Container>
  </Box>
);

export { SectionInfo };
