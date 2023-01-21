import { Box, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { heartBeat, slideInCard } from "../../../animation/animationVariants";
import { usePlanetsStore } from "../../store/planetsStore";

type PlanetName =
  | "mercury"
  | "venus"
  | "earth"
  | "mars"
  | "jupiter"
  | "saturn"
  | "uranus"
  | "neptune";

const PlanetImage = () => {
  const planetName = usePlanetsStore(
    (state) => state.currentPlanet.name.toLowerCase() as PlanetName
  );
  const planetInfo = usePlanetsStore((state) => state.planetInfo);
  const [currentImage, setCurrentImage] = useState(
    `/assets/planet-${planetName}.svg`
  );
  const planetIsSaturnOrJupiter =
    planetName === "jupiter" || planetName === "saturn";

  const tabletHeights = {
    mercury: "184px",
    venus: "253px",
    earth: "285px",
    mars: "213px",
    jupiter: "369px",
    saturn: "422px",
    uranus: "290px",
    neptune: "285px",
  };

  const mobileHeights = {
    mercury: "111px",
    venus: "154px",
    earth: "173px",
    mars: "129px",
    jupiter: "224px",
    saturn: "256px",
    uranus: "176px",
    neptune: "173px",
  };

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
      key={`${planetName}-${planetInfo}-image`}
      as={motion.div}
      variants={slideInCard}
      initial="offscreen"
      animate="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      exit="exit"
      alignItems="center"
      justifyContent="center"
      // border="2px solid white"
      gridColumn={{ base: "1 / -1", md: "3 / -3", lg: "3 / 21", xl: "5 / 20" }}
      gridRow={{ lg: "3 / 18" }}
      position="relative"
    >
      <Box
        key={`${planetName}-${planetInfo}-image-geology`}
        as={motion.div}
        variants={heartBeat}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        exit="exit"
        className="planet-image__geology"
        width={{ base: "20%", md: "15%", lg: "25.2%" }}
        height="58.62%"
        top="50%"
        left={{ md: "unset", lg: "37.6%" }}
        position="absolute"
        bgImage={`/assets/geology-${planetName}.png`}
        bgSize="contain"
        bgRepeat="no-repeat"
        bgPosition="center"
        display={planetInfo === "geology" ? "block" : "none"}
      ></Box>

      <Box
        width="100%"
        height="100%"
        bgImage={currentImage}
        bgSize={{
          base: `${mobileHeights[planetName]}`,
          md: `${tabletHeights[planetName]}`,
          lg: planetIsSaturnOrJupiter ? "contain" : "auto",
        }}
        bgRepeat="no-repeat"
        bgPosition="center"
      ></Box>

      {/* <Box
        display={{ base: "none", lg: "block" }}
        width="100%"
        height="100%"
        bgImage={currentImage}
        bgSize={planetIsSaturnOrJupiter ? "contain" : "auto"}
        // bgSize="contain"
        bgRepeat="no-repeat"
        bgPosition="center"
        // border="3px solid red"
      ></Box> */}

      {/* <Flex
        height="100%"
        alignItems="center"
        display={{ base: "flex", lg: "none" }}
      >
        <Image
          src={currentImage}
          alt="planet image"
          overflow="hidden"
          objectFit="contain"
          maxHeight={`${tabletHeights[planetName]}`}
        />
      </Flex> */}

      {/* <Box
        width="100%"
        // height="0"
        paddingBottom="100%"
        bgImage={currentImage}
        bgSize={planetIsSaturnOrJupiter ? "contain" : "auto"}
        // bgSize="contain"
        bgRepeat="no-repeat"
        bgPosition="center"
        // border="3px solid red"
      ></Box> */}
    </Flex>
  );
};

export default PlanetImage;
