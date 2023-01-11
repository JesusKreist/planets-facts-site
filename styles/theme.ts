import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1440px",
};

const colors = {
  planets: {
    mercury: "#419EBB",
    venus: "#EDA249",
    earth: "#6f2ed6",
    mars: "#D14C32",
    jupiter: "#D83A34",
    saturn: "#CD5120",
    uranus: "#1ec2a4",
    neptune: "#2d68f0",
  },
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
  colors,
});

export default theme;
