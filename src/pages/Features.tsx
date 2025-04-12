import React from 'react';
import Layout from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BarChart3, Bot, ShieldCheck, MessageSquare, Zap, Clock, CheckCircle, FileSearch, BadgeCheck, Lightbulb, Sparkles, Layers, Brain, Code, ArrowRight, Award } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useTheme } from '@/context/ThemeContext';
const Features = () => {
  const {
    theme
  } = useTheme();

  // Animation variants
  const fadeIn = {
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
  };
  const staggerContainer = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const cardVariant = {
    hidden: {
      opacity: 0,
      y: 20
    },
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
  return <Layout>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white dark:bg-zordie-950 transition-colors duration-300">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        </div>
        <div className="relative z-10 px-4 py-28 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center">
            <Badge className="mb-5 px-4 py-1.5 text-sm font-medium rounded-full bg-zordie-100/80 text-zordie-800 dark:bg-zordie-800/80 dark:text-zordie-100 backdrop-blur-sm border border-zordie-200/50 dark:border-zordie-700/50">
              Innovative AI Solutions
            </Badge>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl">
              Transforming Recruitment with <span className="text-zordie-600 dark:text-zordie-400 relative">
                <span className="relative inline-block">
                  Advanced AI
                  <svg className="absolute -bottom-1 left-0 w-full h-3 text-zordie-200 dark:text-zordie-700" viewBox="0 0 200 8" preserveAspectRatio="none">
                    <path d="M0,5 C50,0 150,0 200,5" fill="none" stroke="currentColor" strokeWidth="3"></path>
                  </svg>
                </span>
              </span>
            </h1>
            <p className="max-w-2xl mx-auto mb-10 text-xl text-gray-600 dark:text-gray-300">
              Our cutting-edge platform verifies talent authenticity, eliminates fake resumes, and streamlines your hiring process with precision.
            </p>
            <motion.div className="flex flex-wrap justify-center gap-4" initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5
          }}>
              <Link to="/signup">
                <Button size="lg" className="bg-gradient-to-r from-zordie-600 to-zordie-500 hover:from-zordie-500 hover:to-zordie-600 text-white font-medium px-8 shadow-lg shadow-zordie-500/20 hover:shadow-zordie-600/30 transition-all duration-300">
                  Get Started Free
                </Button>
              </Link>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Link to="/pricing">
                    <Button size="lg" variant="outline" className="shadow-sm border-zordie-200 hover:border-zordie-300 hover:bg-zordie-50 dark:border-zordie-700 dark:hover:border-zordie-600 dark:bg-zordie-800/50 dark:hover:bg-zordie-800 dark:text-white">
                      View Pricing
                    </Button>
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 dark:bg-zordie-800 dark:border-zordie-700">
                  <div className="flex justify-between space-x-4">
                    <div>
                      <h4 className="text-sm font-semibold dark:text-white">Transparent Pricing Plans</h4>
                      <p className="text-sm dark:text-gray-300">
                        Choose from flexible monthly or annual plans with up to 20% savings.
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="bg-zordie-600 dark:bg-zordie-700 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={staggerContainer}>
            {statsData.map((stat, index) => <motion.div key={index} variants={cardVariant} className="text-center p-4">
                <div className="font-bold text-3xl md:text-4xl text-white mb-1">{stat.value}</div>
                <div className="text-zordie-100 text-sm md:text-base">{stat.label}</div>
              </motion.div>)}
          </motion.div>
        </div>
      </div>

      {/* Core Features Section */}
      <div className="py-24 bg-white dark:bg-zordie-950">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionHeading title="AI-Powered Platform Features" subtitle="Revolutionary tools built for modern recruitment challenges" align="center" />
          
          <motion.div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={staggerContainer}>
            {coreFeatures.map((feature, index) => <motion.div key={index} variants={cardVariant} className="h-full" whileHover={{
            y: -5,
            transition: {
              duration: 0.2
            }
          }}>
                <Card className="h-full overflow-hidden transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-zordie-900 dark:to-zordie-950 hover:shadow-lg hover:shadow-zordie-200/10 dark:hover:shadow-zordie-700/20">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-zordie-500 to-zordie-600 mb-6 text-white">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="mb-5 text-gray-600 dark:text-gray-300">{feature.description}</p>
                    <div className="pt-3 mt-auto border-t border-gray-100 dark:border-zordie-800/50">
                      <div className="flex flex-wrap gap-2">
                        {feature.tags.map((tag, tagIndex) => <span key={tagIndex} className="px-3 py-1 text-xs font-medium rounded-full bg-zordie-50 text-zordie-700 dark:bg-zordie-800 dark:text-zordie-200">
                            {tag}
                          </span>)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>)}
          </motion.div>
        </div>
      </div>

      {/* AI Verification Section */}
      <div className="py-24 bg-gray-50 dark:bg-zordie-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="order-2 lg:order-1">
              <Badge className="mb-5 px-3 py-1.5 bg-zordie-100 text-zordie-800 dark:bg-zordie-800 dark:text-zordie-100">
                AI-Powered Verification
              </Badge>
              <h2 className="mb-5 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Detect Fake Resumes with <span className="text-zordie-600 dark:text-zordie-400">99.4% Accuracy</span>
              </h2>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                Our proprietary AI algorithms analyze resumes, projects, and credentials to detect inconsistencies, plagiarism, and false claims with unprecedented precision.
              </p>
              
              <div className="space-y-5">
                {verificationFeatures.map((feature, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 10
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.3,
                delay: index * 0.1
              }} viewport={{
                once: true
              }} className="flex p-5 transition-all duration-300 border border-transparent rounded-xl hover:border-zordie-100 hover:bg-white dark:hover:border-zordie-700 dark:hover:bg-zordie-800/50">
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-4 rounded-lg bg-zordie-100 dark:bg-zordie-700">
                      <feature.icon className="w-5 h-5 text-zordie-600 dark:text-zordie-300" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                  </motion.div>)}
              </div>

              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.4
            }} viewport={{
              once: true
            }} className="mt-10">
                <Link to="/verification" className="text-zordie-600 dark:text-zordie-400 font-medium flex items-center hover:underline">
                  Learn how our verification works
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="relative order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="AI Verification" className="w-full" />
                <div className="absolute inset-0 bg-gradient-to-tr from-zordie-900/30 to-transparent"></div>
                
                <motion.div className="absolute top-6 right-6 flex items-center space-x-2 bg-white/90 dark:bg-zordie-800/90 backdrop-blur-sm p-3 rounded-lg border border-zordie-200 dark:border-zordie-700" initial={{
                opacity: 0,
                y: -20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.8,
                duration: 0.5
              }}>
                  <Code className="h-5 w-5 text-zordie-600 dark:text-zordie-400" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">AI Code Analysis</span>
                </motion.div>
                
                <motion.div className="absolute bottom-6 left-6 flex items-center space-x-2 bg-white/90 dark:bg-zordie-800/90 backdrop-blur-sm p-3 rounded-lg border border-zordie-200 dark:border-zordie-700" initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 1,
                duration: 0.5
              }}>
                  <Brain className="h-5 w-5 text-zordie-600 dark:text-zordie-400" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Neural Verification</span>
                </motion.div>
              </div>
              
              <motion.div className="absolute -bottom-6 -right-6 bg-white dark:bg-zordie-800 p-4 rounded-xl shadow-lg border dark:border-zordie-700" initial={{
              opacity: 0,
              scale: 0.8
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} transition={{
              delay: 0.3,
              duration: 0.5
            }} viewport={{
              once: true
            }} whileHover={{
              y: -5,
              transition: {
                duration: 0.2
              }
            }}>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-zordie-500 to-zordie-600 flex items-center justify-center text-white font-bold">
                    <BadgeCheck className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900 dark:text-white">99.4% Accuracy</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Verified Skills & Experience</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Prime AI Assistant Section */}
      <div className="py-24 bg-white dark:bg-zordie-950">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-12">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="lg:col-span-7 relative">
              <div className="relative overflow-hidden bg-zordie-900 rounded-2xl shadow-xl">
                <div className="absolute inset-0 opacity-20">
                  <svg className="absolute inset-0" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                <div className="relative p-8 md:p-10">
                  <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 mr-4 overflow-hidden rounded-full bg-zordie-500 flex items-center justify-center">
                        <Bot className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white">Prime AI</h4>
                        <p className="text-sm text-white/70">Hiring Assistant</p>
                      </div>
                    </div>
                    
                    <motion.div initial={{
                    opacity: 0,
                    y: 10
                  }} whileInView={{
                    opacity: 1,
                    y: 0
                  }} transition={{
                    delay: 0.2,
                    duration: 0.5
                  }} viewport={{
                    once: true
                  }} className="p-4 mb-4 rounded-lg bg-white/10">
                      <p className="text-white/90">Hello! I've analyzed your job requirements for the Senior Developer role. Based on your specific technical needs, I've identified 5 verified candidates with exact skills and experience you're looking for.</p>
                    </motion.div>
                    
                    <motion.div initial={{
                    opacity: 0,
                    y: 10
                  }} whileInView={{
                    opacity: 1,
                    y: 0
                  }} transition={{
                    delay: 0.4,
                    duration: 0.5
                  }} viewport={{
                    once: true
                  }} className="p-4 mb-4 ml-8 rounded-lg bg-zordie-600/30">
                      <p className="text-white/90">That's great! Can you set up interviews with the top 3 candidates and prepare technical assessments based on our project needs?</p>
                    </motion.div>
                    
                    <motion.div initial={{
                    opacity: 0,
                    y: 10
                  }} whileInView={{
                    opacity: 1,
                    y: 0
                  }} transition={{
                    delay: 0.6,
                    duration: 0.5
                  }} viewport={{
                    once: true
                  }} className="p-4 rounded-lg bg-white/10">
                      <p className="text-white/90">Absolutely! I've scheduled interviews for Tuesday at 2PM, Wednesday at 11AM, and Thursday at 4PM. All candidates have confirmed their availability. I've also created custom technical assessments based on your React microservices architecture. Would you like me to brief the team on candidate backgrounds?</p>
                    </motion.div>
                    
                    <motion.div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10" initial={{
                    opacity: 0
                  }} whileInView={{
                    opacity: 1
                  }} transition={{
                    delay: 0.8,
                    duration: 0.5
                  }} viewport={{
                    once: true
                  }}>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-zordie-200 mr-2" />
                        <span className="text-sm text-zordie-200">Response time: 0.8s</span>
                      </div>
                      <div className="flex items-center">
                        <Brain className="w-4 h-4 text-zordie-200 mr-2" />
                        <span className="text-sm text-zordie-200">73% faster hiring</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              <motion.div className="absolute -top-6 -left-6 bg-white dark:bg-zordie-800 p-4 rounded-xl shadow-lg border dark:border-zordie-700" initial={{
              opacity: 0,
              scale: 0.8
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} transition={{
              delay: 0.3,
              duration: 0.5
            }} viewport={{
              once: true
            }} whileHover={{
              y: -5,
              transition: {
                duration: 0.2
              }
            }}>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-zordie-500 to-zordie-600 flex items-center justify-center text-white font-bold">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900 dark:text-white">73% Faster</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Hiring Process</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="lg:col-span-5">
              <Badge className="mb-5 px-3 py-1.5 bg-zordie-100 text-zordie-800 dark:bg-zordie-800 dark:text-zordie-100">
                Prime AI Assistant
              </Badge>
              <h2 className="mb-5 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Your Intelligent <span className="text-zordie-600 dark:text-zordie-400">Hiring Companion</span>
              </h2>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                Prime AI revolutionizes recruitment by handling everything from candidate screening and interview scheduling to providing insights and automating communication.
              </p>
              
              <div className="space-y-5">
                {primeFeatures.map((feature, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 10
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.3,
                delay: index * 0.1
              }} viewport={{
                once: true
              }} className="flex p-5 transition-all duration-300 border border-transparent rounded-xl hover:border-zordie-100 hover:bg-gray-50 dark:hover:border-zordie-700 dark:hover:bg-zordie-900/50">
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-4 rounded-lg bg-zordie-100 dark:bg-zordie-700">
                      <feature.icon className="w-5 h-5 text-zordie-600 dark:text-zordie-300" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                  </motion.div>)}
              </div>
              
              <motion.div className="mt-10" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.4
            }} viewport={{
              once: true
            }}>
                <Link to="/signup">
                  <Button className="bg-gradient-to-r from-zordie-600 to-zordie-500 hover:from-zordie-500 hover:to-zordie-600 text-white font-medium px-6 shadow-md shadow-zordie-500/10 hover:shadow-zordie-600/20 transition-all duration-300">
                    Experience Prime AI <Sparkles className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-gray-50 dark:bg-zordie-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionHeading title="What Our Customers Say" subtitle="Success stories from companies transforming their hiring" align="center" />
          
          <motion.div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={staggerContainer}>
            {testimonials.map((testimonial, index) => <motion.div key={index} variants={cardVariant} whileHover={{
            y: -5,
            transition: {
              duration: 0.2
            }
          }}>
                <Card className="h-full border-0 bg-white dark:bg-zordie-800 shadow-md hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="mr-4">
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover border-2 border-zordie-100" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role} at {testimonial.company}</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      {Array(5).fill(0).map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.quote}"</p>
                    <div className="mt-6 pt-6 border-t border-gray-100 dark:border-zordie-700">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-medium text-zordie-600 dark:text-zordie-400">{testimonial.stat}</span> {testimonial.statDetail}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>)}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-zordie-900 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80')] bg-no-repeat bg-cover bg-center">
        
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-1.5 text-sm font-medium bg-white/20 text-white backdrop-blur-sm border border-white/10">
              Join Thousands of Companies
            </Badge>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
              Ready to transform your hiring process?
            </h2>
            <p className="mb-10 text-lg text-zordie-100">
              Experience the future of recruitment with AI-powered verification, automated screening, and intelligent matching.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/signup">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-zordie-800 font-medium px-8 shadow-xl shadow-zordie-950/20 transition-all duration-300">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 transition-all duration-300">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>;
};

// Feature data
const statsData = [{
  value: "73%",
  label: "Faster Hiring"
}, {
  value: "99.4%",
  label: "Verification Accuracy"
}, {
  value: "60%",
  label: "Cost Reduction"
}, {
  value: "5x",
  label: "Better Candidates"
}];
const coreFeatures = [{
  icon: ShieldCheck,
  title: "AI Resume Verification",
  description: "Detect fake resumes, inflated skills claims, and false experience with 99.4% accuracy using our advanced AI verification system.",
  tags: ["Fake Detection", "Skills Verification", "Experience Validation"]
}, {
  icon: Bot,
  title: "Prime AI Assistant",
  description: "An intelligent hiring companion that handles screening, scheduling, and candidate communication automatically, saving you hours of work.",
  tags: ["Automation", "AI-Powered", "Time-Saving"]
}, {
  icon: BarChart3,
  title: "Smart Candidate Ranking",
  description: "Automatically rank and score candidates based on verified skills, experience, and cultural fit specific to your job requirements.",
  tags: ["Skill Matching", "Ranking Algorithm", "Leaderboard"]
}, {
  icon: FileSearch,
  title: "Project Authenticity Check",
  description: "Verify the authenticity of candidate portfolios and projects to ensure you're hiring genuine talent with original work.",
  tags: ["Authenticity", "Portfolio Verification", "Originality Check"]
}, {
  icon: MessageSquare,
  title: "AI Video Interviews",
  description: "Conduct adaptive AI-powered video interviews that adjust questions based on candidate responses to thoroughly assess skills.",
  tags: ["Adaptive Questions", "Video Assessment", "Skill Evaluation"]
}, {
  icon: Zap,
  title: "Intelligent Job Posts",
  description: "Generate comprehensive job descriptions instantly with our AI-powered job post creator, optimized for attracting quality candidates.",
  tags: ["AI Generation", "Time-Saving", "Optimization"]
}];
const verificationFeatures = [{
  icon: ShieldCheck,
  title: "Resume Fact Checking",
  description: "AI algorithms cross-reference resume claims with public data to validate experience and credentials."
}, {
  icon: FileSearch,
  title: "Code & Project Analysis",
  description: "Deep analysis of code samples and projects to verify authorship and technical capabilities."
}, {
  icon: Brain,
  title: "Neural Skill Assessment",
  description: "Adaptive challenges tailored to claimed skills to verify actual proficiency levels."
}, {
  icon: BadgeCheck,
  title: "Credential Verification",
  description: "Automatic verification of academic degrees, certifications, and professional credentials."
}];
const primeFeatures = [{
  icon: MessageSquare,
  title: "Intelligent Conversations",
  description: "Natural language interactions with candidates and hiring teams for smoother communication."
}, {
  icon: Clock,
  title: "Scheduling & Coordination",
  description: "Automated interview scheduling, reminders, and follow-ups without calendar conflicts."
}, {
  icon: Sparkles,
  title: "Personalized Insights",
  description: "AI-generated observations about candidate strengths, weaknesses, and potential team fit."
}, {
  icon: Award,
  title: "Decision Support",
  description: "Data-driven recommendations to help you make confident hiring decisions based on verified information."
}];
const testimonials = [{
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  name: "Michael Thompson",
  role: "CTO",
  company: "TechCorp",
  quote: "Zordie AI transformed our tech hiring process. We've cut our time-to-hire by 70% and the quality of candidates has dramatically improved.",
  stat: "68%",
  statDetail: "reduction in bad hires since implementing Zordie AI"
}, {
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  name: "Sarah Johnson",
  role: "HR Director",
  company: "Innovate Inc.",
  quote: "The AI verification caught several fake resumes we would have missed. The time saved on screening alone has been worth the investment.",
  stat: "5x",
  statDetail: "more efficient hiring pipeline using Prime AI"
}, {
  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  name: "David Lee",
  role: "Recruitment Manager",
  company: "Global Solutions",
  quote: "Zordie AI has completely revolutionized how we approach hiring. The AI assistant handles tasks that used to take my team days to complete.",
  stat: "62%",
  statDetail: "cost reduction in recruitment operations"
}];
export default Features;