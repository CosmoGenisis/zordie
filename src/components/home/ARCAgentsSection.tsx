
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Bot, Users, Calendar, Brain, Target, Heart, GraduationCap, Shield, DollarSign, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ARCAgentsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const agents = [
    {
      icon: Bot,
      name: "Prime HR",
      role: "Master Orchestrator",
      description: "Central command center coordinating all agent activities, managing workflows, and providing unified HR oversight with advanced decision-making algorithms.",
      color: "bg-red-500",
      darkColor: "dark:bg-red-500/20"
    },
    {
      icon: Target,
      name: "Optimus",
      role: "Recruitment Commander",
      description: "Advanced ATS capabilities with machine learning algorithms for candidate matching, sourcing, and selection optimization across multiple platforms.",
      color: "bg-blue-500",
      darkColor: "dark:bg-blue-500/20"
    },
    {
      icon: Calendar,
      name: "Monica",
      role: "Voice of Engagement",
      description: "Natural language processing for voice calling, scheduling, and personalized communication with candidates and employees in multiple languages.",
      color: "bg-purple-500",
      darkColor: "dark:bg-purple-500/20"
    },
    {
      icon: Brain,
      name: "Nova",
      role: "Intelligence Assessor",
      description: "Gamified AI assessments providing deep insights into candidate capabilities, personality traits, and job performance predictions.",
      color: "bg-green-500",
      darkColor: "dark:bg-green-500/20"
    },
    {
      icon: Users,
      name: "Orion",
      role: "Strategic Planner",
      description: "Long-term succession planning, strategic talent acquisition, and workforce analytics for organizational success and growth.",
      color: "bg-indigo-500",
      darkColor: "dark:bg-indigo-500/20"
    },
    {
      icon: Heart,
      name: "Onix",
      role: "Relationship Manager",
      description: "CRM integration and employee engagement automation ensuring exceptional candidate and employee experiences throughout their journey.",
      color: "bg-pink-500",
      darkColor: "dark:bg-pink-500/20"
    },
    {
      icon: GraduationCap,
      name: "Maxx",
      role: "Development Catalyst",
      description: "Comprehensive learning and performance management with personalized development paths and automated performance tracking systems.",
      color: "bg-yellow-500",
      darkColor: "dark:bg-yellow-500/20"
    },
    {
      icon: Shield,
      name: "Archie",
      role: "Compliance Guardian",
      description: "Legal compliance and automated onboarding ensuring regulatory adherence across multiple jurisdictions with document verification.",
      color: "bg-teal-500",
      darkColor: "dark:bg-teal-500/20"
    },
    {
      icon: DollarSign,
      name: "Laxmi",
      role: "Financial Optimizer",
      description: "Finance integration and payroll automation with cost optimization, budget forecasting, and comprehensive benefits administration.",
      color: "bg-orange-500",
      darkColor: "dark:bg-orange-500/20"
    },
    {
      icon: BarChart3,
      name: "Aura",
      role: "Strategic Advisor",
      description: "Advanced HR analytics and predictive insights providing strategic decision support through sophisticated data science techniques.",
      color: "bg-cyan-500",
      darkColor: "dark:bg-cyan-500/20"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            The ARC Ecosystem: <span className="bg-blue-purple-gradient dark:bg-red-gradient bg-clip-text text-transparent">Ten Specialized AI Agents</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the autonomous AI agents working in perfect harmony to revolutionize your HR operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-red-500/30 bg-white dark:bg-black group">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-full ${agent.color} ${agent.darkColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <agent.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">{agent.name}</CardTitle>
                  <CardDescription className="text-sm font-medium text-blue-600 dark:text-red-400">
                    {agent.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {agent.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-black rounded-xl shadow-lg border border-gray-200 dark:border-red-500/30 p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="bg-blue-purple-gradient dark:bg-red-gradient bg-clip-text text-transparent">ARC</span> - Autonomous Recruitment and Compliance
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Our revolutionary ecosystem orchestrates ten specialized AI agents through advanced machine learning algorithms, 
              delivering unprecedented automation, accuracy, and insight across every facet of human resource management.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ARCAgentsSection;
