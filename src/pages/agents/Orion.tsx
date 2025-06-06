
import React, { useRef } from 'react';
import Layout from '@/components/layout/Layout';
import { motion, useInView } from 'framer-motion';
import { Users, ArrowRight, TrendingUp, Target, Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import GradientText from '@/components/home/GradientText';
import PrimeHRChatbot from '@/components/chatbot/PrimeHRChatbot';

const Orion = () => {
  const featuresRef = useRef(null);
  const benefitsRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: false, amount: 0.2 });
  const benefitsInView = useInView(benefitsRef, { once: false, amount: 0.2 });

  const capabilities = [
    {
      icon: TrendingUp,
      title: "Succession Planning",
      description: "Advanced algorithms for identifying and developing future leaders within your organization."
    },
    {
      icon: Target,
      title: "Strategic Talent Acquisition",
      description: "Long-term hiring strategies aligned with business goals and market projections."
    },
    {
      icon: Briefcase,
      title: "Workforce Analytics",
      description: "Comprehensive analysis of current workforce composition and skill gap identification."
    },
    {
      icon: Calendar,
      title: "Future Planning",
      description: "Predictive modeling for talent needs based on business growth and market trends."
    }
  ];

  const benefits = [
    {
      title: "Leadership Readiness",
      description: "Ensure critical positions have qualified successors ready for leadership transitions.",
      metric: "100%"
    },
    {
      title: "Planning Accuracy",
      description: "Highly accurate workforce planning that aligns with business objectives.",
      metric: "92%"
    },
    {
      title: "Skill Gap Reduction",
      description: "Proactive identification and addressing of organizational skill gaps.",
      metric: "75%"
    },
    {
      title: "Future Visibility",
      description: "Extended planning horizon for strategic talent decisions and investments.",
      metric: "5 Years"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900 text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-24 h-24 rounded-full bg-indigo-500 flex items-center justify-center mx-auto mb-8">
              <Users className="w-12 h-12 text-white" />
            </div>
            <Badge className="bg-white/20 text-white border-none mb-6 px-4 py-2">
              ARC Agent
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <GradientText gradient="rainbow" className="text-white">Orion</GradientText>
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-4xl mx-auto">
              <strong>The Strategic Planner</strong> - Long-term succession planning, strategic talent acquisition, and workforce analytics for organizational excellence
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-indigo-700 hover:bg-gray-100">
                  Start Using Orion <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/arc">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-700">
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
              Orion provides strategic workforce planning and succession management for long-term organizational success
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
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-indigo-500/30 bg-white dark:bg-black group text-center">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <capability.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
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
              See how Orion enables strategic workforce planning and organizational resilience
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
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-indigo-500/30 bg-white dark:bg-black">
                  <CardHeader>
                    <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
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

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Plan Your Workforce Future?
            </h2>
            <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
              Let Orion guide your strategic talent planning and succession management initiatives
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-indigo-700 hover:bg-gray-100">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/arc">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-700">
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

export default Orion;
