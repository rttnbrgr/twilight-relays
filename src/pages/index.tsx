import {
  Box,
  Text,
  Container,
  VStack,
  SimpleGrid,
  Link,
  LinkBox,
  LinkOverlay
} from "@chakra-ui/react";
import Head from "next/head";
import { Banner } from "../components/Banner";
import Nav from "../components/Nav";
import SectionHeader from "../components/SectionHeader";
import ImageBlockCTA from "../components/ImageBlockCTA";
import { imageBlocks } from "../lib/imageBlocks";
import { schedule } from "../lib/schedule";
import ScheduleItem from "../components/ScheduleItem";
import useToggle from "../hooks/index";

const SEO = {
  title: "Twilight Relays 2022",
  description: "Welcome to the homepage of Twilight Relays",
  siteName: "Twilight Relays 2022",
  currentURL: "https://twilight-relays.com",
  previewImage:
    "https://res.cloudinary.com/rttnbrgr/image/upload/v1649540396/Twilight%20Relays/Open_Graph_IMG.jpg"
};

const Index = () => {
  const [isOn, toggleIsOn] = useToggle(false);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description}></meta>

        {/* Open Graph */}
        <meta property="og:url" content={SEO.currentURL} key="ogurl" />
        <meta property="og:image" content={SEO.previewImage} key="ogimage" />
        <meta property="og:site_name" content={SEO.siteName} key="ogsitename" />
        <meta property="og:title" content={SEO.title} key="ogtitle" />
        <meta
          property="og:description"
          content={SEO.description}
          key="ogdesc"
        />
      </Head>
      <Box>
        <Banner toggleIsOpen={toggleIsOn} isOpen={isOn} />
        {/* <Nav isOpen={isOn} /> */}

        {/* Links */}
        <Box id="links" layerStyle="sectionBase">
          <Container>
            {/* <SectionHeader>Links</SectionHeader> */}
            <VStack textAlign="center" maxWidth="600" mx="auto" spacing={3}>
              <LinkBox
                as="article"
                rounded="md"
                p={2}
                px={3}
                _hover={{
                  background: "whiteAlpha.100"
                }}
              >
                <LinkOverlay
                  isExternal
                  href="https://twilightrelays.runnerspace.com/eprofile.php?event_id=96&do=videos&video_id=327416"
                  color="altBg"
                >
                  <Text textStyle="bodyLarge">Live Stream</Text>
                </LinkOverlay>
                <Text textStyle="bodyLarge" mb="4">
                  Sign up for a Runnerspace+ account and enjoy coverage of the
                  entire meet from wherever you are.
                </Text>
              </LinkBox>
              <LinkBox
                as="article"
                rounded="md"
                p={2}
                px={3}
                _hover={{
                  background: "whiteAlpha.100"
                }}
              >
                <LinkOverlay
                  isExternal
                  href="https://live.athletictiming.net/meets/15152"
                  color="altBg"
                >
                  <Text textStyle="bodyLarge">Live Results</Text>
                </LinkOverlay>
                <Text textStyle="bodyLarge" mb="4">
                  Keep up with all the latest results from race day thanks to
                  the awesome team over at Athletic.net
                </Text>
              </LinkBox>
            </VStack>
          </Container>
        </Box>

        {/* Schedule */}
        <Box id="schedule" layerStyle="sectionBase">
          <Container>
            <SectionHeader>Schedule</SectionHeader>
            <SimpleGrid
              display="grid"
              width="100%"
              columns={{
                base: 1,
                sm: 2
              }}
              columnGap="4em"
              rowGap="4"
              maxWidth={{
                base: "316px",
                sm: "initial"
              }}
              mx={{ base: "auto" }}
            >
              {schedule.map((x, i) => (
                <ScheduleItem {...x} key={i} />
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* Info */}
        <Box layerStyle="sectionBase">
          <Container>
            <SectionHeader>Info</SectionHeader>
            {/* Text */}
            <Text
              textStyle="bodyLarge"
              textAlign="center"
              maxWidth="600"
              mx="auto"
              mb="4"
            >
              Jesuit High School and Nike are Proud to present the Pacific
              Northwest’s premier high school track & field relay meet.
            </Text>
            {/* Blocks */}
            <SimpleGrid
              // display="flex"
              // flexWrap="wrap"
              columnGap="4"
              rowGap="4"
              maxWidth={{
                base: "316px",
                sm: "initial"
              }}
              mx={{ base: "auto" }}
              columns={{
                base: 1,
                sm: 3
              }}
            >
              {imageBlocks.map(({ url, imageSrc, title, height, width }, i) => (
                <ImageBlockCTA
                  url={url}
                  imageSrc={imageSrc}
                  title={title}
                  key={i}
                  height={height}
                  width={width}
                />
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* Bumper */}
        <Box py="8" />
      </Box>
    </>
  );
};

export default Index;

// vercel rebuild
