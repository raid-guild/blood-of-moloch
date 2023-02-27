import { Header } from "../shared/Header";
import { Footer } from "../shared/Footer";

import { Hero } from "../components/splash/Hero";
import { About } from "../components/splash/About";
import { Beers } from "../components/splash/Beers";
import { Brew } from "../components/splash/Brew";
import { VStack } from "@chakra-ui/react";

const Home = () => {
  return (
    <VStack h={"100vh"}>
      <Header />

      <Hero />
      <About />
      <Beers />
      <Brew />
      <Footer />
    </VStack>
  );
};

export default Home;
