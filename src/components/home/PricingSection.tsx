
import React, { useState, useRef } from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly');
  };

  const getPrice = (monthly, yearly) => {
    return billingCycle === 'monthly' ? monthly : yearly;
  };

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-zordie-100/50 dark:bg-zordie-800/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent1/10 dark:bg-accent1/5 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="Simple, Transparent Pricing"
            subtitle="Choose the plan that's right for your hiring needs"
            align="center"
          />
          
          <div className="flex items-center justify-center mt-8 mb-12">
            <Label htmlFor="billing-toggle" className={`mr-2 text-lg ${billingCycle === 'monthly' ? 'font-semibold text-zordie-800 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Monthly
            </Label>
            <Switch
              id="billing-toggle"
              checked={billingCycle === 'yearly'}
              onCheckedChange={toggleBillingCycle}
              className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-zordie-600 data-[state=checked]:to-accent1"
            />
            <Label htmlFor="billing-toggle" className={`ml-2 text-lg flex items-center ${billingCycle === 'yearly' ? 'font-semibold text-zordie-800 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Yearly
              {billingCycle === 'yearly' && (
                <span className="ml-2 text-xs py-0.5 px-2 bg-gradient-to-r from-zordie-600 to-accent1 text-white rounded-full">
                  Save 20%
                </span>
              )}
            </Label>
          </div>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Starter Plan */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-zordie-800/50 rounded-2xl shadow-lg border border-zordie-100 dark:border-zordie-700 overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
          >
            <div className="p-8">
              <h3 className="text-xl font-semibold text-zordie-800 dark:text-white mb-2">Starter</h3>
              <p className="text-zordie-600 dark:text-zordie-300 mb-6">Perfect for small teams and startups</p>
              
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-zordie-800 dark:text-white">₹{getPrice(7999, 6399)}</span>
                <span className="text-zordie-600 dark:text-zordie-300 ml-2">/month</span>
              </div>
              
              {billingCycle === 'yearly' && (
                <p className="text-sm text-zordie-600 dark:text-zordie-300 mb-6">Billed annually (₹{6399 * 12} total)</p>
              )}
              
              <Button 
                className="w-full bg-gradient-to-r from-zordie-600 to-accent1 relative overflow-hidden group mb-8"
              >
                <span className="relative z-10 flex items-center">
                  Get Started 
                  <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.span 
                  className="absolute top-0 left-0 w-full h-full bg-white opacity-20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.7 }}
                />
              </Button>
              
              <div className="space-y-4">
                <PricingFeature text="Up to 50 candidates/month" />
                <PricingFeature text="Basic resume screening" />
                <PricingFeature text="Email support" />
                <PricingFeature text="1 admin user" />
                <PricingFeature text="Standard analytics" />
              </div>
            </div>
          </motion.div>
          
          {/* Professional Plan */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-zordie-800/50 rounded-2xl shadow-lg border-2 border-zordie-500 dark:border-zordie-500 overflow-hidden hover:shadow-xl transition-shadow duration-300 relative lg:scale-105 z-10"
          >
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-zordie-600 to-accent1"></div>
            <div className="absolute -top-4 inset-x-0 flex justify-center">
              <span className="bg-gradient-to-r from-zordie-600 to-accent1 text-white text-sm font-semibold py-1 px-4 rounded-full">
                Most Popular
              </span>
            </div>
            
            <div className="p-8 pt-10">
              <h3 className="text-xl font-semibold text-zordie-800 dark:text-white mb-2">Professional</h3>
              <p className="text-zordie-600 dark:text-zordie-300 mb-6">For growing companies with advanced needs</p>
              
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-zordie-800 dark:text-white">₹{getPrice(19999, 15999)}</span>
                <span className="text-zordie-600 dark:text-zordie-300 ml-2">/month</span>
              </div>
              
              {billingCycle === 'yearly' && (
                <p className="text-sm text-zordie-600 dark:text-zordie-300 mb-6">Billed annually (₹{15999 * 12} total)</p>
              )}
              
              <Button 
                className="w-full bg-gradient-to-r from-zordie-600 to-accent1 relative overflow-hidden group mb-8"
              >
                <span className="relative z-10 flex items-center">
                  Get Started 
                  <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.span 
                  className="absolute top-0 left-0 w-full h-full bg-white opacity-20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.7 }}
                />
              </Button>
              
              <div className="space-y-4">
                <PricingFeature text="Up to 250 candidates/month" />
                <PricingFeature text="Advanced AI screening" />
                <PricingFeature text="Video interview analysis" />
                <PricingFeature text="Skill verification" />
                <PricingFeature text="5 admin users" />
                <PricingFeature text="Advanced analytics" />
                <PricingFeature text="API access" />
                <PricingFeature text="Priority support" />
              </div>
            </div>
          </motion.div>
          
          {/* Enterprise Plan */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-zordie-800/50 rounded-2xl shadow-lg border border-zordie-100 dark:border-zordie-700 overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
          >
            <div className="p-8">
              <h3 className="text-xl font-semibold text-zordie-800 dark:text-white mb-2">Enterprise</h3>
              <p className="text-zordie-600 dark:text-zordie-300 mb-6">For large organizations with custom needs</p>
              
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-zordie-800 dark:text-white">Custom</span>
              </div>
              
              <Button 
                variant="outline"
                className="w-full relative overflow-hidden group mb-8 border-zordie-500 text-zordie-700 dark:text-zordie-300 hover:text-zordie-800 dark:hover:text-white"
              >
                <span className="relative z-10 flex items-center">
                  Contact Sales
                  <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-zordie-600/20 to-accent1/20 group-hover:h-full transition-all duration-300 -z-1"
                />
              </Button>
              
              <div className="space-y-4">
                <PricingFeature text="Unlimited candidates" />
                <PricingFeature text="Custom AI model training" />
                <PricingFeature text="Full verification suite" />
                <PricingFeature text="Advanced video interviews" />
                <PricingFeature text="Unlimited users" />
                <PricingFeature text="Custom analytics dashboard" />
                <PricingFeature text="Dedicated account manager" />
                <PricingFeature text="SSO & advanced security" />
                <PricingFeature text="Custom integrations" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const PricingFeature = ({ text }) => {
  return (
    <div className="flex items-center">
      <CheckCircle className="h-5 w-5 text-zordie-600 mr-3 shrink-0" />
      <span className="text-zordie-700 dark:text-zordie-300">{text}</span>
    </div>
  );
};

export default PricingSection;
