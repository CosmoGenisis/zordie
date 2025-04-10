
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Users, Zap, ShieldCheck } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pattern-bg absolute inset-0 bg-hero-pattern opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:w-1/2 lg:pr-8">
            <div className="flex items-center mb-6">
              <span className="px-3 py-1 text-xs font-semibold bg-accent1/10 text-accent1 rounded-full">
                Verified Hiring
              </span>
              <span className="ml-3 px-3 py-1 text-xs font-semibold bg-zordie-100 text-zordie-700 rounded-full">
                AI-Powered
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 hero-title leading-tight">
              Fast, Verified & Smart Hiring
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Eliminate fake resumes, detect copied projects, cut hiring costs, and hire the most authentic talent 
              with AI-powered verification at every step.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Verified candidate profiles & real projects</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">AI-powered resume screening & interviews</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Auto-generated job posts & messaging</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/post-job">
                <Button size="lg" className="btn-gradient w-full sm:w-auto">
                  Post a Job <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/features">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
            <div className="relative rounded-lg shadow-2xl overflow-hidden border">
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
                alt="Zordie AI Hiring Platform"
                className="w-full h-auto rounded-lg"
              />
              
              {/* Stats overlay */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md border">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-zordie-600 mr-2" />
                  <div>
                    <p className="text-xs text-gray-500">Verified Candidates</p>
                    <p className="font-bold text-zordie-700">10,000+</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md border">
                <div className="flex items-center">
                  <Zap className="h-5 w-5 text-amber-500 mr-2" />
                  <div>
                    <p className="text-xs text-gray-500">Faster Hiring</p>
                    <p className="font-bold text-amber-600">73% faster</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md border">
                <div className="flex items-center">
                  <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                  <div>
                    <p className="text-xs text-gray-500">Fake Resume Detection</p>
                    <p className="font-bold text-green-700">99.4% accurate</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg border animate-pulse-light">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-zordie-500 to-accent1 flex items-center justify-center text-white font-bold">
                  AI
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Meet Prime</p>
                  <p className="text-xs text-gray-500">Your AI Hiring Assistant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
