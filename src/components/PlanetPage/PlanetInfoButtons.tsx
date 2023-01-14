import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { usePlanetsStore } from "../../store/planetsStore";

interface PlanetInfoButtonProps {
  planetColour: string;
  isActive: boolean;
  infoNumber: number;
  infoTitle: string;
  onClick: () => void;
}

const PlanetInfoButton: React.FC<PlanetInfoButtonProps> = ({
  planetColour,
  isActive,
  infoNumber,
  infoTitle,
  onClick,
}) => {
  return (
    <Flex
      bgColor={`${isActive ? planetColour : "transparent"}`}
      paddingBlock="0.3rem"
      paddingLeft="2rem"
      gap="1rem"
      width="100%"
      //   height="48px"
      height="28%"
      alignItems="center"
      borderWidth={isActive ? "0px" : "2px"}
      borderColor={isActive ? "transparent" : "rgb(151, 151, 151, 0.2)"}
      as="button"
      _hover={{
        bgColor: `${isActive ? planetColour : "rgb(216, 216, 216, 0.2)"}`,
        borderWidth: `0px`,
      }}
      onClick={onClick}
    >
      <Text
        fontFamily="spartan"
        fontWeight="bold"
        fontSize="0.75rem"
        lineHeight="25px"
        letterSpacing="2.57px"
        width="1.58rem"
        opacity={0.5}
      >
        0{infoNumber}
      </Text>
      <Text
        fontFamily="spartan"
        fontWeight="bold"
        fontSize="0.75rem"
        lineHeight="25px"
        letterSpacing="2.57px"
      >
        {infoTitle}
      </Text>
    </Flex>
  );
};

const PlanetInfoSwitcher = () => {
  const planet = usePlanetsStore((state) => state.currentPlanet);
  const { planetInfo, setPlanetInfo } = usePlanetsStore();

  const planetColour = `planets.${planet.name.toLocaleLowerCase()}`;

  return (
    <Flex
      // border="2px solid blue"
      direction="column"
      justifyContent="space-between"
    >
      <PlanetInfoButton
        infoNumber={1}
        infoTitle="OVERVIEW"
        isActive={planetInfo === "overview"}
        planetColour={planetColour}
        onClick={() => setPlanetInfo("overview")}
      />
      <PlanetInfoButton
        infoNumber={2}
        infoTitle="INTERNAL STRUCTURE"
        isActive={planetInfo === "structure"}
        planetColour={planetColour}
        onClick={() => setPlanetInfo("structure")}
      />
      <PlanetInfoButton
        infoNumber={3}
        infoTitle="SURFACE GEOLOGY"
        isActive={planetInfo === "geology"}
        planetColour={planetColour}
        onClick={() => setPlanetInfo("geology")}
      />
    </Flex>
  );
};

export default PlanetInfoSwitcher;
