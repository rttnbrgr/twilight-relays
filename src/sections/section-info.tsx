import {
  Box,
  Flex,
  Link as ChakraLink,
  Text,
  Container
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import SectionHeader from "../components/SectionHeader";

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
      <div id="cta">
        <div>
          <a href="https://www.athletic.net/TrackAndField/meet/440410/info">
            <img src="https://cdn.runnerspace.com/i/customsites/twilight/dummy.png" />
            <span className="title">Info</span>
          </a>
        </div>

        {/* Previous
      <div>
        <a href="https://live.athletictiming.net/meets/2446"
          ><img
            src="https://cdn.runnerspace.com/i/customsites/twilight/dummy.png"
            
          /><span className="title">Results</span></a
        >
      </div> 
      Stand in records */}

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
      </div>
    </Container>
  </Box>
);

export { SectionInfo };
