
import React from 'react';
import Layout from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, CheckCircle, Award, FileCheck, 
  BadgeCheck, Briefcase, Target, TrendingUp, 
  Users, ShieldCheck, Brain, BarChart3, ChevronRight, 
  MessageSquare, Github, Zap, Clock, Star, 
  ThumbsUp, Sparkles
} from 'lucide-react';
import PrimeHRChatbot from '@/components/chatbot/PrimeHRChatbot';

const ForJobSeekers = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <Badge 
                className="bg-white/20 hover:bg-white/25 text-white border-none mb-6 px-4 py-2"
              >
                For Job Seekers
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Stand Out <br />and Get Hired <br /><span className="text-yellow-300">Faster</span>
              </h1>
              <p className="text-lg mb-8 text-blue-100">
                Showcase your authentic skills and experience with AI verification. Get matched with employers looking for your talents and receive more relevant job offers.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/signup">
                  <Button size="lg" className="bg-white hover:bg-gray-100 text-blue-700 font-medium">
                    Create Free Profile <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/features">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/20">
                    Explore Features
                  </Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, i) => (
                  <motion.div 
                    key={i} 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                  >
                    <p className="text-3xl md:text-4xl font-bold text-yellow-300 mb-1">{stat.value}</p>
                    <p className="text-blue-100 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Profile Card */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative z-10 max-w-lg mx-auto">
                <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center">
                        <h3 className="text-white text-xl font-semibold">Sarah Johnson</h3>
                        <Badge className="ml-2 bg-green-500 hover:bg-green-600 p-1">
                          <BadgeCheck className="h-3 w-3" />
                        </Badge>
                      </div>
                      <p className="text-blue-200">Senior Frontend Developer</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                      <h4 className="text-white text-sm font-medium mb-2">Skill Score</h4>
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-yellow-300">92%</span>
                        <Badge className="ml-2 bg-green-500 hover:bg-green-600 text-white text-xs">
                          Top 5%
                        </Badge>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                      <h4 className="text-white text-sm font-medium mb-2">Experience</h4>
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-yellow-300">5+ yrs</span>
                        <Badge className="ml-2 bg-green-500 hover:bg-green-600 text-white text-xs">
                          Verified
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-medium text-gray-700 mb-3">Verified Skills</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">React</Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">TypeScript</Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">NextJS</Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">UI/UX</Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">+3 more</Badge>
                  </div>
                  
                  <h4 className="font-medium text-gray-700 mb-3">Verified Projects</h4>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center p-2 rounded-md bg-gray-50">
                      <Github className="w-4 h-4 mr-2 text-gray-600" />
                      <span className="text-sm text-gray-700">E-commerce Platform</span>
                      <Badge className="ml-auto bg-green-100 text-green-800 border-none hover:bg-green-200">Original</Badge>
                    </div>
                    <div className="flex items-center p-2 rounded-md bg-gray-50">
                      <Github className="w-4 h-4 mr-2 text-gray-600" />
                      <span className="text-sm text-gray-700">Portfolio Website</span>
                      <Badge className="ml-auto bg-green-100 text-green-800 border-none hover:bg-green-200">Original</Badge>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-xs text-gray-600">Interview rate: +250%</span>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">View Profile</Button>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-500 flex items-center justify-center text-white">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-800">Verification Badge</p>
                    <p className="text-xs text-gray-500">Trusted by top employers</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Wave Shape Divider */}
        <div className="relative h-16 md:h-24 overflow-hidden">
          <svg 
            className="absolute bottom-0 w-full h-full" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              className="fill-white dark:fill-zordie-950"
            ></path>
          </svg>
        </div>
      </section>
      
      {/* CTA Section - Similar to second image */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-white/20 text-white rounded-full px-4 py-1 text-sm font-medium mb-6">
            Join Thousands of Successful Job Seekers
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get the Job You Deserve?
          </h2>
          
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Create your verified profile today and get noticed by top employers looking for authentic talent like you.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/signup">
              <Button 
                size="lg"
                className="bg-white hover:bg-gray-100 text-blue-700 font-medium px-8 text-lg"
              >
                Create Free Profile <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/features">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 text-lg"
              >
                See How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-white dark:bg-zordie-950">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="How Zordie AI Works for Job Seekers"
            subtitle="Simple steps to transform your job search experience"
            align="center"
          />
          
          <div className="mt-16 relative">
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-blue-100 dark:bg-blue-900"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="hidden lg:flex absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                    <div className="flex items-center justify-center w-12 h-12 text-white rounded-full shadow-lg bg-blue-600 border-4 border-white dark:border-zordie-950">
                      {index + 1}
                    </div>
                  </div>
                  
                  <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex lg:hidden items-center mb-4">
                        <div className="flex items-center justify-center w-10 h-10 text-white rounded-full bg-blue-600 mr-3">
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      
                      <div className="hidden lg:flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-xl bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50">
                        <step.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      
                      <h3 className="hidden lg:block mb-4 text-xl font-semibold text-center">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                      
                      <div className="mt-6 pt-6 border-t border-gray-100 dark:border-zordie-700">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          <p className="text-sm text-gray-500 dark:text-gray-400">{step.benefit}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/signup">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-lg" 
                size="lg"
              >
                Start Your Verification Process <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-zordie-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4">Key Advantages</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why <span className="text-blue-600">Verify</span> Your Professional Profile?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                In today's competitive job market, standing out is essential. Zordie AI gives you the edge 
                by validating your skills, experience, and achievements with trusted verification.
              </p>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                        <benefit.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {metrics.map((metric, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                  className="bg-white dark:bg-zordie-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-zordie-700"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                    <metric.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {metric.value}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-zordie-950 overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Premium Tools for Job Seekers"
            subtitle="Elevate your job search with our AI-powered platform"
            align="center"
          />
          
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-zordie-800 dark:to-zordie-900 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-zordie-700"
              >
                <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-700"></div>
                <div className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                    <feature.icon className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.points.map((point, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-zordie-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Success Stories"
            subtitle="Hear from job seekers who found success with Zordie AI"
            align="center"
          />
          
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-zordie-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-zordie-700"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                
                <div className="border-t border-gray-100 dark:border-zordie-700 pt-4">
                  <div className="flex items-center text-blue-600 dark:text-blue-400">
                    <testimonial.icon className="h-4 w-4 mr-2" />
                    <p className="text-sm font-medium">{testimonial.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Chatbot */}
      <PrimeHRChatbot initiallyOpen={false} />
    </Layout>
  );
};

// Data for the sections
const stats = [
  { value: "2.5x", label: "More interview invitations" },
  { value: "68%", label: "Faster job offers" },
  { value: "94%", label: "Better job matches" },
  { value: "37%", label: "Higher starting salaries" }
];

const steps = [
  {
    icon: FileCheck,
    title: "Create Your Profile",
    description: "Sign up and build your professional profile with skills, experience, and education details on our intuitive platform.",
    benefit: "Takes less than 10 minutes to get started"
  },
  {
    icon: BadgeCheck,
    title: "Complete Verification",
    description: "Complete AI-guided skill assessments and project verification to validate your technical and soft skills.",
    benefit: "Verify multiple skills and credentials at once"
  },
  {
    icon: Briefcase,
    title: "Showcase Your Expertise",
    description: "Add verified projects, code samples, and portfolio items that prove your capabilities to potential employers.",
    benefit: "Stand out with verified original work"
  },
  {
    icon: Target,
    title: "Get Matched With Jobs",
    description: "Receive tailored job matches based on your verified skills, experience, and career preferences.",
    benefit: "94% better job fit than traditional applications"
  }
];

const benefits = [
  {
    icon: BadgeCheck,
    title: "Stand Out from the Crowd",
    description: "Your verification badge signals authenticity to recruiters, helping your profile rise above unverified candidates."
  },
  {
    icon: ThumbsUp,
    title: "Build Instant Trust",
    description: "Employers trust verified candidates more and are likely to fast-track their applications."
  },
  {
    icon: Target,
    title: "Receive Better Job Matches",
    description: "Our AI matches your verified skills to the perfect opportunities, saving you time applying to irrelevant positions."
  },
  {
    icon: TrendingUp,
    title: "Negotiate Higher Salaries",
    description: "Verified professionals receive offers up to 37% higher than the industry average for their skill level."
  }
];

const metrics = [
  {
    icon: Zap,
    value: "68%",
    label: "Faster time to hire for verified candidates"
  },
  {
    icon: Users,
    value: "84%",
    label: "Of employers prefer verified candidates"
  },
  {
    icon: Target,
    value: "94%",
    label: "Better job matches with AI recommendations"
  },
  {
    icon: TrendingUp,
    value: "37%",
    label: "Higher starting salaries for verified candidates"
  }
];

const features = [
  {
    icon: BadgeCheck,
    title: "Skill Verification",
    description: "Prove your abilities with our comprehensive verification process.",
    points: [
      "AI-powered skill assessments",
      "Project authentication",
      "Credential verification",
      "Experience validation"
    ]
  },
  {
    icon: Brain,
    title: "AI Interview Prep",
    description: "Practice with our AI interviewer to sharpen your skills.",
    points: [
      "Industry-specific questions",
      "Real-time feedback",
      "Personalized improvement tips",
      "Mock interview recordings"
    ]
  },
  {
    icon: Target,
    title: "Smart Job Matching",
    description: "Get matched with opportunities that align with your verified skills.",
    points: [
      "AI-powered job recommendations",
      "Skills-based matching",
      "Cultural fit assessment",
      "Salary range optimization"
    ]
  },
  {
    icon: Sparkles,
    title: "Portfolio Showcase",
    description: "Display your work with verification badges that prove authenticity.",
    points: [
      "Project verification",
      "Code authenticity checks",
      "Interactive portfolio builder",
      "Employer-focused presentation"
    ]
  },
  {
    icon: MessageSquare,
    title: "AI Career Coach",
    description: "Receive personalized career guidance and advice.",
    points: [
      "Resume optimization",
      "Career path planning",
      "Skill development recommendations",
      "Market trend insights"
    ]
  },
  {
    icon: BarChart3,
    title: "Job Search Analytics",
    description: "Track your job search performance with detailed analytics.",
    points: [
      "Application tracking",
      "Interview success rate",
      "Skill gap analysis",
      "Competitive positioning"
    ]
  }
];

const testimonials = [
  {
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    name: "Jennifer Lee",
    role: "Frontend Developer",
    quote: "After struggling to get noticed for months, my Zordie verified profile got me 3 interview offers in the first week! The verification really helped me stand out.",
    icon: Briefcase,
    result: "Landed a senior developer role within 3 weeks"
  },
  {
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    name: "Michael Rodriguez",
    role: "UX Designer",
    quote: "The project authentication feature was a game-changer. Employers could see that my portfolio was verified as original work, which built immediate trust.",
    icon: TrendingUp,
    result: "Received a 32% higher salary offer than previous position"
  },
  {
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    name: "Sarah Johnson",
    role: "Data Scientist",
    quote: "The AI matching actually works! I was matched with companies I'd never considered, but they were perfect fits for my skills and career aspirations.",
    icon: Target,
    result: "Found a remote position with ideal work-life balance"
  }
];

export default ForJobSeekers;
