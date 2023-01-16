import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import NavBarLinks from "./NavBarLinks";

const NavBar = () => {
  return (
    <Grid
      className="nav-bar"
      position="relative"
      templateColumns={{
        base: "repeat(14, 1fr)",
        md: "repeat(19, 1fr)",
        lg: "repeat(37, 1fr)",
      }}
      color="white"
      maxWidth={{ "2xl": "1440px" }}
      border={{
        base: "2px solid purple",
        md: "2px solid yellow",
        lg: "2px solid red",
        xl: "2px solid blue",
        "2xl": "2px solid green",
      }}
      height={{ base: "67px", md: "160px", lg: "max(8vh, 80px)" }}
      margin="0 auto"
      alignContent={{ base: "center", md: "space-evenly", lg: "center" }}
    >
      <Heading
        as="h1"
        alignSelf="center"
        fontFamily="Antonio"
        fontSize="1.75rem"
        letterSpacing="-1.05px"
        margin={{ md: "0 auto", lg: "unset" }}
        gridColumn={{
          base: "2 / span 5",
          md: "1 / -1",
          lg: "3 / span 5",
          xl: "2 / span 5",
        }}
      >
        THE PLANETS
      </Heading>
      <NavBarLinks />
    </Grid>
  );
};

export default NavBar;
