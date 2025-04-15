
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { BriefcaseIcon, Users, Search, CheckCircle, UserPlus, BarChart3, Globe, Settings } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import LoadingScreen from "@/components/auth/LoadingScreen";
import { supabase } from "@/integrations/supabase/client";

interface JobListing {
  id: string;
  title: string;
  description: string;
  location: string;
  job_type: string;
  posted_at: string;
  applicant_count: number;
  skills: string[];
}

interface Applicant {
  id: string;
  name: string;
  applied_for: string;
  applied_at: string;
  status: string;
}

const CompanyDashboard = () => {
  const { user, userProfile, isLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeJobs, setActiveJobs] = useState(0);
  const [totalApplicants, setTotalApplicants] = useState(0);
  const [interviewsScheduled, setInterviewsScheduled] = useState(0);
  const [jobListings, setJobListings] = useState<JobListing[]>([]);
  const [recentApplicants, setRecentApplicants] = useState<Applicant[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(true);

  useEffect(() => {
    // If user is not a company, redirect to job seeker dashboard
    if (userProfile && userProfile.user_type === "candidate") {
      navigate("/job-seeker-dashboard");
    }
    
    // Fetch dashboard data
    const fetchDashboardData = async () => {
      setIsLoadingData(true);
      
      try {
        // Mock data for now - in a real application, this would be fetched from Supabase
        // For simplicity in this demo, we're using static data
        setActiveJobs(2);
        setTotalApplicants(15);
        setInterviewsScheduled(5);
        
        // Mock job listings
        setJobListings([
          {
            id: '1',
            title: 'Senior Frontend Developer',
            description: 'Looking for an experienced developer with React, TypeScript and modern frontend frameworks.',
            location: 'Remote',
            job_type: 'Full-time',
            posted_at: '2025-04-10T10:00:00Z',
            applicant_count: 7,
            skills: ['React', 'TypeScript', '5+ Years']
          },
          {
            id: '2',
            title: 'UX/UI Designer',
            description: 'Seeking a creative designer with experience in user-centered design principles and design systems.',
            location: 'New York, NY',
            job_type: 'Full-time',
            posted_at: '2025-04-12T09:30:00Z',
            applicant_count: 4,
            skills: ['Figma', 'Design Systems', 'User Research']
          }
        ]);
        
        // Mock applicants
        setRecentApplicants([
          {
            id: '1',
            name: 'John Doe',
            applied_for: 'Senior Frontend Developer',
            applied_at: '2025-04-15T14:30:00Z',
            status: 'new'
          },
          {
            id: '2',
            name: 'Jane Smith',
            applied_for: 'UX/UI Designer',
            applied_at: '2025-04-14T11:45:00Z',
            status: 'reviewing'
          },
          {
            id: '3',
            name: 'Robert Johnson',
            applied_for: 'Senior Frontend Developer',
            applied_at: '2025-04-13T16:20:00Z',
            status: 'interview'
          }
        ]);
        
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        toast({
          title: "Error",
          description: "Failed to load dashboard data. Please try again later.",
          variant: "destructive"
        });
      } finally {
        setIsLoadingData(false);
      }
    };
    
    fetchDashboardData();
  }, [userProfile, navigate, toast]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const companyName = userProfile?.company_name || user?.user_metadata?.company_name || "Company";
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };
  
  const getTimeSince = (dateString: string) => {
    const now = new Date();
    const postedDate = new Date(dateString);
    const diffDays = Math.floor((now.getTime() - postedDate.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    return `${diffDays} days ago`;
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <Badge variant="outline">New</Badge>;
      case 'reviewing':
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Reviewing</Badge>;
      case 'interview':
        return <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Interview</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const handlePostJobClick = () => {
    navigate("/post-job");
  };
  
  const handleManageJobsClick = () => {
    navigate("/post-job");
  };
  
  const handleViewApplicantsClick = () => {
    // For now, this just shows the applicants tab
    const applicantsTab = document.querySelector('[data-value="applicants"]') as HTMLElement;
    if (applicantsTab) {
      applicantsTab.click();
    }
  };
  
  const handleScheduleInterviewClick = () => {
    toast({
      title: "Coming Soon",
      description: "Interview scheduling functionality will be available soon.",
    });
  };
  
  const handleIntegrationClick = () => {
    navigate("/integration-settings");
  };
  
  const handleChatbotClick = () => {
    navigate("/chat");
  };

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Welcome, {companyName}!</h1>
            <p className="text-gray-600 mt-1">Manage your job listings and recruitment process</p>
          </div>
          <Button onClick={handlePostJobClick} className="mt-4 md:mt-0 btn-gradient">
            <UserPlus className="mr-2 h-4 w-4" />
            Post New Job
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Active Job Listings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <BriefcaseIcon className="h-5 w-5 text-zordie-600" />
                <span className="text-3xl font-bold">{activeJobs}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" onClick={handleManageJobsClick}>
                Manage Jobs
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Applicants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-zordie-600" />
                <span className="text-3xl font-bold">{totalApplicants}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" onClick={handleViewApplicantsClick}>
                View Applicants
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Interviews Scheduled</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-zordie-600" />
                <span className="text-3xl font-bold">{interviewsScheduled}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" onClick={handleScheduleInterviewClick}>
                Schedule More
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Tabs defaultValue="jobs" className="mb-8">
          <TabsList className="mb-4 w-full max-w-md">
            <TabsTrigger value="jobs" className="flex-1">Posted Jobs</TabsTrigger>
            <TabsTrigger value="applicants" className="flex-1">Recent Applicants</TabsTrigger>
            <TabsTrigger value="analytics" className="flex-1">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="jobs">
            <div className="grid grid-cols-1 gap-4">
              {jobListings.map((job) => (
                <Card key={job.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{job.title}</CardTitle>
                        <CardDescription>
                          {job.location} • {job.job_type} • Posted {getTimeSince(job.posted_at)}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{job.applicant_count} Applicants</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {job.skills.map((skill, index) => (
                        <Badge key={index} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" onClick={() => toast({
                      title: "Coming Soon",
                      description: "Job editing functionality will be available soon."
                    })}>Edit Job</Button>
                    <Button size="sm" onClick={handleViewApplicantsClick}>View Applicants</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="applicants">
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {recentApplicants.map((applicant) => (
                    <li key={applicant.id} className="flex items-start space-x-4 pb-4 border-b last:border-0 last:pb-0">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-zordie-100 flex items-center justify-center">
                          <span className="text-zordie-600 font-medium">{applicant.name.split(' ').map(n => n[0]).join('')}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">{applicant.name}</p>
                            <p className="text-sm text-gray-500">
                              Applied for {applicant.applied_for} • {formatDate(applicant.applied_at)}
                            </p>
                          </div>
                          {getStatusBadge(applicant.status)}
                        </div>
                        <div className="flex mt-2 gap-2">
                          <Button size="sm" variant="outline" onClick={() => toast({
                            title: "Coming Soon",
                            description: "Resume viewing functionality will be available soon."
                          })}>View Resume</Button>
                          <Button size="sm" onClick={handleScheduleInterviewClick}>Schedule Interview</Button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-zordie-600" />
                    Application Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center border rounded-md">
                    <p className="text-gray-500">Application statistics visualization goes here</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-zordie-600" />
                    Job Visibility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Job Views</span>
                        <span className="text-sm font-medium">245</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-zordie-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Click-through Rate</span>
                        <span className="text-sm font-medium">18.5%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-zordie-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Application Rate</span>
                        <span className="text-sm font-medium">6.1%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-zordie-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Settings className="h-5 w-5 mr-2 text-zordie-600" />
              Integration Settings
            </CardTitle>
            <CardDescription>
              Connect with your existing recruitment tools and services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b">
                <div>
                  <h3 className="font-medium">Zapier Integration</h3>
                  <p className="text-sm text-gray-500">Connect with 3,000+ apps via Zapier</p>
                </div>
                <Button variant="outline" onClick={handleIntegrationClick}>Configure</Button>
              </div>
              
              <div className="flex items-center justify-between pb-4 border-b">
                <div>
                  <h3 className="font-medium">Calendar Integration</h3>
                  <p className="text-sm text-gray-500">Sync with Google or Outlook Calendar</p>
                </div>
                <Button variant="outline" onClick={handleIntegrationClick}>Connect</Button>
              </div>
              
              <div className="flex items-center justify-between pb-4 border-b">
                <div>
                  <h3 className="font-medium">Email Notifications</h3>
                  <p className="text-sm text-gray-500">Configure email notifications for new applicants</p>
                </div>
                <Button variant="outline" onClick={handleIntegrationClick}>Settings</Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">AI Chatbot</h3>
                  <p className="text-sm text-gray-500">Use our AI assistant to help with recruitment</p>
                </div>
                <Button variant="outline" onClick={handleChatbotClick}>Chat Now</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CompanyDashboard;
