import { Box, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Box>
        <Heading as="h1">THE PLANETS</Heading>
      </Box>
    </Link>
  );
};

export default Logo;
