import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';

const Landing = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="py-4 text-center">
          <p className="">
            Accelerate your journey to achieve your goals faster then before!{' '}
            <a
              href="https://github.com/dev-rajm/u-go"
              className="underline text-blue-600 hover:text-blue-500"
            >
              Latest release.
            </a>
          </p>
        </div>
        <HeroSection />
      </main>
    </>
  );
};

export default Landing;
