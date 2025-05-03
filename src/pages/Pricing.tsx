
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Check, HelpCircle, X } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const handleBillingCycleChange = (cycle: "monthly" | "annual") => {
    setBillingCycle(cycle);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that's right for your business"
          align="center"
        />
        
        {/* Billing toggle */}
        <div className="flex justify-center mt-8 mb-12">
          <div className="bg-white p-1 rounded-full border shadow-sm">
            <div className="flex">
              <button
                onClick={() => handleBillingCycleChange("monthly")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === "monthly"
                    ? "bg-zordie-500 text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => handleBillingCycleChange("annual")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === "annual"
                    ? "bg-zordie-500 text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Annual <span className="text-xs text-zordie-300">Save 20%</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
          {/* Free Plan */}
          <Card className="border border-gray-200 hover:border-zordie-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02] overflow-hidden">
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
          
          {/* Starter Plan */}
          <Card className="border border-zordie-500 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden md:col-span-1 lg:col-span-1 bg-white">
            <div className="p-6 border-b bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <h3 className="text-xl font-semibold">STARTER PLAN</h3>
              <div className="mt-2 flex items-baseline">
                <span className="text-3xl font-bold">₹4,999</span>
                <span className="ml-1 text-gray-100 text-sm">/month</span>
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
          
          {/* Growth Plan */}
          <Card className="border border-zordie-500 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden md:col-span-1 lg:col-span-1 bg-white relative">
            <div className="absolute top-0 right-0">
              <div className="bg-zordie-500 text-white text-xs font-semibold py-1 px-3 rounded-bl-lg">
                Popular
              </div>
            </div>
            <div className="p-6 border-b bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <h3 className="text-xl font-semibold">GROWTH PLAN</h3>
              <div className="mt-2 flex items-baseline">
                <span className="text-3xl font-bold">₹9,999</span>
                <span className="ml-1 text-gray-100 text-sm">/month</span>
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
          
          {/* Agency Plan */}
          <Card className="border border-zordie-500 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden md:col-span-1 lg:col-span-1 bg-white">
            <div className="p-6 border-b bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <h3 className="text-xl font-semibold">AGENCY PLAN</h3>
              <div className="mt-2 flex items-baseline">
                <span className="text-3xl font-bold">₹16,999</span>
                <span className="ml-1 text-gray-100 text-sm">/month</span>
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
          
          {/* Enterprise Plan */}
          <Card className="border border-gray-200 hover:border-zordie-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02] overflow-hidden">
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
        </div>
        
        {/* Additional pricing info */}
        <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6">
          <p className="text-base text-center max-w-5xl mx-auto text-gray-700">
            Our SaaS subscription model is complemented by additional revenue streams: a pay-per-post option priced at ₹799 per job post for low-volume or occasional users, AI credit packs available at ₹199 for 100 credits to supplement assessments, customizable white-labeled solutions for agencies seeking brand integration, and the Zordie Talent Marketplace which offers sponsored job posts and premium access to top-tier talent.
          </p>
          <p className="text-base text-center max-w-5xl mx-auto mt-4 text-gray-700">
            Enterprise clients benefit from our flexible "Pay as You Go" model, providing tailored pricing and scalable services to meet demands of large organizations with complex hiring needs.
          </p>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20">
          <SectionHeading
            title="Frequently Asked Questions"
            align="center"
          />
          
          <div className="max-w-3xl mx-auto mt-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border rounded-lg mb-4 overflow-hidden hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="px-6 py-4 text-lg">Can I switch plans later?</AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new features will be immediately available. If you downgrade, the changes will take effect at the start of your next billing cycle.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border rounded-lg mb-4 overflow-hidden hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="px-6 py-4 text-lg">Is there a free trial for paid plans?</AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Yes, we offer a 14-day free trial for all paid plans. You won't be charged until the trial period ends, and you can cancel anytime during the trial.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border rounded-lg mb-4 overflow-hidden hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="px-6 py-4 text-lg">What are AI Credits and how do they work?</AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  AI Credits are used for running candidate assessments, screenings, and generating detailed reports. Each assessment typically uses between 5-20 credits depending on its complexity. You can purchase additional credit packs if you need more than what's included in your plan.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border rounded-lg mb-4 overflow-hidden hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="px-6 py-4 text-lg">How does the pay-as-you-go model work?</AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  With our pay-as-you-go model, you purchase credits that can be used for various actions like posting jobs, screening resumes, or conducting AI interviews. This is ideal for companies with irregular hiring needs.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border rounded-lg mb-4 overflow-hidden hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="px-6 py-4 text-lg">Do you offer discounts for non-profits or educational institutions?</AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Yes, we offer special pricing for non-profits, educational institutions, and startups. Please contact our sales team for more information.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg mb-4 overflow-hidden hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="px-6 py-4 text-lg">What type of assessments can I create with Zordie?</AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  With Zordie, you can create a wide range of assessments including technical skills evaluations, personality assessments, cognitive ability tests, role-specific scenario assessments, and cultural fit evaluations. Our AI-powered system helps you design and analyze results from these assessments.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-zordie-50 border border-zordie-100 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Need a custom solution?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how Zordie can be tailored to meet your organization's specific hiring requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact">
              <Button variant="outline" size="lg" className="transition-all duration-300 hover:shadow-md hover:scale-105">
                Schedule a Demo
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-md hover:scale-105">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </div>
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
        <Check className="h-5 w-5 text-zordie-500 mr-2 shrink-0" />
      ) : (
        <X className="h-5 w-5 text-gray-300 mr-2 shrink-0" />
      )}
      <span className={`text-sm ${available ? "text-gray-600" : "text-gray-400"}`}>
        {text}
      </span>
    </li>
  );
};

interface ComparisonRowProps {
  feature: string;
  free: string;
  starter: string;
  growth: string;
  agency: string;
  enterprise: string;
}

const ComparisonRow = ({ feature, free, starter, growth, agency, enterprise }: ComparisonRowProps) => {
  return (
    <div className="grid grid-cols-6 py-3 px-4 border-b hover:bg-gray-50 transition-colors duration-200">
      <div className="col-span-1 font-medium text-gray-900">{feature}</div>
      <div className="text-center">{free}</div>
      <div className="text-center">{starter}</div>
      <div className="text-center">{growth}</div>
      <div className="text-center">{agency}</div>
      <div className="text-center">{enterprise}</div>
    </div>
  );
};

export default Pricing;
