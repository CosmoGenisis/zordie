import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Brain, 
  Bot, 
  Target, 
  Cpu,
  CheckCircle, 
  Zap, 
  Lightbulb, 
  CircleCheck,
  Code,
  MessageSquare, 
  Layers,
  Clock,
  VideoIcon,
  FileSpreadsheet,
  Users,
  BarChart3,
  Sparkles,
  Mic,
  ChevronRight,
  ChevronDown,
  LucideIcon,
  Building,
  Briefcase 
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";

interface FaqItemProps {
  question: string;
  answer: string;
}

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface PracticeCard {
  icon: LucideIcon;
  title: string;
  description: string;
  skills: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  time: string;
  questions: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden transition-all duration-300 border-0 shadow-md hover:shadow-xl bg-gradient-to-br from-white to-gray-50 dark:from-zordie-900 dark:to-zordie-950">
        <CardContent className="p-8">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-zordie-500 to-zordie-600 mb-6 text-white">
            <Icon className="w-7 h-7" />
          </div>
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const PracticeCardComponent: React.FC<{ card: PracticeCard }> = ({ card }) => {
  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Intermediate': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Advanced': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400';
    }
  };
  
  return (
    <motion.div 
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden transition-all duration-300 border-0 shadow-md hover:shadow-xl bg-white dark:bg-zordie-800">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-zordie-100 dark:bg-zordie-700 text-zordie-600 dark:text-zordie-300 mr-4">
              <card.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{card.title}</h3>
              <div className="flex items-center mt-1">
                <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(card.difficulty)} mr-2`}>
                  {card.difficulty}
                </span>
                <span className="flex items-center text-xs text-gray-500 dark:text-gray-400 mr-2">
                  <Clock className="w-3 h-3 mr-1" />
                  {card.time}
                </span>
                <span className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <MessageSquare className="w-3 h-3 mr-1" />
                  {card.questions} questions
                </span>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4">{card.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {card.skills.map((skill, index) => (
              <Badge key={index} variant="outline" className="bg-gray-50 dark:bg-zordie-900 text-gray-700 dark:text-gray-300">
                {skill}
              </Badge>
            ))}
          </div>
          
          <div className="pt-4 border-t border-gray-100 dark:border-zordie-700 flex justify-between items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">Popular interview</span>
            <Button variant="ghost" className="text-zordie-600 dark:text-zordie-400 hover:text-zordie-700 hover:bg-zordie-50 dark:hover:bg-zordie-900">
              Start Practice
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  return (
    <AccordionItem value={question}>
      <AccordionTrigger className="text-left text-gray-900 dark:text-white font-medium">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-gray-600 dark:text-gray-300">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, company, quote, avatar }) => {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white dark:bg-zordie-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-zordie-700"
    >
      <div className="flex items-center mb-6">
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border-2 border-zordie-100"
        />
        <div className="ml-4">
          <p className="font-semibold text-gray-900 dark:text-white">{name}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}{company ? `, ${company}` : ''}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {Array(5).fill(0).map((_, i) => (
          <span key={i} className="text-yellow-400">★</span>
        ))}
      </div>
      <p className="text-gray-600 dark:text-gray-300 italic">&ldquo;{quote}&rdquo;</p>
    </motion.div>
  );
};

const AIInterview = () => {
  const [progress, setProgress] = useState(70);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    }
  };
  
  return (
    <Layout>
      <div className="relative overflow-hidden bg-gradient-to-b from-zordie-900 to-zordie-800 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-white/[0.05]" />
        </div>
        <div className="relative z-10 px-4 py-28 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Badge className="mb-5 px-4 py-1.5 text-sm font-medium bg-white/10 text-white backdrop-blur-sm border border-white/10">
              AI-Powered Interview Practice
            </Badge>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
              Master Your <span className="text-zordie-400 relative">
                <span className="relative inline-block">
                  Job Interviews
                  <svg className="absolute -bottom-1 left-0 w-full h-3 text-zordie-600/50" viewBox="0 0 200 8" preserveAspectRatio="none">
                    <path d="M0,5 C50,0 150,0 200,5" fill="none" stroke="currentColor" strokeWidth="3"></path>
                  </svg>
                </span>
              </span>
            </h1>
            <p className="max-w-2xl mx-auto mb-10 text-xl text-zordie-100">
              Practice with our AI-powered interview simulator and get personalized feedback to improve your interview skills.
            </p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/signup">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-zordie-800 font-medium px-8 shadow-lg hover:shadow-zordie-600/30 transition-all duration-300">
                  Start Practicing Now
                </Button>
              </Link>
              <Link to="#features">
                <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
                  How It Works
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-16 relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm bg-black/30 max-w-4xl mx-auto">
              <div className="p-8 pb-0">
                <div className="flex items-start mb-6">
                  <div className="w-10 h-10 overflow-hidden rounded-full bg-zordie-600 flex items-center justify-center mr-4">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 p-4 bg-white/10 rounded-t-xl rounded-br-xl">
                    <p className="text-white">Tell me about a time you had to deal with a difficult team member. How did you handle the situation?</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6 ml-16">
                  <div className="flex-1 p-4 bg-zordie-600/30 rounded-t-xl rounded-bl-xl">
                    <p className="text-white">In my previous role, I worked with a team member who consistently missed deadlines. Instead of escalating immediately, I arranged a private meeting to understand if they were facing any challenges. It turned out they were overwhelmed with multiple projects. I helped them prioritize tasks and shared some time management techniques I found useful. We also established a more frequent check-in schedule to catch issues early. Within a few weeks, their performance improved significantly, and we developed a better working relationship.</p>
                  </div>
                  <div className="w-10 h-10 overflow-hidden rounded-full bg-zordie-200 flex items-center justify-center ml-4">
                    <Mic className="w-6 h-6 text-zordie-800" />
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="w-10 h-10 overflow-hidden rounded-full bg-zordie-600 flex items-center justify-center mr-4">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 p-4 bg-white/10 rounded-t-xl rounded-br-xl">
                    <p className="text-white">Great answer! You demonstrated empathy, proactive problem-solving, and leadership skills. Is there anything specific you learned from this experience that you apply to your work today?</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-t from-zordie-950 to-transparent h-24 w-full absolute bottom-0 flex items-center justify-center">
                <Badge className="bg-white/20 text-white border-white/10 backdrop-blur-sm">
                  Live AI Interview Simulation
                </Badge>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -top-6 -left-6 bg-white dark:bg-zordie-800 p-4 rounded-xl shadow-lg hidden lg:block"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-zordie-500 to-zordie-600 flex items-center justify-center text-white">
                  <Brain className="h-5 w-5" />
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900 dark:text-white">AI Feedback</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Real-time guidance</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-zordie-800 p-4 rounded-xl shadow-lg hidden lg:block"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-zordie-500 to-zordie-600 flex items-center justify-center text-white">
                  <Target className="h-5 w-5" />
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900 dark:text-white">Personalized Questions</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Tailored to your industry</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-zordie-950 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {interviewStats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-zordie-600 dark:text-zordie-400 mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <div id="features" className="py-24 bg-white dark:bg-zordie-950">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionHeading
            title="How AI Interviews Work"
            subtitle="Practice, learn, and improve with our advanced interview simulator"
            align="center"
          />
          
          <motion.div 
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={cardVariant}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      <div className="py-24 bg-gray-50 dark:bg-zordie-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionHeading
            title="Practice Interview Types"
            subtitle="Prepare for any interview scenario with our specialized practice modules"
            align="center"
          />
          
          <div className="mt-16">
            <Tabs defaultValue="technical" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12">
                <TabsTrigger value="technical" className="text-base">Technical Interviews</TabsTrigger>
                <TabsTrigger value="behavioral" className="text-base">Behavioral Interviews</TabsTrigger>
                <TabsTrigger value="industry" className="text-base">Industry-Specific</TabsTrigger>
              </TabsList>
              
              <TabsContent value="technical" className="mt-0">
                <motion.div 
                  className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  {technicalInterviews.map((interview, index) => (
                    <motion.div key={index} variants={cardVariant}>
                      <PracticeCardComponent card={interview} />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
              
              <TabsContent value="behavioral" className="mt-0">
                <motion.div 
                  className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  {behavioralInterviews.map((interview, index) => (
                    <motion.div key={index} variants={cardVariant}>
                      <PracticeCardComponent card={interview} />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
              
              <TabsContent value="industry" className="mt-0">
                <motion.div 
                  className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  {industryInterviews.map((interview, index) => (
                    <motion.div key={index} variants={cardVariant}>
                      <PracticeCardComponent card={interview} />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-zordie-600 to-zordie-500 hover:from-zordie-500 hover:to-zordie-600 text-white font-medium px-6 shadow-md hover:shadow-lg transition-all duration-300">
                View All Practice Interviews <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      <div className="py-24 bg-white dark:bg-zordie-950">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-5 px-3 py-1.5 bg-zordie-100 text-zordie-800 dark:bg-zordie-800 dark:text-zordie-100">
                AI-Powered Insights
              </Badge>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Detailed Feedback & <span className="text-zordie-600 dark:text-zordie-400">Analytics</span>
              </h2>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                Receive comprehensive feedback after each practice session to identify strengths, areas for improvement, and actionable tips to enhance your interview performance.
              </p>
              
              <div className="space-y-8">
                <div className="bg-gray-50 dark:bg-zordie-900/50 rounded-xl p-6 border border-gray-100 dark:border-zordie-800">
                  <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">Communication Clarity</h3>
                  <div className="flex items-center mb-2">
                    <span className="text-gray-600 dark:text-gray-300 text-sm mr-2">78%</span>
                    <Progress value={78} className="h-2" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm ml-2">Strong</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Your explanations are clear and concise. Consider using more specific examples to illustrate key points.</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-zordie-900/50 rounded-xl p-6 border border-gray-100 dark:border-zordie-800">
                  <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">Technical Accuracy</h3>
                  <div className="flex items-center mb-2">
                    <span className="text-gray-600 dark:text-gray-300 text-sm mr-2">92%</span>
                    <Progress value={92} className="h-2" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm ml-2">Excellent</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Your technical knowledge is strong. You explained complex concepts accurately and demonstrated deep understanding.</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-zordie-900/50 rounded-xl p-6 border border-gray-100 dark:border-zordie-800">
                  <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">Problem-Solving Approach</h3>
                  <div className="flex items-center mb-2">
                    <span className="text-gray-600 dark:text-gray-300 text-sm mr-2">85%</span>
                    <Progress value={85} className="h-2" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm ml-2">Strong</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">You demonstrated structured thinking and methodical approach. Try verbalizing your thought process more clearly.</p>
                </div>
              </div>
              
              <motion.div 
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link to="/signup">
                  <Button className="bg-gradient-to-r from-zordie-600 to-zordie-500 hover:from-zordie-500 hover:to-zordie-600 text-white font-medium px-6 shadow-md hover:shadow-lg transition-all duration-300">
                    Try a Practice Interview <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white dark:bg-zordie-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-zordie-700">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-zordie-100 dark:bg-zordie-700 text-zordie-600 dark:text-zordie-300 mr-4">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">AI Interview Feedback</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Senior Software Engineer Interview</p>
                  </div>
                </div>
                
                <div className="p-6 bg-gray-50 dark:bg-zordie-900/50 rounded-xl mb-6 border border-gray-100 dark:border-zordie-800">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Strengths</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">Strong technical knowledge of React and state management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">Clear explanation of previous project architecture</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">Excellent problem-solving approach with logical steps</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 bg-gray-50 dark:bg-zordie-900/50 rounded-xl mb-6 border border-gray-100 dark:border-zordie-800">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Areas for Improvement</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Lightbulb className="w-5 h-5 text-zordie-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">Consider using more specific metrics when discussing project impacts</span>
                    </li>
                    <li className="flex items-start">
                      <Lightbulb className="w-5 h-5 text-zordie-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">Practice more concise answers for behavioral questions</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 bg-zordie-50 dark:bg-zordie-800/50 rounded-xl border border-zordie-100 dark:border-zordie-700">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">AI Coaching Tips</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">When discussing system design, start with clarifying requirements before jumping into technical solutions. This demonstrates thorough thinking and attention to business needs.</p>
                  <Button variant="outline" className="w-full border-zordie-200 hover:border-zordie-300 dark:border-zordie-700 dark:hover:border-zordie-600">
                    View Full Interview Analysis
                  </Button>
                </div>
              </div>
              
              <motion.div 
                className="absolute -top-6 -right-6 bg-white dark:bg-zordie-800 p-4 rounded-xl shadow-lg border dark:border-zordie-700 hidden lg:block"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-zordie-500 to-zordie-600 flex items-center justify-center text-white font-bold">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900 dark:text-white">87% Improvement</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">After 5 practice sessions</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="py-24 bg-gray-50 dark:bg-zordie-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionHeading
            title="Success Stories"
            subtitle="Hear from candidates who aced their interviews after practicing with our AI"
            align="center"
          />
          
          <motion.div 
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={cardVariant}>
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  company={testimonial.company}
                  quote={testimonial.quote}
                  avatar={testimonial.avatar}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      <div className="py-24 bg-white dark:bg-zordie-950">
        <div className="px-4 mx-auto max-w-3xl sm:px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Common questions about our AI interview practice platform"
            align="center"
          />
          
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((faq, index) => (
                <FaqItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
      
      <div className="py-24 bg-zordie-900 bg-[url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80')] bg-no-repeat bg-cover bg-center">
        <div className="absolute inset-0 bg-zordie-900/80"></div>
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge className="mb-6 px-4 py-1.5 text-sm font-medium bg-white/20 text-white backdrop-blur-sm border border-white/10">
              Get Interview Ready
            </Badge>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
              Ready to ace your next interview?
            </h2>
            <p className="mb-10 text-lg text-zordie-100">
              Practice with our AI interview simulator today and confidently step into any interview scenario.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/signup">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-zordie-800 font-medium px-8 shadow-xl shadow-zordie-950/20 transition-all duration-300">
                  Start Free Practice
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 transition-all duration-300">
                  View Premium Plans
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

const interviewStats = [
  { value: "87%", label: "Increased confidence" },
  { value: "2.5x", label: "More job offers" },
  { value: "93%", label: "Success rate" },
  { value: "1000+", label: "Practice questions" }
];

const features = [
  {
    icon: Brain,
    title: "AI-Powered Questions",
    description: "Our intelligent system generates industry-specific questions tailored to your experience level and target role."
  },
  {
    icon: VideoIcon,
    title: "Video Interview Simulation",
    description: "Practice with realistic video interviews that analyze your facial expressions, tone, and delivery."
  },
  {
    icon: MessageSquare,
    title: "Real-time Feedback",
    description: "Receive instant feedback on your answers, communication style, and areas for improvement."
  },
  {
    icon: Bot,
    title: "Adaptive Follow-up Questions",
    description: "The AI adapts follow-up questions based on your responses, just like a real interviewer would."
  },
  {
    icon: BarChart3,
    title: "Detailed Performance Analytics",
    description: "Track your improvement over time with comprehensive analytics and personalized insights."
  },
  {
    icon: FileSpreadsheet,
    title: "Answer Templates & Examples",
    description: "Access a library of model answers and templates to help structure your responses effectively."
  }
];

const technicalInterviews: PracticeCard[] = [
  {
    icon: Code,
    title: "Full-Stack Developer",
    description: "Practice technical questions covering front-end, back-end, and system design concepts.",
    skills: ["React", "Node.js", "APIs", "System Design"],
    difficulty: "Intermediate",
    time: "45 min",
    questions: 15
  },
  {
    icon: Cpu,
    title: "Data Structures & Algorithms",
    description: "Prepare for algorithm-focused interviews with coding challenges and problem-solving questions.",
    skills: ["DSA", "Problem Solving", "Time Complexity", "Optimization"],
    difficulty: "Advanced",
    time: "60 min",
    questions: 12
  },
  {
    icon: Layers,
    title: "Frontend Development",
    description: "Practice frontend-specific questions covering React, state management, and UI performance.",
    skills: ["React", "JavaScript", "CSS", "Performance"],
    difficulty: "Beginner",
    time: "30 min",
    questions: 10
  }
];

const behavioralInterviews: PracticeCard[] = [
  {
    icon: Users,
    title: "Leadership & Teamwork",
    description: "Practice questions about team leadership, conflict resolution, and collaboration.",
    skills: ["Leadership", "Conflict Resolution", "Team Management"],
    difficulty: "Intermediate",
    time: "40 min",
    questions: 12
  },
  {
    icon: Target,
    title: "Problem-Solving Stories",
    description: "Prepare compelling narratives about how you've overcome challenges and solved problems.",
    skills: ["Problem Solving", "Storytelling", "STAR Method"],
    difficulty: "Beginner",
    time: "35 min",
    questions: 10
  },
  {
    icon: Zap,
    title: "Adaptability & Growth",
    description: "Practice discussing how you've adapted to changes and demonstrated continuous learning.",
    skills: ["Adaptability", "Learning", "Change Management"],
    difficulty: "Intermediate",
    time: "30 min",
    questions: 8
  }
];

const industryInterviews: PracticeCard[] = [
  {
    icon: Lightbulb,
    title: "Tech Startup Interview",
    description: "Prepare for the unique demands of startup interviews focusing on versatility and ownership.",
    skills: ["Ownership", "Versatility", "Fast-paced Environment"],
    difficulty: "Intermediate",
    time: "45 min",
    questions: 14
  },
  {
    icon: Building,
    title: "Enterprise Company Interview",
    description: "Practice for structured interviews at large organizations with process-oriented questions.",
    skills: ["Process", "Collaboration", "Enterprise Systems"],
    difficulty: "Intermediate",
    time: "50 min",
    questions: 15
  },
  {
    icon: Briefcase,
    title: "Remote Work Interview",
    description: "Prepare for questions about remote collaboration, communication, and self-management.",
    skills: ["Remote Collaboration", "Self-management", "Communication"],
    difficulty: "Beginner",
    time: "35 min",
    questions: 12
  }
];

const testimonials = [
  {
    name: "David Chen",
    role: "Software Engineer",
    company: "Tech Innovations",
    quote: "After five practice sessions with the AI interviewer, I felt so much more confident. The feedback helped me structure my answers better, and I landed my dream job at a top tech company!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "InnovateCorp",
    quote: "The industry-specific questions were incredibly helpful. I was asked almost identical questions in my actual interview! The detailed feedback on my communication style was invaluable.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Michael Taylor",
    role: "Data Scientist",
    company: "DataTech Solutions",
    quote: "The technical practice interviews helped me identify gaps in my knowledge that I hadn't realized. After addressing those areas, I felt much more prepared and aced my interview!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  }
];

const faqItems = [
  {
    question: "How does the AI interview simulator work?",
    answer: "Our AI interview simulator uses advanced natural language processing to conduct realistic interview conversations. It asks industry-specific questions, adapts follow-up questions based on your responses, and provides real-time feedback on your answers, communication style, and body language."
  },
  {
    question: "What types of interviews can I practice?",
    answer: "You can practice technical interviews (coding, system design), behavioral interviews (leadership, problem-solving), and industry-specific interviews tailored to different company types and roles. Each practice session is customized to your experience level and target position."
  },
  {
    question: "Can I practice using video?",
    answer: "Yes, our platform supports video interviews that analyze both verbal and non-verbal communication cues. This includes facial expressions, eye contact, and body language to provide comprehensive feedback on your overall presentation."
  },
  {
    question: "How accurate is the feedback compared to real interviews?",
    answer: "Our AI has been trained on thousands of real interview scenarios and feedback from actual hiring managers. Our users report a 93% correlation between our AI feedback and the feedback they receive in real interviews."
  },
  {
    question: "How many practice interviews are included in the free plan?",
    answer: "The free plan includes 3 practice interviews per month with basic feedback. Premium plans offer unlimited practice sessions, more detailed analytics, and industry-specific interview preparation."
  },
  {
    question: "Can I get feedback on custom interview questions?",
    answer: "Yes, premium users can upload specific job descriptions or custom questions to practice for particular roles or companies they're interviewing with."
  }
];

export default AIInterview;
