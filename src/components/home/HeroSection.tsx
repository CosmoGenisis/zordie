import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="relative bg-gradient-to-r from-zordie-900 to-zordie-800 text-white py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Revolutionize Your Hiring Process with AI
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Zordie combines intelligent screening, automated assessments, and interactive interviews to help you find the perfect candidates faster than ever.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/dashboard-selector">
              <Button size="lg" className="btn-gradient text-white font-medium px-8">
                Get Started
              </Button>
            </Link>
            <Link to="/features">
              <Button variant="outline" size="lg" className="text-white border-white bg-zordie-950 hover:bg-zordie-800">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-zordie-600 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent1 rounded-full filter blur-3xl opacity-20"></div>
      </div>
    </section>;
};
export default HeroSection;