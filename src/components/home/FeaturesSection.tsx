
import { SectionHeading } from "@/components/ui/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { 
  Users, Shield, BarChart, Clock, Bot, 
  FileCheck, Video, MessageSquare, Github
} from "lucide-react";
import { useInView } from 'framer-motion';
import { useRef } from "react";

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
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-zordie-50 to-white dark:from-zordie-900 dark:to-zordie-950">
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
          />
        </motion.div>
        
        <Tabs defaultValue="companies" className="w-full mt-12">
          <motion.div 
            className="flex justify-center mb-8"
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
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <AnimatedFeatureCard 
                icon={<Shield className="h-7 w-7 text-zordie-600 dark:text-zordie-400" />}
                title="Verified Candidates" 
                description="Only interact with candidates who have verified skills, projects and credentials. No more fake resumes."
                delay={0.1}
              />
              <AnimatedFeatureCard 
                icon={<Bot className="h-7 w-7 text-zordie-600 dark:text-zordie-400" />}
                title="AI Resume Screening" 
                description="Prime AI automatically ranks and scores resumes based on job requirements, saving hours of manual review."
                delay={0.2}
              />
              <AnimatedFeatureCard 
                icon={<Video className="h-7 w-7 text-zordie-600 dark:text-zordie-400" />}
                title="AI Video Interviews" 
                description="Automated video interviews with real-time AI scoring and feedback to efficiently shortlist candidates."
                delay={0.3}
              />
              <AnimatedFeatureCard 
                icon={<MessageSquare className="h-7 w-7 text-zordie-600 dark:text-zordie-400" />}
                title="Automated Communication" 
                description="Prime handles scheduling, reminders, and follow-up messages, keeping candidates informed every step of the way."
                delay={0.4}
              />
              <AnimatedFeatureCard 
                icon={<BarChart className="h-7 w-7 text-zordie-600 dark:text-zordie-400" />}
                title="Candidate Leaderboard" 
                description="Real-time ranking of candidates with transparency into verification scores and skill assessments."
                delay={0.5}
              />
              <AnimatedFeatureCard 
                icon={<Clock className="h-7 w-7 text-zordie-600 dark:text-zordie-400" />}
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
                icon={<FileCheck className="h-7 w-7 text-zordie-600 dark:text-zordie-400" />}
                title="Smart Resume Upload" 
                description="Upload once and let AI optimize your resume for each job application to maximize your chances."
                delay={0.1}
              />
              <AnimatedFeatureCard 
                icon={<Github className="h-7 w-7 text-zordie-600 dark:text-zordie-400" />}
                title="Project Verification" 
                description="Link GitHub, LinkedIn and projects to verify your skills and stand out with a verification badge."
                delay={0.2}
              />
              <AnimatedFeatureCard 
                icon={<Users className="h-7 w-7 text-zordie-600 dark:text-zordie-400" />}
                title="AI Job Matching" 
                description="Get matched with jobs that fit your verified skills and experience, not just keyword matches."
                delay={0.3}
              />
              <AnimatedFeatureCard 
                icon={<Video className="h-7 w-7 text-zordie-600 dark:text-zordie-400" />}
                title="Practice Interviews" 
                description="Prepare with AI-powered practice interviews tailored to your target roles and get instant feedback."
                delay={0.4}
              />
              <AnimatedFeatureCard 
                icon={<BarChart className="h-7 w-7 text-zordie-600 dark:text-zordie-400" />}
                title="Verified Profile Badge" 
                description="Earn a verification badge to stand out and get noticed by top companies looking for authentic talent."
                delay={0.5}
              />
              <AnimatedFeatureCard 
                icon={<BarChart className="h-7 w-7 text-zordie-600 dark:text-zordie-400" />}
                title="Application Analytics" 
                description="Track your application status, leaderboard position, and get insights on improving your chances."
                delay={0.6}
              />
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const AnimatedFeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
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
      className="relative overflow-hidden p-6 rounded-2xl bg-white/70 dark:bg-zordie-800/70 backdrop-blur-sm border border-zordie-200/50 dark:border-zordie-700/50 shadow-lg hover:border-zordie-400/50 dark:hover:border-zordie-600/50 transition-all duration-300"
    >
      {/* Gradient blur effect in background */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-r from-zordie-100/20 to-accent1/20 dark:from-zordie-600/10 dark:to-accent1/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-zordie-100 dark:bg-zordie-800 flex items-center justify-center mb-4 shadow-inner">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-zordie-900 dark:text-white">{title}</h3>
        <p className="text-zordie-600 dark:text-zordie-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
