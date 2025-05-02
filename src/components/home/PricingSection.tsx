
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Check, Loader2, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

// Removed useAuth import since authentication has been removed

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
        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {/* Free Plan */}
          <Card className="border-gray-200 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex flex-col items-start">
                <span className="text-lg font-medium mb-2">Free</span>
                <div className="flex items-end">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="text-gray-500 ml-1 mb-1">/month</span>
                </div>
              </CardTitle>
              <CardDescription>Perfect for job seekers</CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <ul className="space-y-3">
                <PricingItem included>Up to 2 active resumes</PricingItem>
                <PricingItem included>10 job applications</PricingItem>
                <PricingItem included>Basic AI interview practice</PricingItem>
                <PricingItem included>Profile verification</PricingItem>
                <PricingItem>Advanced analytics</PricingItem>
                <PricingItem>Priority support</PricingItem>
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

          {/* Pro Plan */}
          <Card className="border-zordie-500 shadow-md relative hover:shadow-xl transition-all duration-300">
            <div className="absolute -top-4 left-0 right-0 mx-auto w-36 text-center py-1 px-3 rounded-full text-white bg-gradient-to-r from-zordie-600 to-accent1 text-sm">
              Most Popular
            </div>
            <CardHeader>
              <CardTitle className="flex flex-col items-start">
                <span className="text-lg font-medium mb-2">Pro</span>
                <div className="flex items-end">
                  <span className="text-3xl font-bold">$29</span>
                  <span className="text-gray-500 ml-1 mb-1">/month</span>
                </div>
              </CardTitle>
              <CardDescription>For serious job seekers</CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <ul className="space-y-3">
                <PricingItem included>Unlimited resumes</PricingItem>
                <PricingItem included>Unlimited job applications</PricingItem>
                <PricingItem included>Advanced AI interview practice</PricingItem>
                <PricingItem included>Priority profile verification</PricingItem>
                <PricingItem included>Advanced analytics</PricingItem>
                <PricingItem included>Priority support</PricingItem>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => handleSelectPlan('pro')}
                className="w-full btn-gradient"
                disabled={isLoading && selectedPlan === 'pro'}
              >
                {isLoading && selectedPlan === 'pro' ? (
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
                <PricingItem included>Everything in Pro</PricingItem>
                <PricingItem included>Company branding</PricingItem>
                <PricingItem included>Team management</PricingItem>
                <PricingItem included>ATS integration</PricingItem>
                <PricingItem included>Custom workflows</PricingItem>
                <PricingItem included>Dedicated account manager</PricingItem>
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
