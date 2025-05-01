
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
      {/* Background effects */}
      <div className="absolute inset-0 cyber-grid opacity-20 -z-10"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyber-purple/10 rounded-full filter blur-3xl -z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyber-blue/10 rounded-full filter blur-3xl -z-0"></div>
      
      <div className="container mx-auto px-4">
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
                  className="text-gray-300 hover:text-cyber-pink transition duration-300"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('disclaimer')}
                  className="text-gray-300 hover:text-cyber-pink transition duration-300"
                >
                  Disclaimer
                </button>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-gray-300 hover:text-cyber-pink transition duration-300"
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
                  className="text-gray-300 hover:text-cyber-pink transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.ai/terms-of-services" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-gray-300 hover:text-cyber-pink transition duration-300"
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-cyber-blue" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a 
                  href="tel:+14758008096" 
                  className="text-gray-300 hover:text-cyber-pink transition duration-300"
                >
                  (475) 800-8096
                </a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-cyber-blue" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-gray-300 hover:text-cyber-pink transition duration-300"
                >
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-cyber-purple/30 pt-8">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <a 
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-cyber-pink"
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
                className="bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-blue text-white font-cyber font-bold rounded-md neon-border"
              >
                GO SHOPPING NOW
              </Button>
            </a>
            
            <div className="fixed bottom-4 right-4 z-20">
              <a 
                href="https://www.aiwebtools.ai"
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-cyber-green to-cyber-blue text-white font-cyber font-bold py-2 px-6 rounded-full hover:shadow-neon-blue transition-all duration-300 flex items-center"
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
