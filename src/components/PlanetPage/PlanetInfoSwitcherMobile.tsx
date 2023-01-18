import { Flex, Grid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { usePlanetsStore } from "../../store/planetsStore";
import PlanetInfoButton from "./PlanetInfoButton";
import PlanetInfoButtonMobile from "./PlanetInfoButtonMobile";

const PlanetInfoSwitcherMobile = () => {
  const planet = usePlanetsStore((state) => state.currentPlanet);
  const { planetInfo, setPlanetInfo } = usePlanetsStore();

  const planetColour = `planets.${planet.name.toLocaleLowerCase()}`;

  return (
    <Grid
      borderBottom="2px solid rgb(151, 151, 151, 0.2)"
      templateColumns="repeat(14, 1fr)"
      display={{ base: "grid", md: "none" }}
      height="3.125rem"
    >
      <Flex gridColumn="2 / -2" justifyContent="space-between">
        <PlanetInfoButtonMobile
          infoNumber={1}
          infoTitle={{ baseTitle: "OVERVIEW", mediumTitle: "OVERVIEW" }}
          isActive={planetInfo === "overview"}
          planetColour={planetColour}
          onClick={() => setPlanetInfo("overview")}
        />
        <PlanetInfoButtonMobile
          infoNumber={2}
          infoTitle={{
            baseTitle: "STRUCTURE",
            mediumTitle: "INTERNAL STRUCTURE",
          }}
          isActive={planetInfo === "structure"}
          planetColour={planetColour}
          onClick={() => setPlanetInfo("structure")}
        />
        <PlanetInfoButtonMobile
          infoNumber={3}
          infoTitle={{ baseTitle: "SURFACE", mediumTitle: "SURFACE GEOLOGY" }}
          isActive={planetInfo === "geology"}
          planetColour={planetColour}
          onClick={() => setPlanetInfo("geology")}
        />
      </Flex>
    </Grid>
  );
};

export default PlanetInfoSwitcherMobile;
