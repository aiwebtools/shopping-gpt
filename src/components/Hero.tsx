
import React from 'react';
import ThreeDElement from './ThreeDElement';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-24 overflow-hidden">
      {/* Background grid with cyber effect */}
      <div className="absolute inset-0 cyber-grid -z-10"></div>
      
      {/* Gradient orbs for cyberpunk feel */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-purple/20 rounded-full filter blur-3xl animate-pulse-glow -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyber-blue/20 rounded-full filter blur-3xl animate-pulse-glow -z-10"></div>
      <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-cyber-pink/20 rounded-full filter blur-3xl animate-pulse-glow -z-10"></div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 z-10">
            <h1 className="text-4xl md:text-6xl font-cyber font-bold mb-6">
              <span className="bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-pink bg-clip-text text-transparent text-glow">
                SHOPPING GPT
              </span>
            </h1>
            
            <h2 className="text-xl md:text-3xl font-cyber font-bold mb-8 text-cyber-orange">
              Your AI-Powered Shopping Super Sidekick
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              Smarter Picks, Killer Deals, Zero Nonsense. Experience the new shopping capabilities of GPT technology.
            </p>
            
            <p className="text-md text-gray-400 mb-8 max-w-xl">
              SHOPPING GPT IS THE #1 AI SHOPPING AGENT THAT FINDS THE BEST DEALS FOR ANYTHING YOU ARE LOOKING TO BUY
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://chatgpt.com/g/g-6813888952088191a6d9615d86156949-shopping-gpt"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  className="bg-gradient-to-r from-cyber-pink to-cyber-purple hover:from-cyber-purple hover:to-cyber-pink text-white px-8 py-6 font-cyber font-bold text-lg rounded-md neon-border"
                >
                  GO SHOPPING NOW
                </Button>
              </a>
              <a 
                href="https://www.aiwebtools.ai"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue/20 px-8 py-6 font-cyber font-bold text-lg rounded-md"
                >
                  MORE AI TOOLS
                </Button>
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 mt-16 lg:mt-0 flex justify-center items-center z-10">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-pink rounded-full blur-xl opacity-20 animate-spin-slow"></div>
              <div className="relative bg-cyber-dark-purple rounded-full p-4">
                <ThreeDElement />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative circuit lines */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-cyber-dark to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-cyber-purple/50"></div>
    </div>
  );
};

export default Hero;
