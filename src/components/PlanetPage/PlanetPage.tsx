import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useAvailableScreenSize from "../../../hooks/useAvailableScreenSize";
import { getPlanetDataByName } from "../../data/data";
import { CurrentPlanet, usePlanetsStore } from "../../store/planetsStore";
import PlanetImage from "./PlanetImage";
import PlanetInfo from "./PlanetInfo";
import PlanetInfoButtons from "./PlanetInfoSwitcher";
import PlanetInfoSpecs from "./PlanetInfoSpecs";
import PlanetInfoText from "./PlanetInfoText";
import PlanetInfoSwitcherMobile from "./PlanetInfoSwitcherMobile";

const PlanetPage = () => {
  const router = useRouter();
  const { width, height } = useAvailableScreenSize();
  const { planet } = router.query;
  //   const [planetDataFromFile, setplanetDataFromFile] = useState<CurrentPlanet>()
  const { currentPlanet, setCurrentPlanet } = usePlanetsStore();

  useEffect(() => {
    setCurrentPlanet(planet as string | undefined);
  }, [planet, setCurrentPlanet]);

  if (!planet) {
    return <Box>loading...</Box>;
  }

  //   const planet = "mercury";
  //   const planetData = getPlanetDataByName(planet as string);
  //   useEffect(() => {
  //     setCurrentPlanet(planetData);
  //   }, [planetData]);

  //   if (!planetData) {
  //     return <Box>404</Box>;
  //   }

  //   setCurrentPlanet(planetData);

  // console.log("planetData :>> ", currentPlanet);

  // console.log("width :>> ", width);
  // console.log("height :>> ", height);
  const minHeightForLargeScreens = `max(${(height * 78) / 100}px, 938px)`;
  // const minHeightForLargeScreens = `90vh`;
  // console.log("minHeightForLargeScreens", minHeightForLargeScreens);

  return (
    <>
      <Grid
        display={{ base: "none", md: "grid" }}
        className="planet-page"
        maxWidth={{ "2xl": "1440px" }}
        margin="0 auto"
        minHeight={{ lg: minHeightForLargeScreens }}
        // height={{ base: "880px", md: "unset", xl: "unset" }}
        border={{
          base: "2px solid purple",
          md: "2px solid yellow",
          lg: "2px solid red",
          xl: "2px solid blue",
          "2xl": "2px solid green",
        }}
        templateRows={{ md: "25.2rem 15.82rem 5.5rem ", lg: "repeat(24, 1fr)" }}
        rowGap={{ md: "2rem", lg: "0" }}
        paddingBottom={{ md: "2rem", lg: "0" }}
        templateColumns={{ base: "repeat(14, 1fr)", md: "repeat(36, 1fr)" }}
      >
        <PlanetImage />

        <PlanetInfo />
        <PlanetInfoSpecs />
      </Grid>

      <Grid
        display={{ base: "grid", md: "none" }}
        className="planet-page-mobile"
        margin="0 auto"
        minHeight={{ lg: minHeightForLargeScreens }}
        border="2px solid purple"
        templateRows={{ md: "25.2rem 15.82rem 5.5rem ", lg: "repeat(24, 1fr)" }}
        rowGap={{ md: "2rem", lg: "0" }}
        paddingBottom={{ md: "2rem", lg: "0" }}
        templateColumns={{ base: "repeat(14, 1fr)", md: "repeat(36, 1fr)" }}
      >
        <PlanetInfoSwitcherMobile />
        {/* <PlanetImage />

      <PlanetInfo />
      <PlanetInfoSpecs /> */}
      </Grid>
    </>
  );
};

export default PlanetPage;
