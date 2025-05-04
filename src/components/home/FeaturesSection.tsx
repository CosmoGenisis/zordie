
import { SectionHeading } from "@/components/ui/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { 
  Users, Shield, BarChart, Clock, Bot, 
  FileCheck, Video, MessageSquare, Github, Linkedin, Link, BadgeCheck
} from "lucide-react";
import { useInView } from 'framer-motion';
import { useRef } from "react";
import GradientText from "./GradientText";

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-indigo-50/30 dark:from-zordie-950 dark:to-zordie-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeading
            title="AI-Powered Platform for Trustworthy Hiring"
            subtitle="Discover how Zordie transforms the hiring process with verification and intelligence"
            align="center"
            titleContent={<>AI-Powered Platform for <GradientText gradient="rainbow">Trustworthy Hiring</GradientText></>}
          />
        </motion.div>
        
        <Tabs defaultValue="companies" className="w-full mt-12">
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TabsList className="grid w-full max-w-md grid-cols-2 bg-indigo-100/50 dark:bg-indigo-900/30 backdrop-blur-sm">
              <TabsTrigger value="companies" className="data-[state=active]:bg-white dark:data-[state=active]:bg-indigo-800 data-[state=active]:text-indigo-900 dark:data-[state=active]:text-white">For Companies</TabsTrigger>
              <TabsTrigger value="candidates" className="data-[state=active]:bg-white dark:data-[state=active]:bg-indigo-800 data-[state=active]:text-indigo-900 dark:data-[state=active]:text-white">For Job Seekers</TabsTrigger>
            </TabsList>
          </motion.div>
          
          <TabsContent value="companies">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <AnimatedFeatureCard 
                icon={<Shield className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />}
                title="Verified Candidates" 
                description="Only interact with candidates who have verified skills, projects and credentials. No more fake resumes."
                delay={0.1}
              />
              <AnimatedFeatureCard 
                icon={<Bot className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />}
                title="AI Resume Screening" 
                description="Prime AI automatically ranks and scores resumes based on job requirements, saving hours of manual review."
                delay={0.2}
              />
              <AnimatedFeatureCard 
                icon={<Video className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />}
                title="AI Video Interviews" 
                description="Automated video interviews with real-time AI scoring and feedback to efficiently shortlist candidates."
                delay={0.3}
              />
              <AnimatedFeatureCard 
                icon={<MessageSquare className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />}
                title="Automated Communication" 
                description="Prime handles scheduling, reminders, and follow-up messages, keeping candidates informed every step of the way."
                delay={0.4}
              />
              <AnimatedFeatureCard 
                icon={<BarChart className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />}
                title="Candidate Leaderboard" 
                description="Real-time ranking of candidates with transparency into verification scores and skill assessments."
                delay={0.5}
              />
              <AnimatedFeatureCard 
                icon={<Clock className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />}
                title="Time & Cost Savings" 
                description="Reduce hiring time by up to 73% and cut costs by eliminating manual screening and verification."
                delay={0.6}
              />
            </motion.div>
          </TabsContent>
          
          <TabsContent value="candidates">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <AnimatedFeatureCard 
                icon={<FileCheck className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />}
                title="Smart Resume Upload" 
                description="Upload once and let AI optimize your resume for each job application to maximize your chances."
                delay={0.1}
              />
              <AnimatedFeatureCard 
                icon={<Github className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />}
                title="Project Verification" 
                description="Link GitHub, LinkedIn and projects to verify your skills and stand out with a verification badge."
                delay={0.2}
                highlight={true}
              />
              <AnimatedFeatureCard 
                icon={<Users className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />}
                title="AI Job Matching" 
                description="Get matched with jobs that fit your verified skills and experience, not just keyword matches."
                delay={0.3}
              />
              <AnimatedFeatureCard 
                icon={<Video className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />}
                title="Practice Interviews" 
                description="Prepare with AI-powered practice interviews tailored to your target roles and get instant feedback."
                delay={0.4}
              />
              <AnimatedFeatureCard 
                icon={<BadgeCheck className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />}
                title="Verified Profile Badge" 
                description="Earn a verification badge to stand out and get noticed by top companies looking for authentic talent."
                delay={0.5}
              />
              <AnimatedFeatureCard 
                icon={<BarChart className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />}
                title="Application Analytics" 
                description="Track your application status, leaderboard position, and get insights on improving your chances."
                delay={0.6}
              />
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Project Verification Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          className="mt-24"
        >
          <SectionHeading
            title="Cross-Platform Verification"
            subtitle="Connect your professional profiles for comprehensive skill verification"
            align="center"
          />
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 dark:bg-indigo-900/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-indigo-100/50 dark:border-indigo-700/50">
              <div className="w-16 h-16 rounded-lg bg-indigo-100/80 dark:bg-indigo-800/80 flex items-center justify-center mb-6">
                <Github className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">GitHub Integration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Link your GitHub profile to verify your coding skills and contributions. We analyze your repositories, 
                commit history, and project involvement to validate your technical experience.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-2 text-green-500">✓</span> Repository code analysis
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-2 text-green-500">✓</span> Contribution verification
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-2 text-green-500">✓</span> Language proficiency scoring
                </li>
              </ul>
            </div>
            
            <div className="bg-white/80 dark:bg-indigo-900/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-indigo-100/50 dark:border-indigo-700/50">
              <div className="w-16 h-16 rounded-lg bg-indigo-100/80 dark:bg-indigo-800/80 flex items-center justify-center mb-6">
                <Linkedin className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">LinkedIn Verification</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Connect your LinkedIn profile to verify your employment history, education, and professional credentials. 
                Our AI cross-references details for inconsistencies and confirms timeline accuracy.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-2 text-green-500">✓</span> Work history validation
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-2 text-green-500">✓</span> Credential confirmation
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-2 text-green-500">✓</span> Endorsement analysis
                </li>
              </ul>
            </div>
            
            <div className="bg-white/80 dark:bg-indigo-900/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-indigo-100/50 dark:border-indigo-700/50">
              <div className="w-16 h-16 rounded-lg bg-indigo-100/80 dark:bg-indigo-800/80 flex items-center justify-center mb-6">
                <Link className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Project Portfolio</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Showcase your personal and professional projects with direct links. Our system verifies your involvement 
                and contributions to each project, adding credibility to your skill claims.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-2 text-green-500">✓</span> Project ownership verification
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-2 text-green-500">✓</span> Technical skill assessment
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-2 text-green-500">✓</span> Project impact evaluation
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  highlight?: boolean;
}

const AnimatedFeatureCard = ({ icon, title, description, delay = 0, highlight = false }: FeatureCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay
      }
    }
  };

  return (
    <motion.div 
      variants={cardVariants}
      whileHover={{ 
        y: -5, 
        boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
        transition: { duration: 0.2 }
      }}
      className={`relative overflow-hidden p-6 rounded-2xl ${highlight 
        ? "bg-gradient-to-br from-indigo-50/90 to-purple-50/90 dark:from-indigo-800/50 dark:to-purple-900/50 border-2 border-indigo-200/70 dark:border-indigo-500/50" 
        : "bg-white/70 dark:bg-indigo-900/30 border border-indigo-100/50 dark:border-indigo-700/50"} backdrop-blur-sm shadow-lg hover:border-indigo-300/50 dark:hover:border-indigo-600/50 transition-all duration-300`}
    >
      {/* Gradient blur effect in background */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-r from-indigo-100/30 to-violet-100/30 dark:from-indigo-800/20 dark:to-violet-800/10 rounded-full blur-3xl"></div>
      
      {highlight && (
        <div className="absolute top-2 right-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-200">
            New
          </span>
        </div>
      )}
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-indigo-100 dark:bg-indigo-800 flex items-center justify-center mb-4 shadow-inner">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-indigo-200/70">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
