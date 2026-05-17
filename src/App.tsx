import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Structure } from './components/sections/Structure';
import { Features } from './components/sections/Features';
import { FunctionalitiesSlider } from './components/sections/FunctionalitiesSlider';
import { CTABanner } from './components/sections/CTABanner';
import { Testimonials } from './components/sections/Testimonials';
import { AppDownload } from './components/sections/AppDownload';
import { News } from './components/sections/News';
import { Footer } from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Structure />
        <Features />
        <FunctionalitiesSlider />
        <CTABanner />
        <Testimonials />
        <AppDownload />
        <News />
      </main>
      <Footer />
    </div>
  );
}
