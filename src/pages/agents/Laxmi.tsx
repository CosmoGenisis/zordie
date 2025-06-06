import React, { useRef } from 'react';
import Layout from '@/components/layout/Layout';
import { motion, useInView } from 'framer-motion';
import { DollarSign, ArrowRight, Calculator, TrendingUp, CreditCard, PieChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import GradientText from '@/components/home/GradientText';
import PrimeHRChatbot from '@/components/chatbot/PrimeHRChatbot';

const Laxmi = () => {
  const featuresRef = useRef(null);
  const benefitsRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: false, amount: 0.2 });
  const benefitsInView = useInView(benefitsRef, { once: false, amount: 0.2 });

  const capabilities = [
    {
      icon: Calculator,
      title: "Payroll Automation",
      description: "Intelligent payroll processing with multi-currency support and complex calculation handling."
    },
    {
      icon: CreditCard,
      title: "Benefits Administration",
      description: "Comprehensive benefits management including health insurance, retirement plans, and custom benefits."
    },
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description: "Advanced analytics for identifying cost savings opportunities and budget optimization strategies."
    },
    {
      icon: PieChart,
      title: "Financial Forecasting",
      description: "Predictive modeling for HR budget planning and workforce cost projections."
    }
  ];

  const benefits = [
    {
      title: "Payroll Accuracy",
      description: "Eliminate payroll errors through intelligent automation and verification systems.",
      metric: "99.9%"
    },
    {
      title: "Cost Reduction",
      description: "Significant reduction in HR-related operational costs through optimization.",
      metric: "65%"
    },
    {
      title: "Processing Speed",
      description: "Faster payroll processing times with automated calculations and approvals.",
      metric: "85%"
    },
    {
      title: "Compliance Rate",
      description: "Perfect compliance with tax regulations and financial reporting requirements.",
      metric: "100%"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-700 to-orange-900 text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-24 h-24 rounded-full bg-orange-500 flex items-center justify-center mx-auto mb-8">
              <DollarSign className="w-12 h-12 text-white" />
            </div>
            <Badge className="bg-white/20 text-white border-none mb-6 px-4 py-2">
              ARC Agent
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <GradientText gradient="zordie" className="text-white">Laxmi</GradientText>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-4xl mx-auto">
              <strong>The Financial Optimizer</strong> - Finance integration and payroll automation with cost optimization and budget forecasting capabilities
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-orange-700 hover:bg-gray-100">
                  Start Using Laxmi <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/arc">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-700">
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
              Laxmi optimizes financial operations through intelligent automation and strategic cost management
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
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-orange-500/30 bg-white dark:bg-black group text-center">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <capability.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
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
              See how Laxmi transforms financial operations and drives cost optimization
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
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-orange-500/30 bg-white dark:bg-black">
                  <CardHeader>
                    <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
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
      <section className="bg-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Optimize Your HR Finances?
            </h2>
            <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
              Let Laxmi streamline your financial operations with intelligent automation and cost optimization
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-orange-700 hover:bg-gray-100">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/arc">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-700">
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

export default Laxmi;
