
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Check, Loader2, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSelectPlan = async (plan: string) => {
    setSelectedPlan(plan);
    setIsLoading(true);
    
    try {
      // Since auth has been removed, we'll just simulate a delay and navigate to pricing
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/pricing');
    } catch (error) {
      console.error('Error selecting plan:', error);
      toast({
        title: "Error",
        description: "There was an error selecting this plan. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Transparent Pricing"
          subtitle="Choose a plan that works for you"
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12 max-w-6xl mx-auto">
          {/* Free Plan */}
          <Card className="border-gray-200 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex flex-col items-start">
                <span className="text-lg font-medium mb-2">Free</span>
                <div className="flex items-end">
                  <span className="text-3xl font-bold">₹0</span>
                  <span className="text-gray-500 ml-1 mb-1">/month</span>
                </div>
              </CardTitle>
              <CardDescription>Perfect for job seekers</CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <ul className="space-y-3">
                <PricingItem included>2 job posts</PricingItem>
                <PricingItem included>Basic AI screening</PricingItem>
                <PricingItem included>10 verified applications</PricingItem>
                <PricingItem>Candidate assessments</PricingItem>
                <PricingItem>Prime AI assistance</PricingItem>
                <PricingItem>Advanced analytics</PricingItem>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => handleSelectPlan('free')}
                className="w-full" 
                variant="outline"
                disabled={isLoading && selectedPlan === 'free'}
              >
                {isLoading && selectedPlan === 'free' ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Getting Started...
                  </>
                ) : (
                  "Get Started"
                )}
              </Button>
            </CardFooter>
          </Card>

          {/* Starter Plan */}
          <Card className="border border-zordie-500 hover:shadow-xl transition-all duration-300 md:col-span-1 lg:col-span-1">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardTitle className="flex flex-col items-start">
                <span className="text-lg font-medium mb-2">STARTER PLAN</span>
                <div className="flex items-end">
                  <span className="text-3xl font-bold">₹4,999</span>
                  <span className="text-gray-100 ml-1 mb-1">/month</span>
                </div>
              </CardTitle>
              <CardDescription className="text-gray-100">For small startups</CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <ul className="space-y-3">
                <PricingItem included>Up to 10 Job Postings per month</PricingItem>
                <PricingItem included>Includes 1,000 AI Credits for candidate assessments</PricingItem>
                <PricingItem included>Access to basic dashboard and reporting features</PricingItem>
                <PricingItem included>Email support for quick assistance</PricingItem>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => handleSelectPlan('starter')}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800"
                disabled={isLoading && selectedPlan === 'starter'}
              >
                {isLoading && selectedPlan === 'starter' ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Getting Started...
                  </>
                ) : (
                  "Choose Starter"
                )}
              </Button>
            </CardFooter>
          </Card>

          {/* Growth Plan */}
          <Card className="border-zordie-500 shadow-md relative hover:shadow-xl transition-all duration-300">
            <div className="absolute -top-4 left-0 right-0 mx-auto w-36 text-center py-1 px-3 rounded-full text-white bg-gradient-to-r from-zordie-600 to-accent1 text-sm">
              Most Popular
            </div>
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardTitle className="flex flex-col items-start">
                <span className="text-lg font-medium mb-2">GROWTH PLAN</span>
                <div className="flex items-end">
                  <span className="text-3xl font-bold">₹9,999</span>
                  <span className="text-gray-100 ml-1 mb-1">/month</span>
                </div>
              </CardTitle>
              <CardDescription className="text-gray-100">For growing teams</CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <ul className="space-y-3">
                <PricingItem included>Allows up to 25 Job Postings monthly</PricingItem>
                <PricingItem included>Includes 5,000 AI Credits for extensive candidate evaluations</PricingItem>
                <PricingItem included>Advanced analytics dashboard with customized reporting</PricingItem>
                <PricingItem included>Priority email and chat support</PricingItem>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => handleSelectPlan('growth')}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800"
                disabled={isLoading && selectedPlan === 'growth'}
              >
                {isLoading && selectedPlan === 'growth' ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Getting Started...
                  </>
                ) : (
                  "Choose Growth"
                )}
              </Button>
            </CardFooter>
          </Card>

          {/* Agency Plan */}
          <Card className="border border-zordie-500 hover:shadow-xl transition-all duration-300 md:col-span-1 lg:col-span-1">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardTitle className="flex flex-col items-start">
                <span className="text-lg font-medium mb-2">AGENCY PLAN</span>
                <div className="flex items-end">
                  <span className="text-3xl font-bold">₹16,999</span>
                  <span className="text-gray-100 ml-1 mb-1">/month</span>
                </div>
              </CardTitle>
              <CardDescription className="text-gray-100">For recruitment agencies</CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <ul className="space-y-3">
                <PricingItem included>Allows up to 50 Job Postings per month</PricingItem>
                <PricingItem included>Includes 10,000 AI Credits for high volume candidate processing</PricingItem>
                <PricingItem included>White-labeled platform customization and branding options</PricingItem>
                <PricingItem included>Dedicated account manager and premium support</PricingItem>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => handleSelectPlan('agency')}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800"
                disabled={isLoading && selectedPlan === 'agency'}
              >
                {isLoading && selectedPlan === 'agency' ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Getting Started...
                  </>
                ) : (
                  "Choose Agency"
                )}
              </Button>
            </CardFooter>
          </Card>

          {/* Enterprise Plan */}
          <Card className="border-gray-200 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex flex-col items-start">
                <span className="text-lg font-medium mb-2">Enterprise</span>
                <div className="flex items-end">
                  <span className="text-3xl font-bold">Custom</span>
                </div>
              </CardTitle>
              <CardDescription>For companies and teams</CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <ul className="space-y-3">
                <PricingItem included>Unlimited job posts</PricingItem>
                <PricingItem included>Custom integrations</PricingItem>
                <PricingItem included>Dedicated account manager</PricingItem>
                <PricingItem included>Custom AI training</PricingItem>
                <PricingItem included>"Pay as You Go" model</PricingItem>
                <PricingItem included>Phone & priority support</PricingItem>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => handleSelectPlan('enterprise')}
                className="w-full" 
                variant="outline"
                disabled={isLoading && selectedPlan === 'enterprise'}
              >
                {isLoading && selectedPlan === 'enterprise' ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Contact Sales"
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6 max-w-5xl mx-auto">
          <p className="text-base text-center text-gray-700">
            Our SaaS subscription model is complemented by additional revenue streams: a pay-per-post option priced at ₹799 per job post for low-volume or occasional users, AI credit packs available at ₹199 for 100 credits to supplement assessments, and more.
          </p>
          <p className="text-base text-center mt-4 text-gray-700">
            Enterprise clients benefit from our flexible "Pay as You Go" model, providing tailored pricing and scalable services.
          </p>
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Satisfaction Guaranteed</h3>
          <p className="text-gray-600 mb-6">
            All paid plans come with a 14-day money-back guarantee. If you're not
            satisfied, we'll refund your payment — no questions asked.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="link" onClick={() => navigate('/pricing')}>
              View All Features
            </Button>
            <Button variant="link" onClick={() => navigate('/contact')}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper component for pricing items
const PricingItem = ({ children, included = false }: { children: React.ReactNode; included?: boolean }) => (
  <li className="flex items-center">
    {included ? (
      <Check className="h-5 w-5 text-zordie-600 mr-2 shrink-0" />
    ) : (
      <X className="h-5 w-5 text-gray-400 mr-2 shrink-0" />
    )}
    <span className={!included ? "text-gray-500" : ""}>{children}</span>
  </li>
);

export default PricingSection;
