
import React from 'react';
import ThreeDElement from './ThreeDElement';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-24 overflow-hidden" aria-labelledby="hero-heading" role="banner">
      {/* Divine background grid with enhanced glow */}
      <div className="absolute inset-0 cyber-grid opacity-20 -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/5 via-transparent to-amber-300/5 animate-divine-shimmer -z-10"></div>
      
      {/* Enhanced divine gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-300/30 via-amber-200/30 to-orange-300/30 rounded-full filter blur-3xl animate-divine-float -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-300/25 via-purple-300/25 to-pink-300/25 rounded-full filter blur-3xl animate-divine-float-reverse -z-10"></div>
      <div className="absolute top-2/3 left-1/3 w-96 h-96 bg-gradient-to-r from-white/20 via-yellow-200/20 to-white/20 rounded-full filter blur-3xl animate-divine-pulse -z-10"></div>
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-r from-amber-400/25 via-yellow-300/25 to-amber-400/25 rounded-full filter blur-3xl animate-divine-spiral -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 z-10 space-y-8">
            <h1 id="hero-heading" className="text-3xl sm:text-5xl md:text-7xl font-cyber font-bold mb-4 sm:mb-8">
              <span className="bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-300 bg-clip-text text-transparent drop-shadow-divine animate-divine-text-glow">
                SHOPPING GPT
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-cyber font-bold mb-10 text-amber-300 drop-shadow-divine">
              Your AI-Powered Shopping Super Sidekick
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-xl leading-relaxed">
              Smarter Picks, Killer Deals, Zero Nonsense. Experience the new shopping capabilities of GPT technology.
            </p>
            
            <p className="text-lg text-yellow-200 mb-10 max-w-xl font-medium">
              SHOPPING GPT IS THE #1 AI SHOPPING AGENT THAT FINDS THE BEST DEALS FOR ANYTHING YOU ARE LOOKING TO BUY
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="https://chatgpt.com/g/g-6813888952088191a6d9615d86156949-shopping-gpt"
                target="_blank"
                rel="noreferrer"
                aria-label="Start using Shopping GPT AI assistant now"
              >
                <Button
                  className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:via-yellow-200 hover:to-amber-300 text-black px-10 py-8 font-cyber font-bold text-xl rounded-md divine-shadow hover:divine-glow transition-all duration-500 transform hover:scale-105"
                >
                  GO SHOPPING NOW
                </Button>
              </a>
              <a 
                href="https://aiwebtools.lovable.app/?via=aiwebtools"
                target="_blank"
                rel="noreferrer"
                aria-label="Explore more free AI tools from AIWEBTOOLS.AI"
              >
                <Button
                  variant="outline"
                  className="border-2 border-yellow-400 text-yellow-300 hover:bg-yellow-400/20 hover:text-yellow-200 px-10 py-8 font-cyber font-bold text-xl rounded-md divine-shadow hover:divine-glow transition-all duration-500 transform hover:scale-105"
                >
                  MORE AI TOOLS
                </Button>
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 mt-16 lg:mt-0 flex justify-center items-center z-10">
            <div className="relative" role="img" aria-label="Shopping GPT 3D visualization">
              <div className="absolute -inset-8 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 rounded-full blur-2xl opacity-30 animate-divine-spiral"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-white via-yellow-200 to-white rounded-full blur-xl opacity-20 animate-divine-pulse"></div>
              <div className="relative bg-gradient-to-br from-amber-900/40 via-yellow-900/40 to-amber-900/40 rounded-full p-6 divine-shadow backdrop-blur-sm">
                <ThreeDElement />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced decorative divine elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-amber-900/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-divine-line"></div>
    </section>
  );
};

export default Hero;
