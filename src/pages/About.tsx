
import React from 'react';
import Layout from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Building, Lightbulb, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-zordie-50 to-white dark:from-zordie-900 dark:to-zordie-950 transition-colors duration-300">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        </div>
        <div className="relative z-10 px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl">
              About <span className="text-zordie-600 dark:text-zordie-400">Zordie AI</span>
            </h1>
            <p className="max-w-2xl mx-auto mb-10 text-xl text-gray-600 dark:text-gray-300">
              We're on a mission to transform hiring through AI technology, making recruitment more efficient, fair, and accurate.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-24 bg-white dark:bg-zordie-950 transition-colors duration-300">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Story"
            subtitle="From idea to innovation"
            centered
          />
          
          <div className="grid grid-cols-1 gap-12 mt-16 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                Zordie AI was founded in 2022 by a team of AI researchers and recruitment professionals who recognized a fundamental problem in the hiring process: the prevalence of fake resumes and inflated skills claims was making it increasingly difficult for companies to identify truly qualified candidates.
              </p>
              <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                After experiencing firsthand the challenges of verifying candidate credentials and the time wasted interviewing unqualified applicants, our founders set out to create a solution that would leverage artificial intelligence to authenticate skills and experience with unprecedented accuracy.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Today, Zordie AI has grown into the industry's leading AI-powered hiring platform, trusted by thousands of companies worldwide to verify candidate credentials, streamline recruitment processes, and connect organizations with authentic talent.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
                  alt="Zordie Team" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-24 bg-gray-50 dark:bg-zordie-900 transition-colors duration-300">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Values"
            subtitle="What drives us every day"
            centered
          />
          
          <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden transition-all duration-300 border-0 hover-card-effect bg-gradient-to-tr from-white via-white to-gray-50 dark:from-zordie-800 dark:via-zordie-800 dark:to-zordie-850">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-lg bg-zordie-100 dark:bg-zordie-700">
                      <value.icon className="w-6 h-6 text-zordie-600 dark:text-zordie-200" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We believe in honest, ethical practices that build trust. Our verification technology is designed to promote transparency and fairness in hiring."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We're constantly pushing the boundaries of what AI can do for recruitment, investing in research to solve the most challenging hiring problems."
  },
  {
    icon: Users,
    title: "Diversity & Inclusion",
    description: "We're committed to building technology that reduces bias and creates more diverse, inclusive workplaces through fair evaluation."
  },
  {
    icon: TrendingUp,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from our AI algorithms to our customer service, setting the highest standards for our industry."
  },
  {
    icon: Building,
    title: "Client Success",
    description: "Our clients' success is our success. We measure our performance by how well we help organizations find and hire the right talent."
  },
  {
    icon: Award,
    title: "Recognition of Talent",
    description: "We believe in recognizing and rewarding authentic talent, creating opportunities for skilled professionals to connect with great companies."
  }
];

export default About;
