
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
          title="Choose the Right Plan for Your Hiring Needs"
          subtitle="Whether you're a small business or a large enterprise, we have a plan for you"
          centered
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
          {/* Free Plan */}
          <Card className="border border-gray-200 hover:border-zordie-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02] overflow-hidden">
            <div className="p-6 border-b bg-gray-50">
              <h3 className="text-xl font-semibold">Free</h3>
              <div className="mt-2 flex items-baseline">
                <span className="text-3xl font-bold">₹0</span>
                <span className="ml-1 text-gray-500 text-sm">{billingCycle === "monthly" ? "/month" : "/year"}</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">Perfect for trying out Zordie</p>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-3">
                <PricingFeature available={true} text="2 job posts" />
                <PricingFeature available={true} text="Basic AI screening" />
                <PricingFeature available={true} text="10 verified applications" />
                <PricingFeature available={true} text="Email support" />
                <PricingFeature available={false} text="AI video interviews" />
                <PricingFeature available={false} text="Prime AI messaging" />
                <PricingFeature available={false} text="Team collaboration" />
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
          
          {/* Startup Plan */}
          <Card className="border-2 border-zordie-500 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden relative">
            <div className="absolute top-0 right-0">
              <div className="bg-zordie-500 text-white text-xs font-semibold py-1 px-3 rounded-bl-lg">
                Popular
              </div>
            </div>
            <div className="p-6 border-b bg-zordie-50">
              <h3 className="text-xl font-semibold">Startup</h3>
              <div className="mt-2 flex items-baseline">
                <span className="text-3xl font-bold">{billingCycle === "monthly" ? "₹1,499" : "₹14,390"}</span>
                <span className="ml-1 text-gray-500 text-sm">{billingCycle === "monthly" ? "/month" : "/year"}</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">Ideal for growing teams</p>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-3">
                <PricingFeature available={true} text="15 job posts" />
                <PricingFeature available={true} text="Full AI screening & ranking" />
                <PricingFeature available={true} text="Unlimited verified applications" />
                <PricingFeature available={true} text="AI video interviews" />
                <PricingFeature available={true} text="Prime AI messaging" />
                <PricingFeature available={true} text="Priority support" />
                <PricingFeature available={false} text="Custom interview templates" />
              </ul>
              <div className="mt-6">
                <Link to="/signup" className="block">
                  <Button className="w-full btn-gradient transition-all duration-300 hover:shadow-lg">
                    Choose Startup
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          
          {/* Business Plan */}
          <Card className="border border-gray-200 hover:border-zordie-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02] overflow-hidden">
            <div className="p-6 border-b bg-gray-50">
              <h3 className="text-xl font-semibold">Business</h3>
              <div className="mt-2 flex items-baseline">
                <span className="text-3xl font-bold">{billingCycle === "monthly" ? "₹4,999" : "₹47,990"}</span>
                <span className="ml-1 text-gray-500 text-sm">{billingCycle === "monthly" ? "/month" : "/year"}</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">For scaling companies</p>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-3">
                <PricingFeature available={true} text="Unlimited job posts" />
                <PricingFeature available={true} text="Advanced AI screening & ranking" />
                <PricingFeature available={true} text="Custom interview templates" />
                <PricingFeature available={true} text="Team collaboration tools" />
                <PricingFeature available={true} text="Analytics dashboard" />
                <PricingFeature available={true} text="API access" />
                <PricingFeature available={true} text="Priority support" />
              </ul>
              <div className="mt-6">
                <Link to="/signup" className="block">
                  <Button className="w-full transition-all duration-300 hover:shadow-md">
                    Choose Business
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
                <PricingFeature available={true} text="Everything in Business" />
                <PricingFeature available={true} text="Custom integrations" />
                <PricingFeature available={true} text="Dedicated account manager" />
                <PricingFeature available={true} text="Custom AI training" />
                <PricingFeature available={true} text="White-label options" />
                <PricingFeature available={true} text="SLA guarantees" />
                <PricingFeature available={true} text="Phone & priority support" />
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-zordie-500 mr-2 shrink-0" />
                  <div className="text-sm text-gray-600 flex items-center">
                    <span>Customizable Prime AI</span>
                    <HoverCard>
                      <HoverCardTrigger>
                        <HelpCircle className="inline h-4 w-4 text-gray-400 ml-1 cursor-help" />
                      </HoverCardTrigger>
                      <HoverCardContent className="text-sm p-4 bg-white">
                        <p>Customize Prime AI's behavior, responses, and capabilities to match your company's hiring workflow and brand voice.</p>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                </li>
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
        
        {/* Comparison table - mobile hidden, visible on larger screens */}
        <div className="mt-16 hidden md:block">
          <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-5 p-4 border-b bg-gray-50">
              <div className="col-span-1 font-semibold">Features</div>
              <div className="text-center font-semibold">Free</div>
              <div className="text-center font-semibold">Startup</div>
              <div className="text-center font-semibold">Business</div>
              <div className="text-center font-semibold">Enterprise</div>
            </div>
            
            <ComparisonRow 
              feature="Job Posts" 
              free="2 jobs" 
              startup="15 jobs" 
              business="Unlimited" 
              enterprise="Unlimited"
            />
            <ComparisonRow 
              feature="AI Resume Screening" 
              free="Basic" 
              startup="Advanced" 
              business="Premium" 
              enterprise="Custom"
            />
            <ComparisonRow 
              feature="Verified Applications" 
              free="10 per job" 
              startup="Unlimited" 
              business="Unlimited" 
              enterprise="Unlimited"
            />
            <ComparisonRow 
              feature="AI Video Interviews" 
              free="❌" 
              startup="✅" 
              business="✅" 
              enterprise="✅"
            />
            <ComparisonRow 
              feature="Prime AI Messaging" 
              free="❌" 
              startup="✅" 
              business="✅" 
              enterprise="✅ (Custom)"
            />
            <ComparisonRow 
              feature="Team Collaboration" 
              free="❌" 
              startup="❌" 
              business="✅" 
              enterprise="✅"
            />
            <ComparisonRow 
              feature="Analytics Dashboard" 
              free="❌" 
              startup="Basic" 
              business="Advanced" 
              enterprise="Custom"
            />
            <ComparisonRow 
              feature="API Access" 
              free="❌" 
              startup="❌" 
              business="✅" 
              enterprise="✅"
            />
            <ComparisonRow 
              feature="Support" 
              free="Email" 
              startup="Priority" 
              business="Priority" 
              enterprise="Dedicated"
            />
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20">
          <SectionHeading
            title="Frequently Asked Questions"
            centered
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
                <AccordionTrigger className="px-6 py-4 text-lg">What payment methods do you accept?</AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  We accept all major credit cards, including Visa, Mastercard, and American Express. For Enterprise plans, we also accept bank transfers.
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
                <AccordionTrigger className="px-6 py-4 text-lg">Can I customize Prime AI for my organization?</AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Yes, with our Enterprise plan, you can fully customize Prime AI to match your organization's hiring workflow, branding, and specific requirements. Our team will work closely with you to train and configure Prime AI according to your needs.
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
              <Button size="lg" className="btn-gradient transition-all duration-300 hover:shadow-md hover:scale-105">
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
  startup: string;
  business: string;
  enterprise: string;
}

const ComparisonRow = ({ feature, free, startup, business, enterprise }: ComparisonRowProps) => {
  return (
    <div className="grid grid-cols-5 py-3 px-4 border-b hover:bg-gray-50 transition-colors duration-200">
      <div className="col-span-1 font-medium text-gray-900">{feature}</div>
      <div className="text-center">{free}</div>
      <div className="text-center">{startup}</div>
      <div className="text-center">{business}</div>
      <div className="text-center">{enterprise}</div>
    </div>
  );
};

export default Pricing;
