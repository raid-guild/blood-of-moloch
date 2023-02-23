import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { AppProps } from "next/app";
import { Scripts } from "./_scripts";
import { Meta } from "../shared/Meta";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Meta />
      <Scripts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
