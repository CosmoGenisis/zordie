
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Shield, Globe, TrendingUp, Clock, Users, CheckCircle, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const BenefitsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const benefits = [
    {
      icon: Zap,
      title: "Complete End-to-End HR Automation",
      description: "Unprecedented automation across the entire HR lifecycle, eliminating silos and reducing administrative overhead by up to 90%.",
      stats: "90% reduction in admin tasks"
    },
    {
      icon: Shield,
      title: "360° Candidate Verification Excellence",
      description: "Advanced verification system cross-validating resumes, analyzing GitHub repositories, and authenticating credentials through official channels.",
      stats: "100% verified talent pipeline"
    },
    {
      icon: Target,
      title: "Gamified Intelligence Assessment",
      description: "Innovative assessment experiences that reveal true candidate potential through interactive challenges and immersive scenarios.",
      stats: "94% assessment accuracy"
    },
    {
      icon: Users,
      title: "Seamless Multi-Modal Communication",
      description: "Advanced voice synthesis, natural language processing, and multi-language support accommodating global talent pools.",
      stats: "50+ languages supported"
    },
    {
      icon: TrendingUp,
      title: "Real-Time Strategic Analytics",
      description: "Transform HR data into strategic business intelligence through predictive modeling and performance forecasting.",
      stats: "Real-time insights dashboard"
    },
    {
      icon: Globe,
      title: "Global Scalability and Compliance",
      description: "Built-in compliance frameworks for international employment laws with multi-currency payroll processing.",
      stats: "195+ countries supported"
    },
    {
      icon: Clock,
      title: "Resource Optimization",
      description: "Intelligent resource management with auto-shutdown capabilities and dynamic scaling based on organizational needs.",
      stats: "60% cost reduction"
    },
    {
      icon: CheckCircle,
      title: "Instant Deployment",
      description: "Ready-to-use platform with instant restart functionality and seamless integration with existing HR systems.",
      stats: "5-minute setup time"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Transformative <span className="bg-blue-purple-gradient dark:bg-red-gradient bg-clip-text text-transparent">Benefits & Advantages</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the competitive advantages that set Zordie AI apart from traditional HR solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-red-500/30 bg-white dark:bg-black group hover:transform hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-red-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-blue-600 dark:text-red-400" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-red-500/10 text-blue-700 dark:text-red-400 text-sm font-medium">
                    {benefit.stats}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Proven Results Across Industries
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-red-400 mb-2">80%</div>
                <div className="text-gray-600 dark:text-gray-300">Faster Hiring Process</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-orange-400 mb-2">90%</div>
                <div className="text-gray-600 dark:text-gray-300">Admin Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
                <div className="text-gray-600 dark:text-gray-300">Compliance Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-red-500 mb-2">5K+</div>
                <div className="text-gray-600 dark:text-gray-300">Companies Trust Us</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
