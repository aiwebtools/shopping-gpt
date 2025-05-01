
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        {/* Hexagon icon shape with shopping cart */}
        <div className="relative">
          <div className="h-12 w-14 bg-cyber-purple rotate-90 rounded-full flex items-center justify-center animate-pulse-glow">
            <div className="h-10 w-12 bg-cyber-dark rotate-90 rounded-full flex items-center justify-center">
              <span className="text-cyber-purple text-xl font-bold rotate-270">GP</span>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
            <span className="font-cyber font-bold text-2xl bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-pink bg-clip-text text-transparent">
              Shopping GPT
            </span>
          </div>
        </div>
      </div>
      <div className="mt-1 text-xs text-gray-400">
        Presented by{' '}
        <a 
          href="https://www.aiwebtools.ai" 
          target="_blank" 
          rel="noreferrer"
          className="text-cyber-blue hover:text-cyber-pink transition-colors duration-300"
        >
          AiWebTools.Ai
        </a>
      </div>
    </div>
  );
};

export default Logo;
