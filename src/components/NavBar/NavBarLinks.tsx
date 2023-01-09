import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

const NavBarLinks = () => {
  return (
    <Flex
      justifyContent="space-between"
      gridColumn={{ md: "2 / -2", lg: "18 / -2", xl: "20 / -2" }}
      alignItems="center"
    >
      {planets.map((planet) => (
        <Heading
          as="h4"
          fontSize="0.6875rem"
          fontFamily="Spartan"
          lineHeight="1.5625rem"
          letterSpacing="1px"
          key={Math.random() * 1000}
        >
          {planet.toUpperCase()}
        </Heading>
      ))}
    </Flex>
  );
};

export default NavBarLinks;
