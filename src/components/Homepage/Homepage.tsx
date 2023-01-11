import { Box, Flex, Grid } from "@chakra-ui/react";
import React from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import NavBar from "../NavBar/NavBar";

const Homepage = () => {
  return (
    <Box
      position="relative"
      border="2px solid blue"
      width="100vw"
      minHeight="100vh"
      bgImage="/assets/background-stars.svg"
      bgColor="#070724"
    >
      <NavBar />
      <MobileMenu />
      {/* <Box>Testing to see if the text shows under</Box> */}
    </Box>
  );
};

export default Homepage;
