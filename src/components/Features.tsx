
import React from 'react';

const features = [
  {
    icon: '🔍',
    title: 'Smart Product Discovery',
    description: 'Advanced AI algorithms analyze your preferences to find exactly what you need, even when you're not sure what you're looking for.'
  },
  {
    icon: '💰',
    title: 'Unbeatable Deal Hunting',
    description: 'Our AI scans thousands of retailers in real-time to find the absolute best prices and applicable discounts.'
  },
  {
    icon: '⚡',
    title: 'Lightning-Fast Results',
    description: 'Get instant recommendations without endless scrolling through pages of irrelevant products.'
  },
  {
    icon: '🛒',
    title: 'Hassle-Free Shopping',
    description: 'Compare products, read reviews, and complete your purchase with minimal clicks.'
  },
  {
    icon: '🤖',
    title: 'Personalized Recommendations',
    description: 'The more you shop, the smarter our AI gets, delivering increasingly tailored suggestions.'
  },
  {
    icon: '🛡️',
    title: 'Secure & Private',
    description: 'Your shopping data and preferences are protected with enterprise-grade security.'
  }
];

const Features: React.FC = () => {
  return (
    <div className="py-20 bg-cyber-dark-purple relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-blue/20 rounded-full filter blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyber-purple/20 rounded-full filter blur-3xl -z-0"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4 bg-gradient-to-r from-cyber-blue to-cyber-pink bg-clip-text text-transparent">
            REVOLUTIONIZE YOUR SHOPPING EXPERIENCE
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Shopping GPT uses cutting-edge artificial intelligence to transform how you discover and purchase products online.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-cyber-dark p-6 rounded-lg border border-cyber-purple/20 hover:border-cyber-purple/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-neon-purple"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-cyber font-bold mb-3 text-cyber-blue">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
