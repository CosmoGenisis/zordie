
import React from 'react';
import Layout from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Users, Building, Briefcase, BarChart } from 'lucide-react';

const ForCompanies = () => {
  return (
    <Layout>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Solve Your Hiring Challenges with AI"
            subtitle="Eliminate fake resumes, verify skills, and hire authentic talent faster"
            centered
          />
          
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
                  alt="Teams collaborating" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg border animate-pulse-light">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-zordie-500 to-accent1 flex items-center justify-center text-white font-bold">
                    73%
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Faster Hiring</p>
                    <p className="text-xs text-gray-500">With Zordie AI</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">For Companies of Every Size</h3>
              <p className="text-lg text-gray-600">
                Whether you're a startup making your first hire or an enterprise with complex hiring needs, 
                Zordie AI helps you find and verify the most qualified candidates quickly and efficiently.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Eliminate Fake Resumes</h4>
                    <p className="text-gray-600">Our AI detects fake work experience and inflated skills with 99.4% accuracy.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Reduce Time-to-Hire</h4>
                    <p className="text-gray-600">Automated screening and verification cuts hiring time by up to 73%.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Lower Recruitment Costs</h4>
                    <p className="text-gray-600">Save up to 60% on recruitment costs through intelligent automation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Improve Quality of Hire</h4>
                    <p className="text-gray-600">Verified candidates lead to better hires and lower turnover rates.</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <Link to="/post-job">
                  <Button size="lg" className="btn-gradient">
                    Post Your First Job <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-24">
            <h2 className="text-3xl font-semibold text-center mb-16">Industries We Serve</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <IndustryCard 
                icon={<Building className="h-8 w-8" />}
                title="Tech & Software"
                description="Verify technical skills and find developers who can actually code what they claim."
              />
              
              <IndustryCard 
                icon={<BarChart className="h-8 w-8" />}
                title="Finance & Banking"
                description="Find verified professionals for your sensitive financial positions."
              />
              
              <IndustryCard 
                icon={<Briefcase className="h-8 w-8" />}
                title="Healthcare"
                description="Verify credentials and experience for critical healthcare positions."
              />
              
              <IndustryCard 
                icon={<Users className="h-8 w-8" />}
                title="Education"
                description="Find qualified educators and staff with verified backgrounds and skills."
              />
            </div>
          </div>
          
          <div className="mt-24 bg-gray-50 rounded-xl p-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-semibold mb-4">Ready to transform your hiring?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join thousands of companies using Zordie AI to hire faster and smarter.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/signup">
                <Button size="lg" className="btn-gradient">
                  Create Free Account
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon, title, description }) => {
  return (
    <div className="feature-card group hover:scale-105 transition-all duration-300">
      <div className="mb-4 text-zordie-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ForCompanies;
