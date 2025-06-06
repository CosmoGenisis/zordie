import React, { useRef } from 'react';
import Layout from '@/components/layout/Layout';
import { motion, useInView } from 'framer-motion';
import { Zap, Shield, Globe, TrendingUp, Clock, Users, CheckCircle, Target, Building, UserCheck, Briefcase, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import GradientText from '@/components/home/GradientText';
import PrimeHRChatbot from '@/components/chatbot/PrimeHRChatbot';

const Solutions = () => {
  const solutionsRef = useRef(null);
  const benefitsRef = useRef(null);
  const solutionsInView = useInView(solutionsRef, { once: false, amount: 0.2 });
  const benefitsInView = useInView(benefitsRef, { once: false, amount: 0.2 });

  const solutions = [
    {
      icon: Building,
      title: "Enterprise HR Automation",
      description: "Complete end-to-end HR automation for large organizations with complex workflows and compliance requirements.",
      features: ["Multi-location management", "Advanced compliance", "Custom workflows", "Enterprise security"],
      color: "bg-blue-500",
      darkColor: "dark:bg-blue-500/20"
    },
    {
      icon: UserCheck,
      title: "Talent Acquisition Excellence",
      description: "Revolutionary recruitment platform with AI-powered candidate matching and verification systems.",
      features: ["360° candidate verification", "AI-powered matching", "Automated screening", "Global talent pools"],
      color: "bg-green-500",
      darkColor: "dark:bg-green-500/20"
    },
    {
      icon: Briefcase,
      title: "SMB HR Transformation",
      description: "Scalable HR solutions designed specifically for small to medium businesses looking to grow efficiently.",
      features: ["Quick setup", "Affordable pricing", "Essential HR tools", "Growth-ready scaling"],
      color: "bg-purple-500",
      darkColor: "dark:bg-purple-500/20"
    },
    {
      icon: Target,
      title: "Compliance Management",
      description: "Automated compliance monitoring and management across multiple jurisdictions and regulations.",
      features: ["Multi-jurisdiction support", "Automated updates", "Risk assessment", "Audit trails"],
      color: "bg-orange-500",
      darkColor: "dark:bg-orange-500/20"
    },
    {
      icon: TrendingUp,
      title: "HR Analytics & Insights",
      description: "Transform your HR data into strategic business intelligence with predictive analytics and reporting.",
      features: ["Predictive analytics", "Real-time dashboards", "Custom reports", "Strategic insights"],
      color: "bg-indigo-500",
      darkColor: "dark:bg-indigo-500/20"
    },
    {
      icon: Globe,
      title: "Global Workforce Management",
      description: "Seamlessly manage distributed teams across multiple countries with localized HR processes.",
      features: ["Multi-language support", "Local compliance", "Currency management", "Cultural adaptation"],
      color: "bg-teal-500",
      darkColor: "dark:bg-teal-500/20"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "90% Faster Hiring",
      description: "Reduce time-to-hire dramatically with automated workflows and AI-powered candidate matching.",
      metric: "80% reduction in admin time"
    },
    {
      icon: Shield,
      title: "100% Compliance",
      description: "Ensure complete regulatory compliance across all jurisdictions with automated monitoring.",
      metric: "Zero compliance violations"
    },
    {
      icon: Clock,
      title: "24/7 Automation",
      description: "Round-the-clock HR operations with intelligent agents that never sleep.",
      metric: "Continuous operations"
    },
    {
      icon: Users,
      title: "Enhanced Experience",
      description: "Deliver exceptional candidate and employee experiences throughout their journey.",
      metric: "95% satisfaction rate"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-blue-800 text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="bg-white/20 text-white border-none mb-6 px-4 py-2">
              Zordie AI Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <GradientText gradient="zordie" className="text-white">Solutions</GradientText> for Every HR Challenge
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              From startups to enterprises, discover how Zordie AI's intelligent automation transforms HR operations across industries and company sizes
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                  Start Your Transformation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/features">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                  Explore Features
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section ref={solutionsRef} className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={solutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tailored <GradientText>Solutions</GradientText> for Your Organization
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Whether you're a growing startup or a global enterprise, our AI-powered solutions adapt to your unique HR challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                animate={solutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-red-500/30 bg-white dark:bg-black group hover:transform hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 rounded-lg ${solution.color} ${solution.darkColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                      {solution.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {solution.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {solution.features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
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
              Measurable <GradientText>Results</GradientText> Across Industries
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our solutions deliver quantifiable improvements that transform your HR operations and business outcomes
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
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-red-500/30 bg-white dark:bg-black group">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-red-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-8 h-8 text-blue-600 dark:text-red-400" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-red-500/10 text-blue-700 dark:text-red-400 text-sm font-medium">
                      {benefit.metric}
                    </div>
                  </CardContent>
                </Card>
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
              Ready to Transform Your HR Operations?
            </h2>
            <p className="text-lg text-blue-100 dark:text-red-100 mb-8 max-w-2xl mx-auto">
              Join thousands of organizations already using Zordie AI to revolutionize their human resource management
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                  Contact Sales
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

export default Solutions;
