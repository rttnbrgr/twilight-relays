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
      <Box
        width="100vw"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Banner toggleIsOpen={toggleIsOn} isOpen={isOn} />
        {/* <Nav isOpen={isOn} /> */}

        {/* Links */}
        <Box id="links" layerStyle="sectionBase">
          <Container>
            <VStack textAlign="center" maxWidth="468" mx="auto" spacing={3}>
              <LinkBox
                as="article"
                rounded="md"
                p={2}
                px={3}
                _hover={{
                  background: "whiteAlpha.100"
                }}
              >
                <LinkOverlay href="https://twilightrelays.com" color="altBg">
                  <Text textStyle="bodyLarge">2023 Update</Text>
                </LinkOverlay>
                <Text textStyle="bodyLarge" mb="4">
                  Visit our new site for schedule, info, and live streaming of
                  the 2023 Twilight Relays.
                </Text>
              </LinkBox>
            </VStack>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Index;

// vercel rebuild
