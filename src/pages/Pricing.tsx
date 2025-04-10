
import Layout from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Pricing = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          title="Choose the Right Plan for Your Hiring Needs"
          subtitle="Whether you're a small business or a large enterprise, we have a plan for you"
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Flexible Plans for Every Business</h3>
            <p className="text-gray-600">
              Zordie offers flexible pricing options designed to scale with your business. From startups to enterprises, 
              our plans provide the right features at the right price.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium">Transparent Pricing</h4>
                  <p className="text-gray-600 text-sm">No hidden fees or unexpected charges.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium">Monthly Billing</h4>
                  <p className="text-gray-600 text-sm">No long-term contracts, pay month-to-month.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium">Dedicated Support</h4>
                  <p className="text-gray-600 text-sm">Get help whenever you need it.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium">Pay As You Go Options</h4>
                  <p className="text-gray-600 text-sm">Only pay for what you use with our credit-based system.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-1"></div>
                  <div className="text-center">
                    <h4 className="font-semibold">Free</h4>
                    <p className="text-2xl font-bold mt-2">₹0</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold">Startup</h4>
                    <p className="text-2xl font-bold mt-2">₹1,499</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold">Business</h4>
                    <p className="text-2xl font-bold mt-2">₹4,999</p>
                  </div>
                </div>
                
                {/* Feature comparisons */}
                <div className="space-y-4">
                  <ComparisonRow 
                    feature="Job Posts" 
                    free="2 jobs" 
                    startup="15 jobs" 
                    business="Unlimited" 
                  />
                  <ComparisonRow 
                    feature="AI Resume Screening" 
                    free="Basic" 
                    startup="Advanced" 
                    business="Premium" 
                  />
                  <ComparisonRow 
                    feature="Verified Applications" 
                    free="10 per job" 
                    startup="Unlimited" 
                    business="Unlimited" 
                  />
                  <ComparisonRow 
                    feature="AI Video Interviews" 
                    free="❌" 
                    startup="✅" 
                    business="✅" 
                  />
                  <ComparisonRow 
                    feature="Prime AI Messaging" 
                    free="❌" 
                    startup="✅" 
                    business="✅" 
                  />
                  <ComparisonRow 
                    feature="Team Collaboration" 
                    free="❌" 
                    startup="❌" 
                    business="✅" 
                  />
                  <ComparisonRow 
                    feature="Analytics Dashboard" 
                    free="❌" 
                    startup="Basic" 
                    business="Advanced" 
                  />
                  <ComparisonRow 
                    feature="API Access" 
                    free="❌" 
                    startup="❌" 
                    business="✅" 
                  />
                  <ComparisonRow 
                    feature="Support" 
                    free="Email" 
                    startup="Priority" 
                    business="Priority" 
                  />
                </div>
                
                {/* Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-1"></div>
                  <div className="text-center">
                    <Link to="/signup">
                      <Button variant="outline" className="w-full">Get Started</Button>
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link to="/signup">
                      <Button className="w-full btn-gradient">Choose Startup</Button>
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link to="/signup">
                      <Button variant="default" className="w-full">Choose Business</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">Enterprise Plan</h4>
                  <p className="text-gray-600">Custom pricing for larger organizations</p>
                </div>
                <Link to="/contact">
                  <Button variant="outline">Contact Sales</Button>
                </Link>
              </div>
            </div>
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
              <AccordionItem value="item-1">
                <AccordionTrigger>Can I switch plans later?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new features will be immediately available. If you downgrade, the changes will take effect at the start of your next billing cycle.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Is there a free trial for paid plans?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer a 14-day free trial for all paid plans. You won't be charged until the trial period ends, and you can cancel anytime during the trial.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>
                  We accept all major credit cards, including Visa, Mastercard, and American Express. For Enterprise plans, we also accept bank transfers.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>How does the pay-as-you-go model work?</AccordionTrigger>
                <AccordionContent>
                  With our pay-as-you-go model, you purchase credits that can be used for various actions like posting jobs, screening resumes, or conducting AI interviews. This is ideal for companies with irregular hiring needs.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Do you offer discounts for non-profits or educational institutions?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer special pricing for non-profits, educational institutions, and startups. Please contact our sales team for more information.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </Layout>
  );
};

interface ComparisonRowProps {
  feature: string;
  free: string;
  startup: string;
  business: string;
}

const ComparisonRow = ({ feature, free, startup, business }: ComparisonRowProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-2 border-b">
      <div className="font-medium text-gray-900">{feature}</div>
      <div className="text-center">{free}</div>
      <div className="text-center">{startup}</div>
      <div className="text-center">{business}</div>
    </div>
  );
};

export default Pricing;
