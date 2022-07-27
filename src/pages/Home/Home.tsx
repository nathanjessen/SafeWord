import FeatureSection from '../../components/FeatureSection';
import Gallery from '../../components/Gallery';
import Hero from '../../components/Hero';
import Roadmap from '../../components/Roadmap';
import SafeWordGenerator from '../../components/SafeWordGenerator';
import Team from '../../components/Team';

export const Home = () => {
  return (
    <main>
      <Hero />
      <SafeWordGenerator />
      <Gallery />
      <Roadmap />
      <FeatureSection />
      <Team />
    </main>
  );
};
