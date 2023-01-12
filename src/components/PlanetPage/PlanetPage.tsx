import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import useAvailableScreenSize from "../../../hooks/useAvailableScreenSize";

const PlanetPage = () => {
  // const router = useRouter();
  // const { planet } = router.query;

  // if (!planet) {
  //   return <Box>loading...</Box>;
  // }

  // const planetData = getPlanetDataByName(planet as string);
  // if (!planetData) {
  //   return <Box>404</Box>;
  // }

  // console.log("planetData :>> ", planetData);

  const { width, height } = useAvailableScreenSize();

  console.log("width :>> ", width);
  console.log("height :>> ", height);
  const minHeightForLargeScreens = `${(height * 78) / 100}px`;
  console.log("minHeightForLargeScreens", minHeightForLargeScreens);

  return (
    <Grid
      className="planet-info"
      maxWidth={{ "2xl": "1440px" }}
      margin="0 auto"
      minHeight={{ lg: minHeightForLargeScreens }}
      height={{ base: "880px", md: "880px", xl: "unset" }}
      border={{
        base: "2px solid purple",
        md: "2px solid yellow",
        lg: "2px solid red",
        xl: "2px solid blue",
        "2xl": "2px solid green",
      }}
      templateRows="repeat(24, 1fr)"
      templateColumns="repeat(36, 1fr)"
    >
      <Box
        border="2px solid white"
        gridColumn="9 / span 8"
        gridRow="7 / span 9"
      ></Box>
      <Grid
        // border="2px solid teal"
        gridColumn="24 / span 9"
        gridRow="5 / span 13"
        templateRows="1fr 176px"
        gap="2rem"
        // alignContent=
      >
        <Box border="2px solid red"></Box>
        <Flex
          // border="2px solid blue"
          direction="column"
          justifyContent="space-between"
        >
          <Flex
            bgColor={`planets.${"mercury".toLocaleLowerCase()}`}
            paddingBlock="0.3rem"
            paddingLeft="2rem"
            gap="1rem"
            width="100%"
            height="48px"
            alignItems="center"
          >
            <Text
              fontFamily="spartan"
              fontWeight="bold"
              fontSize="0.75rem"
              lineHeight="25px"
              letterSpacing="2.57px"
              opacity={0.5}
            >
              01
            </Text>
            <Text
              fontFamily="spartan"
              fontWeight="bold"
              fontSize="0.75rem"
              lineHeight="25px"
              letterSpacing="2.57px"
            >
              OVERVIEW
            </Text>
          </Flex>
          <Flex
            border="1px solid white"
            paddingBlock="0.3rem"
            width="100%"
            height="48px"
            alignItems="center"
          ></Flex>
          <Flex
            border="1px solid white"
            paddingBlock="0.3rem"
            width="100%"
            height="48px"
            alignItems="center"
          ></Flex>
        </Flex>
      </Grid>
      {/* <Box
        border="2px solid yellow"
        gridColumn="24 / span 9"
        gridRow="13 / span 5"
      ></Box> */}
      <Grid
        className="planet-info__specs"
        // border="2px solid blue"
        gridColumn="5 / -5"
        gridRow="span 4 / -2"
        gap="2rem"
        templateColumns="repeat(4, 1fr)"
      >
        <Box
          height="100%"
          border="1px solid white"
          // gridColumn="1 / span 6"
          // gridRow="1"
        ></Box>
        <Box
          height="100%"
          border="1px solid white"
          // gridColumn="8 / span 6"
          // gridRow="1"
        ></Box>
        <Box
          height="100%"
          border="1px solid white"
          // gridColumn="15 / span 6"
          // gridRow="1"
        ></Box>
        <Box
          height="100%"
          border="1px solid white"
          // gridColumn="2 / span 6"
          // gridRow="1"
        ></Box>
      </Grid>
    </Grid>
  );
};

export default PlanetPage;
