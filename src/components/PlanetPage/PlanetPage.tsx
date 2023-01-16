import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useAvailableScreenSize from "../../../hooks/useAvailableScreenSize";
import { getPlanetDataByName } from "../../data/data";
import { CurrentPlanet, usePlanetsStore } from "../../store/planetsStore";
import PlanetImage from "./PlanetImage";
import PlanetInfoButtons from "./PlanetInfoButtons";
import PlanetInfoSpecs from "./PlanetInfoSpecs";
import PlanetInfoText from "./PlanetInfoText";

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
      <PlanetImage />
      <Grid
        // border="2px solid teal"
        gridColumn="24 / span 9"
        // gridRow="5 / span 13"
        gridRow="3 / span 14"
        templateRows="1fr 33.8%"
        gap="2rem"
        // alignContent=
      >
        <PlanetInfoText />
        <PlanetInfoButtons />
      </Grid>

      <PlanetInfoSpecs />
    </Grid>
  );
};

export default PlanetPage;
