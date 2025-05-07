import React, { useRef, useState } from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bot, ArrowRight, ShieldCheck, Clock, Brain, Users, FileSearch } from 'lucide-react';
import GradientText from './GradientText';
const HowItWorksSection = () => {
  const [activeTab, setActiveTab] = useState('companies');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.2
  });
  return <section ref={sectionRef} className="container mx-auto px-4 py-24 bg-black">
      <SectionHeading title="How Zordie AI Works" subtitle="A powerful process that transforms hiring outcomes" align="center" titleContent={<>How <GradientText gradient="primary">Zordie AI</GradientText> Works</>} />
      
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="mt-16">
        <div className="flex justify-center">
          <TabsList className="bg-gray-100/80 dark:bg-zordie-800/60 backdrop-blur-sm p-1 rounded-full border border-gray-200 dark:border-zordie-700/50">
            <TabsTrigger value="companies" className="rounded-full px-6 py-2 text-md data-[state=active]:bg-white dark:data-[state=active]:bg-zordie-800 data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-300">
              For Companies
            </TabsTrigger>
            <TabsTrigger value="jobseekers" className="rounded-full px-6 py-2 text-md data-[state=active]:bg-white dark:data-[state=active]:bg-zordie-800 data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-300">
              For Job Seekers
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="companies" className="mt-10">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}>
            {companySteps.map((step, index) => <motion.div key={index} variants={{
            hidden: {
              opacity: 0,
              y: 20
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6
              }
            }
          }} className="relative bg-white dark:bg-zordie-800/50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-zordie-700/50 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-indigo-600 to-violet-600"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800/30">
                      <step.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800/30">
                      <span className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">{index + 1}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{step.description}</p>
                  
                  <div className="space-y-2">
                    {step.features.map((feature, idx) => <div key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2"></div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>)}
                  </div>
                </div>
              </motion.div>)}
          </motion.div>
          
          <motion.div className="mt-16 text-center" initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 20
        }} transition={{
          duration: 0.5,
          delay: 0.8
        }}>
            <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-medium">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="jobseekers" className="mt-10">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}>
            {jobSeekerSteps.map((step, index) => <motion.div key={index} variants={{
            hidden: {
              opacity: 0,
              y: 20
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6
              }
            }
          }} className="relative bg-white dark:bg-zordie-800/50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-zordie-700/50 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-violet-600 to-indigo-600"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/30 border border-violet-200 dark:border-violet-800/30">
                      <step.icon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/30 border border-violet-200 dark:border-violet-800/30">
                      <span className="text-lg font-semibold text-violet-600 dark:text-violet-400">{index + 1}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{step.description}</p>
                  
                  <div className="space-y-2">
                    {step.features.map((feature, idx) => <div key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mr-2"></div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>)}
                  </div>
                </div>
              </motion.div>)}
          </motion.div>
          
          <motion.div className="mt-16 text-center" initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 20
        }} transition={{
          duration: 0.5,
          delay: 0.8
        }}>
            <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-medium">
              Get Verified <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </TabsContent>
      </Tabs>
      
      {/* AI verification showcase */}
      <motion.div className="mt-24 bg-white dark:bg-zordie-800/50 rounded-xl shadow-lg border border-gray-100 dark:border-zordie-700/50 p-8" initial={{
      opacity: 0,
      y: 30
    }} animate={isInView ? {
      opacity: 1,
      y: 0
    } : {
      opacity: 0,
      y: 30
    }} transition={{
      duration: 0.7
    }}>
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            AI-Powered <GradientText>Candidate Screening</GradientText> Flow
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our intelligent system verifies candidate information across multiple dimensions to ensure you only interview qualified talent.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {verificationSteps.map((step, index) => <div key={index} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center z-10">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h4>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </div>)}
        </div>
      </motion.div>
    </section>;
};
const companySteps = [{
  icon: FileSearch,
  title: "AI Resume Verification",
  description: "Our advanced algorithms analyze candidate resumes to detect inconsistencies and verify claimed skills.",
  features: ["99.4% accuracy rate", "Multi-source verification", "Fake resume detection"]
}, {
  icon: Brain,
  title: "Intelligent Matching",
  description: "Matching verified candidates with your specific job requirements for optimal fit.",
  features: ["Skill-based matching", "Cultural fit analysis", "Automated ranking"]
}, {
  icon: Clock,
  title: "Streamlined Interviews",
  description: "Schedule and conduct AI-assisted interviews in one unified platform.",
  features: ["Calendar integration", "Video interviews", "AI feedback analysis"]
}, {
  icon: ShieldCheck,
  title: "Data-Driven Decisions",
  description: "Make confident hiring choices based on verified data and predictive analytics.",
  features: ["Performance prediction", "Comparison tools", "Risk assessment"]
}];
const jobSeekerSteps = [{
  icon: Users,
  title: "Create Your Profile",
  description: "Build a comprehensive profile showcasing your skills, experience, and achievements.",
  features: ["Quick profile builder", "AI optimization tips", "Portfolio integration"]
}, {
  icon: ShieldCheck,
  title: "Verify Your Credentials",
  description: "Get your skills and experience authenticated to stand out from the competition.",
  features: ["GitHub integration", "Certificate verification", "Experience validation"]
}, {
  icon: Bot,
  title: "AI Interview Prep",
  description: "Practice with our AI interviewer to prepare for your real interviews.",
  features: ["Industry-specific questions", "Performance feedback", "Improvement suggestions"]
}, {
  icon: ArrowRight,
  title: "Get Matched",
  description: "Our AI connects you with companies looking for your verified skill set.",
  features: ["Personalized matches", "Direct introductions", "Feedback loop"]
}];
const verificationSteps = [{
  icon: FileSearch,
  title: "Document Analysis",
  description: "Advanced AI scans and verifies resume content against multiple data sources."
}, {
  icon: ShieldCheck,
  title: "Credential Verification",
  description: "Authentication of certifications, degrees, and professional qualifications."
}, {
  icon: Bot,
  title: "Skill Assessment",
  description: "Objective validation of technical and soft skills through adaptive testing."
}];
export default HowItWorksSection;