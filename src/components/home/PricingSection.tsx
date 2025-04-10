
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const PricingSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Affordable Plans for Every Business"
          subtitle="Choose the plan that best fits your hiring needs"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <PricingCard
            name="Free"
            price="₹0"
            description="Perfect for trying out Zordie"
            features={[
              "2 job posts",
              "Basic AI screening",
              "10 verified applications",
              "Email support"
            ]}
            buttonText="Get Started"
            buttonVariant="outline"
          />
          <PricingCard
            name="Startup"
            price="₹1,499"
            description="Ideal for growing teams"
            features={[
              "15 job posts",
              "Full AI screening & ranking",
              "Unlimited verified applications",
              "AI video interviews",
              "Prime AI messaging",
              "Priority support"
            ]}
            buttonText="Choose Startup"
            buttonVariant="default"
            highlighted
          />
          <PricingCard
            name="Business"
            price="₹4,999"
            description="For scaling companies"
            features={[
              "Unlimited job posts",
              "Advanced AI screening & ranking",
              "Custom interview templates",
              "Team collaboration tools",
              "Analytics dashboard",
              "API access",
              "Priority support"
            ]}
            buttonText="Choose Business"
            buttonVariant="default"
          />
          <PricingCard
            name="Enterprise"
            price="Custom"
            description="Tailored for large organizations"
            features={[
              "Everything in Business",
              "Custom integrations",
              "Dedicated account manager",
              "Custom AI training",
              "White-label options",
              "SLA guarantees",
              "Phone & priority support"
            ]}
            buttonText="Contact Sales"
            buttonVariant="outline"
          />
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Need a custom solution or have specific requirements?
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: "default" | "outline";
  highlighted?: boolean;
}

const PricingCard = ({
  name,
  price,
  description,
  features,
  buttonText,
  buttonVariant,
  highlighted = false,
}: PricingCardProps) => {
  return (
    <div
      className={`rounded-xl border ${
        highlighted
          ? "border-zordie-500 shadow-lg shadow-zordie-100/50 relative overflow-hidden"
          : "border-gray-200"
      } bg-white p-8 transition-all duration-300 hover:shadow-md`}
    >
      {highlighted && (
        <div className="absolute top-0 right-0">
          <div className="bg-zordie-500 text-white text-xs font-semibold py-1 px-3 rounded-bl-lg">
            Popular
          </div>
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <div className="flex items-baseline mb-1">
        <span className="text-3xl font-bold">{price}</span>
        {price !== "Custom" && <span className="text-gray-500 ml-1">/month</span>}
      </div>
      <p className="text-sm text-gray-600 mb-6">{description}</p>
      
      <Link to="/signup" className="block mb-6">
        <Button
          variant={buttonVariant}
          className={`w-full ${
            highlighted && buttonVariant === "default" ? "btn-gradient" : ""
          }`}
        >
          {buttonText}
        </Button>
      </Link>
      
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-zordie-500 mr-2 shrink-0" />
            <span className="text-sm text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingSection;
