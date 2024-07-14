// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/rajdhani";
import "../styles/globals.css"; 

import { mynewtheme } from "../src/theme";
// import { Analytics } from '@vercel/analytics/react';

function Marketplace({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={mynewtheme}>
      {/* <LayoutWrapper> */}
        <Component {...pageProps} />
        {/* <Analytics /> */}
    </ChakraProvider>
  );
}

export default Marketplace;
