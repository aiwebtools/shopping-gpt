
import React from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Disclaimer from '@/components/Disclaimer';
import Footer from '@/components/Footer';
import ConsentPopup from '@/components/ConsentPopup';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <NavBar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Disclaimer />
      <Footer />
      <ConsentPopup />
    </div>
  );
};

export default Index;
