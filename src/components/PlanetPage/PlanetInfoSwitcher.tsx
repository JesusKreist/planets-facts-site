import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { usePlanetsStore } from "../../store/planetsStore";
import PlanetInfoButton from "./PlanetInfoButton";

const PlanetInfoSwitcher = () => {
  const planet = usePlanetsStore((state) => state.currentPlanet);
  const { planetInfo, setPlanetInfo } = usePlanetsStore();

  const planetColour = `planets.${planet.name.toLocaleLowerCase()}`;

  return (
    <Flex
      border="2px solid green"
      direction={{ md: "column" }}
      display={{ base: "none", md: "flex" }}
      // justifyContent={{
      //   base: "space-between",
      //   md: "center",
      //   lg: "space-between",
      // }}
      gap={{ md: "1rem", lg: "unset" }}
      gridColumn={{ md: "span 11 / -1", lg: "unset" }}
    >
      <PlanetInfoButton
        infoNumber={1}
        infoTitle={{ baseTitle: "OVERVIEW", mediumTitle: "OVERVIEW" }}
        isActive={planetInfo === "overview"}
        planetColour={planetColour}
        onClick={() => setPlanetInfo("overview")}
      />
      <PlanetInfoButton
        infoNumber={2}
        infoTitle={{
          baseTitle: "STRUCTURE",
          mediumTitle: "INTERNAL STRUCTURE",
        }}
        isActive={planetInfo === "structure"}
        planetColour={planetColour}
        onClick={() => setPlanetInfo("structure")}
      />
      <PlanetInfoButton
        infoNumber={3}
        infoTitle={{ baseTitle: "SURFACE", mediumTitle: "SURFACE GEOLOGY" }}
        isActive={planetInfo === "geology"}
        planetColour={planetColour}
        onClick={() => setPlanetInfo("geology")}
      />
    </Flex>
  );
};

export default PlanetInfoSwitcher;
