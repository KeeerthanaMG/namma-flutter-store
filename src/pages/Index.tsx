import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategorySection from '@/components/CategorySection';
import FlutterConBanner from '@/components/FlutterConBanner';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Flutter Hub - Official Namma Flutter Chennai Merchandise</title>
        <meta name="description" content="Shop premium Flutter hoodies, t-shirts and merchandise from Namma Flutter Chennai community. Get exclusive FlutterCon 2025 collection." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <FeaturedProducts />
          <CategorySection />
          <FlutterConBanner />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
