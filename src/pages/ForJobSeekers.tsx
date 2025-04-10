
import React from 'react';
import Layout from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Award, BadgeCheck, Clock, Sparkles } from 'lucide-react';

const ForJobSeekers = () => {
  return (
    <Layout>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Stand Out with Verified Skills"
            subtitle="Showcase your authentic talent and get hired faster"
            centered
          />
          
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="text-2xl font-semibold">For Job Seekers</h3>
              <p className="text-lg text-gray-600">
                In a competitive job market, standing out is essential. With Zordie AI, 
                showcase your verified skills and experience to employers, 
                helping you land interviews and get hired faster.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Get Verified Credentials</h4>
                    <p className="text-gray-600">Earn a verified badge that signals trust to employers and stands out in applications.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Better Job Matches</h4>
                    <p className="text-gray-600">Our AI matches your verified skills with the right opportunities for better fit.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Faster Interview Process</h4>
                    <p className="text-gray-600">Verified candidates move through the hiring process 2.5x faster on average.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Stand Out From Competition</h4>
                    <p className="text-gray-600">Show employers you're authentic in a sea of exaggerated resumes.</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <Link to="/signup">
                  <Button size="lg" className="btn-gradient">
                    Create Your Profile <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
                  alt="Job seeker with laptop" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg border animate-pulse-light">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-zordie-500 to-accent1 flex items-center justify-center text-white font-bold">
                    <BadgeCheck className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Verified Profile</p>
                    <p className="text-xs text-gray-500">2.5x more interviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-24">
            <h2 className="text-3xl font-semibold text-center mb-16">Zordie AI Benefits</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <BenefitCard 
                icon={<BadgeCheck className="h-8 w-8" />}
                title="Verified Profile"
                description="Earn a trusted verification badge that sets you apart from other candidates."
              />
              
              <BenefitCard 
                icon={<Clock className="h-8 w-8" />}
                title="Faster Hiring"
                description="Skip unnecessary screening rounds with pre-verified skills and experience."
              />
              
              <BenefitCard 
                icon={<Award className="h-8 w-8" />}
                title="Skill Showcase"
                description="Demonstrate your abilities through verified projects and assessments."
              />
              
              <BenefitCard 
                icon={<Sparkles className="h-8 w-8" />}
                title="AI Job Matching"
                description="Get matched with opportunities that align with your verified skills and career goals."
              />
            </div>
          </div>
          
          <div className="mt-24 bg-gray-50 rounded-xl p-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-semibold mb-4">Ready to stand out?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Create your verified profile today and get noticed by top employers.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/signup">
                <Button size="lg" className="btn-gradient">
                  Create Free Profile
                </Button>
              </Link>
              <Link to="/features">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
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

export default ForJobSeekers;
