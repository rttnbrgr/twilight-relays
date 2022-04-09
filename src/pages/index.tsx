import { Box, Text, Container, VStack, SimpleGrid } from "@chakra-ui/react";
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
  title: 'Twilight Relays 2022',
  description: "Welcome to the homepage of Twilight Relays",
  siteName: 'Twilight Relays 2022'
}

const Index = () => {
  const [isOn, toggleIsOn] = useToggle(false);
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description}></meta>

        {/* Twitter */}
        {/* <meta name="twitter:card" content="summary" key="twcard" />
        <meta
          name="twitter:creator"
          content={SEO.twitterHandle}
          key="twhandle"
        /> */}

        {/* Open Graph */}
        {/* <meta property="og:url" content={SEO.currentURL} key="ogurl" />
        <meta
          property="og:image"
          content={SEO.previewImage.src}
          key="ogimage"
        /> */}
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
      <Nav isOpen={isOn} />

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

      {/* Bumper */}
      <Box py="8" />
    </Box>
    </>
  );
};

export default Index;

// vercel rebuild
