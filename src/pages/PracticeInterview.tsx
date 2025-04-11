import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Mic, 
  Video, 
  Clock, 
  BarChart, 
  Play, 
  CheckCircle,
  ThumbsUp,
  PauseCircle,
  RefreshCw,
  Share2,
  BookOpen,
  Lightbulb,
  Sparkles,
  MessageSquare,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

const PracticeInterview = () => {
  const [isInterviewStarted, setIsInterviewStarted] = useState(false);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-zordie-50 to-zordie-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center p-2 bg-zordie-600 text-white rounded-full mb-6">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zordie-800">
                AI-Powered Interview Practice
              </h1>
              <p className="text-lg text-zordie-600 mb-8">
                Master your interview skills with our AI interviewer. Receive real-time feedback and actionable insights to prepare for your next job interview.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-gradient text-lg py-6 px-8" onClick={() => setIsInterviewStarted(true)}>
                  Start Practice Interview
                </Button>
                <Button variant="outline" className="text-lg py-6 px-8">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" 
                alt="Interview Practice"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                    <ThumbsUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Success Rate</div>
                    <div className="text-xl font-bold text-zordie-700">89%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Setup Section (shown when interview not started) */}
      {!isInterviewStarted && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Customize Your Interview Practice"
              subtitle="Tailored to your specific needs"
              align="center"
            />
            
            <div className="max-w-3xl mx-auto mt-12">
              <Card className="border-gray-200 shadow-md">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Select Interview Type</label>
                      <Select defaultValue="behavioral">
                        <SelectTrigger>
                          <SelectValue placeholder="Choose interview type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="behavioral">Behavioral Interview</SelectItem>
                          <SelectItem value="technical">Technical Interview</SelectItem>
                          <SelectItem value="situational">Situational Interview</SelectItem>
                          <SelectItem value="leadership">Leadership Interview</SelectItem>
                          <SelectItem value="case">Case Study Interview</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Job Role / Position</label>
                      <Select defaultValue="product">
                        <SelectTrigger>
                          <SelectValue placeholder="Select job role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="product">Product Manager</SelectItem>
                          <SelectItem value="software">Software Engineer</SelectItem>
                          <SelectItem value="data">Data Scientist</SelectItem>
                          <SelectItem value="marketing">Marketing Specialist</SelectItem>
                          <SelectItem value="sales">Sales Representative</SelectItem>
                          <SelectItem value="customer">Customer Success Manager</SelectItem>
                          <SelectItem value="hr">HR Specialist</SelectItem>
                          <SelectItem value="finance">Financial Analyst</SelectItem>
                          <SelectItem value="design">UX/UI Designer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Experience Level</label>
                      <Select defaultValue="mid">
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                          <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                          <SelectItem value="senior">Senior Level (6-10 years)</SelectItem>
                          <SelectItem value="executive">Executive Level (10+ years)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Industry Focus (Optional)</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry (optional)" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tech">Technology</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="government">Government</SelectItem>
                          <SelectItem value="nonprofit">Non-profit</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Interview Duration</label>
                      <Select defaultValue="20">
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10">10 minutes (Quick Practice)</SelectItem>
                          <SelectItem value="20">20 minutes (Standard)</SelectItem>
                          <SelectItem value="30">30 minutes (Comprehensive)</SelectItem>
                          <SelectItem value="45">45 minutes (In-depth)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Difficulty Level</label>
                      <Select defaultValue="moderate">
                        <SelectTrigger>
                          <SelectValue placeholder="Select difficulty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner (Introductory questions)</SelectItem>
                          <SelectItem value="moderate">Moderate (Standard interview questions)</SelectItem>
                          <SelectItem value="challenging">Challenging (Advanced questions)</SelectItem>
                          <SelectItem value="expert">Expert (Tough interview scenarios)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <h3 className="font-medium">Device Check</h3>
                        <p className="text-sm text-gray-500">Ensure your microphone and camera are working</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm" className="flex items-center">
                          <Mic className="h-4 w-4 mr-2" />
                          Test Mic
                        </Button>
                        <Button variant="outline" size="sm" className="flex items-center">
                          <Video className="h-4 w-4 mr-2" />
                          Test Camera
                        </Button>
                      </div>
                    </div>
                    
                    <Button className="w-full btn-gradient py-6 text-lg" onClick={() => setIsInterviewStarted(true)}>
                      Start Interview Practice
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Interview In Progress Section (shown when interview is started) */}
      {isInterviewStarted && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left Column - AI Interviewer */}
              <div className="md:col-span-2">
                <Card className="border-gray-200 shadow-md mb-6">
                  <CardContent className="p-0">
                    <div className="relative aspect-video bg-gray-900 rounded-t-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                        alt="AI Interviewer"
                        className="w-full h-full object-cover opacity-90"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <Sparkles className="h-16 w-16 mx-auto mb-4 text-zordie-400" />
                          <h2 className="text-2xl font-bold mb-2">Sarah, AI Interview Coach</h2>
                          <p className="text-zordie-100">Your virtual interviewer is ready to begin</p>
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 flex space-x-2">
                        <Button variant="outline" size="icon" className="bg-black/30 text-white border-white/20 hover:bg-black/50">
                          <Mic className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="bg-black/30 text-white border-white/20 hover:bg-black/50">
                          <Video className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="bg-black/30 text-white border-white/20 hover:bg-black/50">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Badge className="bg-green-600 text-white">Live</Badge>
                          <span className="text-sm text-gray-500 ml-3">Product Manager Interview (Mid-Level)</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>12:34 remaining</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <p className="font-medium mb-1">Current Question:</p>
                        <p className="text-gray-700">
                          "Tell me about a time when you had to prioritize features for a product with limited development resources. How did you make those decisions and what was the outcome?"
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-center space-x-4">
                        <Button variant="outline" size="lg" className="rounded-full">
                          <RefreshCw className="h-5 w-5 mr-2" />
                          New Question
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full bg-red-50 text-red-600 border-red-200 hover:bg-red-100">
                          <PauseCircle className="h-5 w-5 mr-2" />
                          Pause
                        </Button>
                        <Button size="lg" className="rounded-full bg-green-600 hover:bg-green-700">
                          <Play className="h-5 w-5 mr-2" />
                          Answer
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Card className="border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-zordie-100 flex items-center justify-center mr-3">
                          <MessageSquare className="h-5 w-5 text-zordie-700" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Answer Tips</h3>
                          <p className="text-sm text-gray-600">
                            Use the STAR method (Situation, Task, Action, Result) to structure your response. Include specific metrics when discussing the outcome.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-zordie-100 flex items-center justify-center mr-3">
                          <Lightbulb className="h-5 w-5 text-zordie-700" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Key Points to Cover</h3>
                          <ul className="text-sm text-gray-600 list-disc pl-4">
                            <li>Data-driven decision making</li>
                            <li>Stakeholder management</li>
                            <li>Balancing business value and user needs</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-4">Your Response Transcript</h3>
                    <div className="bg-gray-50 p-4 rounded-lg max-h-40 overflow-y-auto">
                      <p className="text-gray-600 text-sm">
                        "In my previous role at TechSolutions, we were developing a new CRM platform with limited engineering resources. We had a long list of potential features but only eight weeks until the launch deadline..."
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Right Column - Feedback & Stats */}
              <div>
                <Card className="border-gray-200 shadow-md mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-4">Real-time Feedback</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <label className="text-sm font-medium">Clarity of Communication</label>
                          <span className="text-sm text-gray-500">Good</span>
                        </div>
                        <Progress value={72} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <label className="text-sm font-medium">Relevance to Question</label>
                          <span className="text-sm text-gray-500">Excellent</span>
                        </div>
                        <Progress value={92} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <label className="text-sm font-medium">Structure of Answer</label>
                          <span className="text-sm text-gray-500">Good</span>
                        </div>
                        <Progress value={68} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <label className="text-sm font-medium">Specific Examples</label>
                          <span className="text-sm text-gray-500">Needs Improvement</span>
                        </div>
                        <Progress value={45} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <label className="text-sm font-medium">Confidence Level</label>
                          <span className="text-sm text-gray-500">Good</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Speech Analysis</h4>
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Speaking pace: 145 wpm</span>
                        <span>Filler words: 4</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                          Less "um" and "uh"
                        </Badge>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Good eye contact
                        </Badge>
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                          Speak more concisely
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200 shadow-md mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-4">Interview Progress</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <div className="text-sm">Tell me about yourself</div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <div className="text-sm">Why are you interested in this role?</div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-zordie-100 flex items-center justify-center mr-3 animate-pulse">
                          <span className="text-zordie-700 text-xs font-medium">3</span>
                        </div>
                        <div className="text-sm font-medium">Feature prioritization question (Current)</div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                          <span className="text-gray-500 text-xs">4</span>
                        </div>
                        <div className="text-sm text-gray-500">Leadership question</div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                          <span className="text-gray-500 text-xs">5</span>
                        </div>
                        <div className="text-sm text-gray-500">Problem-solving question</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200 shadow-md">
                  <CardContent className="p-6">
                    <Tabs defaultValue="tips">
                      <TabsList className="w-full">
                        <TabsTrigger value="tips">Interview Tips</TabsTrigger>
                        <TabsTrigger value="resources">Resources</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="tips" className="pt-4">
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-zordie-600 mr-2 mt-0.5 shrink-0" />
                            <span>Use the STAR method for behavioral questions</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-zordie-600 mr-2 mt-0.5 shrink-0" />
                            <span>Provide specific metrics and results when possible</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-zordie-600 mr-2 mt-0.5 shrink-0" />
                            <span>Maintain good eye contact with the interviewer</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-zordie-600 mr-2 mt-0.5 shrink-0" />
                            <span>Speak clearly and at a moderate pace</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-zordie-600 mr-2 mt-0.5 shrink-0" />
                            <span>Prepare 2-3 questions to ask the interviewer</span>
                          </li>
                        </ul>
                        
                        <Button variant="link" className="px-0 py-2 h-auto text-zordie-600">
                          View all interview tips <ArrowRight className="h-3 w-3 ml-1" />
                        </Button>
                      </TabsContent>
                      
                      <TabsContent value="resources" className="pt-4">
                        <ul className="space-y-3 text-sm">
                          <li>
                            <a href="#" className="flex items-center text-zordie-600 hover:underline">
                              <BookOpen className="h-4 w-4 mr-2" />
                              Product Manager Interview Guide
                            </a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center text-zordie-600 hover:underline">
                              <BookOpen className="h-4 w-4 mr-2" />
                              Top 50 PM Interview Questions
                            </a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center text-zordie-600 hover:underline">
                              <BookOpen className="h-4 w-4 mr-2" />
                              How to Showcase Leadership Skills
                            </a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center text-zordie-600 hover:underline">
                              <BookOpen className="h-4 w-4 mr-2" />
                              Answering Behavioral Questions
                            </a>
                          </li>
                        </ul>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Advanced AI Interview Practice"
            subtitle="Tailored to your specific needs"
            align="center"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <FeatureCard 
              icon={<Sparkles className="h-6 w-6 text-zordie-700" />}
              title="Realistic AI Interviewer"
              description="Our AI interviewer asks industry-specific questions and follows up based on your responses, creating a natural interview experience."
            />
            
            <FeatureCard 
              icon={<BarChart className="h-6 w-6 text-zordie-700" />}
              title="Detailed Performance Analysis"
              description="Receive comprehensive feedback on your answers, including communication style, content relevance, and body language."
            />
            
            <FeatureCard 
              icon={<MessageSquare className="h-6 w-6 text-zordie-700" />}
              title="Custom Interview Scenarios"
              description="Practice for specific roles, industries, and interview types with customized question sets and feedback."
            />
            
            <FeatureCard 
              icon={<Video className="h-6 w-6 text-zordie-700" />}
              title="Video Recording & Playback"
              description="Review your interview recordings to identify areas for improvement in your delivery and body language."
            />
            
            <FeatureCard 
              icon={<Lightbulb className="h-6 w-6 text-zordie-700" />}
              title="Answer Coaching"
              description="Get real-time suggestions and post-interview guidance on how to improve your responses to common questions."
            />
            
            <FeatureCard 
              icon={<BookOpen className="h-6 w-6 text-zordie-700" />}
              title="Interview Resources"
              description="Access a library of interview guides, sample answers, and industry-specific tips to prepare thoroughly."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Success Stories"
            subtitle="From practice to job offers"
            align="center"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <TestimonialCard 
              quote="After practicing with the AI interviewer for just one week, I felt so much more confident in my real interview. I was offered the job the next day!"
              name="Michael Chen"
              title="Software Engineer at TechCorp"
              image="https://randomuser.me/api/portraits/men/32.jpg"
            />
            
            <TestimonialCard 
              quote="The feedback on my communication style was eye-opening. I realized I was using too many filler words, and the practice helped me speak more clearly and confidently."
              name="Jessica Williams"
              title="Marketing Manager at BrandCo"
              image="https://randomuser.me/api/portraits/women/44.jpg"
            />
            
            <TestimonialCard 
              quote="As someone who gets nervous in interviews, this tool was a game-changer. Practicing with the AI interviewer helped me overcome my anxiety and nail my responses."
              name="David Thompson"
              title="Data Scientist at AnalyticsPro"
              image="https://randomuser.me/api/portraits/men/67.jpg"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-zordie-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <p className="text-zordie-200">Users report increased confidence</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3.2x</div>
              <p className="text-zordie-200">More likely to receive job offers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">92%</div>
              <p className="text-zordie-200">Users improve answer quality</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">78%</div>
              <p className="text-zordie-200">Reduction in interview anxiety</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Interview Practice Plans"
            subtitle="Choose the plan that fits your needs"
            align="center"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Free Trial</h3>
                  <div className="text-3xl font-bold text-zordie-700 mb-1">$0</div>
                  <p className="text-gray-500">3 practice interviews</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <PlanFeature text="3 Basic interview sessions" />
                  <PlanFeature text="General feedback" />
                  <PlanFeature text="Limited question bank" />
                  <PlanFeature text="Basic interview guide" />
                </ul>
                <Button variant="outline" className="w-full">Get Started Free</Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-zordie-500 hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
                <div className="bg-zordie-600 text-white text-sm font-medium py-1 px-3 rounded-full inline-block">
                  Most Popular
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Pro</h3>
                  <div className="text-3xl font-bold text-zordie-700 mb-1">$19<span className="text-base font-normal text-gray-500">/month</span></div>
                  <p className="text-gray-500">Unlimited practice</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <PlanFeature text="Unlimited interview sessions" />
                  <PlanFeature text="Detailed feedback analysis" />
                  <PlanFeature text="Industry-specific questions" />
                  <PlanFeature text="Video recording & review" />
                  <PlanFeature text="Performance tracking" />
                  <PlanFeature text="Comprehensive resources" />
                </ul>
                <Button className="w-full btn-gradient">Start Pro Plan</Button>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Premium</h3>
                  <div className="text-3xl font-bold text-zordie-700 mb-1">$39<span className="text-base font-normal text-gray-500">/month</span></div>
                  <p className="text-gray-500">Pro features + coaching</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <PlanFeature text="Everything in Pro plan" />
                  <PlanFeature text="1:1 coach feedback sessions" />
                  <PlanFeature text="Resume review" />
                  <PlanFeature text="Personal interview strategy" />
                  <PlanFeature text="Mock interviews with experts" />
                  <PlanFeature text="Priority support" />
                </ul>
                <Button variant="outline" className="w-full">Start Premium Plan</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Have questions? We have answers"
            align="center"
          />
          
          <div className="max-w-3xl mx-auto mt-12 space-y-4">
            <FaqItem 
              question="How realistic is the AI interviewer?"
              answer="Our AI interviewer is trained on thousands of real interview scenarios and uses advanced natural language processing to create a realistic interview experience. The AI adapts to your responses, asks follow-up questions, and provides feedback that closely simulates a real human interviewer."
            />
            
            <FaqItem 
              question="Can I practice for specific job roles or industries?"
              answer="Yes! You can customize your practice interview for specific job roles (e.g., Software Engineer, Product Manager), industries (e.g., Tech, Finance, Healthcare), and experience levels. The AI will generate relevant questions and provide industry-specific feedback."
            />
            
            <FaqItem 
              question="How does the feedback system work?"
              answer="Our AI analyzes multiple aspects of your interview performance, including content relevance, communication clarity, body language (if video is enabled), speech patterns, and answer structure. You'll receive real-time feedback during the interview and a comprehensive analysis afterward with specific improvement suggestions."
            />
            
            <FaqItem 
              question="Is my interview data private and secure?"
              answer="Yes, your privacy is our priority. All interview recordings and data are encrypted and stored securely. We do not share your information with third parties, and you can delete your interview recordings at any time. Our AI learning models use anonymized data to improve the system."
            />
            
            <FaqItem 
              question="Can I access my previous interview recordings?"
              answer="Yes, with our Pro and Premium plans, you can access all your previous interview recordings, feedback, and progress tracking. This allows you to review your improvement over time and continue working on specific areas that need attention."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Ace Your Next Interview?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Start practicing with our AI interviewer today and gain the confidence you need to succeed in any interview.
          </p>
          <Button className="btn-gradient text-lg py-6 px-8 group">
            Start Free Practice Interview
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            No credit card required. Start with 3 free practice interviews.
          </p>
        </div>
      </section>
    </Layout>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-full bg-zordie-100 flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  image: string;
}

const TestimonialCard = ({ quote, name, title, image }: TestimonialCardProps) => {
  return (
    <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-6 text-zordie-700">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 11H6C6 11 6 9 6 7C6 4.79086 7.79086 3 10 3V11ZM22 11H18C18 11 18 9 18 7C18 4.79086 19.7909 3 22 3V11ZM22 11V15C22 15 20 15 18 15C15.7909 15 14 16.7909 14 19C14 21.2091 15.7909 23 18 23C20.2091 23 22 21.2091 22 19V15M10 11V15C10 15 8 15 6 15C3.79086 15 2 16.7909 2 19C2 21.2091 3.79086 23 6 23C8.20914 23 10 21.2091 10 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p className="text-gray-600 mb-6 flex-grow">{quote}</p>
        <div className="flex items-center">
          <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <div className="font-semibold">{name}</div>
            <div className="text-sm text-gray-500">{title}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const PlanFeature = ({ text }: { text: string }) => {
  return (
    <li className="flex items-center">
      <CheckCircle className="h-4 w-4 text-zordie-600 mr-3 shrink-0" />
      <span className="text-gray-700">{text}</span>
    </li>
  );
};

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Card className="border border-gray-200">
      <CardContent className="p-0">
        <button
          className="flex items-center justify-between w-full p-6 text-left font-medium focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{question}</span>
          <ChevronRight className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="p-6 pt-0 text-gray-600">
            {answer}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PracticeInterview;
