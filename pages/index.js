import { useEffect, useState } from 'react';

import { Meta } from '../shared/Meta';
import { Layout } from '../shared/Layout';
import { Header } from '../shared/Header';
import { Footer } from '../shared/Footer';

import { Hero } from '../components/splash/Hero';
import { Yeet } from '../components/splash/Yeet';
import { Membership } from '../components/splash/Membership';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState('');

  useEffect(() => {
    try {
      setWindowWidth(window.innerWidth);
      window.removeEventListener('resize', () => {});
      window.addEventListener('resize', (e) => {
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
      <Yeet />
      <Membership />

      <Footer />
    </Layout>
  );
}
