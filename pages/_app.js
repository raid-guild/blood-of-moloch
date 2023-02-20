import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import customTheme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
      <Toaster position="bottom-center" reverseOrder={false} />
    </ChakraProvider>
  );
}

export default MyApp;
