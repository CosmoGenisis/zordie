
import React, { useState, useRef } from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, ChevronRight, X, Star, Users, Zap, Shield, Crown } from 'lucide-react';
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

  const calculateYearlyPrice = (monthlyPrice: number) => {
    return Math.floor(monthlyPrice * 12 * 0.8);
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
            subtitle="Choose the plan that's right for your hiring needs - all plans include unlimited job posts and candidates"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Free Plan */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-zordie-800/50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative group border-t-4 border-gray-300"
          >
            <div className="p-6 bg-gradient-to-b from-gray-50 to-white dark:from-zordie-800/80 dark:to-zordie-800/50">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-gray-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Free</h3>
              </div>
              <div className="text-center">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">₹0</span>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Try Zordie for free</p>
                <p className="text-xs text-gray-500 mt-1">Perfect for testing our platform</p>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <PricingFeature available={true} text="2 job posts per month" />
                <PricingFeature available={true} text="Basic AI screening" />
                <PricingFeature available={true} text="10 candidate profiles" />
                <PricingFeature available={true} text="Email support" />
                <PricingFeature available={false} text="Advanced AI assessments" />
                <PricingFeature available={false} text="ARC AI agents" />
                <PricingFeature available={false} text="Analytics dashboard" />
                <PricingFeature available={false} text="Custom integrations" />
              </ul>
              <div className="mt-8">
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    className="w-full transition-all duration-300 hover:shadow-md font-medium"
                  >
                    Join Pre-Access
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Starter Plan */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-zordie-800/50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative group border-t-4 border-blue-500"
          >
            <div className="p-6 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-zordie-800/50">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400">STARTER</h3>
              </div>
              <div className="text-center">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    ₹{billingCycle === 'monthly' ? '2,999' : calculateYearlyPrice(2999).toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  per user / {billingCycle === 'monthly' ? 'month' : 'year'}
                </p>
                <p className="text-xs text-gray-500 mt-1">For small startups (1-10 users)</p>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <PricingFeature available={true} text="Unlimited job postings" />
                <PricingFeature available={true} text="Unlimited candidate profiles" />
                <PricingFeature available={true} text="5,000 AI screening credits/month" />
                <PricingFeature available={true} text="Basic ARC AI agents" />
                <PricingFeature available={true} text="Standard analytics dashboard" />
                <PricingFeature available={true} text="Email & chat support" />
                <PricingFeature available={false} text="Advanced AI assessments" />
                <PricingFeature available={false} text="Custom integrations" />
              </ul>
              <div className="mt-8">
                <Link to="/contact">
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:shadow-lg font-medium"
                  >
                    Join Pre-Access
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Growth Plan */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-zordie-800/50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 relative scale-105 border-t-4 border-indigo-600 z-10"
          >
            <div className="absolute top-0 right-0">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-semibold py-1.5 px-4 rounded-bl-lg flex items-center">
                <Star className="w-3 h-3 mr-1" />
                Most Popular
              </div>
            </div>
            <div className="p-6 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-900/20 dark:to-zordie-800/50">
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-indigo-600 mr-2" />
                <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400">GROWTH</h3>
              </div>
              <div className="text-center">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    ₹{billingCycle === 'monthly' ? '4,999' : calculateYearlyPrice(4999).toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  per user / {billingCycle === 'monthly' ? 'month' : 'year'}
                </p>
                <p className="text-xs text-gray-500 mt-1">For growing teams (10-50 users)</p>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <PricingFeature available={true} text="Everything in Starter" />
                <PricingFeature available={true} text="20,000 AI screening credits/month" />
                <PricingFeature available={true} text="Advanced ARC AI agents" />
                <PricingFeature available={true} text="Advanced AI assessments" />
                <PricingFeature available={true} text="Custom analytics & reporting" />
                <PricingFeature available={true} text="Priority support" />
                <PricingFeature available={true} text="Basic API access" />
                <PricingFeature available={false} text="White-label solution" />
              </ul>
              <div className="mt-8">
                <Link to="/contact">
                  <Button 
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white transition-all duration-300 hover:shadow-lg font-medium"
                  >
                    Join Pre-Access
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Agency Plan */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-zordie-800/50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative group border-t-4 border-purple-500"
          >
            <div className="p-6 bg-gradient-to-b from-purple-50 to-white dark:from-purple-900/20 dark:to-zordie-800/50">
              <div className="flex items-center justify-center mb-4">
                <Crown className="w-6 h-6 text-purple-600 mr-2" />
                <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400">AGENCY</h3>
              </div>
              <div className="text-center">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    ₹{billingCycle === 'monthly' ? '7,999' : calculateYearlyPrice(7999).toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  per user / {billingCycle === 'monthly' ? 'month' : 'year'}
                </p>
                <p className="text-xs text-gray-500 mt-1">For agencies & large teams (50+ users)</p>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <PricingFeature available={true} text="Everything in Growth" />
                <PricingFeature available={true} text="Unlimited AI credits" />
                <PricingFeature available={true} text="Full ARC AI agent suite" />
                <PricingFeature available={true} text="White-label solution" />
                <PricingFeature available={true} text="Custom integrations" />
                <PricingFeature available={true} text="Dedicated account manager" />
                <PricingFeature available={true} text="Full API access" />
                <PricingFeature available={true} text="Custom training & onboarding" />
              </ul>
              <div className="mt-8">
                <Link to="/contact">
                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 hover:shadow-lg font-medium"
                  >
                    Join Pre-Access
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enterprise Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-zordie-800/50 dark:to-zordie-900/50 rounded-2xl p-8 text-center border border-gray-200 dark:border-zordie-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Enterprise Solutions</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Need a custom solution for your organization? We offer tailored enterprise packages with volume discounts, 
              custom features, and dedicated support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Custom pricing
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Volume discounts
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                24/7 support
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                On-premise deployment
              </div>
            </div>
            <div className="mt-6">
              <Link to="/contact">
                <Button size="lg" variant="outline" className="font-medium">
                  Contact Sales Team
                </Button>
              </Link>
            </div>
          </div>
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
        <CheckCircle className="h-4 w-4 text-green-500 mr-3 shrink-0 mt-0.5" />
      ) : (
        <X className="h-4 w-4 text-gray-300 mr-3 shrink-0 mt-0.5" />
      )}
      <span className={`text-sm ${available ? "text-gray-700 dark:text-gray-200" : "text-gray-400 dark:text-gray-500"}`}>
        {text}
      </span>
    </li>
  );
};

export default PricingSection;
