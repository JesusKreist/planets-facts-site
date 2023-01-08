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
import { ChakraProvider, theme } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
