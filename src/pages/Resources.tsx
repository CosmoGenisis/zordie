
import React from 'react';
import Layout from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  BookOpen, 
  Search, 
  FileText, 
  Video, 
  Download, 
  Star, 
  Calendar, 
  Clock,
  ArrowRight,
  ChevronRight,
  CheckCircle,
  Video as VideoIcon,
  BookOpen as BookIcon,
  FileText as FileIcon,
  Download as DownloadIcon
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const Resources = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-zordie-50 to-zordie-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-zordie-600 text-white rounded-full mb-6">
              <BookOpen className="h-5 w-5" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zordie-800">
              Career Resources Center
            </h1>
            <p className="text-lg text-zordie-600 mb-8">
              Access expert guides, templates, and tools to help you succeed in your job search and career development.
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input 
                type="text" 
                placeholder="Search resources..." 
                className="pl-10 pr-4 py-6 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Featured Resources"
            subtitle="Popular guides and templates"
            align="center"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <ResourceCard 
              title="Ultimate Resume Guide for 2025"
              description="Learn how to craft a standout resume that gets past ATS systems and impresses hiring managers."
              type="guide"
              category="Resume"
              downloadable={true}
              rating={4.9}
              image="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            />
            
            <ResourceCard 
              title="AI-Ready Resume Templates"
              description="Download professionally designed resume templates optimized for modern AI screening tools."
              type="template"
              category="Resume"
              downloadable={true}
              rating={4.8}
              image="https://images.unsplash.com/photo-1586282391159-37e989a57354?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            />
            
            <ResourceCard 
              title="Master the Behavioral Interview"
              description="Techniques to tackle behavioral interview questions using the STAR method with example answers."
              type="video"
              category="Interview"
              downloadable={false}
              rating={4.9}
              image="https://images.unsplash.com/photo-1628243426757-c092288e4c62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
        </div>
      </section>

      {/* Resource Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Resources by Category"
            subtitle="Explore our comprehensive library"
            align="left"
          />
          
          <Tabs defaultValue="all" className="mt-8">
            <TabsList className="w-full max-w-3xl">
              <TabsTrigger value="all">All Resources</TabsTrigger>
              <TabsTrigger value="resume">Resume & CV</TabsTrigger>
              <TabsTrigger value="interview">Interview Prep</TabsTrigger>
              <TabsTrigger value="career">Career Growth</TabsTrigger>
              <TabsTrigger value="job">Job Search</TabsTrigger>
            </TabsList>
            
            <div className="mt-8 grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <Card className="border-gray-200 sticky top-24">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-4">Resource Types</h3>
                    
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded text-zordie-600 focus:ring-zordie-500" />
                        <span>Guides & Articles</span>
                      </label>
                      
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded text-zordie-600 focus:ring-zordie-500" />
                        <span>Templates</span>
                      </label>
                      
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded text-zordie-600 focus:ring-zordie-500" />
                        <span>Videos</span>
                      </label>
                      
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded text-zordie-600 focus:ring-zordie-500" />
                        <span>Checklists</span>
                      </label>
                      
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded text-zordie-600 focus:ring-zordie-500" />
                        <span>Webinars</span>
                      </label>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <h3 className="font-semibold text-lg mb-4">Experience Level</h3>
                    
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded text-zordie-600 focus:ring-zordie-500" />
                        <span>Entry Level</span>
                      </label>
                      
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded text-zordie-600 focus:ring-zordie-500" />
                        <span>Mid-Career</span>
                      </label>
                      
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded text-zordie-600 focus:ring-zordie-500" />
                        <span>Senior Level</span>
                      </label>
                      
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded text-zordie-600 focus:ring-zordie-500" />
                        <span>Executive</span>
                      </label>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <h3 className="font-semibold text-lg mb-4">Industry</h3>
                    
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded text-zordie-600 focus:ring-zordie-500" />
                        <span>Technology</span>
                      </label>
                      
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded text-zordie-600 focus:ring-zordie-500" />
                        <span>Healthcare</span>
                      </label>
                      
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded text-zordie-600 focus:ring-zordie-500" />
                        <span>Finance</span>
                      </label>
                      
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded text-zordie-600 focus:ring-zordie-500" />
                        <span>Marketing</span>
                      </label>
                      
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded text-zordie-600 focus:ring-zordie-500" />
                        <span>Education</span>
                      </label>
                    </div>
                    
                    <Button className="w-full mt-4">Apply Filters</Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="md:col-span-2">
                <TabsContent value="all" className="mt-0">
                  <div className="space-y-4">
                    <ListResourceCard 
                      title="Technical Interview Preparation Guide"
                      description="Master coding interviews with practice problems, algorithms, and system design concepts."
                      type="guide"
                      category="Interview"
                      date="Apr 5, 2025"
                      readTime="15 min read"
                    />
                    
                    <ListResourceCard 
                      title="Salary Negotiation Scripts"
                      description="Word-for-word scripts to help you negotiate a better salary and benefits package."
                      type="template"
                      category="Career"
                      date="Apr 2, 2025"
                      readTime="10 min read"
                    />
                    
                    <ListResourceCard 
                      title="LinkedIn Profile Optimization Workshop"
                      description="Learn how to make your LinkedIn profile stand out to recruiters and hiring managers."
                      type="video"
                      category="Job Search"
                      date="Mar 28, 2025"
                      readTime="45 min video"
                    />
                    
                    <ListResourceCard 
                      title="Cover Letter Templates for Different Industries"
                      description="Customizable cover letter templates for tech, healthcare, finance, and more."
                      type="template"
                      category="Resume"
                      date="Mar 25, 2025"
                      readTime="5 templates"
                    />
                    
                    <ListResourceCard 
                      title="Remote Job Search Strategy"
                      description="How to find and land remote positions in the post-pandemic job market."
                      type="guide"
                      category="Job Search"
                      date="Mar 20, 2025"
                      readTime="18 min read"
                    />
                    
                    <ListResourceCard 
                      title="Career Transition Roadmaps"
                      description="Step-by-step guides for transitioning to a new industry or role."
                      type="guide"
                      category="Career"
                      date="Mar 15, 2025"
                      readTime="12 min read"
                    />
                    
                    <ListResourceCard 
                      title="Job Interview Question Bank"
                      description="300+ common interview questions with sample answers for various roles."
                      type="template"
                      category="Interview"
                      date="Mar 10, 2025"
                      readTime="25 pages"
                    />
                    
                    <ListResourceCard 
                      title="AI Resume Scanner Workshop"
                      description="Learn how to optimize your resume for AI and ATS systems used by employers."
                      type="video"
                      category="Resume"
                      date="Mar 5, 2025"
                      readTime="60 min webinar"
                    />
                  </div>
                  
                  <div className="flex justify-center mt-8">
                    <Button variant="outline">
                      Load More Resources
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="resume" className="mt-0">
                  <div className="space-y-4">
                    <ListResourceCard 
                      title="Cover Letter Templates for Different Industries"
                      description="Customizable cover letter templates for tech, healthcare, finance, and more."
                      type="template"
                      category="Resume"
                      date="Mar 25, 2025"
                      readTime="5 templates"
                    />
                    
                    <ListResourceCard 
                      title="AI Resume Scanner Workshop"
                      description="Learn how to optimize your resume for AI and ATS systems used by employers."
                      type="video"
                      category="Resume"
                      date="Mar 5, 2025"
                      readTime="60 min webinar"
                    />
                    
                    <ListResourceCard 
                      title="Resume Action Verbs by Industry"
                      description="Powerful action verbs to make your resume stand out, categorized by industry and role."
                      type="guide"
                      category="Resume"
                      date="Feb 28, 2025"
                      readTime="8 min read"
                    />
                    
                    <ListResourceCard 
                      title="Executive Resume Masterclass"
                      description="How to craft a compelling executive resume that showcases leadership and achievements."
                      type="video"
                      category="Resume"
                      date="Feb 20, 2025"
                      readTime="50 min video"
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="interview" className="mt-0">
                  <div className="space-y-4">
                    <ListResourceCard 
                      title="Technical Interview Preparation Guide"
                      description="Master coding interviews with practice problems, algorithms, and system design concepts."
                      type="guide"
                      category="Interview"
                      date="Apr 5, 2025"
                      readTime="15 min read"
                    />
                    
                    <ListResourceCard 
                      title="Job Interview Question Bank"
                      description="300+ common interview questions with sample answers for various roles."
                      type="template"
                      category="Interview"
                      date="Mar 10, 2025"
                      readTime="25 pages"
                    />
                    
                    <ListResourceCard 
                      title="Virtual Interview Best Practices"
                      description="Tips for acing remote interviews, from technical setup to body language."
                      type="guide"
                      category="Interview"
                      date="Feb 15, 2025"
                      readTime="12 min read"
                    />
                    
                    <ListResourceCard 
                      title="Case Interview Workshop for Consultants"
                      description="Learn how to tackle case interviews with frameworks and practice examples."
                      type="video"
                      category="Interview"
                      date="Feb 10, 2025"
                      readTime="75 min webinar"
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="career" className="mt-0">
                  <div className="space-y-4">
                    <ListResourceCard 
                      title="Salary Negotiation Scripts"
                      description="Word-for-word scripts to help you negotiate a better salary and benefits package."
                      type="template"
                      category="Career"
                      date="Apr 2, 2025"
                      readTime="10 min read"
                    />
                    
                    <ListResourceCard 
                      title="Career Transition Roadmaps"
                      description="Step-by-step guides for transitioning to a new industry or role."
                      type="guide"
                      category="Career"
                      date="Mar 15, 2025"
                      readTime="12 min read"
                    />
                    
                    <ListResourceCard 
                      title="Personal Branding for Professionals"
                      description="Build a compelling personal brand that attracts opportunities and advances your career."
                      type="guide"
                      category="Career"
                      date="Feb 5, 2025"
                      readTime="14 min read"
                    />
                    
                    <ListResourceCard 
                      title="Developing a Growth Mindset at Work"
                      description="Strategies to cultivate a growth mindset for continuous learning and career advancement."
                      type="video"
                      category="Career"
                      date="Jan 28, 2025"
                      readTime="30 min video"
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="job" className="mt-0">
                  <div className="space-y-4">
                    <ListResourceCard 
                      title="LinkedIn Profile Optimization Workshop"
                      description="Learn how to make your LinkedIn profile stand out to recruiters and hiring managers."
                      type="video"
                      category="Job Search"
                      date="Mar 28, 2025"
                      readTime="45 min video"
                    />
                    
                    <ListResourceCard 
                      title="Remote Job Search Strategy"
                      description="How to find and land remote positions in the post-pandemic job market."
                      type="guide"
                      category="Job Search"
                      date="Mar 20, 2025"
                      readTime="18 min read"
                    />
                    
                    <ListResourceCard 
                      title="Hidden Job Market: Networking Guide"
                      description="Techniques to tap into the hidden job market through effective networking."
                      type="guide"
                      category="Job Search"
                      date="Jan 15, 2025"
                      readTime="16 min read"
                    />
                    
                    <ListResourceCard 
                      title="Job Search Tracker Template"
                      description="Stay organized during your job search with this comprehensive tracking spreadsheet."
                      type="template"
                      category="Job Search"
                      date="Jan 10, 2025"
                      readTime="Template download"
                    />
                  </div>
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Career Learning Paths"
            subtitle="Curated resource collections for specific goals"
            align="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <LearningPathCard 
              title="Job Search Accelerator"
              description="Complete guide to launching and optimizing your job search from start to finish."
              resources={8}
              time="4 weeks"
              image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
            />
            
            <LearningPathCard 
              title="Career Switcher's Roadmap"
              description="Resources to help you pivot careers with confidence and strategic planning."
              resources={12}
              time="8 weeks"
              image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            />
            
            <LearningPathCard 
              title="Leadership Development"
              description="Build the skills necessary to advance into leadership roles and manage teams effectively."
              resources={10}
              time="6 weeks"
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            />
            
            <LearningPathCard 
              title="Remote Work Success"
              description="Master the skills needed to thrive in remote and distributed work environments."
              resources={7}
              time="3 weeks"
              image="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            />
            
            <LearningPathCard 
              title="Tech Interview Mastery"
              description="Comprehensive preparation for technical interviews at top tech companies."
              resources={15}
              time="6 weeks"
              image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            />
            
            <LearningPathCard 
              title="First 90 Days Success"
              description="Resources to help you make a strong impression and impact in a new role."
              resources={9}
              time="3 weeks"
              image="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1355&q=80"
            />
          </div>
        </div>
      </section>

      {/* Expert Q&A Section */}
      <section className="py-16 bg-zordie-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Expert Q&A"
            subtitle="Advice from career and industry experts"
            align="center"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/68.jpg" 
                    alt="Career Expert" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">Jennifer Martinez</h3>
                    <p className="text-sm text-gray-500">Career Coach & Former Hiring Manager</p>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-medium text-zordie-700 mb-2">Q: How do I explain a career gap in my resume?</h4>
                  <p className="text-gray-600">
                    "Focus on skills developed during the gap rather than the gap itself. Whether you took time for family, education, or personal growth, frame it positively around what you learned. Be honest but strategic—highlight freelance work, volunteering, or courses taken during this period."
                  </p>
                </div>
                <Button variant="link" className="p-0 text-zordie-600">
                  Read full answer <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/35.jpg" 
                    alt="Career Expert" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">Robert Kim</h3>
                    <p className="text-sm text-gray-500">Tech Recruitment Specialist</p>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-medium text-zordie-700 mb-2">Q: What's the biggest resume mistake you see from tech candidates?</h4>
                  <p className="text-gray-600">
                    "The biggest mistake is focusing too much on responsibilities instead of achievements. Don't just list what you were supposed to do—highlight what you accomplished with metrics. Show how you improved processes, saved time or money, or achieved specific results."
                  </p>
                </div>
                <Button variant="link" className="p-0 text-zordie-600">
                  Read full answer <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/42.jpg" 
                    alt="Career Expert" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">Aisha Patel</h3>
                    <p className="text-sm text-gray-500">Leadership Development Coach</p>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-medium text-zordie-700 mb-2">Q: How can I demonstrate leadership skills when I haven't had a management role?</h4>
                  <p className="text-gray-600">
                    "Leadership isn't just about managing people. Highlight projects where you took initiative, coordinated teams, or mentored colleagues. Show times when you influenced decisions, resolved conflicts, or championed change—these all demonstrate leadership regardless of title."
                  </p>
                </div>
                <Button variant="link" className="p-0 text-zordie-600">
                  Read full answer <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/26.jpg" 
                    alt="Career Expert" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">David Thompson</h3>
                    <p className="text-sm text-gray-500">Salary Negotiation Specialist</p>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-medium text-zordie-700 mb-2">Q: When is the best time to negotiate salary during the hiring process?</h4>
                  <p className="text-gray-600">
                    "Wait until you have a job offer in hand. This is when you have the most leverage. If asked about salary expectations earlier, politely deflect by saying you'd like to learn more about the role first, or give a broad range based on market research rather than a specific number."
                  </p>
                </div>
                <Button variant="link" className="p-0 text-zordie-600">
                  Read full answer <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline">
              View All Expert Q&As
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Additions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <SectionHeading
              title="Newly Added Resources"
              subtitle="The latest additions to our library"
              align="left"
            />
            <Button variant="outline" className="hidden md:block">
              View All New Resources
            </Button>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <SmallResourceCard 
              title="Networking Email Templates"
              type="template"
              date="2 days ago"
            />
            
            <SmallResourceCard 
              title="Data Science Interview Questions"
              type="guide"
              date="3 days ago"
            />
            
            <SmallResourceCard 
              title="Personal Brand Workshop"
              type="video"
              date="5 days ago"
            />
            
            <SmallResourceCard 
              title="Weekly Job Search Planner"
              type="template"
              date="1 week ago"
            />
          </div>
          
          <div className="text-center mt-8 md:hidden">
            <Button variant="outline">
              View All New Resources
            </Button>
          </div>
        </div>
      </section>

      {/* Premium Resources Section */}
      <section className="py-16 bg-zordie-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Premium Career Resources</h2>
              <p className="text-zordie-100 mb-6">
                Unlock our complete library of premium resources, including personalized coaching sessions, advanced interview practice, and exclusive workshops.
              </p>
              <ul className="space-y-3 mb-8">
                <PremiumFeature text="Unlimited access to all templates and guides" />
                <PremiumFeature text="Weekly live workshops with industry experts" />
                <PremiumFeature text="One-on-one career coaching sessions" />
                <PremiumFeature text="Advanced AI interview practice" />
                <PremiumFeature text="Resume and LinkedIn profile reviews" />
              </ul>
              <Button className="bg-white text-zordie-700 hover:bg-zordie-50 text-lg py-6 px-8 group">
                Upgrade to Premium
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Premium Resources"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-zordie-100 rounded-full">
                    <Star className="h-6 w-6 text-zordie-700" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Starting at</div>
                    <div className="text-xl font-bold text-zordie-700">$19/month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Advance Your Career?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Access our comprehensive resource library and take the next step in your professional journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-gradient text-lg py-6 px-8">
              Browse All Resources
            </Button>
            <Button variant="outline" className="text-lg py-6 px-8">
              Join Our Community
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface ResourceCardProps {
  title: string;
  description: string;
  type: 'guide' | 'template' | 'video';
  category: string;
  downloadable: boolean;
  rating: number;
  image: string;
}

const ResourceCard = ({ title, description, type, category, downloadable, rating, image }: ResourceCardProps) => {
  const getTypeIcon = () => {
    switch (type) {
      case 'guide':
        return <BookOpen className="h-5 w-5" />;
      case 'template':
        return <FileText className="h-5 w-5" />;
      case 'video':
        return <VideoIcon className="h-5 w-5" />;
    }
  };
  
  return (
    <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 h-full overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-3">
          <Badge variant="outline" className="flex items-center gap-1 px-2 py-1 bg-zordie-50 text-zordie-700 border-zordie-200">
            {getTypeIcon()}
            <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
          </Badge>
          <Badge variant="outline" className="bg-gray-50">
            {category}
          </Badge>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill={i < Math.floor(rating) ? 'currentColor' : 'none'} />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">{rating}</span>
          </div>
          <Button variant="outline" size="sm" className={downloadable ? 'flex items-center' : 'hidden'}>
            <Download className="h-4 w-4 mr-1" />
            Download
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

interface ListResourceCardProps {
  title: string;
  description: string;
  type: string;
  category: string;
  date: string;
  readTime: string;
}

const ListResourceCard = ({ title, description, type, category, date, readTime }: ListResourceCardProps) => {
  const getTypeIcon = () => {
    switch (type) {
      case 'guide':
        return <BookIcon className="h-5 w-5 text-zordie-600" />;
      case 'template':
        return <FileIcon className="h-5 w-5 text-zordie-600" />;
      case 'video':
        return <VideoIcon className="h-5 w-5 text-zordie-600" />;
      default:
        return <FileIcon className="h-5 w-5 text-zordie-600" />;
    }
  };
  
  return (
    <Card className="border-gray-200 hover:shadow-md transition-all duration-300">
      <CardContent className="p-4 flex gap-4">
        <div className="h-12 w-12 bg-zordie-100 rounded-full flex items-center justify-center shrink-0">
          {getTypeIcon()}
        </div>
        
        <div className="flex-1">
          <div className="flex flex-wrap justify-between">
            <div className="mb-1">
              <Badge variant="outline" className="bg-gray-50 text-zordie-700">
                {category}
              </Badge>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{date}</span>
              <span className="mx-2">•</span>
              <Clock className="h-4 w-4 mr-1" />
              <span>{readTime}</span>
            </div>
          </div>
          
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
          
          <div className="flex justify-end">
            <Button variant="ghost" size="sm" className="text-zordie-600 p-0 hover:bg-transparent hover:text-zordie-700">
              View Resource <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface LearningPathCardProps {
  title: string;
  description: string;
  resources: number;
  time: string;
  image: string;
}

const LearningPathCard = ({ title, description, resources, time, image }: LearningPathCardProps) => {
  return (
    <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="h-40 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-5">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <FileText className="h-4 w-4 mr-1" />
            <span>{resources} resources</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{time}</span>
          </div>
        </div>
        
        <Button className="w-full">Start Learning Path</Button>
      </CardContent>
    </Card>
  );
};

const PremiumFeature = ({ text }: { text: string }) => {
  return (
    <li className="flex items-start">
      <CheckCircle className="h-5 w-5 text-zordie-100 mr-3 shrink-0 mt-0.5" />
      <span className="text-zordie-50">{text}</span>
    </li>
  );
};

interface SmallResourceCardProps {
  title: string;
  type: string;
  date: string;
}

const SmallResourceCard = ({ title, type, date }: SmallResourceCardProps) => {
  const getTypeIcon = () => {
    switch (type) {
      case 'guide':
        return <BookIcon className="h-5 w-5 text-zordie-600" />;
      case 'template':
        return <FileIcon className="h-5 w-5 text-zordie-600" />;
      case 'video':
        return <VideoIcon className="h-5 w-5 text-zordie-600" />;
      default:
        return <FileIcon className="h-5 w-5 text-zordie-600" />;
    }
  };
  
  return (
    <Card className="border-gray-200 hover:shadow-md transition-all duration-300">
      <CardContent className="p-4">
        <div className="flex items-center mb-3">
          <div className="h-10 w-10 bg-zordie-100 rounded-full flex items-center justify-center mr-3">
            {getTypeIcon()}
          </div>
          <div>
            <Badge variant="outline" className="text-xs bg-gray-50">
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Badge>
          </div>
        </div>
        <h3 className="font-medium mb-2">{title}</h3>
        <div className="text-xs text-gray-500 flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          <span>Added {date}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Resources;
