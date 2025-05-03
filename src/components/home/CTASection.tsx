
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 px-4 md:py-24 bg-gradient-to-r from-zordie-900 to-zordie-800">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Hiring Process?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Join thousands of companies using Zordie to find, screen, and hire the best talent. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/dashboard-selector">
              <Button size="lg" className="btn-gradient text-white font-medium px-8">
                Get Started For Free
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white/10"
              >
                Talk to Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
