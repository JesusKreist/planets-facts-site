import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1440px",
};

const theme = extendTheme({
  textStyles: {
    h1: {
      "font-size": "80px",
      "font-weight": "medium",
      "font-family": "Fira Code",
      "line-height": "103px",
    },
    h2: {
      fontSize: ["40px"],
      fontWeight: "medium",
      fontFamily: "Antonio",
      lineHeight: "52px",
    },
    h3: {
      fontSize: ["12px"],
      fontWeight: "bold",
      fontFamily: "Spartan",
      lineHeight: "25px",
    },
    h4: {
      fontSize: ["11px"],
      fontWeight: "bold",
      fontFamily: "Spartan",
      lineHeight: "25px",
    },
    p: {
      fontSize: ["14px"],
      fontWeight: "regular",
      fontFamily: "Spartan",
      lineHeight: "25px",
    },
  },
  breakpoints,
});

export default theme;
