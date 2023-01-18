import { Grid } from "@chakra-ui/react";
import React from "react";
import PlanetInfoButtons from "./PlanetInfoButtons";
import PlanetInfoText from "./PlanetInfoText";

const PlanetInfo = () => {
  return (
    <Grid
      border="2px solid red"
      gridColumn={{ md: "3/ -3", lg: "24 / span 11", xl: "24 / span 9" }}
      gridRow={{ lg: "3 / span 14" }}
      templateColumns={{ md: "repeat(27, 1fr)", lg: "unset" }}
      templateRows={{ lg: "1fr 33.8%" }}
      gap={{ lg: "2rem" }}
    >
      <PlanetInfoText />
      <PlanetInfoButtons />
    </Grid>
  );
};

export default PlanetInfo;
