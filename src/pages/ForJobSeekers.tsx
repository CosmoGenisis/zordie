import React from 'react';
import Layout from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { 
  ArrowRight, 
  BadgeCheck, 
  Github, 
  Award, 
  ThumbsUp,
  Zap,
  Target,
  TrendingUp,
  Briefcase,
  Users,
  ShieldCheck,
  BarChart3,
  FileCheck,
  Badge,
  MessageSquare,
  Clock,
  Sparkles
} from 'lucide-react';
import { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from '@/components/ui/card';

const ForJobSeekers = () => {
  const { theme } = useTheme();
  
  return (
    <Layout>
      {/* Hero Section with fixed background */}
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
            <span className="inline-block px-4 py-1 mb-5 text-sm font-medium rounded-full bg-zordie-100 text-zordie-800 dark:bg-zordie-800 dark:text-zordie-100">
              For Job Seekers
            </span>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl">
              Showcase Your <span className="text-zordie-600 dark:text-zordie-400">Authentic Skills</span>
            </h1>
            <p className="max-w-2xl mx-auto mb-10 text-xl text-gray-600 dark:text-gray-300">
              Stand out from the competition by verifying your skills and credentials with Zordie AI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="btn-gradient shadow-lg hover:shadow-zordie-200/50">
                  Create Free Profile
                </Button>
              </Link>
              <Link to="/features">
                <Button size="lg" variant="outline" className="shadow-sm border-zordie-200 hover:border-zordie-300 hover:bg-zordie-50 dark:border-zordie-700 dark:hover:border-zordie-600 dark:bg-zordie-800/50 dark:hover:bg-zordie-800 dark:text-white">
                  How It Works
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Problems We Solve Section */}
      <div className="py-24 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionHeading
            title="Common Job Search Challenges"
            subtitle="Issues faced by qualified candidates in today's competitive market"
            align="center"
          />
          
          <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {challengeCards.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden transition-all duration-300 border-0 hover-card-effect bg-gradient-to-tr from-white via-white to-gray-50">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-lg bg-red-100">
                      <challenge.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold">{challenge.title}</h3>
                    <p className="text-gray-600">{challenge.description}</p>
                    
                    <div className="pt-5 mt-5 border-t border-gray-100">
                      <div className="flex items-center">
                        <div className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-zordie-100">
                          <challenge.solutionIcon className="w-4 h-4 text-zordie-600" />
                        </div>
                        <div>
                          <p className="font-medium text-zordie-700">Our Solution:</p>
                          <p className="text-sm text-gray-600">{challenge.solution}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Verification Process */}
      <div className="py-24 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionHeading
            title="How Verification Works"
            subtitle="Simple steps to stand out with verified credentials"
            align="center"
          />
          
          <div className="relative pt-10 mt-10">
            <div className="absolute top-0 left-0 hidden w-full h-[1px] bg-zordie-100 lg:block lg:left-1/2 lg:-translate-x-1/2 lg:w-1/2"></div>
            
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
              {verificationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex items-center justify-center w-12 h-12 text-white rounded-full shadow-lg bg-zordie-600">
                      {index + 1}
                    </div>
                  </div>
                  
                  <Card className="pt-10 h-full overflow-hidden transition-all duration-300 border-0 hover-card-effect bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-5 rounded-lg bg-zordie-100">
                        <step.icon className="w-8 h-8 text-zordie-600" />
                      </div>
                      <h3 className="mb-3 text-xl font-semibold text-center">{step.title}</h3>
                      <p className="text-center text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/signup">
              <Button size="lg" className="btn-gradient shadow-lg">
                Start Verification Process <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Profile Features */}
      <div className="py-24 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden bg-gradient-to-tr from-zordie-900 to-zordie-700 rounded-2xl shadow-xl p-8">
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
                        <img 
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" 
                          alt="Profile" 
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="absolute bottom-0 right-0 flex items-center justify-center w-8 h-8 text-white rounded-full bg-green-500 border-2 border-white">
                        <BadgeCheck className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold text-white">Sarah Johnson</h4>
                      <p className="text-zordie-100">Senior Frontend Developer</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mt-8">
                    <div className="p-3 rounded-lg bg-white/10">
                      <h5 className="mb-1 font-medium text-white">Skills Verified</h5>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-white/20 text-white">React</span>
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-white/20 text-white">TypeScript</span>
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-white/20 text-white">NextJS</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/10">
                      <h5 className="mb-1 font-medium text-white">Experience</h5>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-500/30 text-white">5+ Years</span>
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-500/30 text-white">Verified</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 mt-5 border border-white/20 rounded-lg bg-white/5">
                    <h5 className="mb-2 font-medium text-white">Projects Verified</h5>
                    <div className="flex items-center mb-2">
                      <Github className="w-4 h-4 mr-2 text-zordie-100" />
                      <span className="text-sm text-zordie-100">E-commerce Platform</span>
                      <Badge className="ml-auto px-2 py-0 text-xs bg-green-500 text-white hover:bg-green-600">
                        Original
                      </Badge>
                    </div>
                    <div className="flex items-center">
                      <Github className="w-4 h-4 mr-2 text-zordie-100" />
                      <span className="text-sm text-zordie-100">Portfolio Website</span>
                      <Badge className="ml-auto px-2 py-0 text-xs bg-green-500 text-white hover:bg-green-600">
                        Original
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Button className="btn-gradient">
                      View Full Profile
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="absolute p-4 -bottom-6 -left-6 bg-white rounded-lg shadow-lg border animate-pulse-light">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-zordie-500 to-accent1 flex items-center justify-center text-white font-bold">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Verified Badge</p>
                    <p className="text-xs text-gray-500">Trusted by employers</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-5 px-3 py-1 bg-zordie-100 text-zordie-800 hover:bg-zordie-100">
                Verified Profile
              </Badge>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Stand Out with a <span className="text-zordie-600">Verified Profile</span>
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                When employers see your Zordie verification badge, they know your skills and experience are authentic, giving you a significant advantage in a competitive job market.
              </p>
              
              <div className="space-y-6">
                {profileFeatures.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex p-4 transition-all duration-300 border border-transparent rounded-lg hover:border-zordie-100 hover:bg-white"
                  >
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-4 rounded-full bg-zordie-100">
                      <feature.icon className="w-5 h-5 text-zordie-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-medium">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Benefits Grid */}
      <div className="py-24 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionHeading
            title="Zordie AI Benefits"
            subtitle="How our platform helps job seekers succeed"
            align="center"
          />
          
          <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-4">
            {benefitCards.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="feature-card group hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4 text-zordie-600">
                  <benefit.icon className="w-10 h-10" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                <p className="mb-4 text-gray-600">{benefit.description}</p>
                
                <div className="flex items-center pt-4 mt-4 border-t border-gray-100">
                  <div className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-zordie-100">
                    <ThumbsUp className="w-4 h-4 text-zordie-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{benefit.advantage}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-24 bg-zordie-900 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80')] bg-no-repeat bg-cover bg-center">
        <div className="absolute inset-0 bg-zordie-900/80"></div>
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="mb-5 text-3xl font-bold text-white md:text-4xl">
              Ready to stand out from the crowd?
            </h2>
            <p className="mb-10 text-lg text-zordie-100">
              Create your verified profile today and get noticed by top employers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="btn-gradient shadow-lg">
                  Create Free Profile
                </Button>
              </Link>
              <Link to="/features">
                <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

// Data for various sections
const seekerStats = [
  {
    icon: BadgeCheck,
    value: "2.5x",
    label: "More interview invitations"
  },
  {
    icon: Zap,
    value: "68%",
    label: "Faster job offers"
  },
  {
    icon: Target,
    value: "94%",
    label: "Better job matches"
  },
  {
    icon: TrendingUp,
    value: "37%",
    label: "Higher starting salaries"
  }
];

const challengeCards = [
  {
    icon: Briefcase,
    title: "Resume Gets Overlooked",
    description: "Qualified candidates often get lost in a sea of applications, with recruiters spending only 6-8 seconds per resume.",
    solutionIcon: BadgeCheck,
    solution: "Verified profiles stand out with a trust badge, catching recruiters' attention immediately."
  },
  {
    icon: Users,
    title: "Competing With Fake Resumes",
    description: "Up to 40% of candidates exaggerate their skills and experience, creating unfair competition for honest professionals.",
    solutionIcon: ShieldCheck,
    solution: "Verification distinguishes you from inflated resumes, showcasing your authentic skills."
  },
  {
    icon: BarChart3,
    title: "Poor Job Matches",
    description: "Keyword-based matching often leads to irrelevant job recommendations and applications that waste your time.",
    solutionIcon: Target,
    solution: "AI matches your verified skills to the right opportunities for better fit and success."
  }
];

const verificationSteps = [
  {
    icon: FileCheck,
    title: "Create Your Profile",
    description: "Sign up and build your professional profile with skills, experience, and education details."
  },
  {
    icon: Github,
    title: "Connect Your Projects",
    description: "Link GitHub, LinkedIn, and portfolio projects to showcase and verify your work."
  },
  {
    icon: Badge,
    title: "Complete Verification",
    description: "Complete AI-guided skill assessments to verify your technical and soft skills."
  },
  {
    icon: Briefcase,
    title: "Get Matched With Jobs",
    description: "Receive tailored job matches based on your verified skills and preferences."
  }
];

const profileFeatures = [
  {
    icon: BadgeCheck,
    title: "Verification Badge",
    description: "Earn a trusted verification badge that signals authenticity to employers and stands out in applications."
  },
  {
    icon: ShieldCheck,
    title: "Skills Verification",
    description: "Show employers your skills have been independently verified through assessments and project analysis."
  },
  {
    icon: Github,
    title: "Project Showcase",
    description: "Display your verified projects and contributions with authenticity verification badges."
  },
  {
    icon: MessageSquare,
    title: "AI Interview Prep",
    description: "Access personalized interview preparation based on your verified skills and target roles."
  }
];

const benefitCards = [
  {
    icon: BadgeCheck,
    title: "Verified Profile",
    description: "Earn a trusted verification badge that sets you apart from other candidates in a sea of applications.",
    advantage: "3x higher profile views"
  },
  {
    icon: Clock,
    title: "Faster Hiring",
    description: "Skip unnecessary screening rounds with pre-verified skills and experience, shortening your job search.",
    advantage: "68% faster hiring process"
  },
  {
    icon: Award,
    title: "Skill Showcase",
    description: "Demonstrate your abilities through verified projects and assessments that employers can trust.",
    advantage: "94% hiring confidence"
  },
  {
    icon: Sparkles,
    title: "AI Job Matching",
    description: "Get matched with opportunities that align with your verified skills and career goals for better fit.",
    advantage: "80% job satisfaction"
  }
];

export default ForJobSeekers;
