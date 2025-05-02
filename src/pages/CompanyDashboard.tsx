
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BriefcaseIcon, Users, FileSpreadsheet, BarChart, Inbox, Settings, Building, UserPlus, Search } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useToast } from "@/components/ui/use-toast";

// Removed useAuth import

const CompanyDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  
  // Use demo data instead of auth
  const companyName = "Demo Company";
  const companySize = "51-200 employees";
  
  // Demo job data
  const [activeJobs, setActiveJobs] = useState(5);
  const [totalCandidates, setTotalCandidates] = useState(43);
  const [interviews, setInterviews] = useState(12);
  
  // Demo charts data
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handlePostJob = () => {
    navigate("/post-job");
  };
  
  const handleSearchCandidates = () => {
    toast({
      title: "Feature coming soon",
      description: "Candidate search will be available in a future update.",
    });
  };
  
  const handleManageIntegrations = () => {
    navigate("/integration-settings");
  };
  
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">{companyName}</h1>
            <p className="text-gray-600 mt-1">{companySize}</p>
          </div>
          <Button onClick={handlePostJob} className="mt-4 md:mt-0 btn-gradient">
            <BriefcaseIcon className="mr-2 h-4 w-4" />
            Post a New Job
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Active Jobs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <BriefcaseIcon className="h-5 w-5 text-zordie-600" />
                <span className="text-3xl font-bold">{activeJobs}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Candidates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-zordie-600" />
                <span className="text-3xl font-bold">{totalCandidates}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Interviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <FileSpreadsheet className="h-5 w-5 text-zordie-600" />
                <span className="text-3xl font-bold">{interviews}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-3 md:grid-cols-5 h-auto">
            <TabsTrigger value="overview" className="py-2">
              Overview
            </TabsTrigger>
            <TabsTrigger value="jobs" className="py-2">
              Jobs
            </TabsTrigger>
            <TabsTrigger value="candidates" className="py-2">
              Candidates
            </TabsTrigger>
            <TabsTrigger value="interviews" className="py-2">
              Interviews
            </TabsTrigger>
            <TabsTrigger value="analytics" className="py-2">
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <SectionHeading
              title="Company Overview"
              subtitle="Key metrics and recent activity"
              align="left"
            />
            
            {isLoading ? (
              <div className="grid grid-cols-1 gap-6">
                <Card className="h-48 flex items-center justify-center">
                  <p className="text-gray-500">Loading data...</p>
                </Card>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="border-b pb-3 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Senior Frontend Developer</p>
                          <p className="text-sm text-gray-500">3 new applications</p>
                        </div>
                        <Button variant="outline" size="sm">View</Button>
                      </li>
                      <li className="border-b pb-3 flex justify-between items-center">
                        <div>
                          <p className="font-medium">UX Designer</p>
                          <p className="text-sm text-gray-500">7 new applications</p>
                        </div>
                        <Button variant="outline" size="sm">View</Button>
                      </li>
                      <li className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Product Manager</p>
                          <p className="text-sm text-gray-500">2 new applications</p>
                        </div>
                        <Button variant="outline" size="sm">View</Button>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Upcoming Interviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="border-b pb-3 flex justify-between items-center">
                        <div>
                          <p className="font-medium">John Smith - Frontend Developer</p>
                          <p className="text-sm text-gray-500">Today at 2:00 PM</p>
                        </div>
                        <Button variant="outline" size="sm">Prepare</Button>
                      </li>
                      <li className="border-b pb-3 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Sarah Johnson - UX Designer</p>
                          <p className="text-sm text-gray-500">Tomorrow at 10:00 AM</p>
                        </div>
                        <Button variant="outline" size="sm">Prepare</Button>
                      </li>
                      <li className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Michael Wilson - Product Manager</p>
                          <p className="text-sm text-gray-500">Jun 3 at 1:30 PM</p>
                        </div>
                        <Button variant="outline" size="sm">Prepare</Button>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button variant="outline" className="justify-start" onClick={handlePostJob}>
                    <BriefcaseIcon className="mr-2 h-4 w-4" /> Post a New Job
                  </Button>
                  <Button variant="outline" className="justify-start" onClick={handleSearchCandidates}>
                    <Search className="mr-2 h-4 w-4" /> Search Candidates
                  </Button>
                  <Button variant="outline" className="justify-start" onClick={() => navigate("/ai-screening")}>
                    <UserPlus className="mr-2 h-4 w-4" /> AI Screening Setup
                  </Button>
                  <Button variant="outline" className="justify-start" onClick={handleManageIntegrations}>
                    <Settings className="mr-2 h-4 w-4" /> Manage Integrations
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Subscription</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium">Pro Plan</p>
                    <p className="text-sm text-gray-500">Next billing: Jul 1, 2025</p>
                    <Button size="sm" variant="outline" className="w-full mt-2" onClick={() => navigate("/pricing")}>
                      Upgrade Plan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="jobs" className="space-y-6">
            <SectionHeading
              title="Manage Jobs"
              subtitle="Oversee all job postings and applications"
              align="left"
            />
            <div className="text-center py-12">
              <Building className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No active jobs</h3>
              <p className="text-gray-500 mb-6">Get started by posting your first job</p>
              <Button onClick={handlePostJob} className="btn-gradient">
                <BriefcaseIcon className="mr-2 h-4 w-4" />
                Post a Job
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="candidates" className="space-y-6">
            <SectionHeading
              title="Candidate Management"
              subtitle="Track and manage job applicants"
              align="left"
            />
            <div className="text-center py-12">
              <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No candidates yet</h3>
              <p className="text-gray-500 mb-6">Post a job to start receiving applications</p>
              <Button onClick={handlePostJob} className="btn-gradient">
                <BriefcaseIcon className="mr-2 h-4 w-4" />
                Post a Job
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="interviews" className="space-y-6">
            <SectionHeading
              title="Interview Management"
              subtitle="Schedule and manage candidate interviews"
              align="left"
            />
            <div className="text-center py-12">
              <FileSpreadsheet className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No interviews scheduled</h3>
              <p className="text-gray-500 mb-6">Interviews will appear here when scheduled</p>
              <Button onClick={handlePostJob} className="btn-gradient">
                <BriefcaseIcon className="mr-2 h-4 w-4" />
                Post a Job
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <SectionHeading
              title="Recruitment Analytics"
              subtitle="Measure and optimize your hiring process"
              align="left"
            />
            <div className="text-center py-12">
              <BarChart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No analytics data available</h3>
              <p className="text-gray-500 mb-6">Start recruiting to generate analytics</p>
              <Button onClick={handlePostJob} className="btn-gradient">
                <BriefcaseIcon className="mr-2 h-4 w-4" />
                Post a Job
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default CompanyDashboard;
