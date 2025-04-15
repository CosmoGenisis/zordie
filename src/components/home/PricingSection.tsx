
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Check, HelpCircle, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthContext";

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const { toast } = useToast();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const handleBillingCycleChange = (cycle: "monthly" | "annual") => {
    setBillingCycle(cycle);
  };

  const handlePlanSelection = async (planName: string) => {
    setIsLoading(planName);
    
    try {
      if (!user) {
        // Not logged in, redirect to signup
        toast({
          title: "Authentication required",
          description: "Please sign up or log in to choose a plan",
        });
        navigate("/signup");
        return;
      }
      
      // Save the user's plan selection to the database
      const { error } = await supabase
        .from('profiles')
        .update({ 
          selected_plan: planName,
          billing_cycle: billingCycle
        })
        .eq('id', user.id);
      
      if (error) throw error;
      
      toast({
        title: "Plan selected",
        description: `You've selected the ${planName} plan with ${billingCycle} billing.`,
      });
      
      if (planName === "Enterprise") {
        navigate("/contact");
      } else {
        navigate("/signup");
      }
    } catch (error) {
      console.error("Error selecting plan:", error);
      toast({
        title: "Error",
        description: "There was a problem selecting your plan. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(null);
    }
  };
  
  return <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Affordable Plans for Every Business" subtitle="Choose the plan that best fits your hiring needs" align="center" />
        
        <div className="flex justify-center mt-8 mb-12">
          <div className="bg-white p-1 rounded-full border shadow-sm">
            <div className="flex">
              <button onClick={() => handleBillingCycleChange("monthly")} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === "monthly" ? "bg-zordie-500 text-white shadow-sm" : "text-gray-700 hover:bg-gray-100"}`}>
                Monthly
              </button>
              <button onClick={() => handleBillingCycleChange("annual")} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === "annual" ? "bg-zordie-500 text-white shadow-sm" : "text-gray-700 hover:bg-gray-100"}`}>
                Annual <span className="text-xs text-zordie-300">Save 20%</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6 animate-fade-in">
          <PricingCard 
            name="Free" 
            price={billingCycle === "monthly" ? "₹0" : "₹0"} 
            period={billingCycle === "monthly" ? "/month" : "/year"} 
            description="Perfect for trying out Zordie" 
            features={["2 job posts", "Basic AI screening", "10 verified applications", "Email support"]} 
            buttonText="Get Started" 
            buttonVariant="outline"
            onSelect={() => handlePlanSelection("Free")}
            isLoading={isLoading === "Free"}
          />
          <PricingCard 
            name="Startup" 
            price={billingCycle === "monthly" ? "₹1,499" : "₹14,390"} 
            period={billingCycle === "monthly" ? "/month" : "/year"} 
            description="Ideal for growing teams" 
            features={["15 job posts", "Full AI screening & ranking", "Unlimited verified applications", "AI video interviews", "Prime AI messaging", "Priority support"]} 
            buttonText="Choose Startup" 
            buttonVariant="default" 
            highlighted
            onSelect={() => handlePlanSelection("Startup")}
            isLoading={isLoading === "Startup"}
          />
          <PricingCard 
            name="Business" 
            price={billingCycle === "monthly" ? "₹4,999" : "₹47,990"} 
            period={billingCycle === "monthly" ? "/month" : "/year"} 
            description="For scaling companies" 
            features={["Unlimited job posts", "Advanced AI screening & ranking", "Custom interview templates", "Team collaboration tools", "Analytics dashboard", "API access", "Priority support"]} 
            buttonText="Choose Business" 
            buttonVariant="default"
            onSelect={() => handlePlanSelection("Business")}
            isLoading={isLoading === "Business"}
          />
          <PricingCard 
            name="Enterprise" 
            price="Custom" 
            period="" 
            description="Tailored for large organizations" 
            features={["Everything in Business", "Custom integrations", "Dedicated account manager", "Custom AI training", "White-label options", "SLA guarantees", "Phone & priority support", <span key="custom-prime">
                Customized Prime AI{" "}
                <HoverCard>
                  <HoverCardTrigger>
                    <HelpCircle className="inline h-4 w-4 text-gray-400" />
                  </HoverCardTrigger>
                  <HoverCardContent className="text-sm">
                    Customize Prime AI's behavior, responses, and capabilities to match your company's hiring workflow and brand voice.
                  </HoverCardContent>
                </HoverCard>
              </span>]} 
            buttonText="Contact Sales" 
            buttonVariant="outline"
            onSelect={() => handlePlanSelection("Enterprise")}
            isLoading={isLoading === "Enterprise"}
          />
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Need a custom solution or have specific requirements?
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="transition-all duration-200 hover:shadow-md bg-gradient-to-r text-base text-zinc-100 bg-[#494ee3]/[0.94] gradient"
            onClick={() => navigate("/contact")}
          >
            Contact Our Team
          </Button>
        </div>
      </div>
    </section>;
};

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: (string | JSX.Element)[];
  buttonText: string;
  buttonVariant: "default" | "outline";
  highlighted?: boolean;
  onSelect: () => void;
  isLoading?: boolean;
}

const PricingCard = ({
  name,
  price,
  period,
  description,
  features,
  buttonText,
  buttonVariant,
  highlighted = false,
  onSelect,
  isLoading = false
}: PricingCardProps) => {
  return <div className={`rounded-xl border ${highlighted ? "border-zordie-500 shadow-lg shadow-zordie-100/50 relative overflow-hidden" : "border-gray-200"} bg-white p-8 transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]`}>
      {highlighted && <div className="absolute top-0 right-0">
          <div className="bg-zordie-500 text-white text-xs font-semibold py-1 px-3 rounded-bl-lg">
            Popular
          </div>
        </div>}
      
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <div className="flex items-baseline mb-1">
        <span className="text-3xl font-bold">{price}</span>
        {price !== "Custom" && <span className="text-gray-500 ml-1">{period}</span>}
      </div>
      <p className="text-sm text-gray-600 mb-6">{description}</p>
      
      <Button 
        variant={buttonVariant} 
        className={`w-full transition-all duration-200 hover:shadow-md ${highlighted && buttonVariant === "default" ? "btn-gradient" : ""}`}
        onClick={onSelect}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          buttonText
        )}
      </Button>
      
      <ul className="space-y-3 mt-6">
        {features.map((feature, index) => <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-zordie-500 mr-2 shrink-0" />
            <span className="text-sm text-gray-600">{feature}</span>
          </li>)}
      </ul>
    </div>;
};

export default PricingSection;
