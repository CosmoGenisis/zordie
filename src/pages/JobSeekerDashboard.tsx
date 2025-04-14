
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { FileText, Search, Calendar, Award, BriefcaseIcon, MessageSquare, BookOpen } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import LoadingScreen from "@/components/auth/LoadingScreen";

const JobSeekerDashboard = () => {
  const { user, userProfile, isLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeResumes, setActiveResumes] = useState(0);
  const [appliedJobs, setAppliedJobs] = useState(0);
  const [interviewsScheduled, setInterviewsScheduled] = useState(0);

  useEffect(() => {
    // If user is not a candidate, redirect to company dashboard
    if (userProfile && userProfile.user_type === "company") {
      navigate("/company-dashboard");
    }
    
    // Fetch dashboard data
    // This would be replaced with actual API calls
    setActiveResumes(1);
    setAppliedJobs(3);
    setInterviewsScheduled(2);
  }, [userProfile, navigate]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const firstName = userProfile?.first_name || user?.user_metadata?.full_name?.split(" ")[0] || "Candidate";

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Welcome, {firstName}!</h1>
            <p className="text-gray-600 mt-1">Track your job search progress and manage your career</p>
          </div>
          <Button onClick={() => navigate("/resumes")} className="mt-4 md:mt-0 btn-gradient">
            <FileText className="mr-2 h-4 w-4" />
            Manage Resumes
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Active Resumes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-zordie-600" />
                <span className="text-3xl font-bold">{activeResumes}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" onClick={() => navigate("/resumes")}>
                View Resumes
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Applied Jobs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <BriefcaseIcon className="h-5 w-5 text-zordie-600" />
                <span className="text-3xl font-bold">{appliedJobs}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" onClick={() => navigate("/find-jobs")}>
                Find More Jobs
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Interviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-zordie-600" />
                <span className="text-3xl font-bold">{interviewsScheduled}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" onClick={() => navigate("/practice-interview")}>
                Practice Interview
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Tabs defaultValue="jobs" className="mb-8">
          <TabsList className="mb-4 w-full max-w-md">
            <TabsTrigger value="jobs" className="flex-1">Recommended Jobs</TabsTrigger>
            <TabsTrigger value="activities" className="flex-1">Recent Activities</TabsTrigger>
            <TabsTrigger value="resources" className="flex-1">Resources</TabsTrigger>
          </TabsList>
          
          <TabsContent value="jobs">
            <div className="grid grid-cols-1 gap-4">
              {[1, 2, 3].map((job) => (
                <Card key={job}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Senior Frontend Developer</CardTitle>
                        <CardDescription>TechCorp Inc. • San Francisco, CA</CardDescription>
                      </div>
                      <Badge>New</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Looking for an experienced developer with React, TypeScript and modern frontend frameworks.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline">React</Badge>
                      <Badge variant="outline">TypeScript</Badge>
                      <Badge variant="outline">Remote</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <span className="text-sm text-gray-500">Posted 2 days ago</span>
                    <Button size="sm">Apply Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="activities">
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-4 pb-4 border-b">
                    <BriefcaseIcon className="h-5 w-5 text-zordie-600 mt-1" />
                    <div>
                      <p className="font-medium">Applied to UI/UX Designer at Creative Labs</p>
                      <p className="text-sm text-gray-500">Yesterday at 2:30 PM</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4 pb-4 border-b">
                    <Calendar className="h-5 w-5 text-zordie-600 mt-1" />
                    <div>
                      <p className="font-medium">Scheduled interview with TechCorp Inc.</p>
                      <p className="text-sm text-gray-500">April 17, 2025 at 10:00 AM</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <FileText className="h-5 w-5 text-zordie-600 mt-1" />
                    <div>
                      <p className="font-medium">Updated your resume</p>
                      <p className="text-sm text-gray-500">April 15, 2025 at 9:15 AM</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="resources">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-zordie-600" />
                    Interview Preparation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Practice with our AI-powered interview simulator to build confidence.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full" onClick={() => navigate("/practice-interview")}>
                    Start Practice
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-zordie-600" />
                    Career Chatbot
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Get personalized career advice and resume tips from our AI assistant.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full" onClick={() => navigate("/chat")}>
                    Chat Now
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default JobSeekerDashboard;
