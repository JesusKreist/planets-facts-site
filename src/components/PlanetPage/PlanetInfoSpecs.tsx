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
      border={{
        base: "2px solid rgb(151, 151, 151, 0.2)",
        md: "2px solid rgb(151, 151, 151, 0.2)",
      }}
      direction={{ md: "column" }}
      alignItems={{ base: "center", md: "unset" }}
      justifyContent={{ base: "space-between", md: "center" }}
      paddingInline={{ base: "1.5rem", md: "unset" }}
      paddingLeft={{ md: "10%" }}
    >
      <Text
        textTransform="uppercase"
        opacity={0.5}
        fontFamily="Spartan"
        fontWeight="bold"
        fontSize={{ base: "0.5rem", lg: "0.6875rem" }}
        lineHeight={{ base: "1rem", lg: "1.5625rem" }}
        letterSpacing={{ base: "0.73px", lg: "1px" }}
      >
        {specName}
      </Text>
      <Text
        textTransform="uppercase"
        fontFamily="Antonio"
        fontWeight="normal"
        fontSize={{ base: "1.25rem", md: "1.5rem", lg: "2.5rem" }}
        lineHeight={{ md: "auto", lg: "auto" }}
        letterSpacing={{ base: "-0.75px", md: "-0.9px", lg: "-1.5px" }}
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
      gridColumn={{ base: "2 / -2", md: "3 / -3", lg: "3 / -3", xl: "5 / -5" }}
      // autoFlow={{ base: "column" }}
      gridRow={{ lg: "span 4 / -3" }}
      gap={{ base: "0.5rem", md: "1rem", lg: "2rem" }}
      templateColumns={{ md: "repeat(4, 1fr)" }}
      templateRows={{ base: "repeat(4, 1fr)", md: "unset" }}
    >
      <PlanetInfoSpec specName="rotation time" specValue={rotation} />
      <PlanetInfoSpec specName="revolution time" specValue={revolution} />
      <PlanetInfoSpec specName="radius" specValue={radius} />
      <PlanetInfoSpec specName="average temp." specValue={temperature} />
    </Grid>
  );
};

export default PlanetInfoSpecs;
