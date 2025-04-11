
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Clock, 
  Filter,
  ArrowRight,
  ChevronDown,
  Star,
  Bookmark,
  DollarSign,
  CheckCircle
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';

const FindJobs = () => {
  const [jobType, setJobType] = useState("all");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-zordie-50 to-zordie-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zordie-800">
              Find Your Perfect Job
            </h1>
            <p className="text-lg text-zordie-600 mb-8">
              Discover thousands of job opportunities matched to your skills and preferences
            </p>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <form>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input 
                        type="text" 
                        placeholder="Job title, keywords, or company" 
                        className="pl-10"
                      />
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input 
                        type="text" 
                        placeholder="Location or remote" 
                        className="pl-10"
                      />
                    </div>
                    <Button className="btn-gradient h-10">
                      Search Jobs
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" onClick={() => setJobType("full-time")} className={jobType === "full-time" ? "bg-zordie-100 border-zordie-300 text-zordie-700" : ""}>
                        Full-time
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => setJobType("part-time")} className={jobType === "part-time" ? "bg-zordie-100 border-zordie-300 text-zordie-700" : ""}>
                        Part-time
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => setJobType("contract")} className={jobType === "contract" ? "bg-zordie-100 border-zordie-300 text-zordie-700" : ""}>
                        Contract
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => setJobType("remote")} className={jobType === "remote" ? "bg-zordie-100 border-zordie-300 text-zordie-700" : ""}>
                        Remote
                      </Button>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                      className="flex items-center"
                    >
                      <Filter className="h-4 w-4 mr-2" />
                      Advanced Filters
                      <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} />
                    </Button>
                  </div>
                  
                  {isFiltersOpen && (
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4 pt-4 border-t">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Salary Range</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="any">Any salary</SelectItem>
                            <SelectItem value="50k">$50,000+</SelectItem>
                            <SelectItem value="75k">$75,000+</SelectItem>
                            <SelectItem value="100k">$100,000+</SelectItem>
                            <SelectItem value="150k">$150,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Experience Level</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="entry">Entry Level</SelectItem>
                            <SelectItem value="mid">Mid Level</SelectItem>
                            <SelectItem value="senior">Senior Level</SelectItem>
                            <SelectItem value="executive">Executive</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Posted</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="any">Any time</SelectItem>
                            <SelectItem value="day">Past 24 hours</SelectItem>
                            <SelectItem value="week">Past week</SelectItem>
                            <SelectItem value="month">Past month</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Industry</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tech">Technology</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Featured Jobs"
            subtitle="Highlighted opportunities from top companies"
            align="center"
          />
          
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <FeaturedJobCard 
              title="Senior Frontend Developer"
              company="TechGrowth Inc."
              location="San Francisco, CA"
              jobType="Full-time"
              salary="$120,000 - $150,000"
              logo="https://randomuser.me/api/portraits/lego/1.jpg"
              featured={true}
              tags={["React", "TypeScript", "UI/UX"]}
            />
            
            <FeaturedJobCard 
              title="Product Manager"
              company="Innovate Solutions"
              location="Remote"
              jobType="Full-time"
              salary="$110,000 - $135,000"
              logo="https://randomuser.me/api/portraits/lego/2.jpg"
              featured={true}
              tags={["Product Strategy", "Agile", "SaaS"]}
            />
            
            <FeaturedJobCard 
              title="DevOps Engineer"
              company="CloudScale Systems"
              location="Austin, TX"
              jobType="Contract"
              salary="$95,000 - $120,000"
              logo="https://randomuser.me/api/portraits/lego/3.jpg"
              featured={true}
              tags={["AWS", "Kubernetes", "CI/CD"]}
            />
            
            <FeaturedJobCard 
              title="UX/UI Designer"
              company="Creative Minds"
              location="New York, NY"
              jobType="Full-time"
              salary="$90,000 - $115,000"
              logo="https://randomuser.me/api/portraits/lego/4.jpg"
              featured={true}
              tags={["Figma", "User Research", "Prototyping"]}
            />
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="px-8">
              View All Featured Jobs
            </Button>
          </div>
        </div>
      </section>

      {/* Main Jobs Listing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full md:w-64 shrink-0">
              <div className="sticky top-24">
                <Card className="border-gray-200">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-4">Filters</h3>
                    
                    <Accordion type="multiple" className="space-y-4">
                      <AccordionItem value="job-type" className="border-b-0">
                        <AccordionTrigger className="py-2 text-sm font-medium">Job Type</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="full-time" />
                              <label htmlFor="full-time" className="text-sm">Full-time</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="part-time" />
                              <label htmlFor="part-time" className="text-sm">Part-time</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="contract" />
                              <label htmlFor="contract" className="text-sm">Contract</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="internship" />
                              <label htmlFor="internship" className="text-sm">Internship</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="remote" />
                              <label htmlFor="remote" className="text-sm">Remote</label>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="experience" className="border-b-0">
                        <AccordionTrigger className="py-2 text-sm font-medium">Experience Level</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="entry" />
                              <label htmlFor="entry" className="text-sm">Entry Level</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="mid" />
                              <label htmlFor="mid" className="text-sm">Mid Level</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="senior" />
                              <label htmlFor="senior" className="text-sm">Senior Level</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="executive" />
                              <label htmlFor="executive" className="text-sm">Executive</label>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="salary" className="border-b-0">
                        <AccordionTrigger className="py-2 text-sm font-medium">Salary Range</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="50k" />
                              <label htmlFor="50k" className="text-sm">$50,000+</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="75k" />
                              <label htmlFor="75k" className="text-sm">$75,000+</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="100k" />
                              <label htmlFor="100k" className="text-sm">$100,000+</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="150k" />
                              <label htmlFor="150k" className="text-sm">$150,000+</label>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="location" className="border-b-0">
                        <AccordionTrigger className="py-2 text-sm font-medium">Location</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="remote-only" />
                              <label htmlFor="remote-only" className="text-sm">Remote Only</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="us" />
                              <label htmlFor="us" className="text-sm">United States</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="europe" />
                              <label htmlFor="europe" className="text-sm">Europe</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="asia" />
                              <label htmlFor="asia" className="text-sm">Asia</label>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="posted" className="border-b-0">
                        <AccordionTrigger className="py-2 text-sm font-medium">Date Posted</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="past-day" />
                              <label htmlFor="past-day" className="text-sm">Past 24 hours</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="past-week" />
                              <label htmlFor="past-week" className="text-sm">Past week</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="past-month" />
                              <label htmlFor="past-month" className="text-sm">Past month</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="anytime" />
                              <label htmlFor="anytime" className="text-sm">Anytime</label>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    
                    <Separator className="my-4" />
                    
                    <Button className="w-full">Apply Filters</Button>
                    <Button variant="ghost" className="w-full mt-2">Reset All</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Jobs Listing */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Latest Jobs</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Sort by:</span>
                  <Select defaultValue="relevance">
                    <SelectTrigger className="w-[160px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="date">Date Posted</SelectItem>
                      <SelectItem value="salary">Salary</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-4">
                <JobCard 
                  title="Backend Developer"
                  company="DataStack"
                  location="Chicago, IL"
                  jobType="Full-time"
                  salary="$100,000 - $130,000"
                  posted="2d ago"
                  description="We're looking for an experienced Backend Developer with Node.js expertise to join our growing team."
                  skills={["Node.js", "MongoDB", "Express", "AWS"]}
                  logo="https://randomuser.me/api/portraits/lego/5.jpg"
                />
                
                <JobCard 
                  title="Marketing Manager"
                  company="Brand Builders"
                  location="Remote"
                  jobType="Full-time"
                  salary="$85,000 - $110,000"
                  posted="1d ago"
                  description="Join our marketing team to develop and implement effective marketing strategies across digital channels."
                  skills={["Digital Marketing", "Content Strategy", "SEO", "Analytics"]}
                  logo="https://randomuser.me/api/portraits/lego/6.jpg"
                />
                
                <JobCard 
                  title="Data Scientist"
                  company="AI Innovations"
                  location="Boston, MA"
                  jobType="Full-time"
                  salary="$125,000 - $160,000"
                  posted="3d ago"
                  description="Looking for a Data Scientist to build ML models and extract insights from large datasets."
                  skills={["Python", "Machine Learning", "SQL", "Data Visualization"]}
                  logo="https://randomuser.me/api/portraits/lego/7.jpg"
                />
                
                <JobCard 
                  title="Customer Success Manager"
                  company="SaaS Central"
                  location="Denver, CO"
                  jobType="Full-time"
                  salary="$75,000 - $95,000"
                  posted="5d ago"
                  description="Help our customers achieve success with our platform through excellent support and strategic guidance."
                  skills={["Customer Support", "SaaS", "Account Management", "Onboarding"]}
                  logo="https://randomuser.me/api/portraits/lego/8.jpg"
                />
                
                <JobCard 
                  title="iOS Developer"
                  company="MobileFirst Apps"
                  location="Remote"
                  jobType="Contract"
                  salary="$90 - $110/hour"
                  posted="2d ago"
                  description="Develop and maintain iOS applications using Swift. This is a 6-month contract with possibility of extension."
                  skills={["Swift", "iOS", "Xcode", "CocoaPods"]}
                  logo="https://randomuser.me/api/portraits/lego/9.jpg"
                />
                
                <JobCard 
                  title="HR Specialist"
                  company="People First"
                  location="Atlanta, GA"
                  jobType="Full-time"
                  salary="$65,000 - $80,000"
                  posted="1w ago"
                  description="Join our HR team to help with recruitment, employee relations, and HR processes improvement."
                  skills={["Recruiting", "Employee Relations", "HRIS", "Benefits Administration"]}
                  logo="https://randomuser.me/api/portraits/lego/0.jpg"
                />
              </div>
              
              <div className="flex justify-center mt-8">
                <Button>Load More Jobs</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Job Match Section */}
      <section className="py-16 bg-zordie-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Get Matched to Perfect Jobs</h2>
              <p className="text-zordie-100 mb-6">
                Let our AI match you with jobs that fit your skills, experience, and preferences. Upload your resume for personalized job recommendations.
              </p>
              <ul className="space-y-3 mb-8">
                <AiFeatureItem text="Personalized job matches based on your resume" />
                <AiFeatureItem text="Receive job alerts tailored to your profile" />
                <AiFeatureItem text="Get insights on how to improve your application" />
                <AiFeatureItem text="One-click apply to matched positions" />
              </ul>
              <Button className="bg-white text-zordie-700 hover:bg-zordie-50 text-lg py-6 px-8">
                Upload Your Resume
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="AI Matching"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Match Accuracy</div>
                    <div className="text-xl font-bold text-zordie-700">92%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Browse Jobs by Category"
            subtitle="Find opportunities in your field"
            align="center"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <CategoryCard 
              title="Software Development"
              count={436}
              icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>}
            />
            
            <CategoryCard 
              title="Marketing"
              count={215}
              icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>}
            />
            
            <CategoryCard 
              title="Design"
              count={189}
              icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>}
            />
            
            <CategoryCard 
              title="Data Science"
              count={176}
              icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>}
            />
            
            <CategoryCard 
              title="Sales"
              count={158}
              icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>}
            />
            
            <CategoryCard 
              title="Customer Support"
              count={143}
              icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>}
            />
            
            <CategoryCard 
              title="Finance"
              count={112}
              icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>}
            />
            
            <CategoryCard 
              title="Human Resources"
              count={98}
              icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>}
            />
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline">
              View All Categories <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Next Opportunity?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Create a free account to save jobs, get personalized recommendations, and apply with just one click.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-gradient text-lg py-6 px-8">
              Create Your Profile
            </Button>
            <Button variant="outline" className="text-lg py-6 px-8">
              Upload Your Resume
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface FeaturedJobCardProps {
  title: string;
  company: string;
  location: string;
  jobType: string;
  salary: string;
  logo: string;
  featured: boolean;
  tags: string[];
}

const FeaturedJobCard = ({ title, company, location, jobType, salary, logo, featured, tags }: FeaturedJobCardProps) => {
  return (
    <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-md overflow-hidden mr-4">
              <img src={logo} alt={company} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-lg font-semibold hover:text-zordie-600 transition-colors">{title}</h3>
              <p className="text-gray-600">{company}</p>
            </div>
          </div>
          {featured && (
            <Badge className="bg-zordie-100 text-zordie-700 hover:bg-zordie-200">
              Featured
            </Badge>
          )}
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
            {location}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Briefcase className="h-4 w-4 mr-1" />
            {jobType}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <DollarSign className="h-4 w-4 mr-1" />
            {salary}
          </div>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-gray-50">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="mt-6 flex items-center justify-between">
          <Button className="btn-gradient">
            Apply Now
          </Button>
          <Button variant="ghost" size="icon">
            <Bookmark className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  jobType: string;
  salary: string;
  posted: string;
  description: string;
  skills: string[];
  logo: string;
}

const JobCard = ({ title, company, location, jobType, salary, posted, description, skills, logo }: JobCardProps) => {
  return (
    <Card className="border-gray-200 hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="w-12 h-12 rounded-md overflow-hidden mr-4">
            <img src={logo} alt={company} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold hover:text-zordie-600 transition-colors">{title}</h3>
                <p className="text-gray-600">{company}</p>
              </div>
              <div className="flex items-center">
                <div className="flex items-center text-sm text-gray-500 mr-3">
                  <Clock className="h-4 w-4 mr-1" />
                  {posted}
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="mt-3 flex flex-wrap gap-2">
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="h-4 w-4 mr-1" />
                {location}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Briefcase className="h-4 w-4 mr-1" />
                {jobType}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <DollarSign className="h-4 w-4 mr-1" />
                {salary}
              </div>
            </div>
            
            <p className="mt-3 text-gray-600">{description}</p>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="outline" className="bg-gray-50">
                  {skill}
                </Badge>
              ))}
            </div>
            
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill={i < 4 ? 'currentColor' : 'none'} />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">4.0 Company Rating</span>
              </div>
              <Button>Apply Now</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const AiFeatureItem = ({ text }: { text: string }) => {
  return (
    <li className="flex items-start">
      <CheckCircle className="h-5 w-5 text-zordie-100 mr-3 shrink-0 mt-0.5" />
      <span className="text-zordie-50">{text}</span>
    </li>
  );
};

interface CategoryCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
}

const CategoryCard = ({ title, count, icon }: CategoryCardProps) => {
  return (
    <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-zordie-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-zordie-100 flex items-center justify-center mr-3">
              <div className="text-zordie-700">{icon}</div>
            </div>
            <div>
              <h3 className="font-medium">{title}</h3>
              <p className="text-sm text-gray-500">{count} jobs</p>
            </div>
          </div>
          <ArrowRight className="h-5 w-5 text-gray-400" />
        </div>
      </CardContent>
    </Card>
  );
};

export default FindJobs;
