
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Shopping GPT?",
    answer: "Shopping GPT is an AI-powered shopping assistant that helps you find the best products at the best prices. It uses advanced GPT technology to understand your needs, search through thousands of products, and provide personalized recommendations."
  },
  {
    question: "Is Shopping GPT free to use?",
    answer: "Shopping GPT is available through the ChatGPT platform. Access depends on your ChatGPT subscription level. Basic product recommendations are available to all users, while more advanced features may require a premium subscription."
  },
  {
    question: "How does Shopping GPT find the best deals?",
    answer: "Shopping GPT scans multiple retailers, marketplaces, and deal sites in real-time. It compares prices, identifies discounts, and even factors in shipping costs and available coupon codes to ensure you get the best total value."
  },
  {
    question: "Does Shopping GPT collect or store my personal data?",
    answer: "Shopping GPT operates under OpenAI's privacy policy. It may use conversation history to improve recommendations during your session, but specific shopping preferences would be handled according to OpenAI's data policies. See our disclaimer section for more details."
  },
  {
    question: "Can Shopping GPT complete purchases for me?",
    answer: "Shopping GPT provides recommendations and links to products, but the actual purchases are completed on the retailer's website. It doesn't have access to your payment information or the ability to complete transactions on your behalf."
  },
  {
    question: "How accurate are Shopping GPT's product recommendations?",
    answer: "Shopping GPT strives to provide highly accurate recommendations based on your stated preferences and needs. However, it's always best to verify specifications and details before making a purchase decision, as product information may occasionally be incomplete or outdated."
  },
  {
    question: "Does Shopping GPT receive commissions from retailers?",
    answer: "Shopping GPT may utilize affiliate links, which means it could earn a commission from qualifying purchases. This does not affect the price you pay, and recommendations are based on relevant matches to your needs rather than commission rates."
  },
  {
    question: "Can I use Shopping GPT to find products in specific countries?",
    answer: "Yes, Shopping GPT can tailor recommendations to specific countries or regions. Just mention your location during your conversation, and it will focus on retailers that ship to your area."
  }
];

const FAQ: React.FC = () => {
  return (
    <div id="faq" className="py-20 relative overflow-hidden">
      {/* Circuit pattern */}
      <div className="absolute inset-0 cyber-grid opacity-20 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4 bg-gradient-to-r from-cyber-yellow to-cyber-orange bg-clip-text text-transparent">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about Shopping GPT.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-cyber-purple/30">
                <AccordionTrigger className="text-left font-cyber text-lg text-white hover:text-cyber-pink">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
