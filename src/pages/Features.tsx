
import React from 'react';
import Layout from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  BarChart3, Bot, CheckCircle, ShieldCheck, 
  MessageSquare, Zap, Clock, Cog, FileSearch
} from 'lucide-react';

const Features = () => {
  return (
    <Layout>
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title="Powerful Features for Modern Hiring"
          subtitle="Everything you need to find and hire authentic talent"
          centered
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to experience the power of AI-verified hiring?
          </p>
          <Link to="/signup">
            <Button size="lg" className="btn-gradient">
              Create Free Account
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="feature-card group hover:scale-105 transition-all duration-300">
      <div className="mb-4 text-zordie-500 bg-zordie-50 p-3 rounded-lg inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const features = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "AI Resume Verification",
    description: "Our AI detects fake resumes and inflated skills claims with 99.4% accuracy, ensuring authentic candidates."
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Smart Candidate Ranking",
    description: "Intelligent algorithms rank candidates based on verified skills, experience, and cultural fit for your role."
  },
  {
    icon: <FileSearch className="h-6 w-6" />,
    title: "Project Plagiarism Check",
    description: "Identify copied projects and portfolios to ensure candidates' work is original and authentic."
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "Prime AI Assistant",
    description: "Our AI hiring assistant handles screening, scheduling, and candidate communication automatically."
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "AI Video Interviews",
    description: "Conduct asynchronous AI-powered video interviews that adapt questions based on candidate responses."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "One-Click Job Posts",
    description: "Generate comprehensive job descriptions with a single click using our AI-powered job post creator."
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Automated Skill Verification",
    description: "Automatically verify technical and soft skills through tailored assessments and challenges."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Time-Saving Automation",
    description: "Reduce time-to-hire by up to 73% through intelligent automation of repetitive hiring tasks."
  },
  {
    icon: <Cog className="h-6 w-6" />,
    title: "Customizable Workflows",
    description: "Tailor the hiring process to match your company's specific needs and requirements."
  }
];

export default Features;
