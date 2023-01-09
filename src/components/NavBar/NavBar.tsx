import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import NavBarLinks from "./NavBarLinks";

const NavBar = () => {
  return (
    <Grid
      templateColumns={{ md: "repeat(19, 1fr)", lg: "repeat(37, 1fr)" }}
      color="white"
      maxWidth={{ "2xl": "1440px" }}
      border={{
        base: "2px solid purple",
        md: "2px solid yellow",
        lg: "2px solid red",
        xl: "2px solid blue",
        "2xl": "2px solid green",
      }}
      height={{ base: "160px", xl: "max(8vh, 80px)" }}
      margin="0 auto"
      alignContent={{ md: "space-evenly", lg: "center" }}
      // alignContent="space-evenly"
    >
      <Heading
        as="h1"
        fontFamily="Antonio"
        fontSize="1.75rem"
        letterSpacing="-1.05px"
        margin={{ md: "0 auto", lg: "unset" }}
        gridColumn={{ md: "1 / -1", lg: "2 / span 5" }}
      >
        THE PLANETS
      </Heading>
      <NavBarLinks />
    </Grid>
  );
};

export default NavBar;
