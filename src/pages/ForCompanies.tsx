import React from 'react';
import Layout from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Users, Building, Briefcase, BarChart, 
  ShieldCheck, Bot, Clock, FileSearch, Zap, CreditCard, Sparkles,
  Award, Trophy, Target, TrendingUp, MessageSquare, CircleCheck
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const ForCompanies = () => {
  const { theme } = useTheme();
  
  return (
    <Layout>
      {/* Hero Section with fixed background and new image */}
      <div className="relative overflow-hidden bg-gradient-to-b from-zordie-50 to-white dark:from-zordie-900 dark:to-zordie-950 transition-colors duration-300">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        </div>
        <div className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
          <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-5 px-3 py-1 bg-zordie-100 text-zordie-800 hover:bg-zordie-100 dark:bg-zordie-800 dark:text-zordie-100 dark:hover:bg-zordie-800">
                For Companies
              </Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                Solve Your <span className="text-zordie-600 dark:text-zordie-400">Hiring Challenges</span> with AI
              </h1>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-300 md:text-xl">
                Eliminate fake resumes, verify skills, and hire authentic talent 73% faster with Zordie AI's advanced verification technology.
              </p>
              
              <div className="grid grid-cols-2 gap-5 mb-10">
                {companyStats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="p-4 rounded-lg bg-white dark:bg-zordie-800 shadow-sm border border-gray-100 dark:border-zordie-700"
                  >
                    <div className="flex items-center mb-2">
                      <div className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-zordie-100 dark:bg-zordie-700">
                        <stat.icon className="w-4 h-4 text-zordie-600 dark:text-zordie-300" />
                      </div>
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/signup">
                  <Button size="lg" className="btn-gradient shadow-lg hover:shadow-zordie-200/50">
                    Start Hiring Today <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button size="lg" variant="outline" className="shadow-sm border-zordie-200 hover:border-zordie-300 hover:bg-zordie-50 dark:border-zordie-700 dark:hover:border-zordie-600 dark:bg-zordie-800/50 dark:hover:bg-zordie-800 dark:text-white">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
                  alt="Teams collaborating" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-zordie-900/30 to-transparent dark:from-zordie-950/50"></div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-white dark:bg-zordie-800 rounded-lg p-4 shadow-lg border dark:border-zordie-700"
              >
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-zordie-500 to-accent1 flex items-center justify-center text-white font-bold">
                    73%
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900 dark:text-white">Faster Hiring</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">With Zordie AI</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -top-6 -left-6 bg-white dark:bg-zordie-800 rounded-lg p-4 shadow-lg border dark:border-zordie-700"
              >
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-zordie-500 to-accent1 flex items-center justify-center text-white font-bold">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900 dark:text-white">Verified Talent</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Eliminate Fake Resumes</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Problems We Solve Section */}
      <div className="py-24 bg-white dark:bg-zordie-950 transition-colors duration-300">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionHeading
            title="Problems We Solve"
            subtitle="Common hiring challenges faced by companies today"
            align="center"
          />
          
          <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {problemCards.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden transition-all duration-300 border-0 hover-card-effect bg-gradient-to-tr from-white via-white to-gray-50 dark:from-zordie-800 dark:via-zordie-800 dark:to-zordie-850">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-lg bg-red-100 dark:bg-red-700">
                      <problem.icon className="w-6 h-6 text-red-600 dark:text-red-200" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">{problem.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{problem.description}</p>
                    
                    <div className="pt-5 mt-5 border-t border-gray-100 dark:border-zordie-700">
                      <div className="flex items-center">
                        <div className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-zordie-100 dark:bg-zordie-700">
                          <problem.solutionIcon className="w-4 h-4 text-zordie-600 dark:text-zordie-300" />
                        </div>
                        <div>
                          <p className="font-medium text-zordie-700 dark:text-zordie-300">Our Solution:</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{problem.solution}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Key Benefits Section */}
      <div className="py-24 bg-gray-50 dark:bg-zordie-900 transition-colors duration-300">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-5 px-3 py-1 bg-zordie-100 text-zordie-800 hover:bg-zordie-100 dark:bg-zordie-800 dark:text-zordie-100 dark:hover:bg-zordie-800">
                Business Benefits
              </Badge>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Transforming Recruitment for <span className="text-zordie-600 dark:text-zordie-400">Better Results</span>
              </h2>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                From startups to enterprises, Zordie AI helps companies of all sizes streamline their hiring process, reduce costs, and improve the quality of hires.
              </p>
              
              <div className="space-y-6">
                {benefitsList.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex p-4 transition-all duration-300 border border-transparent rounded-lg hover:border-zordie-100 hover:bg-white dark:hover:border-zordie-700 dark:hover:bg-zordie-800"
                  >
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-4 rounded-full bg-zordie-100 dark:bg-zordie-700">
                      <benefit.icon className="w-5 h-5 text-zordie-600 dark:text-zordie-300" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">{benefit.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex pt-10">
                <Link to="/features">
                  <Button className="btn-gradient shadow-md hover:shadow-lg">
                    Explore All Features <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-8 sm:grid-cols-2"
            >
              {benefitCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-white dark:bg-zordie-800 shadow-md border border-gray-100 dark:border-zordie-700 hover-card-effect"
                >
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-zordie-100 dark:bg-zordie-700">
                    <card.icon className="w-6 h-6 text-zordie-600 dark:text-zordie-300" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{card.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{card.description}</p>
                  
                  <div className="flex items-center pt-4 mt-4 border-t border-gray-100 dark:border-zordie-700">
                    <span className="mr-2 text-2xl font-bold text-zordie-600 dark:text-zordie-300">{card.stat}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{card.statLabel}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Industries Section */}
      <div className="py-24 bg-white dark:bg-zordie-950 transition-colors duration-300">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionHeading
            title="Industries We Serve"
            subtitle="Tailored solutions for every sector"
            align="center"
          />
          
          <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="feature-card group transition-all duration-300"
              >
                <div className="mb-4 text-zordie-600 dark:text-zordie-300">
                  <industry.icon className="w-10 h-10" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{industry.title}</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">{industry.description}</p>
                <div className="pt-3 border-t border-gray-100 dark:border-zordie-700">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-zordie-50 text-zordie-700 dark:bg-zordie-800 dark:text-zordie-200">
                    {industry.focus}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enterprise Solutions */}
      <div className="py-24 bg-zordie-900 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80')] bg-no-repeat bg-cover bg-center">
        <div className="absolute inset-0 bg-zordie-900/80"></div>
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl p-8 mx-auto rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Badge className="mb-5 px-3 py-1 bg-white/20 text-white hover:bg-white/20">
                Enterprise Solutions
              </Badge>
              <h2 className="mb-5 text-3xl font-bold text-white md:text-4xl">
                Custom Prime AI for Enterprise
              </h2>
              <p className="mb-8 text-lg text-zordie-100">
                We offer customized solutions for large enterprises with specific hiring needs. Our Enterprise plan includes dedicated support, custom AI training, and advanced integrations.
              </p>
              
              <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-3">
                {enterpriseFeatures.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-lg bg-white/5 border border-white/10"
                  >
                    <div className="flex items-center mb-3">
                      <feature.icon className="w-5 h-5 mr-2 text-zordie-100" />
                      <h3 className="text-lg font-medium text-white">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-zordie-200">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="btn-gradient shadow-lg">
                    Contact Sales
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white/30 hover:bg-white/10">
                    Enterprise Pricing
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-24 bg-gray-50 dark:bg-zordie-900 transition-colors duration-300">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Ready to transform your hiring?
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-600 dark:text-gray-300">
              Join thousands of companies using Zordie AI to hire faster and smarter. Get started with a free trial today.
            </p>
            
            <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Link to="/signup">
                <Button size="lg" className="w-full sm:w-auto btn-gradient shadow-lg">
                  Create Free Account
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
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

// Data for various sections
const companyStats = [
  {
    icon: Clock,
    value: "73%",
    label: "Faster hiring process"
  },
  {
    icon: CreditCard,
    value: "60%",
    label: "Reduced recruitment costs"
  },
  {
    icon: Users,
    value: "5x",
    label: "Higher quality candidates"
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Reduction in bad hires"
  }
];

const problemCards = [
  {
    icon: FileSearch,
    title: "Fake Resumes & Credentials",
    description: "Up to 40% of resumes contain false information, wasting time interviewing unqualified candidates.",
    solutionIcon: ShieldCheck,
    solution: "AI verification detects false claims with 99.4% accuracy before you even interview."
  },
  {
    icon: Clock,
    title: "Time-Consuming Process",
    description: "Recruiters spend an average of 30+ hours per week on manual tasks like resume screening.",
    solutionIcon: Bot,
    solution: "Prime AI automates screening and admin tasks, reducing time-to-hire by 73%."
  },
  {
    icon: Users,
    title: "Poor Quality of Hire",
    description: "Bad hires cost companies up to 30% of the employee's first-year earnings, plus team disruption.",
    solutionIcon: BarChart,
    solution: "Verified candidates and skill assessments ensure you hire truly qualified talent."
  }
];

const benefitsList = [
  {
    icon: ShieldCheck,
    title: "Eliminate Fake Resumes",
    description: "Our AI detects fake work experience and inflated skills with 99.4% accuracy, saving you from costly bad hires."
  },
  {
    icon: Clock,
    title: "Reduce Time-to-Hire",
    description: "Automated screening and verification cuts hiring time by up to 73%, helping you secure top talent faster."
  },
  {
    icon: CreditCard,
    title: "Lower Recruitment Costs",
    description: "Save up to 60% on recruitment costs through intelligent automation of repetitive hiring tasks."
  },
  {
    icon: Users,
    title: "Improve Quality of Hire",
    description: "Verified candidates lead to better hires, reduced turnover, and stronger team performance."
  }
];

const benefitCards = [
  {
    icon: TrendingUp,
    title: "Higher ROI",
    description: "Maximize your recruitment budget with AI-driven efficiency and better quality hires.",
    stat: "247%",
    statLabel: "average ROI"
  },
  {
    icon: Award,
    title: "Talent Quality",
    description: "Only interview pre-verified candidates with the exact skills your role requires.",
    stat: "5x",
    statLabel: "better quality"
  },
  {
    icon: Trophy,
    title: "Competitive Edge",
    description: "Secure top talent faster than competitors with streamlined processes.",
    stat: "68%",
    statLabel: "faster offers"
  },
  {
    icon: Target,
    title: "Better Matches",
    description: "AI matches verified skills with your specific requirements for ideal fit.",
    stat: "94%",
    statLabel: "hiring success"
  }
];

const industries = [
  {
    icon: Building,
    title: "Tech & Software",
    description: "Verify technical skills and find developers who can actually code what they claim.",
    focus: "Technical Verification"
  },
  {
    icon: BarChart,
    title: "Finance & Banking",
    description: "Find verified professionals for your sensitive financial positions with thorough checks.",
    focus: "Security & Compliance"
  },
  {
    icon: Briefcase,
    title: "Healthcare",
    description: "Verify credentials and experience for critical healthcare positions with precision.",
    focus: "Credential Validation"
  },
  {
    icon: Users,
    title: "Education",
    description: "Find qualified educators and staff with verified backgrounds and specialized skills.",
    focus: "Background Verification"
  }
];

const enterpriseFeatures = [
  {
    icon: CircleCheck,
    title: "Custom AI Training",
    description: "Prime AI trained on your specific industry, company values, and hiring requirements."
  },
  {
    icon: Sparkles,
    title: "Dedicated Support",
    description: "24/7 dedicated customer success team and technical implementation specialists."
  },
  {
    icon: MessageSquare,
    title: "API Integration",
    description: "Seamless integration with your existing ATS, HRIS, and other enterprise systems."
  }
];

export default ForCompanies;
