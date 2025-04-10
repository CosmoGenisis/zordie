
import React from 'react';
import Layout from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BarChart3, Bot, ShieldCheck, 
  MessageSquare, Zap, Clock, CheckCircle, FileSearch,
  BadgeCheck, Lightbulb, Sparkles, Layers
} from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-zordie-50 to-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-black/[0.02]" />
        </div>
        <div className="relative z-10 px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 mb-5 text-sm font-medium rounded-full bg-zordie-100 text-zordie-800">
              Transforming Recruitment
            </span>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
              AI-Powered Features for <span className="text-zordie-600">Authentic Hiring</span>
            </h1>
            <p className="max-w-2xl mx-auto mb-10 text-xl text-gray-600">
              Discover the innovative solutions that make Zordie AI Hire the most trusted platform for verifying talent and streamlining recruitment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="btn-gradient shadow-lg hover:shadow-zordie-200/50">
                  Get Started Free
                </Button>
              </Link>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Link to="/pricing">
                    <Button size="lg" variant="outline" className="shadow-sm border-zordie-200 hover:border-zordie-300 hover:bg-zordie-50">
                      View Pricing
                    </Button>
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <div>
                      <h4 className="text-sm font-semibold">Flexible Pricing Options</h4>
                      <p className="text-sm">
                        Choose from monthly or annual plans with up to 20% savings.
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Features Section */}
      <div className="py-24 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionHeading
            title="Core Platform Features"
            subtitle="Everything you need to revolutionize your hiring process"
            centered
          />
          
          <div className="grid grid-cols-1 gap-12 mt-16 md:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden transition-all duration-300 border-0 hover-card-effect bg-gradient-to-b from-white to-gray-50">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-lg bg-zordie-100">
                      <feature.icon className="w-6 h-6 text-zordie-600" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                    <p className="mb-5 text-gray-600">{feature.description}</p>
                    <div className="pt-3 mt-auto border-t border-gray-100">
                      <div className="flex flex-wrap gap-2">
                        {feature.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-zordie-50 text-zordie-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Verification Section */}
      <div className="py-24 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <span className="inline-block px-4 py-1 mb-5 text-sm font-medium rounded-full bg-zordie-100 text-zordie-800">
                AI-Powered Verification
              </span>
              <h2 className="mb-5 text-3xl font-bold text-gray-900 md:text-4xl">
                Detect Fake Resumes with 99.4% Accuracy
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                Our advanced AI algorithms analyze resumes, projects, and credentials to detect inconsistencies, plagiarism, and false claims, ensuring you only interview authentic candidates.
              </p>
              
              <div className="space-y-5">
                {verificationFeatures.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex p-4 transition-all duration-300 border border-transparent rounded-lg hover:border-zordie-100 hover:bg-white"
                  >
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-4 rounded-full bg-zordie-100">
                      <feature.icon className="w-5 h-5 text-zordie-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-medium">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
                  alt="AI Verification" 
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-zordie-900/30 to-transparent"></div>
              </div>
              
              <div className="absolute p-4 -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border animate-pulse-light">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-zordie-500 to-accent1 flex items-center justify-center text-white font-bold">
                    <BadgeCheck className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">99.4% Accuracy</p>
                    <p className="text-xs text-gray-500">Verified Skills & Experience</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Prime AI Assistant Section */}
      <div className="py-24 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden bg-gray-900 rounded-2xl shadow-xl">
                <div className="absolute inset-0 opacity-30 mix-blend-overlay">
                  <svg className="absolute inset-0" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <defs>
                      <pattern id="small-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#small-grid)" />
                  </svg>
                </div>
                <div className="relative p-10">
                  <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 mr-4 overflow-hidden rounded-full bg-zordie-500">
                        <Bot className="w-6 h-6 m-2 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white">Prime AI</h4>
                        <p className="text-sm text-white/70">Hiring Assistant</p>
                      </div>
                    </div>
                    <div className="p-4 mb-4 rounded-lg bg-white/5">
                      <p className="text-white/90">Hello! I'll help you find the perfect candidate for your Senior Developer role. Based on your requirements, I've identified 5 verified candidates with the exact skills you need.</p>
                    </div>
                    <div className="p-4 mb-4 ml-8 rounded-lg bg-zordie-600/30">
                      <p className="text-white/90">That's great! Can you schedule interviews with the top 3 candidates?</p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/5">
                      <p className="text-white/90">I've scheduled interviews for Tuesday at 2PM, Wednesday at 11AM, and Thursday at 4PM. All candidates have confirmed availability. Would you like me to prepare any specific questions for the interviews?</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute p-4 -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border animate-pulse-light">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-zordie-500 to-accent1 flex items-center justify-center text-white font-bold">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">73% Faster</p>
                    <p className="text-xs text-gray-500">Hiring Process with Prime AI</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1 mb-5 text-sm font-medium rounded-full bg-zordie-100 text-zordie-800">
                Prime AI Assistant
              </span>
              <h2 className="mb-5 text-3xl font-bold text-gray-900 md:text-4xl">
                Your Intelligent Hiring Companion
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                Prime AI handles every aspect of your recruitment process, from screening candidates and scheduling interviews to providing insights and automating communication.
              </p>
              
              <div className="space-y-5">
                {primeFeatures.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex p-4 transition-all duration-300 border border-transparent rounded-lg hover:border-zordie-100 hover:bg-gray-50"
                  >
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-4 rounded-full bg-zordie-100">
                      <feature.icon className="w-5 h-5 text-zordie-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-medium">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-10">
                <Link to="/signup">
                  <Button className="btn-gradient shadow-md hover:shadow-lg">
                    Experience Prime AI <Sparkles className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-zordie-900 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80')] bg-no-repeat bg-cover bg-center">
        <div className="absolute inset-0 bg-zordie-900/80"></div>
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="mb-5 text-3xl font-bold text-white md:text-4xl">
              Ready to transform your hiring process?
            </h2>
            <p className="mb-10 text-lg text-zordie-100">
              Join thousands of companies using Zordie AI to hire faster and smarter.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="btn-gradient shadow-lg">
                  Create Free Account
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

// Feature data
const coreFeatures = [
  {
    icon: ShieldCheck,
    title: "AI Resume Verification",
    description: "Detect fake resumes, inflated skills claims, and false experience with 99.4% accuracy using our advanced AI verification system.",
    tags: ["Fake Detection", "Skills Verification", "Experience Validation"]
  },
  {
    icon: Bot,
    title: "Prime AI Assistant",
    description: "An intelligent hiring companion that handles screening, scheduling, and candidate communication automatically, saving you hours of work.",
    tags: ["Automation", "AI-Powered", "Time-Saving"]
  },
  {
    icon: BarChart3,
    title: "Smart Candidate Ranking",
    description: "Automatically rank and score candidates based on verified skills, experience, and cultural fit specific to your job requirements.",
    tags: ["Skill Matching", "Ranking Algorithm", "Leaderboard"]
  },
  {
    icon: FileSearch,
    title: "Project Plagiarism Check",
    description: "Verify the authenticity of candidate portfolios and projects to ensure you're hiring genuine talent with original work.",
    tags: ["Authenticity", "Portfolio Verification", "Originality Check"]
  },
  {
    icon: MessageSquare,
    title: "AI Video Interviews",
    description: "Conduct adaptive AI-powered video interviews that adjust questions based on candidate responses to thoroughly assess skills.",
    tags: ["Adaptive Questions", "Video Assessment", "Skill Evaluation"]
  },
  {
    icon: Zap,
    title: "One-Click Job Posts",
    description: "Generate comprehensive job descriptions instantly with our AI-powered job post creator, optimized for attracting quality candidates.",
    tags: ["AI Generation", "Time-Saving", "Optimization"]
  },
  {
    icon: CheckCircle,
    title: "Automated Skill Verification",
    description: "Verify technical and soft skills through tailored assessments and challenges that validate a candidate's actual capabilities.",
    tags: ["Technical Assessment", "Skill Validation", "Practical Testing"]
  },
  {
    icon: Clock,
    title: "Time-Saving Automation",
    description: "Reduce time-to-hire by up to 73% through intelligent automation of repetitive hiring tasks and streamlined workflows.",
    tags: ["Efficiency", "Workflow Optimization", "Recruitment Speed"]
  },
  {
    icon: Layers,
    title: "Customizable Workflows",
    description: "Tailor the hiring process to match your company's specific needs with flexible, customizable recruitment workflows and stages.",
    tags: ["Customization", "Adaptability", "Company-Specific"]
  }
];

const verificationFeatures = [
  {
    icon: ShieldCheck,
    title: "Resume Fact Checking",
    description: "AI algorithms cross-reference resume claims with public data to validate experience and credentials."
  },
  {
    icon: FileSearch,
    title: "Code & Project Analysis",
    description: "Deep analysis of code samples and projects to verify authorship and technical capabilities."
  },
  {
    icon: Lightbulb,
    title: "Skill Assessment",
    description: "Adaptive challenges tailored to claimed skills to verify actual proficiency levels."
  },
  {
    icon: BadgeCheck,
    title: "Credential Verification",
    description: "Automatic verification of academic degrees, certifications, and professional credentials."
  }
];

const primeFeatures = [
  {
    icon: MessageSquare,
    title: "Intelligent Conversations",
    description: "Natural language interactions with candidates and hiring teams for smoother communication."
  },
  {
    icon: Clock,
    title: "Scheduling & Coordination",
    description: "Automated interview scheduling, reminders, and follow-ups without calendar conflicts."
  },
  {
    icon: Sparkles,
    title: "Personalized Insights",
    description: "AI-generated observations about candidate strengths, weaknesses, and potential team fit."
  },
  {
    icon: BarChart3,
    title: "Decision Support",
    description: "Data-driven recommendations to help you make confident hiring decisions based on verified information."
  }
];

export default Features;
