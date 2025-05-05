
import { SectionHeading } from "@/components/ui/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, FileCheck, Shield, CheckCircle } from "lucide-react";

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
            title="How Zordie Works"
            subtitle="A simple yet powerful process for both companies and job seekers"
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
              {/* No connecting line */}
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <AnimatedWorkflowStep
                  number={1}
                  title="Create Job Post"
                  description="Create your job post or let Prime AI generate it for you based on your requirements."
                  delay={0.1}
                  isInView={isInView}
                />
                <WorkflowArrow isInView={isInView} delay={0.15} />
                <AnimatedWorkflowStep
                  number={2}
                  title="Receive Applications"
                  description="Get applications from candidates with verified skills, projects, and credentials."
                  delay={0.2}
                  isInView={isInView}
                />
                <WorkflowArrow isInView={isInView} delay={0.25} />
                <AnimatedWorkflowStep
                  number={3}
                  title="AI Screening & Ranking"
                  description="Prime screens and ranks candidates, schedules interviews, and communicates with candidates."
                  delay={0.3}
                  isInView={isInView}
                />
                <WorkflowArrow isInView={isInView} delay={0.35} />
                <AnimatedWorkflowStep
                  number={4}
                  title="Review & Interview"
                  description="Review AI results, conduct interviews (AI or human), and make informed decisions."
                  delay={0.4}
                  isInView={isInView}
                />
                <WorkflowArrow isInView={isInView} delay={0.45} />
                <AnimatedWorkflowStep
                  number={5}
                  title="Hire the Best"
                  description="Select and hire the most qualified and authentic candidates with confidence."
                  delay={0.5}
                  isInView={isInView}
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="candidates">
            <div className="relative">
              {/* No connecting line */}
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <AnimatedWorkflowStep
                  number={1}
                  title="Create Verified Profile"
                  description="Upload your resume once and connect GitHub, LinkedIn, and projects for verification."
                  delay={0.1}
                  isInView={isInView}
                />
                <WorkflowArrow isInView={isInView} delay={0.15} />
                <AnimatedWorkflowStep
                  number={2}
                  title="Get Verified Badge"
                  description="Receive a verification badge after Zordie confirms your skills and project authenticity."
                  delay={0.2}
                  isInView={isInView}
                />
                <WorkflowArrow isInView={isInView} delay={0.25} />
                <AnimatedWorkflowStep
                  number={3}
                  title="Apply to Matched Jobs"
                  description="Apply to jobs with Prime's AI-optimized resume tailored to each position."
                  delay={0.3}
                  isInView={isInView}
                />
                <WorkflowArrow isInView={isInView} delay={0.35} />
                <AnimatedWorkflowStep
                  number={4}
                  title="Prepare & Interview"
                  description="Practice with AI interviews and prepare for company interviews with personalized insights."
                  delay={0.4}
                  isInView={isInView}
                />
                <WorkflowArrow isInView={isInView} delay={0.45} />
                <AnimatedWorkflowStep
                  number={5}
                  title="Get Hired Faster"
                  description="Stand out with verified skills and be hired based on your authentic abilities."
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
            />
            <VerificationCard 
              icon={<Linkedin className="h-10 w-10 text-zordie-600" />}
              title="LinkedIn Verification"
              description="Link your LinkedIn profile to validate your work experience and education."
            />
            <VerificationCard 
              icon={<FileCheck className="h-10 w-10 text-zordie-600" />}
              title="Project Authentication"
              description="Upload and authenticate your projects to showcase your real-world skills."
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
  delay?: number;
  isInView: boolean;
}

const AnimatedWorkflowStep = ({ number, title, description, delay = 0, isInView }: WorkflowStepProps) => {
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
          {number}
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

interface ArrowProps {
  isInView: boolean;
  delay?: number;
}

const WorkflowArrow = ({ isInView, delay = 0 }: ArrowProps) => {
  return (
    <motion.div 
      className="hidden lg:flex items-center justify-center"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay }}
    >
      <svg
        className="w-12 h-12 text-zordie-300 dark:text-zordie-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1, delay: delay + 0.3 }}
        />
      </svg>
    </motion.div>
  );
};

interface VerificationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const VerificationCard = ({ icon, title, description }: VerificationCardProps) => {
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
        <div className="mt-4 flex items-center gap-2 text-zordie-600 dark:text-zordie-400">
          <CheckCircle className="h-4 w-4" />
          <span className="text-sm font-medium">Verified by Zordie</span>
        </div>
      </div>
    </motion.div>
  );
};

export default HowItWorksSection;
