import { Box, Flex, Image } from "@chakra-ui/react";
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
  const planetIsSaturnOrJupiter =
    planetName === "jupiter" || planetName === "saturn";

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
      gridColumn={{ lg: "3 / 20", xl: "5 / 20" }}
      gridRow="3 / 18"
      position="relative"
    >
      <Box
        className="planet-image__geology"
        // border="1px solid red"
        width="25.2%"
        height="58.62%"
        top="50%"
        left="37.6%"
        position="absolute"
        bgImage={`/assets/geology-${planetName}.png`}
        bgSize="contain"
        bgRepeat="no-repeat"
        bgPosition="center"
        display={planetInfo === "geology" ? "block" : "none"}
      ></Box>
      {/* <Box
        width="100%"
        height="0"
        paddingBottom="100%"
        bgImage={currentImage}
        bgSize="cover"
        border="3px solid red"
      ></Box> */}
      <Box
        width="100%"
        // height="0"
        paddingBottom="100%"
        bgImage={currentImage}
        bgSize={planetIsSaturnOrJupiter ? "contain" : "auto"}
        // bgSize="contain"
        bgRepeat="no-repeat"
        bgPosition="center"
        // border="3px solid red"
      ></Box>
    </Flex>
  );
};

export default PlanetImage;
