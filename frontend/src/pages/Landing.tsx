import FeatureSection from '../components/FeatureSection';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';

const Landing = () => {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <HeroSection />
        <FeatureSection />
      </main>
    </>
  );
};

export default Landing;
