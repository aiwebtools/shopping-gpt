
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const ConsentPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  
  useEffect(() => {
    // Check if user has already agreed
    const hasAgreed = localStorage.getItem('shoppingGptConsent') === 'true';
    
    if (!hasAgreed) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAgree = () => {
    localStorage.setItem('shoppingGptConsent', 'true');
    setShowPopup(false);
  };
  
  if (!showPopup) {
    return null;
  }
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative max-w-md w-full">
        {/* Animated border effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-pink rounded-lg blur animate-pulse-glow"></div>
        
        <div className="relative bg-cyber-dark p-8 rounded-lg border border-cyber-purple/50">
          <h3 className="text-2xl font-cyber font-bold mb-4 text-white">Important Notice</h3>
          
          <p className="text-gray-300 mb-6">
            By using Shopping GPT, you agree to our Terms of Service and acknowledge that you have read and understood our Privacy Policy. Shopping GPT provides recommendations only and is not responsible for third-party retailer actions or products.
          </p>
          
          <div className="flex justify-center">
            <Button
              onClick={handleAgree}
              className="bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-blue text-white font-cyber font-bold rounded-md w-full py-6 text-lg"
            >
              I AGREE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentPopup;
