
import React, { useRef } from 'react';
import Layout from '@/components/layout/Layout';
import { motion, useInView } from 'framer-motion';
import { Bot, ArrowRight, CheckCircle, Users, Shield, Clock, Brain, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import GradientText from '@/components/home/GradientText';
import PrimeHRChatbot from '@/components/chatbot/PrimeHRChatbot';

const PrimeHR = () => {
  const featuresRef = useRef(null);
  const benefitsRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: false, amount: 0.2 });
  const benefitsInView = useInView(benefitsRef, { once: false, amount: 0.2 });

  const capabilities = [
    {
      icon: Users,
      title: "Workflow Orchestration",
      description: "Coordinates all agent activities with intelligent task distribution and priority management."
    },
    {
      icon: Shield,
      title: "Security Management",
      description: "Maintains enterprise-grade security protocols and access controls across all HR systems."
    },
    {
      icon: Clock,
      title: "Resource Optimization",
      description: "Dynamically allocates system resources and manages auto-scaling based on demand."
    },
    {
      icon: Brain,
      title: "Decision Intelligence",
      description: "Advanced decision-making algorithms that learn from organizational patterns and optimize processes."
    }
  ];

  const benefits = [
    {
      title: "90% Reduction in Manual Tasks",
      description: "Prime HR automates routine administrative work, freeing your team for strategic initiatives.",
      metric: "90%"
    },
    {
      title: "Real-time System Monitoring",
      description: "Continuous monitoring ensures optimal performance and immediate issue resolution.",
      metric: "24/7"
    },
    {
      title: "Seamless Integration",
      description: "Connects with existing HR systems and tools without disrupting current workflows.",
      metric: "100+"
    },
    {
      title: "Scalable Architecture",
      description: "Grows with your organization from startup to enterprise without performance loss.",
      metric: "∞"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-900 text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-24 h-24 rounded-full bg-red-500 flex items-center justify-center mx-auto mb-8">
              <Bot className="w-12 h-12 text-white" />
            </div>
            <Badge className="bg-white/20 text-white border-none mb-6 px-4 py-2">
              ARC Agent
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <GradientText gradient="rainbow" className="text-white">Prime HR</GradientText>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-4xl mx-auto">
              <strong>The Master Orchestrator</strong> - Central command center coordinating all agent activities, managing workflows, and providing unified HR oversight with advanced decision-making algorithms
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-red-700 hover:bg-gray-100">
                  Start Using Prime HR <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/arc">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-700">
                  View All Agents
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section ref={featuresRef} className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              <GradientText>Core Capabilities</GradientText>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Prime HR's advanced features ensure seamless orchestration of your entire HR ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-red-500/30 bg-white dark:bg-black group text-center">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <capability.icon className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                      {capability.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {capability.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              <GradientText>Measurable Impact</GradientText>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See the tangible benefits Prime HR delivers to your organization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-red-500/30 bg-white dark:bg-black">
                  <CardHeader>
                    <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">
                      {benefit.metric}
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How <GradientText>Prime HR</GradientText> Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Understanding Prime HR's intelligent orchestration process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600 dark:text-red-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Monitor & Analyze</h3>
              <p className="text-gray-600 dark:text-gray-300">Continuously monitors all HR systems and processes to identify optimization opportunities.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600 dark:text-red-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Orchestrate & Coordinate</h3>
              <p className="text-gray-600 dark:text-gray-300">Intelligently distributes tasks among specialized agents and manages workflow dependencies.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600 dark:text-red-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Optimize & Report</h3>
              <p className="text-gray-600 dark:text-gray-300">Provides real-time insights and continuously optimizes processes based on performance data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Prime HR's Power?
            </h2>
            <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
              Start orchestrating your HR operations with the intelligence and efficiency of Prime HR
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-red-700 hover:bg-gray-100">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/arc">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-700">
                  Explore Other Agents
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

export default PrimeHR;
