
import React from 'react';
import Logo from './Logo';
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-cyber-dark relative overflow-hidden pt-16 pb-8">
      {/* Enhanced background effects with divine glow */}
      <div className="absolute inset-0 cyber-grid opacity-20 -z-10"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-300/20 via-amber-200/20 to-orange-300/20 rounded-full filter blur-3xl animate-divine-float -z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-300/20 via-purple-300/20 to-pink-300/20 rounded-full filter blur-3xl animate-divine-float-reverse -z-0"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-white/10 via-yellow-200/10 to-white/10 rounded-full filter blur-3xl animate-divine-pulse -z-0"></div>
      
      <div className="container mx-auto px-4">
        {/* Educational disclaimer */}
        <div className="text-center mb-8 p-4 bg-gradient-to-r from-amber-900/20 via-yellow-900/20 to-amber-900/20 rounded-lg border border-yellow-400/30 backdrop-blur-sm">
          <p className="text-sm text-yellow-200">
            This website is for informational, educational, and research purposes only.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <Logo />
            <p className="text-gray-400 mt-4 text-center md:text-left">
              Your AI-Powered Shopping Super Sidekick – Smarter Picks, Killer Deals, Zero Nonsense.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-cyber font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-300 hover:text-yellow-300 transition duration-300 hover:drop-shadow-divine"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('disclaimer')}
                  className="text-gray-300 hover:text-yellow-300 transition duration-300 hover:drop-shadow-divine"
                >
                  Disclaimer
                </button>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-gray-300 hover:text-yellow-300 transition duration-300 hover:drop-shadow-divine"
                >
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-cyber font-bold text-white mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-gray-300 hover:text-yellow-300 transition duration-300 hover:drop-shadow-divine"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-gray-300 hover:text-yellow-300 transition duration-300 hover:drop-shadow-divine"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-cyber font-bold text-white mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a 
                  href="tel:+14758008096" 
                  className="text-gray-300 hover:text-yellow-300 transition duration-300 hover:drop-shadow-divine"
                >
                  (475) 800-8096
                </a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-gray-300 hover:text-yellow-300 transition duration-300 hover:drop-shadow-divine"
                >
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gradient-to-r from-yellow-400/30 via-white/30 to-yellow-400/30 pt-8">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-yellow-300 hover:drop-shadow-divine transition duration-300"
            >
              © 2025 AI WEB TOOLS LLC. All rights reserved.
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4">
            <a 
              href="https://chatgpt.com/g/g-6813888952088191a6d9615d86156949-shopping-gpt"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:via-yellow-200 hover:to-amber-300 text-black font-cyber font-bold rounded-md divine-shadow hover:divine-glow transition-all duration-500"
              >
                GO SHOPPING NOW
              </Button>
            </a>
            
            <div className="fixed bottom-4 right-4 z-20">
              <a 
                href="https://aiwebtools.lovable.app/?via=aiwebtools"
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-black font-cyber font-bold py-2 px-6 rounded-full divine-shadow hover:divine-glow transition-all duration-500 flex items-center"
              >
                More AI Tools
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
