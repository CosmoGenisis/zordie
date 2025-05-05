
import React from 'react';
import { motion } from 'framer-motion';

const PartnersSection = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200">Trusted by Industry Leaders</h2>
      </div>
      
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {partnerLogos.map((logo, index) => (
          <motion.div 
            key={index}
            className="w-full flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="h-12 w-full flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-8 md:h-10 object-contain"
                style={{ maxWidth: '100%' }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const partnerLogos = [
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/512px-Microsoft_logo_%282012%29.svg.png", 
    alt: "Microsoft" 
  },
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/512px-IBM_logo.svg.png", 
    alt: "IBM" 
  },
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Google-logo.svg/512px-Google-logo.svg.png", 
    alt: "Google" 
  },
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/512px-Apple_logo_black.svg.png", 
    alt: "Apple" 
  },
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png", 
    alt: "Amazon" 
  },
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/512px-Tesla_logo.png", 
    alt: "Tesla" 
  }
];

export default PartnersSection;
