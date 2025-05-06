
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Check, 
  Briefcase, 
  MapPin, 
  Search, 
  CircleCheck,
  CircleArrowDown,
  SquareCheck,
  Clock, 
  Building, 
  Calendar, 
  FileText, 
  LayoutList,
  CircleX
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { useToast } from '@/components/ui/use-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const jobListings = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA (Remote)',
    salary: '$120,000 - $150,000',
    type: 'Full-time',
    posted: '2 days ago',
    description: 'We are seeking an experienced Frontend Developer to join our growing team. You will be responsible for building and maintaining user interfaces for our web applications.',
    skills: ['React', 'TypeScript', 'Redux', 'CSS'],
    isRemote: true,
    experience: '5+ years'
  },
  {
    id: '2',
    title: 'UX Designer',
    company: 'Creative Labs',
    location: 'New York, NY',
    salary: '$90,000 - $110,000',
    type: 'Full-time',
    posted: '3 days ago',
    description: 'Join our team designing beautiful and intuitive interfaces for enterprise clients. This role focuses on user research, wireframing, and creating interactive prototypes.',
    skills: ['Figma', 'UI Design', 'User Research', 'Prototyping'],
    isRemote: false,
    experience: '3-5 years'
  },
  {
    id: '3',
    title: 'Full Stack Engineer',
    company: 'StartupX',
    location: 'Remote',
    salary: '$100,000 - $130,000',
    type: 'Full-time',
    posted: '1 day ago',
    description: 'Help build our next-generation SaaS platform using React and Node.js. This role involves both frontend and backend development, with a focus on scalable architecture.',
    skills: ['React', 'Node.js', 'MongoDB', 'GraphQL'],
    isRemote: true,
    experience: '4-6 years'
  },
  {
    id: '4',
    title: 'Product Manager',
    company: 'TechCorp Inc.',
    location: 'Austin, TX (Hybrid)',
    salary: '$115,000 - $140,000',
    type: 'Full-time',
    posted: '5 days ago',
    description: 'Lead product development for our enterprise software solutions. You will work closely with engineering, design, and sales teams to define product strategy and roadmap.',
    skills: ['Product Strategy', 'Agile', 'User Stories', 'Market Research'],
    isRemote: false,
    experience: '4+ years'
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'Cloud Systems',
    location: 'Remote',
    salary: '$110,000 - $135,000',
    type: 'Full-time',
    posted: '1 week ago',
    description: 'Help us build and maintain our cloud infrastructure. This role involves working with AWS, Docker, and Kubernetes to ensure scalable and reliable deployments.',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    isRemote: true,
    experience: '3-5 years'
  },
  {
    id: '6',
    title: 'Data Scientist',
    company: 'DataInsights',
    location: 'Boston, MA',
    salary: '$125,000 - $150,000',
    type: 'Full-time',
    posted: '4 days ago',
    description: 'Analyze large datasets to extract insights and build machine learning models. This role requires strong statistical knowledge and programming skills.',
    skills: ['Python', 'ML', 'Data Analysis', 'SQL'],
    isRemote: false,
    experience: '2-4 years'
  }
];

const FindJobs = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [experienceFilter, setExperienceFilter] = useState('any');
  const [salaryRange, setSalaryRange] = useState([0, 200]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('newest');
  
  // Extract unique skills from job listings
  const allSkills = Array.from(new Set(jobListings.flatMap(job => job.skills)));
  
  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };
  
  const filteredJobs = jobListings.filter(job => {
    // Apply search filter
    const searchMatch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Apply tab filter
    if (activeTab === 'remote' && !job.isRemote) return false;
    if (activeTab === 'onsite' && job.isRemote) return false;
    
    // Apply skill filter
    if (selectedSkills.length > 0 && !selectedSkills.some(skill => job.skills.includes(skill))) {
      return false;
    }
    
    // Apply experience filter
    if (experienceFilter !== 'any') {
      const years = parseInt(job.experience.split('-')[0].replace('+', '').trim());
      if (experienceFilter === 'entry' && years > 2) return false;
      if (experienceFilter === 'mid' && (years < 2 || years > 5)) return false;
      if (experienceFilter === 'senior' && years < 5) return false;
    }
    
    // Future enhancement: Apply salary range filter
    // This would require parsing the salary strings into numbers
    
    return searchMatch;
  });
  
  // Sort the filtered jobs
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sortBy === 'newest') {
      const daysA = parseInt(a.posted.split(' ')[0]);
      const daysB = parseInt(b.posted.split(' ')[0]);
      return daysA - daysB;
    }
    if (sortBy === 'company') {
      return a.company.localeCompare(b.company);
    }
    return 0;
  });
  
  const handleApplyClick = (jobId: string) => {
    navigate(`/job-application/${jobId}`);
  };
  
  const handleSaveClick = (jobId: string) => {
    toast({
      title: "Job saved",
      description: "The job has been saved to your favorites.",
      variant: "default",
    });
  };

  const handleSubmitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // This function would trigger the search with the current filters
    toast({
      title: "Search updated",
      description: `Found ${filteredJobs.length} jobs matching your criteria.`,
      variant: "default",
    });
  };
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
            <p className="text-xl text-blue-100 mb-6">
              Discover opportunities that match your skills, experience, and career goals
            </p>
            
            <form onSubmit={handleSubmitSearch} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Input 
                    placeholder="Search jobs, skills, or companies" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-blue-100"
                  />
                </div>
                <Button 
                  variant="outline" 
                  className="flex-shrink-0 border-white/20 text-white hover:bg-white/10"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  Filters {showFilters ? <CircleX className="h-4 w-4 ml-2" /> : <CircleCheck className="h-4 w-4 ml-2" />}
                </Button>
                <Button className="flex-shrink-0 bg-white text-blue-700 hover:bg-gray-100">
                  <Search className="h-4 w-4 mr-2" />
                  Search Jobs
                </Button>
              </div>
            </form>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex justify-center mt-6"
            >
              <CircleArrowDown className="h-8 w-8 animate-bounce text-white/70" />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Wave Shape Divider */}
        <div className="relative h-16 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white dark:fill-zordie-950"></path>
          </svg>
        </div>
      </section>

      <div className="container py-12">
        {/* Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden"
            >
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Experience Level</h3>
                    <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Experience</SelectItem>
                        <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                        <SelectItem value="mid">Mid Level (2-5 years)</SelectItem>
                        <SelectItem value="senior">Senior Level (5+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Sort By</h3>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Most Recent</SelectItem>
                        <SelectItem value="company">Company Name</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Salary Range</h3>
                    <div className="px-2">
                      <Slider 
                        defaultValue={[0, 200]} 
                        max={200} 
                        step={10}
                        value={salaryRange}
                        onValueChange={setSalaryRange}
                      />
                      <div className="flex justify-between mt-2 text-sm text-gray-600">
                        <span>${salaryRange[0]}k</span>
                        <span>${salaryRange[1]}k+</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {allSkills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant={selectedSkills.includes(skill) ? "default" : "outline"} 
                        className={`cursor-pointer ${
                          selectedSkills.includes(skill) 
                            ? "bg-blue-600 hover:bg-blue-700" 
                            : "hover:bg-blue-50"
                        }`}
                        onClick={() => toggleSkill(skill)}
                      >
                        {skill}
                        {selectedSkills.includes(skill) && <Check className="ml-1 h-3 w-3" />}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Switch id="remote-only" />
                    <Label htmlFor="remote-only">Remote jobs only</Label>
                  </div>
                  
                  <Button onClick={() => {
                    setExperienceFilter('any');
                    setSalaryRange([0, 200]);
                    setSelectedSkills([]);
                    setSortBy('newest');
                    setSearchTerm('');
                  }}>
                    Reset Filters
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
          
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList>
            <TabsTrigger value="all">All Jobs</TabsTrigger>
            <TabsTrigger value="remote">Remote</TabsTrigger>
            <TabsTrigger value="onsite">On-site</TabsTrigger>
          </TabsList>
        </Tabs>
          
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600">Showing {sortedJobs.length} results</p>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Most Recent</SelectItem>
              <SelectItem value="company">Company Name</SelectItem>
            </SelectContent>
          </Select>
        </div>
              
        <div className="grid grid-cols-1 gap-6">
          <AnimatePresence>
            {sortedJobs.length > 0 ? (
              sortedJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                          <CardTitle className="text-xl text-blue-700 hover:text-blue-800 transition-colors duration-200">{job.title}</CardTitle>
                          <CardDescription className="flex items-center mt-1">
                            <Building className="h-4 w-4 mr-1" />
                            {job.company} 
                            <span className="mx-2">•</span>
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </CardDescription>
                        </div>
                        <div className="mt-2 md:mt-0 flex gap-2 flex-wrap">
                          {job.isRemote && (
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              Remote
                            </Badge>
                          )}
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">{job.type}</Badge>
                          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">{job.experience}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-gray-700 mb-4">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, index) => (
                          <Badge 
                            key={index} 
                            variant="outline" 
                            className={`
                              ${selectedSkills.includes(skill) 
                                ? "bg-blue-100 text-blue-800 border-blue-200" 
                                : "bg-gray-50 text-gray-700 border-gray-200"}
                            `}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Posted {job.posted}
                        </div>
                        <div>
                          {job.salary}
                        </div>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="flex gap-2 justify-end">
                      <Button 
                        variant="outline" 
                        onClick={() => handleSaveClick(job.id)}
                        className="hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
                      >
                        Save
                      </Button>
                      <Button 
                        onClick={() => handleApplyClick(job.id)}
                        className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
                      >
                        Apply Now
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Briefcase className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No jobs found</h3>
                <p className="text-gray-500">Try adjusting your search terms or filters</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setExperienceFilter('any');
                    setSalaryRange([0, 200]);
                    setSelectedSkills([]);
                    setSortBy('newest');
                    setSearchTerm('');
                  }}
                >
                  Reset Filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Layout>
  );
};

export default FindJobs;
