import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const PlanetInfoButtons = () => {
  return (
    <Flex
      // border="2px solid blue"
      direction="column"
      justifyContent="space-between"
    >
      <Flex
        bgColor={`planets.${"mercury".toLocaleLowerCase()}`}
        paddingBlock="0.3rem"
        paddingLeft="2rem"
        gap="1rem"
        width="100%"
        height="48px"
        alignItems="center"
      >
        <Text
          fontFamily="spartan"
          fontWeight="bold"
          fontSize="0.75rem"
          lineHeight="25px"
          letterSpacing="2.57px"
          opacity={0.5}
        >
          01
        </Text>
        <Text
          fontFamily="spartan"
          fontWeight="bold"
          fontSize="0.75rem"
          lineHeight="25px"
          letterSpacing="2.57px"
        >
          OVERVIEW
        </Text>
      </Flex>
      <Flex
        border="1px solid white"
        paddingBlock="0.3rem"
        width="100%"
        height="48px"
        alignItems="center"
      ></Flex>
      <Flex
        border="1px solid white"
        paddingBlock="0.3rem"
        width="100%"
        height="48px"
        alignItems="center"
      ></Flex>
    </Flex>
  );
};

export default PlanetInfoButtons;
