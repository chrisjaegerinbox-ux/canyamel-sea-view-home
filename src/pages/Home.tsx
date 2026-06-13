import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import { Feature72 } from '@/components/ui/feature-72';
import ImageGallery from '@/components/ImageGallery';
import OwnerSection from '@/components/OwnerSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Feature72 />
      <ImageGallery />
      <OwnerSection />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
