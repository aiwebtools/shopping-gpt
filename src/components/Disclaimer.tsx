
import React from 'react';

const Disclaimer: React.FC = () => {
  return (
    <div id="disclaimer" className="py-20 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-amber-900/30 relative overflow-hidden">
      {/* Divine background effects */}
      <div className="absolute inset-0 cyber-grid opacity-10 -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-300/5 via-transparent to-amber-300/5 animate-divine-shimmer -z-10"></div>
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-white/10 via-yellow-200/10 to-white/10 rounded-full filter blur-3xl animate-divine-pulse -z-10"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-amber-300/15 via-yellow-200/15 to-amber-300/15 rounded-full filter blur-3xl animate-divine-float -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4 bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-300 bg-clip-text text-transparent drop-shadow-divine">
            LEGAL DISCLAIMER
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Please review the following important information about using Shopping GPT.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-black/60 via-purple-900/40 to-amber-900/40 border border-gradient-to-r from-yellow-400/50 via-amber-300/50 to-yellow-400/50 rounded-lg p-8 divine-shadow backdrop-blur-sm">
          <div className="space-y-6 text-gray-300">
            <h3 className="text-xl font-cyber font-bold text-yellow-200 drop-shadow-divine">Product Information Disclaimer</h3>
            <p>
              Shopping GPT provides product recommendations and information based on available data sources, which may not always be complete or up-to-date. Users should verify all product specifications, prices, and availability directly with retailers before making purchase decisions. We are not responsible for any inaccuracies in the information provided.
            </p>
            
            <h3 className="text-xl font-cyber font-bold text-yellow-200 drop-shadow-divine">Third-Party Content</h3>
            <p>
              Shopping GPT links to third-party websites and retailers. We are not responsible for the content, privacy policies, or practices of these third-party sites. Shopping GPT may utilize affiliate links, and we may receive commissions from qualifying purchases, at no additional cost to you.
            </p>
            
            <h3 className="text-xl font-cyber font-bold text-yellow-200 drop-shadow-divine">No Warranties</h3>
            <p>
              Shopping GPT is provided "as is" without any warranties, expressed or implied. We do not warrant that the service will be error-free, uninterrupted, or that all defects will be corrected. We make no warranties regarding the accuracy, reliability, or suitability of the information provided.
            </p>
            
            <h3 className="text-xl font-cyber font-bold text-yellow-200 drop-shadow-divine">Limitation of Liability</h3>
            <p>
              AI Web Tools LLC, its affiliates, and partners shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, use of, or inability to use Shopping GPT. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses.
            </p>
            
            <h3 className="text-xl font-cyber font-bold text-yellow-200 drop-shadow-divine">Use Restrictions</h3>
            <p>
              Shopping GPT is intended for personal, non-commercial use to assist with shopping-related decisions. Users shall not attempt to reverse engineer, decompile, disable, or interfere with any security features of the service. Any attempts to use the service for automated or bulk operations are prohibited.
            </p>
            
            <h3 className="text-xl font-cyber font-bold text-yellow-200 drop-shadow-divine">Data and Privacy</h3>
            <p>
              Shopping GPT operates through OpenAI's platform and adheres to OpenAI's privacy policy and data practices. By using the service, you acknowledge that interactions may be processed and stored according to OpenAI's terms. For more information, please refer to OpenAI's privacy policy.
            </p>
            
            <h3 className="text-xl font-cyber font-bold text-yellow-200 drop-shadow-divine">Modifications to Service</h3>
            <p>
              We reserve the right to modify or discontinue, temporarily or permanently, Shopping GPT or any features or portions thereof without prior notice. We will not be liable for any modification, suspension, or discontinuance of the service.
            </p>
            
            <h3 className="text-xl font-cyber font-bold text-yellow-200 drop-shadow-divine">Contact Information</h3>
            <p>
              For questions regarding this disclaimer or Shopping GPT, please contact:
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:Contact@ai-webtools.com" className="text-yellow-300 hover:text-amber-200 hover:drop-shadow-divine transition duration-300">Contact@ai-webtools.com</a><br />
              <strong>Phone:</strong> <a href="tel:+14758008096" className="text-yellow-300 hover:text-amber-200 hover:drop-shadow-divine transition duration-300">(475) 800-8096</a>
            </p>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>
              By using Shopping GPT, you acknowledge that you have read, understood, and agree to be bound by this disclaimer. This disclaimer was last updated on May 1, 2025.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
