
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle } from 'lucide-react';

const InvitationSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div 
          className="w-full md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
            variants={fadeInUp}
          >
            Ready to see Zordie in action?
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
            variants={fadeInUp}
          >
            Schedule a personalized demo with our team to see how Zordie can transform your hiring process and help you find the perfect candidates faster.
          </motion.p>
          
          <motion.div 
            className="space-y-4 mb-8"
            variants={staggerContainerVariants}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="flex items-start" 
                variants={fadeInUp}
              >
                <CheckCircle className="h-6 w-6 text-zordie-600 dark:text-zordie-400 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">{benefit.title}:</span> {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={fadeInUp}
          >
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-zordie-600 hover:bg-zordie-700 text-white w-full sm:w-auto font-medium"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a Demo
              </Button>
            </Link>
            
            <Link to="/pricing">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto"
              >
                View Pricing Plans
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-zordie-700">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3274&q=80" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -left-8 bg-white dark:bg-zordie-800 p-6 rounded-lg shadow-xl border border-gray-200 dark:border-zordie-700">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm text-gray-500 dark:text-gray-400">Average time savings</h3>
                  <p className="text-2xl font-bold text-zordie-600 dark:text-zordie-400">35+ hours</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">per hiring cycle</p>
                </div>
                
                <div className="h-px bg-gray-200 dark:bg-zordie-700" />
                
                <div>
                  <h3 className="text-sm text-gray-500 dark:text-gray-400">Bad hire reduction</h3>
                  <p className="text-2xl font-bold text-zordie-600 dark:text-zordie-400">78%</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">verified by customers</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const benefits = [
  {
    title: "Personalized walkthrough",
    description: "Get a customized demo tailored to your company's specific hiring needs"
  },
  {
    title: "Q&A session",
    description: "Have all your questions answered by our product experts"
  },
  {
    title: "Special offer",
    description: "Demo attendees receive exclusive pricing and onboarding assistance"
  }
];

export default InvitationSection;
