import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { usePlanetsStore } from "../../store/planetsStore";

const PlanetImage = () => {
  const planetName = usePlanetsStore((state) =>
    state.currentPlanet.name.toLowerCase()
  );
  const planetInfo = usePlanetsStore((state) => state.planetInfo);
  const [currentImage, setCurrentImage] = useState(
    `/assets/planet-${planetName}.svg`
  );

  useEffect(() => {
    switch (planetInfo) {
      case "overview":
        setCurrentImage(`/assets/planet-${planetName}.svg`);
        break;
      case "structure":
        setCurrentImage(`/assets/planet-${planetName}-internal.svg`);
        break;
      case "geology":
        setCurrentImage(`/assets/planet-${planetName}.svg`);
        break;
      default:
        break;
    }
  }, [planetInfo, planetName, setCurrentImage]);

  return (
    <Flex
      alignItems="center"
      // border="2px solid white"
      gridColumn="9 / span 8"
      gridRow="5 / span 9"
      position="relative"
      // gridRow="7 / span 9"
    >
      <Box
        className="planet-image__geology"
        // border="1px solid red"
        width="56.2%"
        height="58.62%"
        top="75%"
        left="22.2%"
        position="absolute"
        bgImage={`/assets/geology-${planetName}.png`}
        bgSize="contain"
        bgRepeat="no-repeat"
        bgPosition="center"
        display={planetInfo === "geology" ? "block" : "none"}
      ></Box>
      <Box
        width="100%"
        height="0"
        paddingBottom="100%"
        bgImage={currentImage}
        bgSize="cover"
        rounded="full"
        // border="1px solid red"
      ></Box>
    </Flex>
  );
};

export default PlanetImage;
