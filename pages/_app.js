import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Toaster position="bottom-center" reverseOrder={false} />
    </ChakraProvider>
  );
}

export default MyApp;
