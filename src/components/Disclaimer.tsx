
import React from 'react';

const Disclaimer: React.FC = () => {
  return (
    <div id="disclaimer" className="py-20 bg-cyber-dark-purple/70 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 cyber-grid opacity-10 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4 bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
            LEGAL DISCLAIMER
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Please review the following important information about using Shopping GPT.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-cyber-dark/80 border border-cyber-purple/30 rounded-lg p-8">
          <div className="space-y-6 text-gray-300">
            <h3 className="text-xl font-cyber font-bold text-white">Product Information Disclaimer</h3>
            <p>
              Shopping GPT provides product recommendations and information based on available data sources, which may not always be complete or up-to-date. Users should verify all product specifications, prices, and availability directly with retailers before making purchase decisions. We are not responsible for any inaccuracies in the information provided.
            </p>
            
            <h3 className="text-xl font-cyber font-bold text-white">Third-Party Content</h3>
            <p>
              Shopping GPT links to third-party websites and retailers. We are not responsible for the content, privacy policies, or practices of these third-party sites. Shopping GPT may utilize affiliate links, and we may receive commissions from qualifying purchases, at no additional cost to you.
            </p>
            
            <h3 className="text-xl font-cyber font-bold text-white">No Warranties</h3>
            <p>
              Shopping GPT is provided "as is" without any warranties, expressed or implied. We do not warrant that the service will be error-free, uninterrupted, or that all defects will be corrected. We make no warranties regarding the accuracy, reliability, or suitability of the information provided.
            </p>
            
            <h3 className="text-xl font-cyber font-bold text-white">Limitation of Liability</h3>
            <p>
              AI Web Tools LLC, its affiliates, and partners shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, use of, or inability to use Shopping GPT. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses.
            </p>
            
            <h3 className="text-xl font-cyber font-bold text-white">Use Restrictions</h3>
            <p>
              Shopping GPT is intended for personal, non-commercial use to assist with shopping-related decisions. Users shall not attempt to reverse engineer, decompile, disable, or interfere with any security features of the service. Any attempts to use the service for automated or bulk operations are prohibited.
            </p>
            
            <h3 className="text-xl font-cyber font-bold text-white">Data and Privacy</h3>
            <p>
              Shopping GPT operates through OpenAI's platform and adheres to OpenAI's privacy policy and data practices. By using the service, you acknowledge that interactions may be processed and stored according to OpenAI's terms. For more information, please refer to OpenAI's privacy policy.
            </p>
            
            <h3 className="text-xl font-cyber font-bold text-white">Modifications to Service</h3>
            <p>
              We reserve the right to modify or discontinue, temporarily or permanently, Shopping GPT or any features or portions thereof without prior notice. We will not be liable for any modification, suspension, or discontinuance of the service.
            </p>
            
            <h3 className="text-xl font-cyber font-bold text-white">Contact Information</h3>
            <p>
              For questions regarding this disclaimer or Shopping GPT, please contact:
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:Contact@ai-webtools.com" className="text-cyber-blue hover:text-cyber-pink">Contact@ai-webtools.com</a><br />
              <strong>Phone:</strong> <a href="tel:+14758008096" className="text-cyber-blue hover:text-cyber-pink">(475) 800-8096</a>
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
