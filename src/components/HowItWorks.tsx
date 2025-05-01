
import React from 'react';
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: '01',
    title: 'Chat with Shopping GPT',
    description: 'Tell our AI what you\'re looking for in plain language, just like talking to a shopping expert.',
    color: 'bg-cyber-blue'
  },
  {
    number: '02',
    title: 'Review Smart Recommendations',
    description: 'Our AI generates personalized product suggestions based on your needs, preferences, and budget.',
    color: 'bg-cyber-purple'
  },
  {
    number: '03',
    title: 'Compare Options Effortlessly',
    description: 'See side-by-side comparisons of products, with key features highlighted to make decisions easier.',
    color: 'bg-cyber-pink'
  },
  {
    number: '04',
    title: 'Shop with Confidence',
    description: 'Get connected to trusted retailers with the best prices and complete your purchase securely.',
    color: 'bg-cyber-orange'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <div className="py-20 relative overflow-hidden">
      {/* Circuit pattern */}
      <div className="absolute inset-0 cyber-grid opacity-20 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4 bg-gradient-to-r from-cyber-orange to-cyber-pink bg-clip-text text-transparent">
            HOW SHOPPING GPT WORKS
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Shopping has never been this simple, intelligent, and personalized.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyber-blue via-cyber-purple to-cyber-pink"></div>
          
          <div className="space-y-16 lg:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
              >
                <div className="w-full lg:w-1/2 p-6">
                  <div className="flex items-center mb-6">
                    <div className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center font-cyber font-bold text-black mr-4`}>
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-cyber font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-300 text-lg">{step.description}</p>
                </div>
                
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className={`w-64 h-64 rounded-lg ${step.color}/20 border border-${step.color.replace('bg-', '')}/40 flex items-center justify-center`}>
                    <div className={`w-48 h-48 ${step.color}/10 rounded-lg flex items-center justify-center`}>
                      <span className="text-5xl">{step.number}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://chatgpt.com/g/g-6813888952088191a6d9615d86156949-shopping-gpt"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              className="bg-gradient-to-r from-cyber-pink to-cyber-purple hover:from-cyber-purple hover:to-cyber-pink text-white px-8 py-6 font-cyber font-bold text-lg rounded-md neon-border"
            >
              START SHOPPING WITH AI NOW
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
