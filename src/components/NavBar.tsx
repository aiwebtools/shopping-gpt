
import React, { useState, useEffect, useCallback } from 'react';
import Logo from './Logo';
import { Button } from "@/components/ui/button";

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cyber-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 min-w-0">
            <Logo />
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center p-2 rounded-md text-cyber-pink active:scale-95 transition-transform duration-150"
            onClick={toggleMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-7 w-7" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Button 
              variant="ghost" 
              className="text-white hover:text-cyber-pink hover:bg-cyber-dark-purple transition duration-300"
              onClick={() => scrollToSection('faq')}
            >
              FAQ
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:text-cyber-pink hover:bg-cyber-dark-purple transition duration-300"
              onClick={() => scrollToSection('disclaimer')}
            >
              Disclaimer
            </Button>
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-cyber-pink transition duration-300"
            >
              More AI Tools
            </a>
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
          </nav>
        </div>
        
        {/* Mobile navigation with animation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[400px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="space-y-1 py-3 border-t border-cyber-purple/30">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-white hover:text-cyber-pink hover:bg-cyber-dark-purple transition duration-200 active:scale-[0.98]"
              onClick={() => scrollToSection('faq')}
            >
              FAQ
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-white hover:text-cyber-pink hover:bg-cyber-dark-purple transition duration-200 active:scale-[0.98]"
              onClick={() => scrollToSection('disclaimer')}
            >
              Disclaimer
            </Button>
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noreferrer"
              className="block px-4 py-2 text-white hover:text-cyber-pink transition duration-200"
            >
              More AI Tools
            </a>
            <a 
              href="https://chatgpt.com/g/g-6813888952088191a6d9615d86156949-shopping-gpt"
              target="_blank"
              rel="noreferrer"
              className="block px-4 py-2"
            >
              <Button
                className="w-full bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-blue text-white font-cyber font-bold rounded-md"
              >
                GO SHOPPING NOW
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
