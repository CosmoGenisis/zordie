
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/section-heading';

const companies = [
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    alt: 'Microsoft logo'
  },
  {
    name: 'Apple',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    alt: 'Apple logo'
  },
  {
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    alt: 'Google logo'
  },
  {
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    alt: 'Amazon logo'
  },
  {
    name: 'Meta',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
    alt: 'Meta logo'
  },
  {
    name: 'IBM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    alt: 'IBM logo'
  },
  {
    name: 'Deloitte',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg',
    alt: 'Deloitte logo'
  },
  {
    name: 'Salesforce',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
    alt: 'Salesforce logo'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const PartnersSection = () => {
  return (
    <section className="py-10 md:py-16 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-zordie-100/50 dark:bg-zordie-800/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent1/10 dark:bg-accent1/5 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          align="center"
          title="Trusted by Industry Leaders"
          subtitle="Join thousands of top companies using our platform to find the best talent"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10"
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center justify-center p-4 bg-white/50 dark:bg-zordie-800/30 rounded-lg border border-gray-100 dark:border-zordie-700/50 hover:shadow-md dark:hover:border-zordie-600/50 transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
              }}
            >
              <div className="h-16 flex items-center justify-center p-2 grayscale hover:grayscale-0 transition-all duration-300">
                <img
                  src={company.logo}
                  alt={company.alt}
                  className="max-h-full max-w-full object-contain dark:invert"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400 italic">
            ...and thousands more organizations worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
