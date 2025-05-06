
import { useState, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { 
  CheckCircle, 
  CircleCheck, 
  HelpCircle, 
  X, 
  ArrowRight, 
  LayoutGrid,
  CircleArrowDown
} from "lucide-react";
import { Link } from "react-router-dom";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";
import { SpinningCube } from '@/components/home/3d/SpinningCube';
import { FloatingParticles } from '@/components/home/3d/FloatingParticles';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const pricingSectionRef = useRef(null);
  const faqSectionRef = useRef(null);
  const ctaSectionRef = useRef(null);
  
  const pricingInView = useInView(pricingSectionRef, { once: false, amount: 0.2 });
  const faqInView = useInView(faqSectionRef, { once: false, amount: 0.2 });
  const ctaInView = useInView(ctaSectionRef, { once: false, amount: 0.2 });

  const handleBillingCycleChange = (cycle: "monthly" | "annual") => {
    setBillingCycle(cycle);
  };
  
  // Calculate annual pricing (20% discount)
  const calculateAnnualPrice = (monthlyPrice: number) => {
    return (monthlyPrice * 12 * 0.8).toLocaleString();
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <FloatingParticles count={50} color="#ffffff" opacity={0.3} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Choose the plan that fits your hiring needs and scale as you grow
            </p>
            
            <div className="flex justify-center mb-8">
              <div className="flex justify-center">
                <div className="bg-white/10 p-1 rounded-full backdrop-blur-sm">
                  <div className="flex">
                    <button
                      onClick={() => handleBillingCycleChange("monthly")}
                      className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        billingCycle === "monthly"
                          ? "bg-white text-blue-700 shadow-md"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      Monthly
                    </button>
                    <button
                      onClick={() => handleBillingCycleChange("annual")}
                      className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        billingCycle === "annual"
                          ? "bg-white text-blue-700 shadow-md"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      Annual
                      {billingCycle === "annual" && (
                        <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-2 py-0.5">
                          Save 20%
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex justify-center"
            >
              <CircleArrowDown className="h-8 w-8 animate-bounce text-white/70" />
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute top-1/4 right-10 w-32 h-32 opacity-20">
          <SpinningCube />
        </div>
        <div className="absolute bottom-1/4 left-10 w-32 h-32 opacity-20">
          <SpinningCube />
        </div>
        
        {/* Wave Shape Divider */}
        <div className="relative h-16 md:h-24 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white dark:fill-zordie-950"></path>
          </svg>
        </div>
      </section>
        
      {/* Pricing cards */}
      <section ref={pricingSectionRef} className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-6"
            initial={{ opacity: 0 }}
            animate={pricingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            {/* Free Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={pricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <Card className="border border-gray-200 hover:border-zordie-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02] overflow-hidden h-full">
                <div className="p-6 border-b bg-gray-50">
                  <h3 className="text-xl font-semibold">Free</h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-3xl font-bold">₹0</span>
                    <span className="ml-1 text-gray-500 text-sm">/month</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Try Zordie for free</p>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <PricingFeature available={true} text="2 job posts" />
                    <PricingFeature available={true} text="Basic AI screening" />
                    <PricingFeature available={true} text="10 verified applications" />
                    <PricingFeature available={false} text="Candidate assessments" />
                    <PricingFeature available={false} text="Prime AI assistance" />
                    <PricingFeature available={false} text="Advanced analytics" />
                  </ul>
                  <div className="mt-6">
                    <Link to="/signup" className="block">
                      <Button variant="outline" className="w-full transition-all duration-300 hover:shadow-md">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={pricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="border border-zordie-500 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden md:col-span-1 lg:col-span-1 bg-white h-full">
                <div className="p-6 border-b bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <h3 className="text-xl font-semibold">STARTER PLAN</h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-3xl font-bold">
                      {billingCycle === "monthly" ? "₹4,999" : `₹${calculateAnnualPrice(4999)}`}
                    </span>
                    <span className="ml-1 text-gray-100 text-sm">/{billingCycle === "monthly" ? "month" : "year"}</span>
                  </div>
                  <p className="text-sm text-gray-100 mt-2">For small startups</p>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <PricingFeature available={true} text="Up to 10 Job Postings per month" />
                    <PricingFeature available={true} text="Includes 1,000 AI Credits for candidate assessments and analytics" />
                    <PricingFeature available={true} text="Access to basic dashboard and reporting features" />
                    <PricingFeature available={true} text="Email support for quick assistance" />
                  </ul>
                  <div className="mt-6">
                    <Link to="/signup" className="block">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg">
                        Choose Starter
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Growth Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={pricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border border-zordie-500 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden md:col-span-1 lg:col-span-1 bg-white relative h-full transform hover:translate-y-[-10px]">
                <div className="absolute top-0 right-0">
                  <div className="bg-zordie-500 text-white text-xs font-semibold py-1 px-3 rounded-bl-lg">
                    Popular
                  </div>
                </div>
                <div className="p-6 border-b bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <h3 className="text-xl font-semibold">GROWTH PLAN</h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-3xl font-bold">
                      {billingCycle === "monthly" ? "₹9,999" : `₹${calculateAnnualPrice(9999)}`}
                    </span>
                    <span className="ml-1 text-gray-100 text-sm">/{billingCycle === "monthly" ? "month" : "year"}</span>
                  </div>
                  <p className="text-sm text-gray-100 mt-2">For growing teams</p>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <PricingFeature available={true} text="Allows up to 25 Job Postings monthly" />
                    <PricingFeature available={true} text="Includes 5,000 AI Credits for extensive candidate evaluations" />
                    <PricingFeature available={true} text="Advanced analytics dashboard with customized reporting" />
                    <PricingFeature available={true} text="Priority email and chat support" />
                  </ul>
                  <div className="mt-6">
                    <Link to="/signup" className="block">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg">
                        Choose Growth
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Agency Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={pricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="border border-zordie-500 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden md:col-span-1 lg:col-span-1 bg-white h-full">
                <div className="p-6 border-b bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <h3 className="text-xl font-semibold">AGENCY PLAN</h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-3xl font-bold">
                      {billingCycle === "monthly" ? "₹16,999" : `₹${calculateAnnualPrice(16999)}`}
                    </span>
                    <span className="ml-1 text-gray-100 text-sm">/{billingCycle === "monthly" ? "month" : "year"}</span>
                  </div>
                  <p className="text-sm text-gray-100 mt-2">For recruitment agencies</p>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <PricingFeature available={true} text="Allows up to 50 Job Postings per month" />
                    <PricingFeature available={true} text="Includes 10,000 AI Credits for high volume candidate processing" />
                    <PricingFeature available={true} text="White-labeled platform customization and branding options" />
                    <PricingFeature available={true} text="Dedicated account manager and premium support" />
                  </ul>
                  <div className="mt-6">
                    <Link to="/signup" className="block">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg">
                        Choose Agency
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={pricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="border border-gray-200 hover:border-zordie-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02] overflow-hidden h-full">
                <div className="p-6 border-b bg-gray-50">
                  <h3 className="text-xl font-semibold">Enterprise</h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-3xl font-bold">Custom</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Tailored for large organizations</p>
                </div>
                <CardContent className="p-6">
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
                    <Link to="/contact" className="block">
                      <Button variant="outline" className="w-full transition-all duration-300 hover:shadow-md">
                        Contact Sales
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Feature comparison section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading
            title="Detailed Feature Comparison"
            subtitle="See what's included in each plan"
            align="center"
          />

          <div className="mt-12 overflow-x-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="min-w-[900px]"
            >
              <div className="grid grid-cols-6 bg-white rounded-t-lg shadow">
                <div className="col-span-2 p-5 font-semibold text-gray-800">Features</div>
                <div className="p-5 text-center font-semibold text-gray-800">Free</div>
                <div className="p-5 text-center font-semibold text-gray-800">Starter</div>
                <div className="p-5 text-center font-semibold text-gray-800">Growth</div>
                <div className="p-5 text-center font-semibold text-gray-800">Enterprise</div>
              </div>

              <ComparisonRow 
                feature="Job Postings" 
                free="2" 
                starter="10" 
                growth="25" 
                agency="50"
                enterprise="Unlimited"
              />

              <ComparisonRow 
                feature="AI Screening" 
                free="Basic" 
                starter="Advanced" 
                growth="Premium" 
                agency="Enterprise"
                enterprise="Custom"
              />

              <ComparisonRow 
                feature="AI Credits" 
                free="0" 
                starter="1,000" 
                growth="5,000" 
                agency="10,000"
                enterprise="Unlimited"
              />

              <ComparisonRow 
                feature="White Labeling" 
                free={<X className="mx-auto h-5 w-5 text-red-500" />}
                starter={<X className="mx-auto h-5 w-5 text-red-500" />}
                growth={<X className="mx-auto h-5 w-5 text-red-500" />}
                agency={<CheckCircle className="mx-auto h-5 w-5 text-green-500" />}
                enterprise={<CheckCircle className="mx-auto h-5 w-5 text-green-500" />}
              />

              <ComparisonRow 
                feature="Dedicated Account Manager" 
                free={<X className="mx-auto h-5 w-5 text-red-500" />}
                starter={<X className="mx-auto h-5 w-5 text-red-500" />}
                growth={<X className="mx-auto h-5 w-5 text-red-500" />}
                agency={<CheckCircle className="mx-auto h-5 w-5 text-green-500" />}
                enterprise={<CheckCircle className="mx-auto h-5 w-5 text-green-500" />}
              />

              <ComparisonRow 
                feature="API Access" 
                free={<X className="mx-auto h-5 w-5 text-red-500" />}
                starter={<X className="mx-auto h-5 w-5 text-red-500" />}
                growth={<CheckCircle className="mx-auto h-5 w-5 text-green-500" />}
                agency={<CheckCircle className="mx-auto h-5 w-5 text-green-500" />}
                enterprise={<CheckCircle className="mx-auto h-5 w-5 text-green-500" />}
              />

              <ComparisonRow 
                feature="Support" 
                free="Community" 
                starter="Email" 
                growth="Priority Email & Chat" 
                agency="Dedicated Support"
                enterprise="24/7 Phone & Email"
              />
            </motion.div>
          </div>
        </div>
      </section>
        
      {/* Additional pricing info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800/30 rounded-xl p-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Additional Pricing Options</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Pay-per-post:</strong> ₹799 per job post for low-volume or occasional users
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>AI credit packs:</strong> ₹199 for 100 credits to supplement assessments
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>White-label solutions:</strong> Customizable for agencies seeking brand integration
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Enterprise Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Flexible "Pay as You Go" model:</strong> Tailored pricing for large organizations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Custom AI training:</strong> Specialized models trained for your industry
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Talent Marketplace:</strong> Sponsored job posts and premium access to top-tier talent
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
        
      {/* FAQ Section */}
      <section ref={faqSectionRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Frequently Asked Questions"
            align="center"
          />
          
          <motion.div 
            className="max-w-3xl mx-auto mt-8"
            initial={{ opacity: 0 }}
            animate={faqInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={faqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index + 1}`} className="border rounded-lg mb-4 overflow-hidden hover:shadow-md transition-all duration-300">
                    <AccordionTrigger className="px-6 py-4 text-lg">{faq.question}</AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaSectionRef} className="relative py-16 bg-gradient-to-br from-blue-600 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <FloatingParticles count={30} color="#ffffff" opacity={0.2} />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={ctaInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-4">Need a custom solution?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how Zordie can be tailored to meet your organization's specific hiring requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact">
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-blue-700 transition-all duration-300 hover:shadow-md">
                  Schedule a Demo
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute top-1/4 right-10 w-40 h-40 opacity-20">
          <SpinningCube />
        </div>
      </section>
    </Layout>
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
        <CircleCheck className="h-5 w-5 text-green-500 mr-2 shrink-0" />
      ) : (
        <X className="h-5 w-5 text-gray-300 mr-2 shrink-0" />
      )}
      <span className={`text-sm ${available ? "text-gray-600 dark:text-gray-300" : "text-gray-400 dark:text-gray-500"}`}>
        {text}
      </span>
    </li>
  );
};

interface ComparisonRowProps {
  feature: string;
  free: React.ReactNode;
  starter: React.ReactNode;
  growth: React.ReactNode;
  agency: React.ReactNode;
  enterprise: React.ReactNode;
}

const ComparisonRow = ({ feature, free, starter, growth, agency, enterprise }: ComparisonRowProps) => {
  return (
    <motion.div 
      className="grid grid-cols-6 py-3 px-4 border-b hover:bg-gray-50 transition-colors duration-200"
      whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
    >
      <div className="col-span-2 font-medium text-gray-900 flex items-center">
        <div className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0">
          <LayoutGrid className="h-5 w-5" />
        </div>
        {feature}
      </div>
      <div className="text-center flex items-center justify-center">
        {typeof free === "string" ? free : free}
      </div>
      <div className="text-center flex items-center justify-center">
        {typeof starter === "string" ? starter : starter}
      </div>
      <div className="text-center flex items-center justify-center">
        {typeof growth === "string" ? growth : growth}
      </div>
      <div className="text-center flex items-center justify-center">
        {typeof enterprise === "string" ? enterprise : enterprise}
      </div>
    </motion.div>
  );
};

const faqs = [
  {
    question: "Can I switch plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new features will be immediately available. If you downgrade, the changes will take effect at the start of your next billing cycle."
  },
  {
    question: "Is there a free trial for paid plans?",
    answer: "Yes, we offer a 14-day free trial for all paid plans. You won't be charged until the trial period ends, and you can cancel anytime during the trial."
  },
  {
    question: "What are AI Credits and how do they work?",
    answer: "AI Credits are used for running candidate assessments, screenings, and generating detailed reports. Each assessment typically uses between 5-20 credits depending on its complexity. You can purchase additional credit packs if you need more than what's included in your plan."
  },
  {
    question: "How does the pay-as-you-go model work?",
    answer: "With our pay-as-you-go model, you purchase credits that can be used for various actions like posting jobs, screening resumes, or conducting AI interviews. This is ideal for companies with irregular hiring needs."
  },
  {
    question: "Do you offer discounts for non-profits or educational institutions?",
    answer: "Yes, we offer special pricing for non-profits, educational institutions, and startups. Please contact our sales team for more information."
  },
  {
    question: "What type of assessments can I create with Zordie?",
    answer: "With Zordie, you can create a wide range of assessments including technical skills evaluations, personality assessments, cognitive ability tests, role-specific scenario assessments, and cultural fit evaluations. Our AI-powered system helps you design and analyze results from these assessments."
  }
];

export default Pricing;
