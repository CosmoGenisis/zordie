
import React, { useRef } from 'react';
import Layout from '@/components/layout/Layout';
import { motion, useInView } from 'framer-motion';
import { Bot, Users, Calendar, Brain, Target, Heart, GraduationCap, Shield, DollarSign, BarChart3, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import GradientText from '@/components/home/GradientText';
import PrimeHRChatbot from '@/components/chatbot/PrimeHRChatbot';

const ARC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const agents = [
    {
      icon: Bot,
      name: "Prime HR",
      role: "Master Orchestrator",
      description: "Central command center coordinating all agent activities, managing workflows, and providing unified HR oversight.",
      color: "bg-red-500",
      darkColor: "dark:bg-red-500/20",
      slug: "prime-hr"
    },
    {
      icon: Target,
      name: "Optimus",
      role: "Recruitment Commander",
      description: "Advanced ATS capabilities with machine learning algorithms for candidate matching and sourcing.",
      color: "bg-blue-500",
      darkColor: "dark:bg-blue-500/20",
      slug: "optimus"
    },
    {
      icon: Calendar,
      name: "Monica",
      role: "Voice of Engagement",
      description: "Natural language processing for voice calling, scheduling, and personalized communication.",
      color: "bg-purple-500",
      darkColor: "dark:bg-purple-500/20",
      slug: "monica"
    },
    {
      icon: Brain,
      name: "Nova",
      role: "Intelligence Assessor",
      description: "Gamified AI assessments providing deep insights into candidate capabilities and performance predictions.",
      color: "bg-green-500",
      darkColor: "dark:bg-green-500/20",
      slug: "nova"
    },
    {
      icon: Users,
      name: "Orion",
      role: "Strategic Planner",
      description: "Long-term succession planning, strategic talent acquisition, and workforce analytics.",
      color: "bg-indigo-500",
      darkColor: "dark:bg-indigo-500/20",
      slug: "orion"
    },
    {
      icon: Heart,
      name: "Onix",
      role: "Relationship Manager",
      description: "CRM integration and employee engagement automation for exceptional experiences.",
      color: "bg-pink-500",
      darkColor: "dark:bg-pink-500/20",
      slug: "onix"
    },
    {
      icon: GraduationCap,
      name: "Maxx",
      role: "Development Catalyst",
      description: "Comprehensive learning and performance management with personalized development paths.",
      color: "bg-yellow-500",
      darkColor: "dark:bg-yellow-500/20",
      slug: "maxx"
    },
    {
      icon: Shield,
      name: "Archie",
      role: "Compliance Guardian",
      description: "Legal compliance and automated onboarding ensuring regulatory adherence.",
      color: "bg-teal-500",
      darkColor: "dark:bg-teal-500/20",
      slug: "archie"
    },
    {
      icon: DollarSign,
      name: "Laxmi",
      role: "Financial Optimizer",
      description: "Finance integration and payroll automation with cost optimization and budget forecasting.",
      color: "bg-orange-500",
      darkColor: "dark:bg-orange-500/20",
      slug: "laxmi"
    },
    {
      icon: BarChart3,
      name: "Aura",
      role: "Strategic Advisor",
      description: "Advanced HR analytics and predictive insights providing strategic decision support.",
      color: "bg-cyan-500",
      darkColor: "dark:bg-cyan-500/20",
      slug: "aura"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The <GradientText gradient="rainbow" className="text-white">ARC</GradientText> Ecosystem
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              <strong>Autonomous Recruitment and Compliance</strong> - Ten specialized AI agents working in perfect harmony to revolutionize your HR operations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                Explore All Agents <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agents Grid Section */}
      <section ref={sectionRef} className="py-24 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Your <GradientText>AI-Powered HR Team</GradientText>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Each agent is specialized for specific HR functions, working together to create the most advanced HR automation platform available
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
                <Link to={`/arc/${agent.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-red-500/30 bg-white dark:bg-black group cursor-pointer hover:transform hover:-translate-y-2">
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
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {agent.description}
                      </p>
                      <div className="flex items-center text-blue-600 dark:text-red-400 text-sm font-medium">
                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience the Future of HR?
            </h2>
            <p className="text-lg text-blue-100 dark:text-red-100 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using the ARC ecosystem to transform their HR operations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <PrimeHRChatbot initiallyOpen={false} />
    </Layout>
  );
};

export default ARC;
