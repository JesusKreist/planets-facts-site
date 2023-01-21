import "../styles/globals.css";
import "@fontsource/spartan/100.css";
import "@fontsource/spartan/200.css";
import "@fontsource/spartan/300.css";
import "@fontsource/spartan/400.css";
import "@fontsource/spartan/500.css";
import "@fontsource/spartan/600.css";
import "@fontsource/spartan/700.css";
import "@fontsource/spartan/800.css";
import "@fontsource/spartan/900.css";
import "@fontsource/antonio/100.css";
import "@fontsource/antonio/200.css";
import "@fontsource/antonio/300.css";
import "@fontsource/antonio/400.css";
import "@fontsource/antonio/500.css";
import "@fontsource/antonio/600.css";
import "@fontsource/antonio/700.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import MobileMenu from "../src/components/MobileMenu/MobileMenu";
import NavBar from "../src/components/NavBar/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Box
        color="white"
        position="relative"
        width="100vw"
        minHeight="100vh"
        bgImage="/assets/background-stars.svg"
        bgColor="#070724"
      >
        <NavBar />
        <Box bgColor="rgb(151, 151, 151, 0.2)" height="1.5px"></Box>
        <MobileMenu />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
