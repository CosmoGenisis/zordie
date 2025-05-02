
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { FileText, Search, Calendar, Award, BriefcaseIcon, MessageSquare, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import LoadingScreen from "@/components/auth/LoadingScreen";
import PrimeHRChatbot from "@/components/chatbot/PrimeHRChatbot";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  posted_at: string;
  skills: string[];
  is_remote: boolean;
}

interface Activity {
  id: string;
  type: 'application' | 'interview' | 'resume' | 'assessment';
  description: string;
  date: string;
  icon: React.ReactNode;
}

interface Assessment {
  id: string;
  title: string;
  company: string;
  status: 'pending' | 'completed' | 'expired';
  dueDate: string;
  score?: number;
}

const JobSeekerDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeResumes, setActiveResumes] = useState(0);
  const [appliedJobs, setAppliedJobs] = useState(0);
  const [interviewsScheduled, setInterviewsScheduled] = useState(0);
  const [assessmentsCompleted, setAssessmentsCompleted] = useState(0);
  const [recommendedJobs, setRecommendedJobs] = useState<Job[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [pendingAssessments, setPendingAssessments] = useState<Assessment[]>([]);
  const [completedAssessments, setCompletedAssessments] = useState<Assessment[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(true);

  // Demo user profile data instead of auth
  const demoUserProfile = { first_name: "Demo" };
  
  useEffect(() => {
    // Fetch dashboard data
    const fetchData = async () => {
      setIsLoadingData(true);
      try {
        // For this demo, we're using mock data since auth is removed
        
        // Mock resume count
        setActiveResumes(2);
        
        // Mock applied jobs count
        setAppliedJobs(3);
        
        // Mock interview count
        setInterviewsScheduled(2);

        // Mock assessments count
        setAssessmentsCompleted(3);
        
        // Mock recommended jobs
        setRecommendedJobs([
          {
            id: '1',
            title: 'Senior Frontend Developer',
            company: 'TechCorp Inc.',
            location: 'San Francisco, CA',
            description: 'Looking for an experienced developer with React, TypeScript and modern frontend frameworks.',
            posted_at: '2025-04-13T10:00:00Z',
            skills: ['React', 'TypeScript', 'Remote'],
            is_remote: true
          },
          {
            id: '2',
            title: 'UX/UI Designer',
            company: 'Creative Labs',
            location: 'New York, NY',
            description: 'Join our team designing beautiful and intuitive interfaces for enterprise clients.',
            posted_at: '2025-04-14T09:30:00Z',
            skills: ['Figma', 'UI Design', 'User Research'],
            is_remote: false
          },
          {
            id: '3',
            title: 'Full Stack Engineer',
            company: 'StartupX',
            location: 'Remote',
            description: 'Help build our next-generation SaaS platform using React and Node.js.',
            posted_at: '2025-04-15T14:45:00Z',
            skills: ['React', 'Node.js', 'MongoDB'],
            is_remote: true
          }
        ]);

        // Mock pending assessments
        setPendingAssessments([
          {
            id: '1',
            title: 'Frontend Developer Skills Assessment',
            company: 'TechCorp Inc.',
            status: 'pending',
            dueDate: '2025-05-05T23:59:59Z'
          },
          {
            id: '2',
            title: 'Problem Solving & Logic Test',
            company: 'StartupX',
            status: 'pending',
            dueDate: '2025-05-03T23:59:59Z'
          }
        ]);

        // Mock completed assessments
        setCompletedAssessments([
          {
            id: '3',
            title: 'React Skills Assessment',
            company: 'Creative Labs',
            status: 'completed',
            dueDate: '2025-04-29T23:59:59Z',
            score: 92
          },
          {
            id: '4',
            title: 'Frontend Developer Technical Test',
            company: 'WebDev Solutions',
            status: 'completed',
            dueDate: '2025-04-27T23:59:59Z',
            score: 85
          },
          {
            id: '5',
            title: 'JavaScript Fundamentals',
            company: 'TechCorp Inc.',
            status: 'completed',
            dueDate: '2025-04-25T23:59:59Z',
            score: 78
          }
        ]);
        
        // Mock activities
        setActivities([
          {
            id: '1',
            type: 'application',
            description: 'Applied to UI/UX Designer at Creative Labs',
            date: '2025-04-14T14:30:00Z',
            icon: <BriefcaseIcon className="h-5 w-5 text-zordie-600 mt-1" />
          },
          {
            id: '2',
            type: 'interview',
            description: 'Scheduled interview with TechCorp Inc.',
            date: '2025-04-17T10:00:00Z',
            icon: <Calendar className="h-5 w-5 text-zordie-600 mt-1" />
          },
          {
            id: '3',
            type: 'assessment',
            description: 'Completed React Skills Assessment - Scored 92%',
            date: '2025-04-15T11:15:00Z',
            icon: <Award className="h-5 w-5 text-zordie-600 mt-1" />
          },
          {
            id: '4',
            type: 'resume',
            description: 'Updated your resume',
            date: '2025-04-15T09:15:00Z',
            icon: <FileText className="h-5 w-5 text-zordie-600 mt-1" />
          }
        ]);
        
      } catch (error) {
        console.error("Error fetching data:", error);
        toast({
          title: "Error",
          description: "Failed to load your dashboard data. Please try again later.",
          variant: "destructive"
        });
      } finally {
        setIsLoadingData(false);
      }
    };
    
    fetchData();
  }, [toast]);

  if (isLoadingData) {
    return <LoadingScreen />;
  }

  const firstName = demoUserProfile?.first_name || "Candidate";
  
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

  const getDueText = (dateString: string) => {
    const now = new Date();
    const dueDate = new Date(dateString);
    const diffDays = Math.floor((dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return "Overdue";
    if (diffDays === 0) return "Due Today";
    if (diffDays === 1) return "Due Tomorrow";
    return `Due in ${diffDays} days`;
  };
  
  const handleManageResumesClick = () => {
    navigate("/resumes");
  };
  
  const handleFindJobsClick = () => {
    navigate("/find-jobs");
  };
  
  const handlePracticeInterviewClick = () => {
    navigate("/practice-interview");
  };
  
  const handleChatNowClick = () => {
    navigate("/chat");
  };
  
  const handleStartAssessment = (id: string) => {
    toast({
      title: "Assessment Started",
      description: "You're being redirected to the assessment platform.",
    });
  };
  
  const handleApplyClick = (jobId: string) => {
    navigate(`/job-application/${jobId}`);
  };

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Welcome, {firstName}!</h1>
            <p className="text-gray-600 mt-1">Track your job search progress and manage your career</p>
          </div>
          <Button onClick={handleManageResumesClick} className="mt-4 md:mt-0 bg-gradient-to-r from-zordie-600 to-accent1 hover:from-zordie-700 hover:to-accent1 text-white">
            <FileText className="mr-2 h-4 w-4" />
            Manage Resumes
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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
              <Button variant="outline" size="sm" className="w-full" onClick={handleManageResumesClick}>
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
              <Button variant="outline" size="sm" className="w-full" onClick={handleFindJobsClick}>
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
              <Button variant="outline" size="sm" className="w-full" onClick={handlePracticeInterviewClick}>
                Practice Interview
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Assessments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-zordie-600" />
                <span className="text-3xl font-bold">{assessmentsCompleted}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" onClick={() => {}}>
                View Results
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Tabs defaultValue="jobs" className="mb-8">
          <TabsList className="mb-4 w-full max-w-md">
            <TabsTrigger value="jobs" className="flex-1">Recommended Jobs</TabsTrigger>
            <TabsTrigger value="assessments" className="flex-1">My Assessments</TabsTrigger>
            <TabsTrigger value="activities" className="flex-1">Recent Activities</TabsTrigger>
            <TabsTrigger value="resources" className="flex-1">Resources</TabsTrigger>
          </TabsList>
          
          <TabsContent value="jobs">
            <div className="grid grid-cols-1 gap-4">
              {recommendedJobs.map((job) => (
                <Card key={job.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{job.title}</CardTitle>
                        <CardDescription>{job.company} • {job.location}</CardDescription>
                      </div>
                      <Badge>New</Badge>
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
                    <span className="text-sm text-gray-500">Posted {getTimeSince(job.posted_at)}</span>
                    <Button 
                      size="sm" 
                      className="bg-zordie-600 hover:bg-zordie-700"
                      onClick={() => handleApplyClick(job.id)}
                    >
                      Apply Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="assessments">
            <div className="space-y-6">
              {pendingAssessments.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Pending Assessments</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pendingAssessments.map((assessment) => (
                      <Card key={assessment.id}>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-base">{assessment.title}</CardTitle>
                            <Badge variant="outline" className="bg-amber-100 text-amber-700 hover:bg-amber-100">
                              {getDueText(assessment.dueDate)}
                            </Badge>
                          </div>
                          <CardDescription>{assessment.company}</CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-sm text-gray-600">
                            This assessment will help evaluate your skills and qualifications for the position.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button 
                            className="w-full bg-zordie-600 hover:bg-zordie-700"
                            onClick={() => handleStartAssessment(assessment.id)}
                          >
                            Start Assessment
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {completedAssessments.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Completed Assessments</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {completedAssessments.map((assessment) => (
                      <Card key={assessment.id}>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-base">{assessment.title}</CardTitle>
                            <Badge variant="outline" className="bg-green-100 text-green-700 hover:bg-green-100">
                              {assessment.score}% Score
                            </Badge>
                          </div>
                          <CardDescription>{assessment.company}</CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                            <div 
                              className={`h-2.5 rounded-full ${
                                (assessment.score || 0) >= 90 ? "bg-green-600" : 
                                (assessment.score || 0) >= 75 ? "bg-blue-600" : 
                                "bg-amber-500"
                              }`}
                              style={{ width: `${assessment.score}%` }}
                            ></div>
                          </div>
                          <p className="text-sm text-gray-600">
                            Completed on {formatDate(assessment.dueDate)}
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            View Detailed Results
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="activities">
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {activities.map((activity) => (
                    <li key={activity.id} className="flex items-start space-x-4 pb-4 border-b last:border-0">
                      {activity.icon}
                      <div>
                        <p className="font-medium">{activity.description}</p>
                        <p className="text-sm text-gray-500">{formatDate(activity.date)}</p>
                      </div>
                    </li>
                  ))}
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
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full" 
                    onClick={handlePracticeInterviewClick}
                  >
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
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full" 
                    onClick={handleChatNowClick}
                  >
                    Chat Now
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Prime AI Chatbot */}
      <PrimeHRChatbot initiallyOpen={false} />
    </Layout>
  );
};

export default JobSeekerDashboard;
