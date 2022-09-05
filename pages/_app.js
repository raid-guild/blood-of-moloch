<<<<<<< HEAD
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
=======
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
>>>>>>> 32fc2b8b7609d936d8b98ea2ddb5cbba2803bcaa
}

export default MyApp;
