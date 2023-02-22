import { Meta } from "../shared/Meta";
import { Layout } from "../shared/Layout";
import { Header } from "../shared/Header";
import { Footer } from "../shared/Footer";

import { Hero } from "../components/splash/Hero";
import { About } from "../components/splash/About";
import { Beers } from "../components/splash/Beers";
import { Brew } from "../components/splash/Brew";

const Home = () => {
  return (
    <Layout>
      <Meta />
      <Header />

      <Hero />
      <About />
      <Beers />
      <Brew />

      <Footer />
    </Layout>
  );
};

export default Home;
