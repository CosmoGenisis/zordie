
import React from 'react';
import Layout from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Cpu, 
  Users, 
  Clock, 
  BarChart, 
  CheckCircle, 
  ThumbsUp, 
  AlertTriangle,
  FileText,
  Zap,
  Search,
  ArrowRight
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AiScreening = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-zordie-50 to-zordie-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center p-2 bg-zordie-600 text-white rounded-full mb-6">
                <Cpu className="h-5 w-5" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zordie-800">
                AI-Powered Candidate Screening
              </h1>
              <p className="text-lg text-zordie-600 mb-8">
                Our advanced AI algorithms revolutionize your hiring process by efficiently screening candidates, identifying the best talent, and reducing time-to-hire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-gradient text-lg py-6 px-8">
                  Try It Free
                </Button>
                <Button variant="outline" className="text-lg py-6 px-8">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="AI Screening"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Average time saved</div>
                    <div className="text-xl font-bold text-zordie-700">23 hours/week</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCard 
              number="85%"
              text="Reduction in screening time"
              icon={<Clock className="h-6 w-6 text-zordie-700" />}
            />
            <StatsCard 
              number="3x"
              text="More quality candidates identified"
              icon={<Users className="h-6 w-6 text-zordie-700" />}
            />
            <StatsCard 
              number="92%"
              text="Accuracy in predicting job success"
              icon={<ThumbsUp className="h-6 w-6 text-zordie-700" />}
            />
            <StatsCard 
              number="68%"
              text="Reduction in unconscious bias"
              icon={<CheckCircle className="h-6 w-6 text-zordie-700" />}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="How AI Screening Works"
            subtitle="Streamlining your hiring process"
            align="center"
          />
          
          <div className="max-w-5xl mx-auto mt-12">
            <div className="relative">
              {/* Connect steps with a horizontal line on desktop */}
              <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-zordie-200"></div>
              
              <div className="grid md:grid-cols-4 gap-8">
                <ProcessStep 
                  icon={<FileText className="h-6 w-6 text-zordie-700" />}
                  number="1"
                  title="Resume Analysis"
                  description="Our AI scans and analyzes resumes, extracting relevant skills, experience, and qualifications."
                />
                
                <ProcessStep 
                  icon={<Search className="h-6 w-6 text-zordie-700" />}
                  number="2"
                  title="Job Matching"
                  description="The system compares candidate profiles against job requirements to identify the best matches."
                />
                
                <ProcessStep 
                  icon={<Zap className="h-6 w-6 text-zordie-700" />}
                  number="3"
                  title="Skill Assessment"
                  description="Candidates are evaluated on required skills through automated tests and assessments."
                />
                
                <ProcessStep 
                  icon={<BarChart className="h-6 w-6 text-zordie-700" />}
                  number="4"
                  title="Candidate Ranking"
                  description="Top candidates are ranked and presented with detailed analysis for your review."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Key Features"
            subtitle="What makes our AI screening powerful"
            align="center"
          />
          
          <Tabs defaultValue="screening" className="mt-12">
            <TabsList className="grid grid-cols-3 max-w-2xl mx-auto mb-8">
              <TabsTrigger value="screening">Resume Screening</TabsTrigger>
              <TabsTrigger value="analysis">Candidate Analysis</TabsTrigger>
              <TabsTrigger value="automation">Workflow Automation</TabsTrigger>
            </TabsList>
            
            <TabsContent value="screening">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Resume Screening"
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Intelligent Resume Screening</h3>
                  <p className="text-gray-600 mb-6">
                    Our AI goes beyond keyword matching to understand context, experience relevance, and skill transferability in candidate resumes.
                  </p>
                  <ul className="space-y-3">
                    <FeatureListItem text="Multilingual resume parsing in 30+ languages" />
                    <FeatureListItem text="Advanced skill extraction and categorization" />
                    <FeatureListItem text="Education verification and relevance scoring" />
                    <FeatureListItem text="Experience analysis and role matching" />
                    <FeatureListItem text="Keyword bias elimination algorithms" />
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="analysis">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">Deep Candidate Analysis</h3>
                  <p className="text-gray-600 mb-6">
                    Our AI analyzes multiple data points to create comprehensive candidate profiles that help you make informed hiring decisions.
                  </p>
                  <ul className="space-y-3">
                    <FeatureListItem text="Skill gap analysis for each position" />
                    <FeatureListItem text="Candidate success prediction models" />
                    <FeatureListItem text="Cultural fit assessment tools" />
                    <FeatureListItem text="Communication style analysis" />
                    <FeatureListItem text="Strength and weakness identification" />
                  </ul>
                </div>
                <div className="order-1 md:order-2">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Candidate Analysis"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="automation">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Workflow Automation"
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Seamless Workflow Automation</h3>
                  <p className="text-gray-600 mb-6">
                    Automate repetitive tasks in your recruitment process while keeping humans in control of the final decisions.
                  </p>
                  <ul className="space-y-3">
                    <FeatureListItem text="Automated candidate communications" />
                    <FeatureListItem text="Interview scheduling and reminders" />
                    <FeatureListItem text="Custom screening question generation" />
                    <FeatureListItem text="Feedback collection and analysis" />
                    <FeatureListItem text="Integration with existing ATS systems" />
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Bias Prevention Section */}
      <section className="py-20 bg-zordie-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Reducing Bias in Hiring"
                subtitle="Promoting diversity and fairness"
                align="left"
              />
              <p className="text-gray-600 mb-6">
                Our AI is designed to reduce unconscious bias in the hiring process by focusing on skills and qualifications rather than demographic factors:
              </p>
              <ul className="space-y-4 mb-8">
                <FeatureListItem text="Name-blind screening option removes name, gender, and age from initial review" />
                <FeatureListItem text="Structured evaluation criteria applied consistently across all candidates" />
                <FeatureListItem text="Regular algorithmic bias audits and adjustments" />
                <FeatureListItem text="Diversity-promoting language suggestions for job descriptions" />
                <FeatureListItem text="Customizable bias prevention settings" />
              </ul>
              <div className="flex items-center p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-yellow-500 mr-3 shrink-0" />
                <p className="text-sm text-gray-700">
                  While our AI helps reduce bias, we always recommend human oversight in the final hiring decisions to ensure fair and ethical practices.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Diverse Team" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What Recruiters Say"
            subtitle="Success stories from real users"
            align="center"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <TestimonialCard 
              quote="Zordie's AI screening has transformed our hiring process. We're processing applications 5x faster and finding better candidates."
              name="Sarah Thompson"
              title="Head of Talent Acquisition, TechGrowth Inc."
              image="https://randomuser.me/api/portraits/women/23.jpg"
            />
            
            <TestimonialCard 
              quote="The bias reduction features have helped us build a more diverse team. Our female engineer applications increased by 40%."
              name="Michael Chen"
              title="HR Director, Innovate Solutions"
              image="https://randomuser.me/api/portraits/men/54.jpg"
            />
            
            <TestimonialCard 
              quote="As a high-volume recruiter, Zordie's AI screening has been a game-changer. We can now manage thousands of applications without missing great candidates."
              name="Jessica Rodriguez"
              title="Senior Recruiter, Global Staffing"
              image="https://randomuser.me/api/portraits/women/85.jpg"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Simple, Transparent Pricing"
            subtitle="Choose the plan that's right for you"
            align="center"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Starter</h3>
                  <div className="text-3xl font-bold text-zordie-700 mb-1">$99<span className="text-base font-normal text-gray-500">/month</span></div>
                  <p className="text-gray-500">For small businesses</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <PricingListItem text="Up to 50 candidates/month" />
                  <PricingListItem text="Basic resume screening" />
                  <PricingListItem text="Email support" />
                  <PricingListItem text="Standard analytics" />
                  <PricingListItem text="1 user account" />
                </ul>
                <Button variant="outline" className="w-full">Start Free Trial</Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-zordie-500 hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
                <div className="bg-zordie-600 text-white text-sm font-medium py-1 px-3 rounded-full inline-block">
                  Most Popular
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Professional</h3>
                  <div className="text-3xl font-bold text-zordie-700 mb-1">$249<span className="text-base font-normal text-gray-500">/month</span></div>
                  <p className="text-gray-500">For growing teams</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <PricingListItem text="Up to 250 candidates/month" />
                  <PricingListItem text="Advanced AI screening" />
                  <PricingListItem text="Priority support" />
                  <PricingListItem text="Advanced analytics" />
                  <PricingListItem text="5 user accounts" />
                  <PricingListItem text="Bias reduction tools" />
                  <PricingListItem text="ATS integration" />
                </ul>
                <Button className="w-full btn-gradient">Start Free Trial</Button>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                  <div className="text-3xl font-bold text-zordie-700 mb-1">Custom</div>
                  <p className="text-gray-500">For large organizations</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <PricingListItem text="Unlimited candidates" />
                  <PricingListItem text="Custom AI model training" />
                  <PricingListItem text="Dedicated account manager" />
                  <PricingListItem text="Custom analytics dashboard" />
                  <PricingListItem text="Unlimited users" />
                  <PricingListItem text="All features included" />
                  <PricingListItem text="Enterprise-grade security" />
                  <PricingListItem text="Custom integrations" />
                </ul>
                <Button variant="outline" className="w-full">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zordie-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Hiring Process?</h2>
          <p className="text-lg text-zordie-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies using Zordie's AI screening to find the best talent faster.
          </p>
          <Button className="bg-white text-zordie-700 hover:bg-zordie-50 text-lg py-6 px-8 group">
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="text-sm text-zordie-200 mt-4">
            No credit card required. 14-day free trial.
          </p>
        </div>
      </section>
    </Layout>
  );
};

interface StatsCardProps {
  number: string;
  text: string;
  icon: React.ReactNode;
}

const StatsCard = ({ number, text, icon }: StatsCardProps) => {
  return (
    <Card className="border border-gray-200 hover:shadow-md transition-all duration-300">
      <CardContent className="p-6 text-center">
        <div className="w-12 h-12 rounded-full bg-zordie-100 flex items-center justify-center mx-auto mb-4">
          {icon}
        </div>
        <div className="text-3xl font-bold text-zordie-700 mb-1">{number}</div>
        <p className="text-gray-600">{text}</p>
      </CardContent>
    </Card>
  );
};

interface ProcessStepProps {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}

const ProcessStep = ({ icon, number, title, description }: ProcessStepProps) => {
  return (
    <div className="text-center relative">
      <div className="w-12 h-12 rounded-full bg-zordie-600 text-white flex items-center justify-center mx-auto mb-4 relative z-10">
        {number}
      </div>
      <div className="w-16 h-16 rounded-full bg-zordie-100 flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeatureListItem = ({ text }: { text: string }) => {
  return (
    <li className="flex items-start">
      <CheckCircle className="h-5 w-5 text-zordie-600 mr-3 shrink-0 mt-0.5" />
      <span>{text}</span>
    </li>
  );
};

const PricingListItem = ({ text }: { text: string }) => {
  return (
    <li className="flex items-center">
      <CheckCircle className="h-4 w-4 text-zordie-600 mr-3 shrink-0" />
      <span className="text-gray-700">{text}</span>
    </li>
  );
};

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  image: string;
}

const TestimonialCard = ({ quote, name, title, image }: TestimonialCardProps) => {
  return (
    <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-6 text-zordie-700">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 11H6C6 11 6 9 6 7C6 4.79086 7.79086 3 10 3V11ZM22 11H18C18 11 18 9 18 7C18 4.79086 19.7909 3 22 3V11ZM22 11V15C22 15 20 15 18 15C15.7909 15 14 16.7909 14 19C14 21.2091 15.7909 23 18 23C20.2091 23 22 21.2091 22 19V15M10 11V15C10 15 8 15 6 15C3.79086 15 2 16.7909 2 19C2 21.2091 3.79086 23 6 23C8.20914 23 10 21.2091 10 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p className="text-gray-600 mb-6 flex-grow">{quote}</p>
        <div className="flex items-center">
          <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <div className="font-semibold">{name}</div>
            <div className="text-sm text-gray-500">{title}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AiScreening;
