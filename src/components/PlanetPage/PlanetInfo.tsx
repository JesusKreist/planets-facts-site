import { Grid } from "@chakra-ui/react";
import React from "react";
import PlanetInfoSwitcher from "./PlanetInfoSwitcher";
import PlanetInfoSwitcherMobile from "./PlanetInfoSwitcherMobile";
import PlanetInfoText from "./PlanetInfoText";

const PlanetInfo = () => {
  return (
    <Grid
      //   border="2px solid red"
      gridColumn={{
        base: "1 / -1",
        md: "3/ -3",
        lg: "24 / span 11",
        xl: "23 / span 10",
        "2xl": "24 / span 9",
      }}
      gridRow={{ lg: "3 / span 14" }}
      templateColumns={{ md: "repeat(27, 1fr)", lg: "unset" }}
      templateRows={{ lg: "1fr 33.8%" }}
      gap={{ lg: "2rem" }}
    >
      <PlanetInfoText />
      <PlanetInfoSwitcher />
    </Grid>
  );
};

export default PlanetInfo;
