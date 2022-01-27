import {
  Box,
  Flex,
  Link as ChakraLink,
  Text,
  Container
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
  <Box
    display="flex"
    flex="0 0 100%"
    mb="1.25rem"
    position="relative"
    flexBasis={["100%", "calc(33.33333% - 0.25rem)"]}
  >
    <a href={url}>
      <img src={imageSrc} />
      <Box
        className="title"
        bg="black"
        color="#d7df22"
        lineHeight="2"
        transition="0.3s ease-in-out"
        textAlign="center"
        _hover={{
          bg: "#d7df22",
          color: "black"
        }}
      >
        {title}
      </Box>
    </a>
  </Box>
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
      {/* Photo CTA */}
      <Box id="cta">
        <div>
          <a href="https://www.athletic.net/TrackAndField/meet/440410/info">
            <img src="https://cdn.runnerspace.com/i/customsites/twilight/dummy.png" />
            <span className="title">Info</span>
          </a>
        </div>
        <div>
          <a href="https://www.athletic.net/TrackAndField/meet/440410/info/133218">
            <img src="https://cdn.runnerspace.com/i/customsites/twilight/dummy.png" />
            <span className="title">Records</span>
          </a>
        </div>
        <div>
          <a href="https://www.twilight-relays.com/eprofile.php?event_id=96&amp;do=videos&amp;video_id=273064">
            <img src="https://cdn.runnerspace.com/i/customsites/twilight/dummy.png" />
            <span className="title">Live Webcast</span>
          </a>
        </div>
      </Box>
      {/* Blocks */}
      <Box display="flex" flexWrap="wrap">
        {fooData.map(({ url, imageSrc, title }, i) => (
          <BlockCTA url={url} imageSrc={imageSrc} title={title} key={i} />
        ))}
      </Box>
    </Container>
  </Box>
);

export { SectionInfo };
