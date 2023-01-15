import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const PlanetImage = () => {
  return (
    <Flex
      alignItems="center"
      border="2px solid white"
      gridColumn="9 / span 8"
      gridRow="5 / span 9"

      // gridRow="7 / span 9"
    >
      <Box
        width="100%"
        height="0"
        paddingBottom="100%"
        bgImage="/assets/planet-mercury.svg"
        bgSize="cover"
        // height="290px"
        rounded="full"
        border="1px solid red"
      ></Box>
    </Flex>
  );
};

export default PlanetImage;
