
import { SectionHeading } from "@/components/ui/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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
  Award
} from "lucide-react";

const HowItWorksSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-zordie-50 dark:from-zordie-950 dark:to-zordie-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <TabsTrigger value="companies" className="data-[state=active]:bg-white dark:data-[state=active]:bg-zordie-700 data-[state=active]:text-zordie-900 dark:data-[state=active]:text-white">For Companies</TabsTrigger>
              <TabsTrigger value="candidates" className="data-[state=active]:bg-white dark:data-[state=active]:bg-zordie-700 data-[state=active]:text-zordie-900 dark:data-[state=active]:text-white">For Job Seekers</TabsTrigger>
            </TabsList>
          </motion.div>
          
          <TabsContent value="companies">
            <div className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
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
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="candidates">
            <div className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
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
              </div>
            </div>
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
      className="bg-white dark:bg-zordie-800/50 rounded-xl p-6 shadow-md dark:shadow-zordie-900/30 border border-zordie-100 dark:border-zordie-700 hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <div className="flex flex-col items-center text-center">
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
