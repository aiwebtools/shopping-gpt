
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
      <header>
        <NavBar />
      </header>
      
      <main>
        <section aria-label="Hero section with main call to action">
          <Hero />
        </section>
        
        <section aria-label="Product features and capabilities">
          <Features />
        </section>
        
        <section aria-label="How Shopping GPT works">
          <HowItWorks />
        </section>
        
        <section aria-label="Customer testimonials and reviews">
          <Testimonials />
        </section>
        
        <section aria-label="Frequently asked questions">
          <FAQ />
        </section>
        
        <section aria-label="Legal disclaimer and terms">
          <Disclaimer />
        </section>
      </main>
      
      <footer>
        <Footer />
      </footer>
      
      <ConsentPopup />
    </div>
  );
};

export default Index;
