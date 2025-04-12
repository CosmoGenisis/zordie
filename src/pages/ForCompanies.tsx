import React from 'react';
import Layout from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Users, Building, Briefcase, BarChart, ShieldCheck, Bot, Clock, FileSearch, Zap, CreditCard, Sparkles, Award, Trophy, Target, TrendingUp, MessageSquare, CircleCheck, BarChart3, Brain, ScrollText, Database, Fingerprint } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
const ForCompanies = () => {
  const {
    theme
  } = useTheme();

  // Animation variants
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 60
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
      <div className="relative overflow-hidden bg-white dark:bg-zordie-950 transition-colors duration-300">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        </div>
        <div className="px-4 py-28 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10 bg-slate-50">
          <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
            <motion.div initial="hidden" animate="visible" variants={slideIn('left')}>
              <Badge className="mb-5 px-4 py-1.5 text-sm font-medium bg-zordie-100/80 text-zordie-800 dark:bg-zordie-800/80 dark:text-zordie-100 backdrop-blur-sm border border-zordie-200/50 dark:border-zordie-700/50">
                For Companies
              </Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                Transform Your <span className="text-zordie-600 dark:text-zordie-400 relative">
                  <span className="relative inline-block">
                    Hiring Process
                    <svg className="absolute -bottom-1 left-0 w-full h-3 text-zordie-200 dark:text-zordie-700" viewBox="0 0 200 8" preserveAspectRatio="none">
                      <path d="M0,5 C50,0 150,0 200,5" fill="none" stroke="currentColor" strokeWidth="3"></path>
                    </svg>
                  </span>
                </span> with AI
              </h1>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-300 md:text-xl">
                Eliminate fake resumes, verify skills, and hire authentic talent 73% faster with Zordie AI's advanced verification technology.
              </p>
              
              <motion.div className="grid grid-cols-2 gap-5 mb-10" initial="hidden" animate="visible" variants={staggerContainer}>
                {companyStats.map((stat, index) => <motion.div key={index} variants={cardVariant} className="p-6 rounded-xl bg-white dark:bg-zordie-800/80 shadow-md border border-gray-100 dark:border-zordie-700/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
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
                    Start Hiring Today <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button size="lg" variant="outline" className="shadow-sm border-zordie-200 hover:border-zordie-300 hover:bg-zordie-50 dark:border-zordie-700 dark:hover:border-zordie-600 dark:bg-zordie-800/50 dark:hover:bg-zordie-800 dark:text-white">
                    View Pricing
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div initial="hidden" animate="visible" variants={slideIn('right')} className="relative lg:h-[600px] flex items-center justify-center">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="Teams collaborating" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-zordie-900/30 to-transparent dark:from-zordie-950/50"></div>
              </div>
              
              <motion.div className="absolute top-8 left-8 bg-white/90 dark:bg-zordie-800/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-zordie-200 dark:border-zordie-700" initial={{
              opacity: 0,
              x: -30,
              y: -30
            }} animate={{
              opacity: 1,
              x: 0,
              y: 0
            }} transition={{
              delay: 0.6,
              duration: 0.5
            }}>
                <div className="flex items-center">
                  <Brain className="h-5 w-5 text-zordie-600 dark:text-zordie-400 mr-2" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">AI-powered screening</span>
                </div>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.7
            }} className="absolute -bottom-6 -right-6 bg-white dark:bg-zordie-800 rounded-xl p-5 shadow-lg border dark:border-zordie-700">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-zordie-500 to-zordie-600 flex items-center justify-center text-white font-bold">
                    73%
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900 dark:text-white">Faster Hiring</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">With Zordie AI</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              y: -20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.8
            }} className="absolute -top-6 -left-6 bg-white dark:bg-zordie-800 rounded-xl p-4 shadow-lg border dark:border-zordie-700">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-zordie-500 to-zordie-600 flex items-center justify-center text-white font-bold">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900 dark:text-white">Verified Talent</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Eliminate Fake Resumes</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Problems We Solve Section */}
      <div className="py-24 bg-white dark:bg-zordie-950 transition-colors duration-300">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionHeading title="Recruiting Challenges Solved" subtitle="How we transform common hiring bottlenecks into competitive advantages" align="center" />
          
          <motion.div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={staggerContainer}>
            {problemCards.map((problem, index) => <motion.div key={index} variants={cardVariant} whileHover={{
            y: -8,
            transition: {
              duration: 0.2
            }
          }}>
                <Card className="h-full overflow-hidden transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-zordie-900 dark:via-zordie-900 dark:to-zordie-950 shadow-md hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-red-100/80 dark:bg-red-900/30 border border-red-200 dark:border-red-800/30">
                      <problem.icon className="w-7 h-7 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">{problem.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{problem.description}</p>
                    
                    <div className="pt-5 mt-5 border-t border-gray-100 dark:border-zordie-700/50">
                      <div className="flex items-center">
                        <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-xl bg-zordie-100 dark:bg-zordie-700">
                          <problem.solutionIcon className="w-5 h-5 text-zordie-600 dark:text-zordie-300" />
                        </div>
                        <div>
                          <p className="font-semibold text-zordie-700 dark:text-zordie-300">Our Solution:</p>
                          <p className="text-gray-600 dark:text-gray-300">{problem.solution}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>)}
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
            <Link to="/features">
              <Button className="bg-gradient-to-r from-zordie-600 to-zordie-500 hover:from-zordie-500 hover:to-zordie-600 text-white font-medium px-6 shadow-md hover:shadow-lg transition-all duration-300">
                Explore All Features <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* How It Works Section */}
      <div className="py-24 bg-gray-50 dark:bg-zordie-900 transition-colors duration-300">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionHeading title="How Zordie AI Works" subtitle="A simple process that transforms your hiring outcomes" align="center" />
          
          <motion.div className="relative mt-20 pl-4" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={staggerContainer}>
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-zordie-200 dark:bg-zordie-700"></div>
            
            {howItWorks.map((step, index) => <motion.div key={index} variants={fadeInUp} className="relative mb-16 last:mb-0 pl-8">
                <div className="absolute left-0 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-zordie-600 text-white font-bold text-sm border-4 border-white dark:border-zordie-900">
                  {index + 1}
                </div>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                    
                    <div className="mt-6 flex flex-wrap gap-3">
                      {step.features.map((feature, fIndex) => <Badge key={fIndex} className="bg-zordie-100 hover:bg-zordie-200 text-zordie-800 dark:bg-zordie-800 dark:text-zordie-200 dark:hover:bg-zordie-700">
                          {feature}
                        </Badge>)}
                    </div>
                  </div>
                  <div className="lg:col-span-3 relative">
                    <div className="overflow-hidden rounded-xl shadow-lg h-full">
                      <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-zordie-800/90 backdrop-blur-sm p-3 rounded-lg border border-zordie-200 dark:border-zordie-700">
                      <div className="flex items-center">
                        <step.icon className="h-5 w-5 text-zordie-600 dark:text-zordie-400 mr-2" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{step.tag}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>)}
          </motion.div>
        </div>
      </div>
      
      {/* Key Benefits Section */}
      <div className="py-24 bg-white dark:bg-zordie-950 transition-colors duration-300">
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
          }}>
              <Badge className="mb-5 px-4 py-1.5 text-sm font-medium rounded-full bg-zordie-100/80 text-zordie-800 dark:bg-zordie-800/80 dark:text-zordie-100 backdrop-blur-sm border border-zordie-200/50 dark:border-zordie-700/50">
                Business Impact
              </Badge>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Transforming Recruitment for <span className="text-zordie-600 dark:text-zordie-400">Measurable Results</span>
              </h2>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                From startups to enterprises, Zordie AI delivers tangible outcomes that improve your hiring efficiency, quality, and cost-effectiveness.
              </p>
              
              <motion.div className="space-y-6" initial="hidden" whileInView="visible" viewport={{
              once: true
            }} variants={staggerContainer}>
                {benefitsList.map((benefit, index) => <motion.div key={index} variants={cardVariant} className="flex p-5 transition-all duration-300 border border-transparent rounded-xl hover:border-zordie-100 hover:bg-white dark:hover:border-zordie-700 dark:hover:bg-zordie-800/50">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 rounded-xl bg-zordie-100 dark:bg-zordie-700">
                      <benefit.icon className="w-6 h-6 text-zordie-600 dark:text-zordie-300" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">{benefit.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{benefit.description}</p>
                    </div>
                  </motion.div>)}
              </motion.div>
              
              <motion.div className="flex pt-10" initial={{
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
                <Link to="/features">
                  <Button className="bg-gradient-to-r from-zordie-600 to-zordie-500 hover:from-zordie-500 hover:to-zordie-600 text-white font-medium px-6 shadow-md hover:shadow-lg transition-all duration-300">
                    Explore All Features <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
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
          }} className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {benefitCards.map((card, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.4,
              delay: 0.1 * index
            }} viewport={{
              once: true
            }} whileHover={{
              y: -8,
              transition: {
                duration: 0.2
              }
            }} className="p-6 rounded-xl bg-white dark:bg-zordie-800 shadow-md border border-gray-100 dark:border-zordie-700 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-zordie-100 dark:bg-zordie-700 border border-zordie-200 dark:border-zordie-600/30">
                    <card.icon className="w-7 h-7 text-zordie-600 dark:text-zordie-300" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{card.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{card.description}</p>
                  
                  <div className="flex items-center pt-4 mt-4 border-t border-gray-100 dark:border-zordie-700">
                    <span className="mr-2 text-2xl font-bold text-zordie-600 dark:text-zordie-400">{card.stat}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{card.statLabel}</span>
                  </div>
                </motion.div>)}
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="py-24 bg-gray-50 dark:bg-zordie-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionHeading title="Client Success Stories" subtitle="Hear from companies transforming their hiring process" align="center" />
          
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
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {Array(5).fill(0).map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.quote}"</p>
                
                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-zordie-700">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-zordie-100 dark:bg-zordie-700">
                      <testimonial.icon className="w-4 h-4 text-zordie-600 dark:text-zordie-300" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <span className="font-medium text-zordie-600 dark:text-zordie-400">{testimonial.stat}</span> {testimonial.statDetail}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>)}
          </motion.div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-24 bg-zordie-900 bg-[url('https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80')] bg-no-repeat bg-cover bg-center">
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
              Join Industry Leaders
            </Badge>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
              Ready to build your dream team faster?
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

// Data for various sections
const companyStats = [{
  icon: Clock,
  value: "73%",
  label: "Faster hiring process"
}, {
  icon: CreditCard,
  value: "60%",
  label: "Reduced recruitment costs"
}, {
  icon: Users,
  value: "5x",
  label: "Higher quality candidates"
}, {
  icon: TrendingUp,
  value: "98%",
  label: "Reduction in bad hires"
}];
const problemCards = [{
  icon: FileSearch,
  title: "Fake Resumes & Inflated Skills",
  description: "Up to 40% of resumes contain false information, wasting valuable time interviewing unqualified candidates.",
  solutionIcon: ShieldCheck,
  solution: "AI verification detects false claims with 99.4% accuracy before you even schedule the first interview."
}, {
  icon: Clock,
  title: "Time-Consuming Screening",
  description: "Recruiters spend an average of 30+ hours per week manually reviewing resumes and coordinating interviews.",
  solutionIcon: Bot,
  solution: "Prime AI automates screening and administrative tasks, reducing your time-to-hire by 73%."
}, {
  icon: Users,
  title: "Poor Quality of Hire",
  description: "Bad hires cost companies up to 30% of the employee's first-year earnings, plus team disruption.",
  solutionIcon: BarChart3,
  solution: "Our verified candidates and skill assessments ensure you hire truly qualified talent with the right fit."
}];
const howItWorks = [{
  title: "AI Resume Verification",
  description: "Our advanced algorithms analyze candidate resumes and portfolios to detect inconsistencies, false claims, and inflated skills with 99.4% accuracy.",
  features: ["Credential Verification", "Experience Validation", "Project Authentication"],
  image: "https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
  icon: ShieldCheck,
  tag: "99.4% accuracy"
}, {
  title: "Intelligent Candidate Screening",
  description: "Prime AI automatically screens candidates based on verified skills, experience, and your specific job requirements to create a shortlist of qualified candidates.",
  features: ["Automated Ranking", "Skill Matching", "Cultural Fit Analysis"],
  image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
  icon: Brain,
  tag: "5x better matches"
}, {
  title: "Streamlined Interview Process",
  description: "Schedule interviews, conduct AI-powered assessments, and gather feedback in one unified platform with automated coordination and reminders.",
  features: ["Calendar Integration", "AI Video Interviews", "Feedback Collection"],
  image: "https://images.unsplash.com/photo-1560439513-74b037a25d84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
  icon: Clock,
  tag: "73% time saved"
}, {
  title: "Data-Driven Hiring Decisions",
  description: "Make confident hiring decisions based on comprehensive candidate data, skill verification, and predictive performance analytics.",
  features: ["Performance Prediction", "Team Fit Analysis", "Risk Assessment"],
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
  icon: Database,
  tag: "98% successful hires"
}];
const benefitsList = [{
  icon: ShieldCheck,
  title: "Eliminate Fake Resumes",
  description: "Our AI detects fake work experience and inflated skills with 99.4% accuracy, saving you from costly bad hires."
}, {
  icon: Clock,
  title: "Reduce Time-to-Hire",
  description: "Automated screening and verification cuts hiring time by up to 73%, helping you secure top talent faster."
}, {
  icon: CreditCard,
  title: "Lower Recruitment Costs",
  description: "Save up to 60% on recruitment costs through intelligent automation of repetitive hiring tasks."
}, {
  icon: Users,
  title: "Improve Quality of Hire",
  description: "Verified candidates lead to better hires, reduced turnover, and stronger team performance."
}];
const benefitCards = [{
  icon: TrendingUp,
  title: "Higher ROI",
  description: "Maximize your recruitment budget with AI-driven efficiency and better quality hires that drive business results.",
  stat: "247%",
  statLabel: "average ROI"
}, {
  icon: Award,
  title: "Talent Quality",
  description: "Only interview pre-verified candidates with the exact skills and experience your role requires.",
  stat: "5x",
  statLabel: "better quality"
}, {
  icon: Target,
  title: "Better Matches",
  description: "AI matches verified skills with your specific requirements for ideal role and culture fit.",
  stat: "94%",
  statLabel: "hiring success"
}, {
  icon: Trophy,
  title: "Competitive Edge",
  description: "Secure top talent faster than competitors with streamlined, intelligent processes.",
  stat: "68%",
  statLabel: "faster offers"
}];
const testimonials = [{
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  name: "Michael Thompson",
  role: "CTO",
  company: "TechCorp",
  quote: "Zordie AI transformed our tech hiring process. We've cut our time-to-hire by 70% and the quality of candidates has dramatically improved.",
  stat: "68%",
  statDetail: "reduction in bad hires",
  icon: CheckCircle
}, {
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  name: "Sarah Johnson",
  role: "HR Director",
  company: "Innovate Inc.",
  quote: "The AI verification caught several fake resumes we would have missed. The time saved on screening alone has been worth the investment.",
  stat: "5x",
  statDetail: "more efficient hiring pipeline",
  icon: Bot
}, {
  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  name: "David Lee",
  role: "Recruitment Manager",
  company: "Global Solutions",
  quote: "Zordie AI has completely revolutionized how we approach hiring. The AI assistant handles tasks that used to take my team days to complete.",
  stat: "62%",
  statDetail: "cost reduction in recruitment",
  icon: CreditCard
}];
export default ForCompanies;