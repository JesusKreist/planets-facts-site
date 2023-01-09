import { Box } from "@chakra-ui/react";
import React from "react";
import NavBar from "../NavBar/NavBar";

const Homepage = () => {
  return (
    <Box
      border="2px solid blue"
      width="100vw"
      height="100vh"
      bgImage="/assets/background-stars.svg"
      // bgSize="cover"
      bgColor="#070724"
    >
      <NavBar />
    </Box>
  );
};

export default Homepage;
