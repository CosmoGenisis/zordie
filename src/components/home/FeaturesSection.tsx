
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
  Settings,
  Github,
  Linkedin
} from 'lucide-react';
import GradientText from './GradientText';

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
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-custom-50 to-orange-custom-50 dark:from-blue-dark-900 dark:to-blue-dark-800">
      {/* Background elements with custom colors */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-custom-400/10 dark:bg-blue-custom-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-custom-400/10 dark:bg-orange-custom-400/10 rounded-full blur-3xl"></div>
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
                  className="data-[state=active]:bg-custom-main data-[state=active]:text-white"
                >
                  For Companies
                </TabsTrigger>
                <TabsTrigger 
                  value="jobseekers"
                  className="data-[state=active]:bg-custom-main data-[state=active]:text-white"
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
                    className="text-3xl font-bold mb-6 text-blue-dark-800 dark:text-white"
                    variants={itemVariants}
                  >
                    Find verified talent faster with our{' '}
                    <GradientText gradient="zordie">AI-powered screening</GradientText>
                  </motion.h3>
                  
                  <motion.p 
                    className="text-blue-dark-600 dark:text-white/90 mb-8"
                    variants={itemVariants}
                  >
                    Our AI agent, Prime HR, handles the entire screening process, from resume verification to skills assessment, so you can focus on finding the perfect match for your team.
                  </motion.p>
                  
                  <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                  >
                    <FeatureItem 
                      icon={<Bot className="custom-blue-text" />}
                      title="AI-Powered Screening"
                      description="Our AI automatically scans and ranks resumes based on job requirements."
                      variants={itemVariants}
                    />
                    
                    <FeatureItem 
                      icon={<ShieldCheck className="custom-blue-text" />}
                      title="Credential Verification"
                      description="Automatically verify skills, projects, and credentials with connected profiles."
                      variants={itemVariants}
                    />
                    
                    <FeatureItem 
                      icon={<Video className="custom-orange-text" />}
                      title="Automated Video Interviews"
                      description="AI-analyzed video screening with real-time scoring reduces interview time by 73%."
                      variants={itemVariants}
                    />
                    
                    <FeatureItem 
                      icon={<BarChart className="custom-blue-dark-text" />}
                      title="Comprehensive Analytics"
                      description="Detailed scorecards and candidate rankings based on verified skills and interview performance."
                      variants={itemVariants}
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="mt-10"
                    variants={itemVariants}
                  >
                    <Link to="/contact">
                      <Button 
                        size="lg" 
                        className="btn-custom-main relative overflow-hidden group"
                      >
                        <span className="relative z-10">Join Pre-Access Program</span>
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
                  <div className="relative custom-card custom-glow p-8 rounded-xl">
                    <div className="absolute -top-4 -right-4 bg-custom-main text-white text-sm font-medium px-4 py-1 rounded-full">
                      Prime HR AI
                    </div>
                    
                    <div className="mb-6">
                      <div className="w-12 h-12 rounded-full bg-blue-custom-100 dark:bg-blue-dark-700 flex items-center justify-center mb-4">
                        <Bot className="h-6 w-6 custom-blue-text dark:text-blue-custom-400" />
                      </div>
                      <h4 className="text-xl font-semibold text-blue-dark-800 dark:text-white mb-2">
                        Candidate Screening Process
                      </h4>
                      <p className="text-blue-dark-600 dark:text-white/80 text-sm">
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
                        <p className="text-sm text-blue-dark-500 dark:text-white/60">Average time saved</p>
                        <p className="text-2xl font-bold custom-blue-text dark:text-blue-custom-400">23 hours/week</p>
                      </div>
                      <div>
                        <Link to="/contact">
                          <Button variant="outline" size="sm" className="custom-animated-border">
                            Join Pre-Access
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements with custom colors */}
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-custom-100 dark:bg-blue-dark-800/50 rounded-lg -z-10 transform -rotate-6"></div>
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-custom-100 dark:bg-orange-custom-100/50 rounded-lg -z-10 transform rotate-6"></div>
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
                    className="text-3xl font-bold mb-6 text-blue-dark-800 dark:text-white"
                    variants={itemVariants}
                  >
                    Showcase your{' '}
                    <GradientText gradient="zordieCyan">verified skills</GradientText>
                    {' '}to stand out 
                  </motion.h3>
                  
                  <motion.p 
                    className="text-blue-dark-600 dark:text-white/90 mb-8"
                    variants={itemVariants}
                  >
                    Verify your skills, prepare with AI, and get matched with the perfect opportunities that recognize your authentic abilities.
                  </motion.p>
                  
                  <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                  >
                    <FeatureItem 
                      icon={<ShieldCheck className="custom-blue-text" />}
                      title="Skill Verification"
                      description="Connect GitHub, LinkedIn and upload projects to verify your skills and get your verification badge."
                      variants={itemVariants}
                    />
                    
                    <FeatureItem 
                      icon={<Zap className="custom-orange-text" />}
                      title="AI-Optimized Profile"
                      description="Our AI optimizes your profile for each job application to maximize match rate."
                      variants={itemVariants}
                    />
                    
                    <FeatureItem 
                      icon={<Video className="custom-blue-dark-text" />}
                      title="Interview Practice"
                      description="Prepare with AI-powered practice interviews tailored to your target roles."
                      variants={itemVariants}
                    />
                    
                    <FeatureItem 
                      icon={<Award className="custom-blue-text" />}
                      title="Stand Out from the Crowd"
                      description="Get hired based on your authentic, verified abilities rather than just your resume."
                      variants={itemVariants}
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="mt-10"
                    variants={itemVariants}
                  >
                    <Link to="/contact">
                      <Button 
                        size="lg" 
                        className="btn-custom-secondary relative overflow-hidden group"
                      >
                        <span className="relative z-10">Join Pre-Access Program</span>
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
                  <div className="relative custom-card custom-glow p-8 rounded-xl">
                    <div className="absolute -top-4 -left-4 bg-custom-secondary text-white text-sm font-medium px-4 py-1 rounded-full">
                      Verified Profile
                    </div>
                    
                    <div className="flex items-center mb-8">
                      <div className="relative mr-4">
                        <img 
                          src="https://randomuser.me/api/portraits/men/32.jpg" 
                          alt="Profile" 
                          className="w-16 h-16 rounded-full object-cover border-2 border-white dark:border-blue-dark-700"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-1 rounded-full border-2 border-white dark:border-blue-dark-700">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-blue-dark-800 dark:text-white">
                          David Chen
                        </h4>
                        <p className="text-blue-dark-500 dark:text-white/70">
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
                          <span className="text-sm font-medium text-blue-dark-700 dark:text-white/90">Technical Skills</span>
                          <span className="text-sm font-medium text-blue-custom-600">92%</span>
                        </div>
                        <div className="w-full h-2 bg-blue-custom-200 dark:bg-blue-dark-700 rounded-full">
                          <div className="h-full bg-gradient-to-r from-blue-custom-600 to-orange-custom-500 rounded-full" style={{width: '92%'}}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-blue-dark-700 dark:text-white/90">Project Verification</span>
                          <span className="text-sm font-medium text-blue-custom-600">100%</span>
                        </div>
                        <div className="w-full h-2 bg-blue-custom-200 dark:bg-blue-dark-700 rounded-full">
                          <div className="h-full bg-gradient-to-r from-blue-custom-600 to-orange-custom-500 rounded-full" style={{width: '100%'}}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-blue-dark-700 dark:text-white/90">Interview Readiness</span>
                          <span className="text-sm font-medium text-blue-custom-600">85%</span>
                        </div>
                        <div className="w-full h-2 bg-blue-custom-200 dark:bg-blue-dark-700 rounded-full">
                          <div className="h-full bg-gradient-to-r from-blue-custom-600 to-orange-custom-500 rounded-full" style={{width: '85%'}}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <div className="flex flex-col items-center p-3 bg-blue-custom-50 dark:bg-blue-dark-700/30 rounded-lg">
                        <Github className="h-5 w-5 text-blue-custom-600 mb-1" />
                        <span className="text-xs text-blue-dark-500 dark:text-white/60">GitHub</span>
                        <span className="text-sm font-medium text-blue-dark-800 dark:text-white">Verified</span>
                      </div>
                      
                      <div className="flex flex-col items-center p-3 bg-blue-custom-50 dark:bg-blue-dark-700/30 rounded-lg">
                        <Linkedin className="h-5 w-5 text-blue-custom-600 mb-1" />
                        <span className="text-xs text-blue-dark-500 dark:text-white/60">LinkedIn</span>
                        <span className="text-sm font-medium text-blue-dark-800 dark:text-white">Verified</span>
                      </div>
                      
                      <div className="flex flex-col items-center p-3 bg-blue-custom-50 dark:bg-blue-dark-700/30 rounded-lg">
                        <Video className="h-5 w-5 text-blue-custom-600 mb-1" />
                        <span className="text-xs text-blue-dark-500 dark:text-white/60">Interviews</span>
                        <span className="text-sm font-medium text-blue-dark-800 dark:text-white">5 Passed</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Link to="/verify-profile">
                        <Button className="w-full btn-custom-main">
                          Get Your Profile Verified
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Decorative elements with custom colors */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-custom-100 dark:bg-blue-dark-800/50 rounded-lg -z-10 transform rotate-6"></div>
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-custom-100 dark:bg-orange-custom-100/50 rounded-lg -z-10 transform -rotate-6"></div>
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
      <div className="mt-1 w-10 h-10 rounded-full bg-blue-custom-100 dark:bg-blue-dark-800 flex items-center justify-center mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-blue-dark-800 dark:text-white mb-1">{title}</h4>
        <p className="text-blue-dark-600 dark:text-white/80">{description}</p>
      </div>
    </motion.div>
  );
};

const ScreeningStep = ({ number, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="w-8 h-8 rounded-full bg-blue-custom-100 dark:bg-blue-dark-700 flex items-center justify-center custom-blue-text dark:text-blue-custom-400 font-semibold mr-3 flex-shrink-0">
        {number}
      </div>
      <div>
        <h5 className="font-medium text-blue-dark-800 dark:text-white text-base">{title}</h5>
        <p className="text-blue-dark-500 dark:text-white/70 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeaturesSection;
