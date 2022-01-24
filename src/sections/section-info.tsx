import {
  Box,
  Flex,
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Container
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import SectionHeader from "../components/SectionHeader";

const SectionInfo = () => (
  <Box bg="green.300">
    <Container>
      <SectionHeader>Info</SectionHeader>
      <div id="whoiam" className="block">
        <p>Nike Jesuit Twilight Relays</p>
        <p>
          <strong>
            JESUIT HIGH SCHOOL AND NIKE ARE PROUD TO PRESENT THE PACIFIC
            NORTHWEST’S PREMIER HIGH SCHOOL TRACK &amp; FIELD RELAY MEET.
          </strong>
        </p>
        <p>
          <strong>
            THE 20TH&nbsp;ANNUAL NIKE/JESUIT TWILIGHT RELAYS WILL FEATURE:
          </strong>
        </p>
        <ul>
          <li>
            AFTERNOON SESSION WITH MULTIPLE HEATS/FLIGHTS OF INDIVIDUAL EVENTS
          </li>
          <li>
            TWILIGHT EVENING SESSION FULL OF EXCITING RELAY COMPETITION AND
            ELITE 100 &amp; MILE RACES. THESE ELITE RACES&nbsp; HAVE YIELDED
            SEVERAL TOP 10 U.S. PERFORMANCES.&nbsp;&nbsp;
          </li>
          <li>FIELD EVENTS WITH UP TO 48 ATHLETES PER EVENT</li>
          <li>
            GREAT COMPETITION WITH SOME OF THE BEST TEAMS REPRESENTED FROM
            OREGON, WASHINGTON, IDAHO, MONTANA AND BEYOND.
          </li>
          <li>
            PREMIER TRACK AND FIELD FACILITY THAT SHOWCASES A FAST, HIGH
            PERFORMANCE TRACK SURFACE.
          </li>
          <li>UNIQUE AWARDS&nbsp;</li>
          <li>PROFESSIONAL NIKE ATHLETE APPEARANCES</li>
          <li>ELITE ATHLETE AND RELAY TEAM INTRODUCTIONS.</li>
        </ul>
        <p>
          <strong>COME JOIN US!</strong>
        </p>
        <p>
          <strong>
            <a
              href="https://www.athletic.net/TrackAndField/meet/440410/info"
              target="_blank"
            >
              Click here for entry info
            </a>
          </strong>
        </p>
        <div className="wrapper">
          <div className="content">
            <div className="body">
              <div className="text_topblock text_botblock">
                <div className="userhtml"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>

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
  </Box>
);

export { SectionInfo };
