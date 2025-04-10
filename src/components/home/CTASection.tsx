
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-zordie-700 to-accent1 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl mx-auto">
          Ready to transform your hiring process with AI and verification?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of companies and candidates building a more transparent and efficient hiring ecosystem.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/post-job">
            <Button size="lg" variant="default" className="bg-white text-zordie-700 hover:bg-white/90">
              Post a Job <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/signup">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Create Account
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
