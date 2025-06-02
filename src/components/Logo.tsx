
import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      {/* Shopping cart icon */}
      <div className="relative mr-3">
        <div className="h-12 w-12 bg-cyber-purple rounded-full flex items-center justify-center animate-pulse-glow">
          <ShoppingCart className="h-6 w-6 text-cyber-blue" />
        </div>
      </div>
      
      {/* Text next to icon */}
      <div className="flex flex-col">
        <span className="font-cyber font-bold text-2xl bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-pink bg-clip-text text-transparent">
          Shopping GPT
        </span>
        <div className="text-xs text-gray-400">
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
    </div>
  );
};

export default Logo;
