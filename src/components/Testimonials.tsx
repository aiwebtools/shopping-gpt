
import React from 'react';

const testimonials = [
  {
    quote: "Shopping GPT helped me find the exact gaming laptop I needed at $300 less than I expected to pay. It compared specs I didn't even think to check!",
    author: "Alex K.",
    role: "Tech Enthusiast",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "I was overwhelmed shopping for a new camera until Shopping GPT narrowed it down to three perfect options based on my photography style.",
    author: "Sarah M.",
    role: "Amateur Photographer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "As someone who hates browsing endless product pages, this AI is a game-changer. Told it what I needed and got spot-on recommendations instantly.",
    author: "Jordan T.",
    role: "Busy Professional",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg"
  },
  {
    quote: "The price comparison feature saved me so much time and money! It found coupon codes I wouldn't have discovered on my own.",
    author: "Emma L.",
    role: "Smart Shopper",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg"
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="py-20 bg-cyber-dark-purple relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-cyber-purple/10 rounded-full filter blur-3xl animate-pulse-glow -z-0"></div>
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-cyber-blue/10 rounded-full filter blur-3xl animate-pulse-glow -z-0"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4 bg-gradient-to-r from-cyber-green to-cyber-blue bg-clip-text text-transparent">
            WHAT SHOPPERS ARE SAYING
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their shopping experience with AI assistance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-cyber-dark/60 backdrop-blur-sm p-8 rounded-lg border border-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-full blur-sm"></div>
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-16 h-16 rounded-full object-cover relative z-10"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">{testimonial.author}</p>
                  <p className="text-cyber-blue">{testimonial.role}</p>
                </div>
              </div>
              <div className="relative">
                <svg className="absolute top-0 left-0 transform -translate-x-4 -translate-y-6 text-cyber-purple opacity-40 w-8 h-8" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-300 text-lg italic pl-4">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
