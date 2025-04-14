
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

const CompanyDashboard = () => {
  const { user, userProfile, isLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeJobs, setActiveJobs] = useState(0);
  const [totalApplicants, setTotalApplicants] = useState(0);
  const [interviewsScheduled, setInterviewsScheduled] = useState(0);

  useEffect(() => {
    // If user is not a company, redirect to job seeker dashboard
    if (userProfile && userProfile.user_type === "candidate") {
      navigate("/job-seeker-dashboard");
    }
    
    // Fetch dashboard data
    // This would be replaced with actual API calls
    setActiveJobs(2);
    setTotalApplicants(15);
    setInterviewsScheduled(5);
  }, [userProfile, navigate]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const companyName = userProfile?.company_name || user?.user_metadata?.company_name || "Company";

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Welcome, {companyName}!</h1>
            <p className="text-gray-600 mt-1">Manage your job listings and recruitment process</p>
          </div>
          <Button onClick={() => navigate("/post-job")} className="mt-4 md:mt-0 btn-gradient">
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
              <Button variant="outline" size="sm" className="w-full" onClick={() => navigate("/post-job")}>
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
              <Button variant="outline" size="sm" className="w-full">
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
              <Button variant="outline" size="sm" className="w-full">
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
              {[1, 2].map((job) => (
                <Card key={job}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Senior Frontend Developer</CardTitle>
                        <CardDescription>Remote • Full-time • Posted 5 days ago</CardDescription>
                      </div>
                      <Badge variant="outline">7 Applicants</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Looking for an experienced developer with React, TypeScript and modern frontend frameworks.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline">React</Badge>
                      <Badge variant="outline">TypeScript</Badge>
                      <Badge variant="outline">5+ Years</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">Edit Job</Button>
                    <Button size="sm">View Applicants</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="applicants">
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {[1, 2, 3].map((applicant) => (
                    <li key={applicant} className="flex items-start space-x-4 pb-4 border-b last:border-0 last:pb-0">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-zordie-100 flex items-center justify-center">
                          <span className="text-zordie-600 font-medium">JD</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">John Doe</p>
                            <p className="text-sm text-gray-500">Applied for Senior Frontend Developer • April 15, 2025</p>
                          </div>
                          <Badge variant="outline">New</Badge>
                        </div>
                        <div className="flex mt-2 gap-2">
                          <Button size="sm" variant="outline">View Resume</Button>
                          <Button size="sm">Schedule Interview</Button>
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
                <Button variant="outline">Configure</Button>
              </div>
              
              <div className="flex items-center justify-between pb-4 border-b">
                <div>
                  <h3 className="font-medium">Calendar Integration</h3>
                  <p className="text-sm text-gray-500">Sync with Google or Outlook Calendar</p>
                </div>
                <Button variant="outline">Connect</Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Email Notifications</h3>
                  <p className="text-sm text-gray-500">Configure email notifications for new applicants</p>
                </div>
                <Button variant="outline">Settings</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CompanyDashboard;
