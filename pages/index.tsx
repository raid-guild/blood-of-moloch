import { Header } from "../shared/Header";
import { Footer } from "../shared/Footer";

import { Hero } from "../components/splash/Hero";
import { About } from "../components/splash/About";
import { Beers } from "../components/splash/Beers";
import { Brew } from "../components/splash/Brew";
import { Flex } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex direction="column">
      <Header />

      <Hero />
      <About />
      <Beers />
      <Brew />
      <Footer />
    </Flex>
  );
};

export default Home;
