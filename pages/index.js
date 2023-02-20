import { useEffect, useState } from "react";

import { Meta } from "../shared/Meta";
import { Layout } from "../shared/Layout";
import { Header } from "../shared/Header";
import { Footer } from "../shared/Footer";

import { Hero } from "../components/splash/Hero";
import { About } from "../components/splash/About";
import { Beers } from "../components/splash/Beers";
import { Brew } from "../components/splash/Brew";
import "@fontsource/uncial-antiqua";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState("");

  useEffect(() => {
    try {
      setWindowWidth(window.innerWidth);
      window.removeEventListener("resize", () => {});
      window.addEventListener("resize", (e) => {
        setWindowWidth(window.innerWidth);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Layout>
      <Meta />
      <Header windowWidth={windowWidth} />

      <Hero />
      <About />
      <Beers />
      <Brew />

      <Footer />
    </Layout>
  );
}
