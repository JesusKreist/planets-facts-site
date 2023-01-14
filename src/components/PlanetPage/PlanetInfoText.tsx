import { Box, Flex, Text } from "@chakra-ui/react";
import { usePlanetsStore } from "../../store/planetsStore";

const PlanetInfoText = () => {
  const currentPlanet = usePlanetsStore((state) => state.currentPlanet);
  const planetInfo = usePlanetsStore((state) => state.planetInfo);

  const planetInfoText = `${currentPlanet[planetInfo].content}`;

  // console.log("currentPlanet:>> ", currentPlanet);
  // console.log("planetInfo:>> ", planetInfo);
  // console.log(planetInfoText);
  // // const

  return (
    <Flex direction="column" justifyContent="space-between">
      <Text
        fontSize="5rem"
        fontFamily="Antonio"
        fontWeight="medium"
        height="31.9%"
      >
        {currentPlanet.name}
      </Text>
      <Text
        fontSize="0.875rem"
        fontFamily="Spartan"
        fontWeight="normal"
        lineHeight="1.5625rem"
      >
        {planetInfoText}
      </Text>
      <Box>
        <Text
          as="span"
          fontSize="0.875rem"
          fontFamily="Spartan"
          fontWeight="regular"
        >
          Source:{" "}
        </Text>
        <Text
          as="span"
          fontSize="0.875rem"
          fontFamily="Spartan"
          fontWeight="bold"
        >
          Wikipedia
        </Text>
      </Box>
    </Flex>
  );
};

export default PlanetInfoText;
