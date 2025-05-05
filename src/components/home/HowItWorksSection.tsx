
import { SectionHeading } from "@/components/ui/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Github, 
  Linkedin, 
  FileCheck, 
  Shield, 
  CheckCircle, 
  Upload, 
  Bot, 
  Video, 
  BarChart, 
  MessageSquare, 
  Search,
  Award,
  ChevronRight
} from "lucide-react";

const HowItWorksSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
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
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-zordie-100 dark:bg-zordie-800/20 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent1/10 dark:bg-accent1/5 rounded-full blur-3xl opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeading
            title="AI-Powered Candidate Screening"
            subtitle="Our AI streamlines the entire hiring and job application process"
            align="center"
          />
        </motion.div>
        
        <Tabs defaultValue="companies" className="w-full mt-12">
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TabsList className="grid w-full max-w-md grid-cols-2 bg-zordie-100/50 dark:bg-zordie-800/50 backdrop-blur-sm">
              <TabsTrigger 
                value="companies" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-zordie-600 data-[state=active]:to-accent1 data-[state=active]:text-white"
              >
                For Companies
              </TabsTrigger>
              <TabsTrigger 
                value="candidates" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-zordie-600 data-[state=active]:to-accent1 data-[state=active]:text-white"
              >
                For Job Seekers
              </TabsTrigger>
            </TabsList>
          </motion.div>
          
          <TabsContent value="companies">
            <div className="relative">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-5 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <AnimatedWorkflowStep
                  number={1}
                  title="AI Resume Screening"
                  description="Our AI automatically scans and ranks resumes based on job requirements, identifying the best matches."
                  icon={<Bot className="h-6 w-6 text-white" />}
                  delay={0.1}
                  isInView={isInView}
                />
                <AnimatedWorkflowStep
                  number={2}
                  title="Verification Check"
                  description="System verifies candidates' skills, projects, and credentials using their connected profiles."
                  icon={<Shield className="h-6 w-6 text-white" />}
                  delay={0.2}
                  isInView={isInView}
                />
                <AnimatedWorkflowStep
                  number={3}
                  title="AI Video Interviews"
                  description="Automated video screening with real-time scoring reduces interview time by 73%."
                  icon={<Video className="h-6 w-6 text-white" />}
                  delay={0.3}
                  isInView={isInView}
                />
                <AnimatedWorkflowStep
                  number={4}
                  title="Candidate Ranking"
                  description="AI provides detailed scorecards and rankings of candidates based on verification and interviews."
                  icon={<BarChart className="h-6 w-6 text-white" />}
                  delay={0.4}
                  isInView={isInView}
                />
                <AnimatedWorkflowStep
                  number={5}
                  title="Automated Communication"
                  description="System handles all candidate communications, scheduling, and next steps automatically."
                  icon={<MessageSquare className="h-6 w-6 text-white" />}
                  delay={0.5}
                  isInView={isInView}
                />
              </motion.div>
              
              {/* Connecting lines for desktop */}
              <div className="hidden lg:block absolute top-24 left-[calc(10%+24px)] right-[calc(10%+24px)] h-0.5 bg-gradient-to-r from-zordie-200 via-zordie-300 to-zordie-200 dark:from-zordie-700 dark:via-zordie-600 dark:to-zordie-700"></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-12 flex justify-center"
            >
              <Link to="/companies">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-zordie-600 to-accent1 hover:from-zordie-700 hover:to-accent1-hover relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    Learn More 
                    <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
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
          </TabsContent>
          
          <TabsContent value="candidates">
            <div className="relative">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-5 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <AnimatedWorkflowStep
                  number={1}
                  title="Verify Your Profile"
                  description="Connect GitHub, LinkedIn and upload projects to verify your skills and get your verification badge."
                  icon={<CheckCircle className="h-6 w-6 text-white" />}
                  delay={0.1}
                  isInView={isInView}
                />
                <AnimatedWorkflowStep
                  number={2}
                  title="Smart Applications"
                  description="AI optimizes your profile for each job application to maximize visibility and match rate."
                  icon={<Search className="h-6 w-6 text-white" />}
                  delay={0.2}
                  isInView={isInView}
                />
                <AnimatedWorkflowStep
                  number={3}
                  title="Practice Interviews"
                  description="Prepare for success with AI-powered practice interviews tailored to your target roles."
                  icon={<Video className="h-6 w-6 text-white" />}
                  delay={0.3}
                  isInView={isInView}
                />
                <AnimatedWorkflowStep
                  number={4}
                  title="Application Tracking"
                  description="Monitor your application status, feedback, and insights from companies in real-time."
                  icon={<BarChart className="h-6 w-6 text-white" />}
                  delay={0.4}
                  isInView={isInView}
                />
                <AnimatedWorkflowStep
                  number={5}
                  title="Stand Out & Get Hired"
                  description="Your verified skills help you stand out and get hired based on your authentic abilities."
                  icon={<Award className="h-6 w-6 text-white" />}
                  delay={0.5}
                  isInView={isInView}
                />
              </motion.div>
              
              {/* Connecting lines for desktop */}
              <div className="hidden lg:block absolute top-24 left-[calc(10%+24px)] right-[calc(10%+24px)] h-0.5 bg-gradient-to-r from-zordie-200 via-zordie-300 to-zordie-200 dark:from-zordie-700 dark:via-zordie-600 dark:to-zordie-700"></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-12 flex justify-center"
            >
              <Link to="/candidates">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-zordie-600 to-accent1 hover:from-zordie-700 hover:to-accent1-hover relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    Learn More 
                    <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
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
          </TabsContent>
        </Tabs>

        {/* Project Verification Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-24"
        >
          <SectionHeading
            title="Project Verification"
            subtitle="Link GitHub, LinkedIn and projects to verify your skills and stand out with a verification badge"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <VerificationCard 
              icon={<Github className="h-10 w-10 text-zordie-600" />}
              title="GitHub Integration"
              description="Connect your GitHub profile to verify your coding projects and contributions."
              verifiedText="Verified by Zordie"
            />
            <VerificationCard 
              icon={<Linkedin className="h-10 w-10 text-zordie-600" />}
              title="LinkedIn Verification"
              description="Link your LinkedIn profile to validate your work experience and education."
              verifiedText="Verified by Zordie"
            />
            <VerificationCard 
              icon={<FileCheck className="h-10 w-10 text-zordie-600" />}
              title="Project Authentication"
              description="Upload and authenticate your projects to showcase your real-world skills."
              verifiedText="Verified by Zordie"
            />
          </div>

          <div className="mt-12 flex justify-center">
            <motion.div
              className="flex items-center gap-3 bg-zordie-50 dark:bg-zordie-800/50 px-6 py-4 rounded-lg border border-zordie-200 dark:border-zordie-700"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Shield className="h-6 w-6 text-zordie-600" />
              <span className="text-zordie-800 dark:text-zordie-200 font-medium">
                Get your <span className="text-zordie-600 font-semibold">Verified Badge</span> and increase your chances of getting hired by 3x!
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface WorkflowStepProps {
  number: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
  delay?: number;
  isInView: boolean;
}

const AnimatedWorkflowStep = ({ number, title, description, icon, delay = 0, isInView }: WorkflowStepProps) => {
  return (
    <motion.div 
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay }}
    >
      <motion.div 
        className="relative"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-zordie-600 to-accent1 flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg dark:shadow-accent1/20">
          {icon ? icon : number}
        </div>
        <motion.div 
          className="absolute -inset-1 rounded-full bg-gradient-to-r from-zordie-400 to-accent1 opacity-30 blur-sm"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            delay: delay * 3
          }}
        />
      </motion.div>
      <h3 className="text-xl font-semibold mb-2 text-zordie-900 dark:text-white">{title}</h3>
      <p className="text-zordie-600 dark:text-zordie-300">{description}</p>
    </motion.div>
  );
};

interface VerificationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  verifiedText?: string;
}

const VerificationCard = ({ icon, title, description, verifiedText }: VerificationCardProps) => {
  return (
    <motion.div
      className="bg-white dark:bg-zordie-800/50 rounded-xl p-6 shadow-md dark:shadow-zordie-900/30 border border-zordie-100 dark:border-zordie-700 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {/* Shiny effect on hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.7 }}
      />
      
      <div className="flex flex-col items-center text-center relative z-10">
        <div className="mb-4 p-3 bg-zordie-50 dark:bg-zordie-700/30 rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-zordie-900 dark:text-white">{title}</h3>
        <p className="text-zordie-600 dark:text-zordie-300">{description}</p>
        
        {verifiedText && (
          <div className="mt-4 flex items-center gap-2 text-zordie-600 dark:text-zordie-400">
            <CheckCircle className="h-4 w-4" />
            <span className="text-sm font-medium">{verifiedText}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default HowItWorksSection;
