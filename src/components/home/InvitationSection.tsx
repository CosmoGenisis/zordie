
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';
import { motion, useInView } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import GradientText from './GradientText';

const InvitationSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <div ref={sectionRef} className="container mx-auto px-4 py-20 relative z-10">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-20 w-64 h-64 bg-gradient-to-r from-indigo-300/20 to-violet-300/20 dark:from-indigo-500/10 dark:to-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-64 h-64 bg-gradient-to-r from-rose-300/20 to-amber-300/20 dark:from-rose-500/10 dark:to-amber-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <SectionHeading
            title="Ready to Transform Your Hiring?"
            subtitle="Let us show you how Zordie AI can revolutionize your recruitment process"
            align="left"
            titleContent={<>Ready to <GradientText gradient="rainbow" animate={true}>Transform</GradientText> Your Hiring?</>}
          />
          
          <motion.p 
            className="mt-6 text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Join the thousands of companies already leveraging our AI to find and verify the best talent. Schedule a personalized demo with our team today.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-zordie-600 to-accent1 text-white relative overflow-hidden group"
            >
              <Calendar className="mr-2 h-5 w-5" />
              <span className="relative z-10">Book a Demo</span>
              <motion.span 
                className="absolute top-0 left-0 w-full h-full bg-white opacity-20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.7 }}
              />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="group relative overflow-hidden border-zordie-500 dark:border-zordie-400 hover:text-zordie-800 dark:hover:text-white"
            >
              <span className="relative z-10 flex items-center">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-zordie-600/20 to-accent1/20 group-hover:h-full transition-all duration-300 -z-1"></span>
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-white dark:bg-zordie-800/70 p-8 rounded-2xl shadow-xl border border-indigo-100 dark:border-zordie-700/50 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">What you'll get in the demo</h3>
            
            <div className="space-y-6">
              {demoFeatures.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                >
                  <div className="flex items-center justify-center flex-shrink-0 mt-1 w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/60 dark:to-violet-900/60 border border-indigo-200 dark:border-indigo-700/50">
                    <feature.icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">{feature.title}</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 dark:from-indigo-500/10 dark:to-violet-500/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 dark:from-violet-500/10 dark:to-indigo-500/10 rounded-full blur-xl"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const demoFeatures = [
  {
    icon: Calendar,
    title: "Personalized Product Tour",
    description: "Get a tailored walkthrough of Zordie AI's features relevant to your hiring needs."
  },
  {
    icon: ArrowRight,
    title: "ROI Calculation",
    description: "See exactly how much time and money you can save with AI-powered hiring verification."
  },
  {
    icon: Calendar,
    title: "Live Q&A Session",
    description: "Get answers to your specific questions from our product specialists."
  },
  {
    icon: ArrowRight,
    title: "Custom Implementation Plan",
    description: "Receive a tailored plan for integrating Zordie AI into your existing recruiting workflow."
  }
];

export default InvitationSection;
