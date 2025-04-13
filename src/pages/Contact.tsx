
import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { ContactInfo, ContactDetails } from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-zordie-50 to-white dark:from-zordie-900 dark:to-zordie-950 transition-colors duration-300">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        </div>
        <div className="relative z-10 px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl">
              Get in <span className="text-zordie-600 dark:text-zordie-400">Touch</span>
            </h1>
            <p className="max-w-2xl mx-auto mb-10 text-xl text-gray-600 dark:text-gray-300">
              Have questions about Zordie AI? Our team is here to help you get started with authentic hiring.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-24 bg-white dark:bg-zordie-950 transition-colors duration-300">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:mt-12"
            >
              <ContactInfo className="mt-12 lg:mt-0" />
              
              <div className="mt-8 overflow-hidden rounded-lg shadow-xl">
                <iframe 
                  title="Zordie AI Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.23982788336!2d80.22156075381184!3d26.449636589762694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1681461476689!5m2!1sen!2sin" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Detailed Contact Information Section */}
      <div className="py-12 bg-gray-50 dark:bg-zordie-900 transition-colors duration-300">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ContactDetails />
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
