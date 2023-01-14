import { Box, Flex, Text } from "@chakra-ui/react";
import { usePlanetsStore } from "../../store/planetsStore";

const PlanetInfoText = () => {
  const currentPlanet = usePlanetsStore((state) => state.currentPlanet);
  return (
    <Flex border="2px solid red">
      <Text>MERCURY</Text>
      <Text></Text>
      <Text></Text>
    </Flex>
  );
};

export default PlanetInfoText;
