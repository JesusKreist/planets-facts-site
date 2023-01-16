import { Grid, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { usePlanetsStore } from "../../store/planetsStore";

interface PlanetInfoSpecProps {
  specName: string;
  specValue: string;
}

const PlanetInfoSpec: React.FC<PlanetInfoSpecProps> = ({
  specName,
  specValue,
}) => {
  return (
    <Flex
      height="100%"
      border="1px solid white"
      direction="column"
      justifyContent="center"
      paddingLeft="10%"
      // gridColumn="1 / span 6"
      // gridRow="1"
    >
      <Text
        textTransform="uppercase"
        opacity={0.5}
        fontFamily="Spartan"
        fontWeight="bold"
        fontSize="0.6875rem"
        lineHeight="1.5625rem"
        letterSpacing="1px"
      >
        {specName}
      </Text>
      <Text
        textTransform="uppercase"
        fontFamily="Antonio"
        fontWeight="normal"
        fontSize="2.5rem"
        lineHeight="auto"
        letterSpacing="-1.5px"
      >
        {specValue}
      </Text>
    </Flex>
  );
};

const PlanetInfoSpecs = () => {
  const { rotation, revolution, radius, temperature } = usePlanetsStore(
    (state) => state.currentPlanet
  );
  return (
    <Grid
      className="planet-info__specs"
      gridColumn="5 / -5"
      gridRow="span 4 / -3"
      gap="2rem"
      templateColumns="repeat(4, 1fr)"
    >
      <PlanetInfoSpec specName="rotation time" specValue={rotation} />
      <PlanetInfoSpec specName="revolution time" specValue={revolution} />
      <PlanetInfoSpec specName="radius" specValue={radius} />
      <PlanetInfoSpec specName="average temp." specValue={temperature} />
    </Grid>
  );
};

export default PlanetInfoSpecs;