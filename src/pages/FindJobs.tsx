
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Check, Briefcase, MapPin, Search, Filter, Clock, Building, Calendar, FileText } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { useToast } from '@/components/ui/use-toast';

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
    isRemote: true
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
    isRemote: false
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
    isRemote: true
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
    isRemote: false
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
    isRemote: true
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
    isRemote: false
  }
];

const FindJobs = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredJobs = jobListings.filter(job => {
    // Apply search filter
    const searchMatch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Apply tab filter
    if (activeTab === 'remote' && !job.isRemote) return false;
    if (activeTab === 'onsite' && job.isRemote) return false;
    
    return searchMatch;
  });
  
  const handleApplyClick = (jobId: string) => {
    navigate(`/job-application/${jobId}`);
  };
  
  const handleSaveClick = (jobId: string) => {
    toast({
      title: "Job saved",
      description: "The job has been saved to your favorites."
    });
  };
  
  return (
    <Layout>
      <div className="container py-12">
        <SectionHeading
          title="Find Your Next Role"
          subtitle="Browse open positions that match your skills and experience"
          align="center"
        />
        
        <div className="mt-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="Search jobs, skills, or companies" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex-shrink-0">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button>
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Jobs</TabsTrigger>
              <TabsTrigger value="remote">Remote</TabsTrigger>
              <TabsTrigger value="onsite">On-site</TabsTrigger>
            </TabsList>
            
            <TabsContent value={activeTab}>
              <p className="mb-4 text-gray-600">Showing {filteredJobs.length} results</p>
              
              <div className="grid grid-cols-1 gap-6">
                {filteredJobs.map((job) => (
                  <Card key={job.id}>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                          <CardTitle className="text-xl">{job.title}</CardTitle>
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
                            <Badge variant="outline" className="bg-zordie-50 text-zordie-700 border-zordie-200">
                              Remote
                            </Badge>
                          )}
                          <Badge variant="outline">{job.type}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-gray-700 mb-4">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, index) => (
                          <Badge key={index} variant="outline">{skill}</Badge>
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
                      <Button variant="outline" onClick={() => handleSaveClick(job.id)}>
                        Save
                      </Button>
                      <Button onClick={() => handleApplyClick(job.id)}>
                        Apply Now
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
                
                {filteredJobs.length === 0 && (
                  <div className="text-center py-12">
                    <Briefcase className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">No jobs found</h3>
                    <p className="text-gray-500">Try adjusting your search terms or filters</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default FindJobs;
