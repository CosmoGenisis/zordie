
import React, { useState, useRef } from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, ChevronRight, X } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Free Plan */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-zordie-800/50 rounded-2xl shadow-lg border border-zordie-100 dark:border-zordie-700 overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
          >
            <div className="p-6 border-b bg-gray-50">
              <h3 className="text-xl font-semibold">Free</h3>
              <div className="mt-2 flex items-baseline">
                <span className="text-4xl font-bold">₹0</span>
                <span className="ml-1 text-gray-500 text-sm">/month</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">Try Zordie for free</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <PricingFeature available={true} text="2 job posts" />
                <PricingFeature available={true} text="Basic AI screening" />
                <PricingFeature available={true} text="10 verified applications" />
                <PricingFeature available={false} text="Candidate assessments" />
                <PricingFeature available={false} text="Prime AI assistance" />
                <PricingFeature available={false} text="Advanced analytics" />
              </ul>
              <div className="mt-6">
                <Link to="/signup">
                  <Button 
                    variant="outline" 
                    className="w-full transition-all duration-300 hover:shadow-md"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Starter Plan */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-zordie-800/50 rounded-2xl shadow-lg border border-zordie-100 dark:border-zordie-700 overflow-hidden hover:shadow-xl transition-shadow duration-300 relative lg:col-span-1"
          >
            <div className="p-6 border-b bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <h3 className="text-xl font-semibold">STARTER PLAN</h3>
              <div className="mt-2 flex items-baseline">
                <span className="text-4xl font-bold">₹4,999</span>
                <span className="ml-1 text-gray-100 text-sm">/month</span>
              </div>
              <p className="text-sm text-gray-100 mt-2">For small startups</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <PricingFeature available={true} text="Up to 10 Job Postings per month" />
                <PricingFeature available={true} text="Includes 1,000 AI Credits for candidate assessments and analytics" />
                <PricingFeature available={true} text="Access to basic dashboard and reporting features" />
                <PricingFeature available={true} text="Email support for quick assistance" />
              </ul>
              <div className="mt-6">
                <Link to="/signup">
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg"
                  >
                    Choose Starter
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Growth Plan */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-zordie-800/50 rounded-2xl shadow-lg border border-zordie-100 dark:border-zordie-700 overflow-hidden hover:shadow-xl transition-shadow duration-300 relative lg:col-span-1"
          >
            <div className="absolute top-0 right-0">
              <div className="bg-zordie-500 text-white text-xs font-semibold py-1 px-3 rounded-bl-lg">
                Popular
              </div>
            </div>
            <div className="p-6 border-b bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <h3 className="text-xl font-semibold">GROWTH PLAN</h3>
              <div className="mt-2 flex items-baseline">
                <span className="text-4xl font-bold">₹9,999</span>
                <span className="ml-1 text-gray-100 text-sm">/month</span>
              </div>
              <p className="text-sm text-gray-100 mt-2">For growing teams</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <PricingFeature available={true} text="Allows up to 25 Job Postings monthly" />
                <PricingFeature available={true} text="Includes 5,000 AI Credits for extensive candidate evaluations" />
                <PricingFeature available={true} text="Advanced analytics dashboard with customized reporting" />
                <PricingFeature available={true} text="Priority email and chat support" />
              </ul>
              <div className="mt-6">
                <Link to="/signup">
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg"
                  >
                    Choose Growth
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Agency Plan */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-zordie-800/50 rounded-2xl shadow-lg border border-zordie-100 dark:border-zordie-700 overflow-hidden hover:shadow-xl transition-shadow duration-300 relative lg:col-span-1"
          >
            <div className="p-6 border-b bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <h3 className="text-xl font-semibold">AGENCY PLAN</h3>
              <div className="mt-2 flex items-baseline">
                <span className="text-4xl font-bold">₹16,999</span>
                <span className="ml-1 text-gray-100 text-sm">/month</span>
              </div>
              <p className="text-sm text-gray-100 mt-2">For recruitment agencies</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <PricingFeature available={true} text="Allows up to 50 Job Postings per month" />
                <PricingFeature available={true} text="Includes 10,000 AI Credits for high volume candidate processing" />
                <PricingFeature available={true} text="White-labeled platform customization and branding options" />
                <PricingFeature available={true} text="Dedicated account manager and premium support" />
              </ul>
              <div className="mt-6">
                <Link to="/signup">
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg"
                  >
                    Choose Agency
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Enterprise Plan */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-zordie-800/50 rounded-2xl shadow-lg border border-zordie-100 dark:border-zordie-700 overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
          >
            <div className="p-6 border-b bg-gray-50">
              <h3 className="text-xl font-semibold">Enterprise</h3>
              <div className="mt-2 flex items-baseline">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">Tailored for large organizations</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <PricingFeature available={true} text="Unlimited job posts" />
                <PricingFeature available={true} text="Custom integrations" />
                <PricingFeature available={true} text="Dedicated account manager" />
                <PricingFeature available={true} text="Custom AI training" />
                <PricingFeature available={true} text={'Pay as You Go model'} />
                <PricingFeature available={true} text="Tailored pricing" />
                <PricingFeature available={true} text="Phone & priority support" />
              </ul>
              <div className="mt-6">
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    className="w-full transition-all duration-300 hover:shadow-md"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

interface PricingFeatureProps {
  available: boolean;
  text: string;
}

const PricingFeature = ({ available, text }: PricingFeatureProps) => {
  return (
    <li className="flex items-start">
      {available ? (
        <CheckCircle className="h-5 w-5 text-zordie-500 mr-2 shrink-0" />
      ) : (
        <X className="h-5 w-5 text-gray-300 mr-2 shrink-0" />
      )}
      <span className={`text-sm ${available ? "text-gray-600 dark:text-gray-300" : "text-gray-400 dark:text-gray-500"}`}>
        {text}
      </span>
    </li>
  );
};

export default PricingSection;
