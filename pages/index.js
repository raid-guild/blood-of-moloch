import { Meta } from '../shared/Meta';
import { Layout } from '../shared/Layout';
import { Header } from '../shared/Header';
import { HeroScreen } from '../components/HeroScreen';
import { YeetScreen } from '../components/YeetScreen';
import { Membership } from '../components/Membership';
import { Footer } from '../shared/Footer';

export default function Home() {
  return (
    <Layout>
      <Meta />
      <Header />

      <HeroScreen />
      <YeetScreen />
      <Membership />

      <Footer />
    </Layout>
  );
}
