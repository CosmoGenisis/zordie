
import { useState, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { CheckCircle, CircleCheck, HelpCircle, X, ArrowRight, LayoutGrid, CircleArrowDown, Users, Zap, Shield, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";
import { SpinningCube } from '@/components/home/3d/SpinningCube';
import { FloatingParticles } from '@/components/home/3d/FloatingParticles';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const pricingSectionRef = useRef(null);
  const faqSectionRef = useRef(null);
  const ctaSectionRef = useRef(null);
  const pricingInView = useInView(pricingSectionRef, {
    once: false,
    amount: 0.2
  });
  const faqInView = useInView(faqSectionRef, {
    once: false,
    amount: 0.2
  });
  const ctaInView = useInView(ctaSectionRef, {
    once: false,
    amount: 0.2
  });
  const handleBillingCycleChange = (cycle: "monthly" | "annual") => {
    setBillingCycle(cycle);
  };

  // Calculate annual pricing (20% discount)
  const calculateAnnualPrice = (monthlyPrice: number) => {
    return (monthlyPrice * 12 * 0.8).toLocaleString();
  };

  return <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <FloatingParticles count={50} color="#ffffff" opacity={0.3} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Choose the plan that fits your hiring needs and scale as you grow. All plans include unlimited job posts and candidates.
            </p>
            
            <div className="flex justify-center mb-8">
              <div className="flex justify-center">
                <div className="bg-white/10 p-1 rounded-full backdrop-blur-sm">
                  <div className="flex">
                    <button onClick={() => handleBillingCycleChange("monthly")} className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${billingCycle === "monthly" ? "bg-white text-blue-700 shadow-md" : "text-white hover:bg-white/10"}`}>
                      Monthly
                    </button>
                    <button onClick={() => handleBillingCycleChange("annual")} className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${billingCycle === "annual" ? "bg-white text-blue-700 shadow-md" : "text-white hover:bg-white/10"}`}>
                      Annual
                      {billingCycle === "annual" && <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-2 py-0.5">
                          Save 20%
                        </span>}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3,
            duration: 0.5
          }} className="flex justify-center">
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
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6" initial={{
          opacity: 0
        }} animate={pricingInView ? {
          opacity: 1
        } : {}} transition={{
          duration: 0.5
        }}>
            {/* Free Plan */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={pricingInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.5,
            delay: 0
          }}>
              <Card className="border border-gray-200 hover:border-zordie-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02] overflow-hidden h-full">
                <div className="p-6 border-b bg-gray-50">
                  <div className="flex items-center justify-center mb-4">
                    <Users className="w-5 h-5 text-gray-600 mr-2" />
                    <h3 className="text-xl font-semibold">Free</h3>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl font-bold">₹0</span>
                    <p className="text-sm text-gray-600 mt-2">Try Zordie for free</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <PricingFeature available={true} text="2 job posts per month" />
                    <PricingFeature available={true} text="Basic AI screening" />
                    <PricingFeature available={true} text="10 candidate profiles" />
                    <PricingFeature available={true} text="Email support" />
                    <PricingFeature available={false} text="Advanced AI assessments" />
                    <PricingFeature available={false} text="ARC AI agents" />
                  </ul>
                  <div className="mt-6">
                    <Link to="/contact" className="block">
                      <Button variant="outline" className="w-full transition-all duration-300 hover:shadow-md">
                        Join Pre-Access
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Starter Plan */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={pricingInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.5,
            delay: 0.1
          }}>
              <Card className="border border-blue-500 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden h-full">
                <div className="p-6 border-b bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <div className="flex items-center justify-center mb-4">
                    <Zap className="w-5 h-5 text-white mr-2" />
                    <h3 className="text-xl font-semibold">STARTER</h3>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl font-bold">
                      {billingCycle === "monthly" ? "₹2,999" : `₹${calculateAnnualPrice(2999)}`}
                    </span>
                    <p className="text-sm text-gray-100 mt-1">per user / {billingCycle === "monthly" ? "month" : "year"}</p>
                    <p className="text-xs text-gray-200 mt-1">1-10 users</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <PricingFeature available={true} text="Unlimited job postings" />
                    <PricingFeature available={true} text="5,000 AI screening credits/month" />
                    <PricingFeature available={true} text="Basic ARC AI agents" />
                    <PricingFeature available={true} text="Standard analytics dashboard" />
                    <PricingFeature available={true} text="Email & chat support" />
                  </ul>
                  <div className="mt-6">
                    <Link to="/contact" className="block">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg">
                        Join Pre-Access
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Growth Plan */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={pricingInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.5,
            delay: 0.2
          }}>
              <Card className="border border-indigo-500 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden h-full relative transform hover:translate-y-[-5px]">
                <div className="absolute top-0 right-0">
                  <div className="bg-indigo-500 text-white text-xs font-semibold py-1 px-3 rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
                <div className="p-6 border-b bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <div className="flex items-center justify-center mb-4">
                    <Shield className="w-5 h-5 text-white mr-2" />
                    <h3 className="text-xl font-semibold">GROWTH</h3>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl font-bold">
                      {billingCycle === "monthly" ? "₹4,999" : `₹${calculateAnnualPrice(4999)}`}
                    </span>
                    <p className="text-sm text-gray-100 mt-1">per user / {billingCycle === "monthly" ? "month" : "year"}</p>
                    <p className="text-xs text-gray-200 mt-1">10-50 users</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <PricingFeature available={true} text="Everything in Starter" />
                    <PricingFeature available={true} text="20,000 AI screening credits/month" />
                    <PricingFeature available={true} text="Advanced ARC AI agents" />
                    <PricingFeature available={true} text="Advanced AI assessments" />
                    <PricingFeature available={true} text="Custom analytics & reporting" />
                    <PricingFeature available={true} text="Priority support" />
                  </ul>
                  <div className="mt-6">
                    <Link to="/contact" className="block">
                      <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg">
                        Join Pre-Access
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Agency Plan */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={pricingInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.5,
            delay: 0.3
          }}>
              <Card className="border border-purple-500 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden h-full">
                <div className="p-6 border-b bg-gradient-to-r from-purple-600 to-purple-700 text-white">
                  <div className="flex items-center justify-center mb-4">
                    <Crown className="w-5 h-5 text-white mr-2" />
                    <h3 className="text-xl font-semibold">AGENCY</h3>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl font-bold">
                      {billingCycle === "monthly" ? "₹7,999" : `₹${calculateAnnualPrice(7999)}`}
                    </span>
                    <p className="text-sm text-gray-100 mt-1">per user / {billingCycle === "monthly" ? "month" : "year"}</p>
                    <p className="text-xs text-gray-200 mt-1">50+ users</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <PricingFeature available={true} text="Everything in Growth" />
                    <PricingFeature available={true} text="Unlimited AI credits" />
                    <PricingFeature available={true} text="Full ARC AI agent suite" />
                    <PricingFeature available={true} text="White-label solution" />
                    <PricingFeature available={true} text="Custom integrations" />
                    <PricingFeature available={true} text="Dedicated account manager" />
                  </ul>
                  <div className="mt-6">
                    <Link to="/contact" className="block">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 transition-all duration-300 hover:shadow-lg">
                        Join Pre-Access
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Enterprise Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12"
          >
            <Card className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Solutions</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Need a custom solution for your organization? We offer tailored enterprise packages with volume discounts, custom features, and dedicated support.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Custom pricing
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Volume discounts
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    24/7 support
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    On-premise deployment
                  </div>
                </div>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="font-medium">
                    Contact Sales Team
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      
      {/* Feature comparison section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading title="Detailed Feature Comparison" subtitle="See what's included in each plan" align="center" />

          <div className="mt-12 overflow-x-auto">
            <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7
          }} className="min-w-[900px]">
              <div className="grid grid-cols-6 bg-white rounded-t-lg shadow">
                <div className="col-span-2 p-5 font-semibold text-gray-800">Features</div>
                <div className="p-5 text-center font-semibold text-gray-800">Free</div>
                <div className="p-5 text-center font-semibold text-gray-800">Starter</div>
                <div className="p-5 text-center font-semibold text-gray-800">Growth</div>
                <div className="p-5 text-center font-semibold text-gray-800">Agency</div>
              </div>

              <ComparisonRow feature="Job Postings" free="2/month" starter="Unlimited" growth="Unlimited" agency="Unlimited" enterprise="Unlimited" />

              <ComparisonRow feature="AI Screening Credits" free="0" starter="5,000/month" growth="20,000/month" agency="Unlimited" enterprise="Unlimited" />

              <ComparisonRow feature="ARC AI Agents" free={<X className="mx-auto h-5 w-5 text-red-500" />} starter="Basic" growth="Advanced" agency="Full Suite" enterprise="Custom" />

              <ComparisonRow feature="White Labeling" free={<X className="mx-auto h-5 w-5 text-red-500" />} starter={<X className="mx-auto h-5 w-5 text-red-500" />} growth={<X className="mx-auto h-5 w-5 text-red-500" />} agency={<CheckCircle className="mx-auto h-5 w-5 text-green-500" />} enterprise={<CheckCircle className="mx-auto h-5 w-5 text-green-500" />} />

              <ComparisonRow feature="Custom Integrations" free={<X className="mx-auto h-5 w-5 text-red-500" />} starter={<X className="mx-auto h-5 w-5 text-red-500" />} growth="Basic API" agency={<CheckCircle className="mx-auto h-5 w-5 text-green-500" />} enterprise={<CheckCircle className="mx-auto h-5 w-5 text-green-500" />} />

              <ComparisonRow feature="Support" free="Email" starter="Email & Chat" growth="Priority Support" agency="Dedicated Manager" enterprise="24/7 Phone & Email" />
            </motion.div>
          </div>
        </div>
      </section>
        
      {/* FAQ Section */}
      <section ref={faqSectionRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading title="Frequently Asked Questions" align="center" />
          
          <motion.div className="max-w-3xl mx-auto mt-8" initial={{
          opacity: 0
        }} animate={faqInView ? {
          opacity: 1
        } : {}} transition={{
          duration: 0.6
        }}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 10
            }} animate={faqInView ? {
              opacity: 1,
              y: 0
            } : {}} transition={{
              duration: 0.4,
              delay: index * 0.1
            }}>
                  <AccordionItem value={`item-${index + 1}`} className="border rounded-lg mb-4 overflow-hidden hover:shadow-md transition-all duration-300">
                    <AccordionTrigger className="px-6 py-4 text-lg">{faq.question}</AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>)}
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
          <motion.div className="text-center max-w-3xl mx-auto" initial={{
          opacity: 0
        }} animate={ctaInView ? {
          opacity: 1
        } : {}} transition={{
          duration: 0.6
        }}>
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Hiring?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our exclusive pre-access program and be among the first to experience the future of AI-powered recruitment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact">
                <Button size="lg" className="bg-yellow-500 text-blue-900 hover:bg-yellow-400 transition-all duration-300 hover:shadow-lg font-semibold">
                  Join Pre-Access Waitlist
                </Button>
              </Link>
              <Link to="/arc">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-700 transition-all duration-300">
                  Explore ARC Agents <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute top-1/4 right-10 w-40 h-40 opacity-20">
          <SpinningCube />
        </div>
      </section>
    </Layout>;
};

interface PricingFeatureProps {
  available: boolean;
  text: string;
}

const PricingFeature = ({
  available,
  text
}: PricingFeatureProps) => {
  return <li className="flex items-start">
      {available ? <CircleCheck className="h-4 w-4 text-green-500 mr-2 shrink-0 mt-0.5" /> : <X className="h-4 w-4 text-gray-300 mr-2 shrink-0 mt-0.5" />}
      <span className={`text-sm ${available ? "text-gray-600 dark:text-gray-300" : "text-gray-400 dark:text-gray-500"}`}>
        {text}
      </span>
    </li>;
};

interface ComparisonRowProps {
  feature: string;
  free: React.ReactNode;
  starter: React.ReactNode;
  growth: React.ReactNode;
  agency: React.ReactNode;
  enterprise: React.ReactNode;
}

const ComparisonRow = ({
  feature,
  free,
  starter,
  growth,
  agency,
  enterprise
}: ComparisonRowProps) => {
  return <motion.div className="grid grid-cols-6 py-3 px-4 border-b hover:bg-gray-50 transition-colors duration-200" whileHover={{
    backgroundColor: "rgba(59, 130, 246, 0.05)"
  }}>
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
        {typeof agency === "string" ? agency : agency}
      </div>
    </motion.div>;
};

const faqs = [{
  question: "What is pre-access and how does it work?",
  answer: "Pre-access gives you early access to Zordie's platform before our official launch. By joining our waitlist, you'll be among the first to test our AI-powered recruitment tools and provide valuable feedback to shape the final product."
}, {
  question: "When will Zordie be available?",
  answer: "We're currently in development and plan to launch in early 2024. Pre-access members will get access 2-3 months before our public launch, giving you a significant advantage in transforming your hiring process."
}, {
  question: "What are AI Credits and how do they work?",
  answer: "AI Credits are used for running candidate assessments, AI screening, resume analysis, and generating detailed reports. Each assessment typically uses between 5-20 credits depending on its complexity. You can always purchase additional credit packs if needed."
}, {
  question: "Can I upgrade or downgrade my plan later?",
  answer: "Yes, you can change your plan at any time once we launch. If you upgrade, new features will be immediately available. If you downgrade, changes take effect at the start of your next billing cycle."
}, {
  question: "What makes Zordie different from other ATS platforms?",
  answer: "Zordie features our revolutionary ARC (AI Recruitment Collective) system with 10 specialized AI agents, each designed for specific recruitment tasks. This provides unmatched accuracy and efficiency compared to traditional ATS platforms."
}, {
  question: "Do you offer custom solutions for enterprise clients?",
  answer: "Yes, we provide tailored enterprise solutions with custom pricing, volume discounts, dedicated support, on-premise deployment options, and specialized AI training for your specific industry needs."
}];

export default Pricing;
