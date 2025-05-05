
import React, { useRef } from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  Users, 
  Bot, 
  ShieldCheck, 
  Clock, 
  CheckCircle, 
  BarChart, 
  Video,
  Award,
  Zap,
  Search,
  MessageSquare,
  Settings
} from 'lucide-react';

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-zordie-400/10 dark:bg-zordie-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent1/10 dark:bg-accent1/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <SectionHeading
            title="AI-Powered Hiring Platform"
            subtitle="Tailored solutions for companies and job seekers"
            align="center"
          />
          
          <Tabs defaultValue="companies" className="w-full mt-12">
            <div className="flex justify-center mb-10">
              <TabsList className="grid grid-cols-2 w-full max-w-md">
                <TabsTrigger 
                  value="companies" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-zordie-600 data-[state=active]:to-accent1 data-[state=active]:text-white"
                >
                  For Companies
                </TabsTrigger>
                <TabsTrigger 
                  value="jobseekers"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-zordie-600 data-[state=active]:to-accent1 data-[state=active]:text-white"
                >
                  For Job Seekers
                </TabsTrigger>
              </TabsList>
            </div>
            
            {/* For Companies Content */}
            <TabsContent value="companies">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="order-2 md:order-1"
                >
                  <motion.h3 
                    className="text-3xl font-bold mb-6 text-zordie-800 dark:text-white"
                    variants={itemVariants}
                  >
                    Find verified talent faster with our AI-powered screening
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 mb-8"
                    variants={itemVariants}
                  >
                    Our AI agent, Prime HR, handles the entire screening process, from resume verification to skills assessment, so you can focus on finding the perfect match for your team.
                  </motion.p>
                  
                  <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                  >
                    <FeatureItem 
                      icon={<Bot className="text-zordie-600" />}
                      title="AI-Powered Screening"
                      description="Our AI automatically scans and ranks resumes based on job requirements."
                      variants={itemVariants}
                    />
                    
                    <FeatureItem 
                      icon={<ShieldCheck className="text-zordie-600" />}
                      title="Credential Verification"
                      description="Automatically verify skills, projects, and credentials with connected profiles."
                      variants={itemVariants}
                    />
                    
                    <FeatureItem 
                      icon={<Video className="text-zordie-600" />}
                      title="Automated Video Interviews"
                      description="AI-analyzed video screening with real-time scoring reduces interview time by 73%."
                      variants={itemVariants}
                    />
                    
                    <FeatureItem 
                      icon={<BarChart className="text-zordie-600" />}
                      title="Comprehensive Analytics"
                      description="Detailed scorecards and candidate rankings based on verified skills and interview performance."
                      variants={itemVariants}
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="mt-10"
                    variants={itemVariants}
                  >
                    <Link to="/companies">
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-zordie-600 to-accent1 hover:from-zordie-700 hover:to-accent1-hover relative overflow-hidden group"
                      >
                        <span className="relative z-10">Learn More for Companies</span>
                        <motion.span 
                          className="absolute top-0 left-0 w-full h-full bg-white opacity-20"
                          initial={{ x: '-100%' }}
                          animate={{ x: ['100%'] }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 1.5, 
                            ease: "linear",
                            repeatDelay: 1
                          }}
                        />
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="order-1 md:order-2 relative"
                  variants={itemVariants}
                >
                  <div className="relative bg-white dark:bg-zordie-800 p-8 rounded-xl shadow-xl border border-gray-200 dark:border-zordie-700">
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-zordie-600 to-accent1 text-white text-sm font-medium px-4 py-1 rounded-full">
                      Prime HR AI
                    </div>
                    
                    <div className="mb-6">
                      <div className="w-12 h-12 rounded-full bg-zordie-100 dark:bg-zordie-700 flex items-center justify-center mb-4">
                        <Bot className="h-6 w-6 text-zordie-600 dark:text-zordie-300" />
                      </div>
                      <h4 className="text-xl font-semibold text-zordie-800 dark:text-white mb-2">
                        Candidate Screening Process
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Our AI agent, Prime HR, handles the entire screening flow
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <ScreeningStep 
                        number={1}
                        title="Resume Analysis"
                        description="AI parses resumes and extracts relevant skills and experience"
                      />
                      
                      <ScreeningStep 
                        number={2}
                        title="Credential Verification"
                        description="Connected profiles verified to eliminate fake resumes"
                      />
                      
                      <ScreeningStep 
                        number={3}
                        title="Automated Interviews"
                        description="AI video interviews with real-time scoring"
                      />
                      
                      <ScreeningStep 
                        number={4}
                        title="Candidate Ranking"
                        description="Detailed scoring and ranking of verified candidates"
                      />
                      
                      <ScreeningStep 
                        number={5}
                        title="Hiring Decision"
                        description="Final selection based on comprehensive AI analysis"
                      />
                    </div>
                    
                    <div className="mt-8 flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Average time saved</p>
                        <p className="text-2xl font-bold text-zordie-600">23 hours/week</p>
                      </div>
                      <div>
                        <Link to="/ai-screening">
                          <Button variant="outline" size="sm" className="hover:bg-zordie-50 dark:hover:bg-zordie-800">
                            View Demo
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-zordie-100 dark:bg-zordie-800/50 rounded-lg -z-10 transform -rotate-6"></div>
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent1/10 dark:bg-accent1/5 rounded-lg -z-10 transform rotate-6"></div>
                </motion.div>
              </div>
            </TabsContent>
            
            {/* For Job Seekers Content */}
            <TabsContent value="jobseekers">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <motion.h3 
                    className="text-3xl font-bold mb-6 text-zordie-800 dark:text-white"
                    variants={itemVariants}
                  >
                    Showcase your verified skills to stand out 
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 mb-8"
                    variants={itemVariants}
                  >
                    Verify your skills, prepare with AI, and get matched with the perfect opportunities that recognize your authentic abilities.
                  </motion.p>
                  
                  <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                  >
                    <FeatureItem 
                      icon={<ShieldCheck className="text-zordie-600" />}
                      title="Skill Verification"
                      description="Connect GitHub, LinkedIn and upload projects to verify your skills and get your verification badge."
                      variants={itemVariants}
                    />
                    
                    <FeatureItem 
                      icon={<Zap className="text-zordie-600" />}
                      title="AI-Optimized Profile"
                      description="Our AI optimizes your profile for each job application to maximize match rate."
                      variants={itemVariants}
                    />
                    
                    <FeatureItem 
                      icon={<Video className="text-zordie-600" />}
                      title="Interview Practice"
                      description="Prepare with AI-powered practice interviews tailored to your target roles."
                      variants={itemVariants}
                    />
                    
                    <FeatureItem 
                      icon={<Award className="text-zordie-600" />}
                      title="Stand Out from the Crowd"
                      description="Get hired based on your authentic, verified abilities rather than just your resume."
                      variants={itemVariants}
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="mt-10"
                    variants={itemVariants}
                  >
                    <Link to="/candidates">
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-zordie-600 to-accent1 hover:from-zordie-700 hover:to-accent1-hover relative overflow-hidden group"
                      >
                        <span className="relative z-10">Learn More for Job Seekers</span>
                        <motion.span 
                          className="absolute top-0 left-0 w-full h-full bg-white opacity-20"
                          initial={{ x: '-100%' }}
                          animate={{ x: ['100%'] }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 1.5, 
                            ease: "linear",
                            repeatDelay: 1
                          }}
                        />
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="relative"
                  variants={itemVariants}
                >
                  <div className="relative bg-white dark:bg-zordie-800 p-8 rounded-xl shadow-xl border border-gray-200 dark:border-zordie-700">
                    <div className="absolute -top-4 -left-4 bg-gradient-to-r from-zordie-600 to-accent1 text-white text-sm font-medium px-4 py-1 rounded-full">
                      Verified Profile
                    </div>
                    
                    <div className="flex items-center mb-8">
                      <div className="relative mr-4">
                        <img 
                          src="https://randomuser.me/api/portraits/men/32.jpg" 
                          alt="Profile" 
                          className="w-16 h-16 rounded-full object-cover border-2 border-white dark:border-zordie-700"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-1 rounded-full border-2 border-white dark:border-zordie-700">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-zordie-800 dark:text-white">
                          David Chen
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400">
                          Full Stack Developer
                        </p>
                        <div className="flex items-center mt-1">
                          <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs px-2 py-0.5 rounded-full flex items-center">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Verified Skills
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Technical Skills</span>
                          <span className="text-sm font-medium text-zordie-600">92%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                          <div className="h-full bg-gradient-to-r from-zordie-600 to-accent1 rounded-full" style={{width: '92%'}}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Project Verification</span>
                          <span className="text-sm font-medium text-zordie-600">100%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                          <div className="h-full bg-gradient-to-r from-zordie-600 to-accent1 rounded-full" style={{width: '100%'}}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Interview Readiness</span>
                          <span className="text-sm font-medium text-zordie-600">85%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                          <div className="h-full bg-gradient-to-r from-zordie-600 to-accent1 rounded-full" style={{width: '85%'}}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-zordie-700/30 rounded-lg">
                        <Github className="h-5 w-5 text-zordie-600 mb-1" />
                        <span className="text-xs text-gray-500 dark:text-gray-400">GitHub</span>
                        <span className="text-sm font-medium text-zordie-800 dark:text-white">Verified</span>
                      </div>
                      
                      <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-zordie-700/30 rounded-lg">
                        <Linkedin className="h-5 w-5 text-zordie-600 mb-1" />
                        <span className="text-xs text-gray-500 dark:text-gray-400">LinkedIn</span>
                        <span className="text-sm font-medium text-zordie-800 dark:text-white">Verified</span>
                      </div>
                      
                      <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-zordie-700/30 rounded-lg">
                        <Video className="h-5 w-5 text-zordie-600 mb-1" />
                        <span className="text-xs text-gray-500 dark:text-gray-400">Interviews</span>
                        <span className="text-sm font-medium text-zordie-800 dark:text-white">5 Passed</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Link to="/verify-profile">
                        <Button className="w-full bg-gradient-to-r from-zordie-600 to-accent1">
                          Get Your Profile Verified
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-zordie-100 dark:bg-zordie-800/50 rounded-lg -z-10 transform rotate-6"></div>
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent1/10 dark:bg-accent1/5 rounded-lg -z-10 transform -rotate-6"></div>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, description, variants }) => {
  return (
    <motion.div className="flex items-start" variants={variants}>
      <div className="mt-1 w-10 h-10 rounded-full bg-zordie-100 dark:bg-zordie-800 flex items-center justify-center mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-zordie-800 dark:text-white mb-1">{title}</h4>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

const ScreeningStep = ({ number, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="w-8 h-8 rounded-full bg-zordie-100 dark:bg-zordie-700 flex items-center justify-center text-zordie-600 dark:text-zordie-300 font-semibold mr-3 flex-shrink-0">
        {number}
      </div>
      <div>
        <h5 className="font-medium text-zordie-800 dark:text-white text-base">{title}</h5>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeaturesSection;
