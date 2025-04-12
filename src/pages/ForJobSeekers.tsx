import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, Github, Award, ThumbsUp, Zap, Target, TrendingUp, Briefcase, Users, ShieldCheck, BarChart3, FileCheck, Badge, MessageSquare, Clock, Sparkles, Rocket, Brain, CheckCircle, LayoutDashboard, LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const ForJobSeekers = () => {
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
        duration: 0.6,
        ease: "easeOut"
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
        staggerChildren: 0.1
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
  const slideIn = direction => ({
    hidden: {
      x: direction === 'left' ? -60 : 60,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  });

  return <Layout>
      {/* Hero Section with white background */}
      <div className="relative overflow-hidden bg-white dark:bg-white transition-colors duration-300">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-black/[0.02]" />
        </div>
        <div className="px-4 py-28 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10 bg-white">
          <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
            <motion.div initial="hidden" animate="visible" variants={slideIn('left')}>
              
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                Showcase Your <span className="text-zordie-600 dark:text-zordie-400 relative">
                  <span className="relative inline-block">
                    Authentic Skills
                    <svg className="absolute -bottom-1 left-0 w-full h-3 text-zordie-200 dark:text-zordie-700" viewBox="0 0 200 8" preserveAspectRatio="none">
                      <path d="M0,5 C50,0 150,0 200,5" fill="none" stroke="currentColor" strokeWidth="3"></path>
                    </svg>
                  </span>
                </span>
              </h1>
              <p className="mb-8 text-lg md:text-xl text-stone-900">
                Stand out from the competition by verifying your skills and credentials with Zordie AI. Get noticed by top employers looking for authentic talent.
              </p>
              
              <motion.div className="grid grid-cols-2 gap-5 mb-10" initial="hidden" animate="visible" variants={staggerContainer}>
                {seekerStats.map((stat, index) => <motion.div key={index} variants={cardVariant} className="p-6 rounded-xl bg-white dark:bg-zordie-800/80 shadow-md border border-gray-100 dark:border-zordie-700/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center justify-center w-10 h-10 mr-3 rounded-full bg-zordie-100 dark:bg-zordie-700">
                        <stat.icon className="w-5 h-5 text-zordie-600 dark:text-zordie-300" />
                      </div>
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
                  </motion.div>)}
              </motion.div>
              
              <motion.div className="flex flex-wrap gap-4" initial={{
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
                    Create Free Profile
                  </Button>
                </Link>
                <Link to="/features">
                  <Button size="lg" variant="outline" className="shadow-sm border-zordie-200 hover:border-zordie-300 hover:bg-zordie-50 dark:border-zordie-700 dark:hover:border-zordie-600 dark:bg-zordie-800/50 dark:hover:bg-zordie-800 dark:text-white">
                    How It Works
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div initial="hidden" animate="visible" variants={slideIn('right')} className="relative">
              <div className="relative overflow-hidden bg-gradient-to-tr from-zordie-900 to-zordie-700 rounded-2xl shadow-xl p-10">
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%">
                    <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                      <rect width="1" height="1" fill="white" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                  </svg>
                </div>
                
                <div className="relative">
                  <div className="flex items-center">
                    <div className="relative">
                      <div className="w-20 h-20 overflow-hidden rounded-full bg-zordie-200">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt="Profile" className="object-cover w-full h-full" />
                      </div>
                      <motion.div initial={{
                      scale: 0,
                      opacity: 0
                    }} animate={{
                      scale: 1,
                      opacity: 1
                    }} transition={{
                      delay: 0.8,
                      duration: 0.4
                    }} className="absolute bottom-0 right-0 flex items-center justify-center w-8 h-8 text-white rounded-full bg-green-500 border-2 border-white">
                        <BadgeCheck className="w-5 h-5" />
                      </motion.div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold text-white">Sarah Johnson</h4>
                      <p className="text-zordie-100">Senior Frontend Developer</p>
                    </div>
                  </div>
                  
                  <motion.div className="grid grid-cols-2 gap-3 mt-8" initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: 0.5
                }}>
                    <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                      <h5 className="mb-2 font-medium text-white">Verified Skills</h5>
                      <div className="flex flex-wrap gap-2">
                        <motion.span initial={{
                        opacity: 0,
                        scale: 0.8
                      }} animate={{
                        opacity: 1,
                        scale: 1
                      }} transition={{
                        delay: 0.6
                      }} className="px-2 py-1 text-xs font-medium rounded-full bg-white/20 text-white">
                          React
                        </motion.span>
                        <motion.span initial={{
                        opacity: 0,
                        scale: 0.8
                      }} animate={{
                        opacity: 1,
                        scale: 1
                      }} transition={{
                        delay: 0.7
                      }} className="px-2 py-1 text-xs font-medium rounded-full bg-white/20 text-white">
                          TypeScript
                        </motion.span>
                        <motion.span initial={{
                        opacity: 0,
                        scale: 0.8
                      }} animate={{
                        opacity: 1,
                        scale: 1
                      }} transition={{
                        delay: 0.8
                      }} className="px-2 py-1 text-xs font-medium rounded-full bg-white/20 text-white">
                          NextJS
                        </motion.span>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                      <h5 className="mb-2 font-medium text-white">Experience</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-500/30 text-white">5+ Years</span>
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-500/30 text-white">Verified</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div className="p-4 mt-5 border border-white/20 rounded-lg bg-white/5 backdrop-blur-sm" initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} transition={{
                  delay: 1
                }}>
                    <h5 className="mb-3 font-medium text-white">Projects Verified</h5>
                    <motion.div className="flex items-center mb-3 p-2 rounded-md bg-white/5" initial={{
                    opacity: 0,
                    x: -20
                  }} animate={{
                    opacity: 1,
                    x: 0
                  }} transition={{
                    delay: 1.1
                  }}>
                      <Github className="w-4 h-4 mr-2 text-zordie-100" />
                      <span className="text-sm text-zordie-100">E-commerce Platform</span>
                      <Badge className="ml-auto px-2 py-0.5 text-xs bg-green-500 text-white hover:bg-green-600">
                        Original
                      </Badge>
                    </motion.div>
                    <motion.div className="flex items-center p-2 rounded-md bg-white/5" initial={{
                    opacity: 0,
                    x: -20
                  }} animate={{
                    opacity: 1,
                    x: 0
                  }} transition={{
                    delay: 1.2
                  }}>
                      <Github className="w-4 h-4 mr-2 text-zordie-100" />
                      <span className="text-sm text-zordie-100">Portfolio Website</span>
                      <Badge className="ml-auto px-2 py-0.5 text-xs bg-green-500 text-white hover:bg-green-600">
                        Original
                      </Badge>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center" initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} transition={{
                  delay: 1.3
                }}>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-zordie-200 mr-2" />
                      <span className="text-xs text-zordie-200">Interview rate: +250%</span>
                    </div>
                    <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-0">
                      View Profile
                    </Button>
                  </motion.div>
                </div>
              </div>
              
              <motion.div className="absolute -bottom-6 -left-6 bg-white dark:bg-zordie-800 p-4 rounded-xl shadow-lg border dark:border-zordie-700" initial={{
              opacity: 0,
              scale: 0.8
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              delay: 1.5,
              duration: 0.5
            }} whileHover={{
              y: -5,
              transition: {
                duration: 0.2
              }
            }}>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-zordie-500 to-zordie-600 flex items-center justify-center text-white font-bold">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900 dark:text-white">Verified Badge</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Trusted by employers</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* How it Works Section */}
      <div className="py-24 bg-white dark:bg-zordie-950">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionHeading title="How Zordie AI Works for You" subtitle="Simple steps to transform your job search and career" align="center" />
          
          <motion.div className="relative mt-20" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={staggerContainer}>
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-zordie-100 dark:bg-zordie-800 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {verificationSteps.map((step, index) => <motion.div key={index} variants={cardVariant} className="relative" whileHover={{
              y: -8,
              transition: {
                duration: 0.2
              }
            }}>
                  <div className="hidden lg:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="flex items-center justify-center w-12 h-12 text-white rounded-full shadow-lg bg-zordie-600 dark:bg-zordie-500 border-4 border-white dark:border-zordie-950">
                      {index + 1}
                    </div>
                  </div>
                  
                  <Card className="pt-6 h-full overflow-hidden transition-all duration-300 border-0 bg-white dark:bg-zordie-800 shadow-md hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex lg:hidden items-center mb-4">
                        <div className="flex items-center justify-center w-10 h-10 text-white rounded-full bg-zordie-600 dark:bg-zordie-500 mr-3">
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                      </div>
                      
                      <div className="hidden lg:flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-xl bg-zordie-100 dark:bg-zordie-700 border border-zordie-200 dark:border-zordie-600">
                        <step.icon className="w-8 h-8 text-zordie-600 dark:text-zordie-300" />
                      </div>
                      <h3 className="hidden lg:block mb-4 text-xl font-semibold text-center text-gray-900 dark:text-white">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                      
                      <div className="mt-6 pt-6 border-t border-gray-100 dark:border-zordie-700">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          <p className="text-sm text-gray-600 dark:text-gray-300">{step.benefit}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </div>
          </motion.div>
          
          <motion.div className="mt-16 text-center" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }}>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-zordie-600 to-zordie-500 hover:from-zordie-500 hover:to-zordie-600 text-white font-medium px-6 shadow-md hover:shadow-lg transition-all duration-300">
                Start Verification Process <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Problems We Solve Section */}
      <div className="py-24 bg-gray-50 dark:bg-zordie-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionHeading title="Job Search Challenges Solved" subtitle="How we help you overcome common career obstacles" align="center" />
          
          <motion.div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={staggerContainer}>
            {challengeCards.map((challenge, index) => <motion.div key={index} variants={cardVariant} whileHover={{
            y: -8,
            transition: {
              duration: 0.2
            }
          }}>
                <Card className="h-full overflow-hidden transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-zordie-800 dark:via-zordie-800 dark:to-zordie-850 shadow-md hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-red-100/80 dark:bg-red-900/30 border border-red-200 dark:border-red-800/30">
                      <challenge.icon className="w-7 h-7 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">{challenge.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{challenge.description}</p>
                    
                    <div className="pt-5 mt-5 border-t border-gray-100 dark:border-zordie-700">
                      <div className="flex items-center">
                        <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-xl bg-zordie-100 dark:bg-zordie-700">
                          <challenge.solutionIcon className="w-5 h-5 text-zordie-600 dark:text-zordie-300" />
                        </div>
                        <div>
                          <p className="font-semibold text-zordie-700 dark:text-zordie-300">Our Solution:</p>
                          <p className="text-gray-600 dark:text-gray-300">{challenge.solution}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>)}
          </motion.div>
        </div>
      </div>
      
      {/* Profile Features */}
      <div className="py-24 bg-white dark:bg-zordie-950">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
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
              <div className="grid grid-cols-2 gap-8">
                {profileBenefits.map((benefit, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} viewport={{
                once: true
              }} className="p-6 rounded-xl bg-white dark:bg-zordie-800 shadow-md border border-gray-100 dark:border-zordie-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-zordie-500 to-zordie-600 mb-4 text-white">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{benefit.description}</p>
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
                <div className="p-6 rounded-xl bg-zordie-50 dark:bg-zordie-900 border border-zordie-100 dark:border-zordie-800">
                  <div className="flex items-start">
                    <div className="mr-4 p-3 rounded-full bg-zordie-100 dark:bg-zordie-800">
                      <Award className="h-6 w-6 text-zordie-600 dark:text-zordie-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Premium Verification</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">Unlock additional benefits with our Premium Verification, including advanced skill assessments, personalized job matching, and priority support.</p>
                      <Link to="/pricing">
                        <Button className="bg-gradient-to-r from-zordie-600 to-zordie-500 hover:from-zordie-500 hover:to-zordie-600 text-white font-medium transition-all duration-300">
                          View Premium Plans <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
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
          }} className="order-1 lg:order-2">
              
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Stand Out with a <span className="text-zordie-600 dark:text-zordie-400">Verified Profile</span>
              </h2>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                When employers see your Zordie verification badge, they know your skills and experience are authentic, giving you a significant advantage in a competitive job market.
              </p>
              
              <div className="space-y-6">
                {profileFeatures.map((feature, index) => <motion.div key={index} initial={{
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
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 rounded-xl bg-zordie-100 dark:bg-zordie-700">
                      <feature.icon className="w-6 h-6 text-zordie-600 dark:text-zordie-300" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                  </motion.div>)}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="py-24 bg-gray-50 dark:bg-zordie-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionHeading title="Success Stories" subtitle="How job seekers like you have benefited from Zordie AI" align="center" />
          
          <motion.div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={staggerContainer}>
            {testimonials.map((testimonial, index) => <motion.div key={index} variants={cardVariant} whileHover={{
            y: -5,
            transition: {
              duration: 0.2
            }
          }} className="bg-white dark:bg-zordie-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-zordie-700">
                <div className="flex items-center mb-6">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover border-2 border-zordie-100" />
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {Array(5).fill(0).map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                
                <div className="pt-4 border-t border-gray-100 dark:border-zordie-700">
                  <div className="flex items-center">
                    <testimonial.resultIcon className="w-5 h-5 text-zordie-600 dark:text-zordie-300 mr-2" />
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {testimonial.result}
                    </p>
                  </div>
                </div>
              </motion.div>)}
          </motion.div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-24 bg-zordie-900 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80')] bg-no-repeat bg-cover bg-center">
        <div className="absolute inset-0 bg-zordie-900/80"></div>
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
              Join Thousands of Job Seekers
            </Badge>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
              Ready to stand out from the crowd?
            </h2>
            <p className="mb-10 text-lg text-zordie-100">
              Create your verified profile today and get noticed by top employers looking for authentic talent like you.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/signup">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-zordie-800 font-medium px-8 shadow-xl shadow-zordie-950/20 transition-all duration-300">
                  Create Free Profile
                </Button>
              </Link>
              <Link to="/features">
                <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 transition-all duration-300">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>;
};

// Data for various sections
const seekerStats = [{
  icon: BadgeCheck,
  value: "2.5x",
  label: "More interview invitations"
}, {
  icon: Zap,
  value: "68%",
  label: "Faster job offers"
}, {
  icon: Target,
  value: "94%",
  label: "Better job matches"
}, {
  icon: TrendingUp,
  value: "37%",
  label: "Higher starting salaries"
}];
const verificationSteps = [{
  icon: FileCheck,
  title: "Create Your Profile",
  description: "Sign up and build your professional profile with skills, experience, and education details on our intuitive platform.",
  benefit: "Takes less than 10 minutes to get started"
}, {
  icon: Badge,
  title: "Complete Verification",
  description: "Complete AI-guided skill assessments and project verification to validate your technical and soft skills.",
  benefit: "Verify multiple skills and credentials at once"
}, {
  icon: LayoutDashboard,
  title: "Showcase Your Expertise",
  description: "Add verified projects, code samples, and portfolio items that prove your capabilities to potential employers.",
  benefit: "Stand out with verified original work"
}, {
  icon: Rocket,
  title: "Get Matched With Jobs",
  description: "Receive tailored job matches based on your verified skills, experience, and career preferences.",
  benefit: "94% better job fit than traditional applications"
}];
const challengeCards = [{
  icon: Briefcase,
  title: "Resume Gets Overlooked",
  description: "Qualified candidates often get lost in a sea of applications, with recruiters spending only 6-8 seconds per resume.",
  solutionIcon: BadgeCheck,
  solution: "Verified profiles stand out with a trust badge, catching recruiters' attention immediately."
}, {
  icon: Users,
  title: "Competing With Fake Resumes",
  description: "Up to 40% of candidates exaggerate their skills and experience, creating unfair competition for honest professionals.",
  solutionIcon: ShieldCheck,
  solution: "Verification distinguishes you from inflated resumes, showcasing your authentic skills."
}, {
  icon: BarChart3,
  title: "Poor Job Matches",
  description: "Keyword-based matching often leads to irrelevant job recommendations and applications that waste your time.",
  solutionIcon: Target,
  solution: "AI matches your verified skills to the right opportunities for better fit and success."
}];
const profileFeatures = [{
  icon: BadgeCheck,
  title: "Verification Badge",
  description: "Earn a trusted verification badge that signals authenticity to employers and stands out in applications."
}, {
  icon: ShieldCheck,
  title: "Skills Verification",
  description: "Show employers your skills have been independently verified through assessments and project analysis."
}, {
  icon: Github,
  title: "Project Authentication",
  description: "Display your verified projects and contributions with authenticity verification badges that prove originality."
}, {
  icon: MessageSquare,
  title: "AI Interview Prep",
  description: "Access personalized interview preparation based on your verified skills and target roles."
}];
const profileBenefits = [{
  icon: TrendingUp,
  title: "250% More Interviews",
  description: "Verified candidates receive significantly more interview invitations than unverified applicants."
}, {
  icon: Clock,
  title: "Faster Hiring",
  description: "Skip unnecessary rounds with pre-verified skills, shortening your job search by weeks."
}, {
  icon: Target,
  title: "Better Job Fit",
  description: "Get matched to positions that align perfectly with your verified skills and career goals."
}, {
  icon: Award,
  title: "Higher Offers",
  description: "Verified candidates receive salary offers up to 37% higher than industry average."
}];
const testimonials = [{
  avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
  name: "Jennifer Lee",
  role: "Frontend Developer",
  quote: "After struggling to get noticed for months, my Zordie verified profile got me 3 interview offers in the first week! The skill verification really helped me stand out.",
  resultIcon: Briefcase,
  result: "Landed a senior developer role within 3 weeks"
}, {
  avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
  name: "Michael Rodriguez",
  role: "UX Designer",
  quote: "The project authentication feature was a game-changer. Employers could see that my portfolio was verified as original work, which built immediate trust.",
  resultIcon: TrendingUp,
  result: "Received a 32% higher salary offer than previous position"
}, {
  avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
  name: "Sarah Johnson",
  role: "Data Scientist",
  quote: "The AI matching actually works! I was matched with companies I'd never considered, but they were perfect fits for my skills and career aspirations.",
  resultIcon: Target,
  result: "Found a remote position with ideal work-life balance"
}];
export default ForJobSeekers;
