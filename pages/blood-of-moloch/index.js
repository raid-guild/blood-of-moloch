import { useEffect, useState } from "react";

import { Meta } from "../../shared/Meta";
import { Layout } from "../../shared/Layout";
import { Header } from "../../shared/Header";
import { Footer } from "../../shared/Footer";

import { Lore } from "../../components/lore/Lore";
import { Eevee } from "../../components/lore/Eevee";
import { Dao } from "../../components/lore/Dao";

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

      <Lore />
      <Eevee />
      <Dao />

      <Footer />
    </Layout>
  );
}
