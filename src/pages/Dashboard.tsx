
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BriefcaseIcon, 
  Users, 
  FileText, 
  Calendar, 
  Settings, 
  ChartBar, 
  Search, 
  Bell, 
  FileEdit, 
  Upload, 
  UserPlus, 
  CalendarCheck, 
  Star, 
  Brain, 
  Video,
  MessageSquare,
  Download
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { toast } from "@/components/ui/use-toast";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";
import ResumeScorer from "@/components/resume/ResumeScorer";
import FeedbackGenerator from "@/components/feedback/FeedbackGenerator";
import QuestionGenerator from "@/components/interview/QuestionGenerator";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  
  // Demo metrics data
  const [activeJobs, setActiveJobs] = useState(3);
  const [candidatesInPipeline, setCandidatesInPipeline] = useState(24);
  const [scheduledInterviews, setScheduledInterviews] = useState(5);
  const [autoInterviews, setAutoInterviews] = useState(12);
  const [offersSent, setOffersSent] = useState(2);
  
  const handlePostJob = () => {
    navigate("/post-job");
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  const handleAIScreening = () => {
    navigate("/ai-screening");
  };

  const handleAIVideoInterview = () => {
    navigate("/ai-video-interview");
  };
  
  // Demo activities for the timeline
  const recentActivities = [
    { id: 1, type: "optimized", title: "Senior Developer JD Optimized", time: "2 hours ago" },
    { id: 2, type: "candidate", title: "New candidate applied: John Smith", time: "Yesterday" },
    { id: 3, type: "interview", title: "Interview scheduled with Sarah Lee", time: "2 days ago" },
    { id: 4, type: "feedback", title: "AI Feedback generated for 3 candidates", time: "3 days ago" },
  ];

  // Demo notifications
  const notifications = [
    { id: 1, title: "New Application", description: "Frontend Developer - 3 new applications", time: "1 hour ago" },
    { id: 2, title: "Interview Ready", description: "AI interview with Mark Johnson is ready for review", time: "3 hours ago" },
    { id: 3, title: "Job Post Expiring", description: "UX Designer job post expires in 2 days", time: "Yesterday" },
  ];

  // Demo job posts
  const jobPosts = [
    { id: 1, title: "Senior Frontend Developer", location: "Remote", status: "Active", applicants: 12, posted: "2 weeks ago" },
    { id: 2, title: "UX Designer", location: "New York", status: "Active", applicants: 8, posted: "1 week ago" },
    { id: 3, title: "Backend Developer", location: "Remote", status: "Draft", applicants: 0, posted: "Not posted" },
  ];

  // Demo candidates
  const candidates = [
    { id: 1, name: "John Smith", position: "Frontend Developer", status: "Interview Scheduled", score: 87, source: "LinkedIn" },
    { id: 2, name: "Sarah Lee", position: "UX Designer", status: "Technical Assessment", score: 92, source: "Indeed" },
    { id: 3, name: "Mike Johnson", position: "Frontend Developer", status: "New Application", score: 78, source: "Direct" },
  ];

  // Demo interviews
  const interviews = [
    { 
      id: 1, 
      candidate: "Sarah Lee", 
      position: "UX Designer", 
      date: "Today at 2:00 PM", 
      type: "Live",
      status: "Scheduled" 
    },
    { 
      id: 2, 
      candidate: "John Smith", 
      position: "Frontend Developer", 
      date: "Tomorrow at 10:00 AM", 
      type: "Live",
      status: "Scheduled" 
    },
    { 
      id: 3, 
      candidate: "Mike Johnson", 
      position: "Frontend Developer", 
      date: "Completed May 1", 
      type: "AI",
      status: "Completed" 
    },
    { 
      id: 4, 
      candidate: "Emily Roberts", 
      position: "UX Designer", 
      date: "In Progress", 
      type: "AI",
      status: "In Progress" 
    },
  ];

  return (
    <ProtectedRoute requiresRole="hr">
      <Layout>
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">HR Dashboard</h1>
              {user && <p className="text-gray-600 mt-1">Welcome back, {user.displayName}</p>}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
              <Button onClick={handlePostJob} className="btn-gradient">
                <BriefcaseIcon className="mr-2 h-4 w-4" />
                Post New Job
              </Button>
              <Button variant="outline" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          </div>

          {/* KPIs at a glance */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
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
                <CardTitle className="text-lg">Candidates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-zordie-600" />
                  <span className="text-3xl font-bold">{candidatesInPipeline}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Interviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-zordie-600" />
                  <span className="text-3xl font-bold">{scheduledInterviews}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Auto-Interviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-zordie-600" />
                  <span className="text-3xl font-bold">{autoInterviews}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Offers Sent</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-zordie-600" />
                  <span className="text-3xl font-bold">{offersSent}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 h-auto">
              <TabsTrigger value="overview" className="py-2">
                Overview
              </TabsTrigger>
              <TabsTrigger value="jobs" className="py-2">
                Jobs
              </TabsTrigger>
              <TabsTrigger value="candidates" className="py-2">
                Candidates
              </TabsTrigger>
              <TabsTrigger value="ai-tools" className="py-2">
                AI Tools
              </TabsTrigger>
              <TabsTrigger value="interviews" className="py-2">
                Interviews
              </TabsTrigger>
              <TabsTrigger value="documents" className="py-2">
                Documents
              </TabsTrigger>
              <TabsTrigger value="analytics" className="py-2">
                Analytics
              </TabsTrigger>
              <TabsTrigger value="settings" className="py-2">
                Settings
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <SectionHeading
                title="Dashboard Overview"
                subtitle="Key metrics and recent activity"
                align="left"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Recent Activity Timeline */}
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivities.map((activity) => (
                        <div key={activity.id} className="flex">
                          <div className="mr-4 flex flex-col items-center">
                            <div className="h-3 w-3 rounded-full bg-zordie-500"></div>
                            {activity.id !== recentActivities.length && <div className="h-full w-0.5 bg-gray-200"></div>}
                          </div>
                          <div className="pb-4">
                            <p className="text-sm font-medium">{activity.title}</p>
                            <p className="text-xs text-gray-500">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Notifications Panel */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg">Notifications</CardTitle>
                    <Bell className="h-5 w-5 text-gray-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {notifications.map((notification) => (
                        <div key={notification.id} className="border-b pb-3 last:border-0 last:pb-0">
                          <p className="font-medium text-sm">{notification.title}</p>
                          <p className="text-xs text-gray-600">{notification.description}</p>
                          <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Button variant="outline" className="justify-start" onClick={handlePostJob}>
                      <BriefcaseIcon className="mr-2 h-4 w-4" /> Post a New Job
                    </Button>
                    <Button variant="outline" className="justify-start" onClick={() => toast({ title: "Feature Coming Soon" })}>
                      <Search className="mr-2 h-4 w-4" /> Search Candidates
                    </Button>
                    <Button variant="outline" className="justify-start" onClick={handleAIScreening}>
                      <FileEdit className="mr-2 h-4 w-4" /> Generate Job Description
                    </Button>
                    <Button variant="outline" className="justify-start" onClick={handleAIVideoInterview}>
                      <Video className="mr-2 h-4 w-4" /> AI Video Interview
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Upcoming Interviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-start pb-2 border-b">
                        <div>
                          <p className="font-medium">Sarah Lee - UX Designer</p>
                          <p className="text-sm text-gray-500">Today at 2:00 PM</p>
                        </div>
                        <Button size="sm" variant="outline">Prepare</Button>
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">John Smith - Frontend Developer</p>
                          <p className="text-sm text-gray-500">Tomorrow at 10:00 AM</p>
                        </div>
                        <Button size="sm" variant="outline">Prepare</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Jobs Tab */}
            <TabsContent value="jobs" className="space-y-6">
              <SectionHeading
                title="Job Postings"
                subtitle="Manage your job listings"
                align="left"
              />
              
              <div className="flex justify-end mb-4">
                <Button onClick={handlePostJob} className="btn-gradient">
                  <BriefcaseIcon className="mr-2 h-4 w-4" />
                  Post New Job
                </Button>
              </div>
              
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left py-3 px-4 font-medium">Job Title</th>
                          <th className="text-left py-3 px-4 font-medium">Location</th>
                          <th className="text-left py-3 px-4 font-medium">Status</th>
                          <th className="text-left py-3 px-4 font-medium">Applicants</th>
                          <th className="text-left py-3 px-4 font-medium">Posted</th>
                          <th className="text-left py-3 px-4 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {jobPosts.map((job) => (
                          <tr key={job.id} className="border-t">
                            <td className="py-3 px-4">{job.title}</td>
                            <td className="py-3 px-4">{job.location}</td>
                            <td className="py-3 px-4">
                              <span className={`py-1 px-2 rounded text-xs ${
                                job.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                              }`}>
                                {job.status}
                              </span>
                            </td>
                            <td className="py-3 px-4">{job.applicants}</td>
                            <td className="py-3 px-4">{job.posted}</td>
                            <td className="py-3 px-4 space-x-2">
                              <Button size="sm" variant="outline" onClick={() => toast({ title: "Feature Coming Soon" })}>
                                Edit
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => toast({ title: "Feature Coming Soon" })}>
                                Analytics
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Candidates Tab */}
            <TabsContent value="candidates" className="space-y-6">
              <SectionHeading
                title="Candidates"
                subtitle="Manage and review job applicants"
                align="left"
              />
              
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2 flex-grow">
                  <div className="relative flex-grow max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <input 
                      type="text" 
                      placeholder="Search candidates..." 
                      className="pl-10 pr-4 py-2 border rounded-md w-full" 
                    />
                  </div>
                  <Button variant="outline">Filter</Button>
                </div>
                <Button variant="outline" onClick={() => toast({ title: "Feature Coming Soon" })}>
                  <Upload className="mr-2 h-4 w-4" />
                  Import Candidates
                </Button>
              </div>
              
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left py-3 px-4 font-medium">Name</th>
                          <th className="text-left py-3 px-4 font-medium">Position</th>
                          <th className="text-left py-3 px-4 font-medium">Status</th>
                          <th className="text-left py-3 px-4 font-medium">Score</th>
                          <th className="text-left py-3 px-4 font-medium">Source</th>
                          <th className="text-left py-3 px-4 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {candidates.map((candidate) => (
                          <tr key={candidate.id} className="border-t">
                            <td className="py-3 px-4">{candidate.name}</td>
                            <td className="py-3 px-4">{candidate.position}</td>
                            <td className="py-3 px-4">
                              <span className={`py-1 px-2 rounded text-xs ${
                                candidate.status === "Interview Scheduled" ? "bg-blue-100 text-blue-800" : 
                                candidate.status === "Technical Assessment" ? "bg-purple-100 text-purple-800" :
                                "bg-gray-100 text-gray-800"
                              }`}>
                                {candidate.status}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <span className={`font-medium ${
                                  candidate.score > 85 ? "text-green-600" : 
                                  candidate.score > 75 ? "text-amber-600" : 
                                  "text-red-600"
                                }`}>
                                  {candidate.score}
                                </span>
                                <span className="text-gray-400 text-xs ml-1">/100</span>
                              </div>
                            </td>
                            <td className="py-3 px-4">{candidate.source}</td>
                            <td className="py-3 px-4 space-x-2">
                              <Button size="sm" variant="outline" onClick={() => toast({ title: "Feature Coming Soon" })}>
                                View
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => toast({ title: "Feature Coming Soon" })}>
                                <Star className="h-4 w-4" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* AI Tools Tab */}
            <TabsContent value="ai-tools" className="space-y-6">
              <SectionHeading
                title="AI Tools"
                subtitle="Enhance your recruiting with AI-powered tools"
                align="left"
              />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ResumeScorer jobTitle="Frontend Developer" />
                <FeedbackGenerator />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <QuestionGenerator />
                <Card className="shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Brain className="h-5 w-5 mr-2 text-zordie-600" />
                      AI Interview Video Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-600">
                      Conduct AI-powered video interviews that provide comprehensive analysis 
                      of candidate responses, including technical skills assessment, personality traits,
                      and cultural fit.
                    </p>
                    <div className="p-4 bg-zordie-50 border border-zordie-100 rounded-md">
                      <h3 className="font-medium text-zordie-800 mb-2">Key Features</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="h-1.5 w-1.5 rounded-full bg-zordie-500 mt-1.5 mr-1.5 flex-shrink-0"></span>
                          <span>Automatic video recording and transcription</span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-1.5 w-1.5 rounded-full bg-zordie-500 mt-1.5 mr-1.5 flex-shrink-0"></span>
                          <span>AI-guided interview process with dynamic questioning</span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-1.5 w-1.5 rounded-full bg-zordie-500 mt-1.5 mr-1.5 flex-shrink-0"></span>
                          <span>Comprehensive skills and personality assessment</span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-1.5 w-1.5 rounded-full bg-zordie-500 mt-1.5 mr-1.5 flex-shrink-0"></span>
                          <span>Cultural fit evaluation based on company values</span>
                        </li>
                      </ul>
                    </div>
                    <Button className="w-full" onClick={handleAIVideoInterview}>
                      <Video className="mr-2 h-4 w-4" />
                      Start AI Video Interview
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>AI Logs & Analytics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Recent AI Tool Usage</h3>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export Logs
                    </Button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left py-3 px-4 font-medium">Tool</th>
                          <th className="text-left py-3 px-4 font-medium">User</th>
                          <th className="text-left py-3 px-4 font-medium">Date</th>
                          <th className="text-left py-3 px-4 font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="py-3 px-4">Resume Scorer</td>
                          <td className="py-3 px-4">John Doe</td>
                          <td className="py-3 px-4">May 2, 2025</td>
                          <td className="py-3 px-4">
                            <span className="py-1 px-2 rounded text-xs bg-green-100 text-green-800">
                              Completed
                            </span>
                          </td>
                        </tr>
                        <tr className="border-t">
                          <td className="py-3 px-4">JD Generator</td>
                          <td className="py-3 px-4">John Doe</td>
                          <td className="py-3 px-4">May 1, 2025</td>
                          <td className="py-3 px-4">
                            <span className="py-1 px-2 rounded text-xs bg-green-100 text-green-800">
                              Completed
                            </span>
                          </td>
                        </tr>
                        <tr className="border-t">
                          <td className="py-3 px-4">Video Interview</td>
                          <td className="py-3 px-4">Jane Smith</td>
                          <td className="py-3 px-4">May 1, 2025</td>
                          <td className="py-3 px-4">
                            <span className="py-1 px-2 rounded text-xs bg-green-100 text-green-800">
                              Completed
                            </span>
                          </td>
                        </tr>
                        <tr className="border-t">
                          <td className="py-3 px-4">Feedback Generator</td>
                          <td className="py-3 px-4">Jane Smith</td>
                          <td className="py-3 px-4">Apr 29, 2025</td>
                          <td className="py-3 px-4">
                            <span className="py-1 px-2 rounded text-xs bg-green-100 text-green-800">
                              Completed
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Interviews Tab */}
            <TabsContent value="interviews" className="space-y-6">
              <SectionHeading
                title="Interview Management"
                subtitle="Schedule and manage candidate interviews"
                align="left"
              />
              
              <div className="flex justify-between flex-wrap gap-3 mb-4">
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-grow sm:flex-grow-0">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Interview
                  </Button>
                  <Button variant="outline" className="flex-grow sm:flex-grow-0" onClick={handleAIVideoInterview}>
                    <Video className="h-4 w-4 mr-2" />
                    AI Video Interview
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    View Calendar
                  </Button>
                </div>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Interviews</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left py-3 px-4 font-medium">Candidate</th>
                          <th className="text-left py-3 px-4 font-medium">Position</th>
                          <th className="text-left py-3 px-4 font-medium">Date/Time</th>
                          <th className="text-left py-3 px-4 font-medium">Type</th>
                          <th className="text-left py-3 px-4 font-medium">Status</th>
                          <th className="text-left py-3 px-4 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {interviews.map((interview) => (
                          <tr key={interview.id} className="border-t">
                            <td className="py-3 px-4">{interview.candidate}</td>
                            <td className="py-3 px-4">{interview.position}</td>
                            <td className="py-3 px-4">{interview.date}</td>
                            <td className="py-3 px-4">
                              <span className={`py-1 px-2 rounded text-xs ${
                                interview.type === "Live" ? "bg-blue-100 text-blue-800" : 
                                "bg-purple-100 text-purple-800"
                              }`}>
                                {interview.type}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <span className={`py-1 px-2 rounded text-xs ${
                                interview.status === "Completed" ? "bg-green-100 text-green-800" :
                                interview.status === "In Progress" ? "bg-amber-100 text-amber-800" : 
                                "bg-gray-100 text-gray-800"
                              }`}>
                                {interview.status}
                              </span>
                            </td>
                            <td className="py-3 px-4 space-x-2">
                              {interview.status === "Scheduled" && (
                                <Button size="sm" variant="outline">
                                  {interview.type === "Live" ? "Join" : "Start"}
                                </Button>
                              )}
                              {interview.status === "Completed" && (
                                <Button size="sm" variant="outline">
                                  <FileText className="h-4 w-4 mr-2" />
                                  View
                                </Button>
                              )}
                              {interview.status === "In Progress" && (
                                <Button size="sm" variant="outline" disabled>
                                  In Progress
                                </Button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Interview Calendar</CardTitle>
                  </CardHeader>
                  <CardContent className="h-64 flex items-center justify-center">
                    <p className="text-gray-500">Calendar view coming soon</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Interview Analytics</CardTitle>
                  </CardHeader>
                  <CardContent className="h-64 flex items-center justify-center">
                    <p className="text-gray-500">Analytics visualization coming soon</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="documents" className="space-y-6">
              <SectionHeading
                title="Offer & Documents"
                subtitle="Manage offer letters and documents"
                align="left"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Offer Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 my-8 text-center">No active offers at this time.</p>
                    <Button className="w-full">
                      <FileText className="mr-2 h-4 w-4" />
                      Create New Offer
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Document Templates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center border-b pb-3">
                        <div>
                          <p className="font-medium">Offer Letter Template</p>
                          <p className="text-sm text-gray-500">Last edited 2 weeks ago</p>
                        </div>
                        <Button size="sm" variant="outline">Edit</Button>
                      </div>
                      <div className="flex justify-between items-center border-b pb-3">
                        <div>
                          <p className="font-medium">NDA Template</p>
                          <p className="text-sm text-gray-500">Last edited 3 months ago</p>
                        </div>
                        <Button size="sm" variant="outline">Edit</Button>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Employment Contract</p>
                          <p className="text-sm text-gray-500">Last edited 1 month ago</p>
                        </div>
                        <Button size="sm" variant="outline">Edit</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="analytics" className="space-y-6">
              <SectionHeading
                title="Recruitment Analytics"
                subtitle="Measure and optimize your hiring process"
                align="left"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Hiring Funnel</CardTitle>
                  </CardHeader>
                  <CardContent className="h-64 flex items-center justify-center">
                    <p className="text-gray-500">Analytics visualization coming soon</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Time-to-Hire Analytics</CardTitle>
                  </CardHeader>
                  <CardContent className="h-64 flex items-center justify-center">
                    <p className="text-gray-500">Analytics visualization coming soon</p>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>AI Effectiveness Reports</CardTitle>
                </CardHeader>
                <CardContent className="h-64 flex items-center justify-center">
                  <p className="text-gray-500">Analytics visualization coming soon</p>
                </CardContent>
              </Card>
              <div className="flex justify-end">
                <Button variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  Export Reports
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="settings" className="space-y-6">
              <SectionHeading
                title="Settings & Integrations"
                subtitle="Manage your account and integrations"
                align="left"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Job Board Connections</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center border-b pb-3">
                        <div className="flex items-center">
                          <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-blue-700 font-bold">in</span>
                          </div>
                          <span>LinkedIn</span>
                        </div>
                        <Button size="sm" variant="outline">Connect</Button>
                      </div>
                      <div className="flex justify-between items-center border-b pb-3">
                        <div className="flex items-center">
                          <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-green-700 font-bold">G</span>
                          </div>
                          <span>Glassdoor</span>
                        </div>
                        <Button size="sm" variant="outline">Connect</Button>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-blue-700 font-bold">I</span>
                          </div>
                          <span>Indeed</span>
                        </div>
                        <Button size="sm" variant="outline">Connect</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Communication Templates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center border-b pb-3">
                        <p className="font-medium">Email Templates</p>
                        <Button size="sm" variant="outline">Manage</Button>
                      </div>
                      <div className="flex justify-between items-center border-b pb-3">
                        <p className="font-medium">WhatsApp Templates</p>
                        <Button size="sm" variant="outline">Manage</Button>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="font-medium">Feedback Templates</p>
                        <Button size="sm" variant="outline">Manage</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>API Integrations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center border-b pb-3">
                        <p className="font-medium">Webhooks & Zapier</p>
                        <Button size="sm" variant="outline">Setup</Button>
                      </div>
                      <div className="flex justify-between items-center border-b pb-3">
                        <p className="font-medium">API Keys</p>
                        <Button size="sm" variant="outline">View</Button>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="font-medium">User Permissions</p>
                        <Button size="sm" variant="outline">Manage</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Profile</h3>
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-medium">Full Name</label>
                          <input 
                            type="text" 
                            className="w-full border rounded-md px-3 py-2 mt-1"
                            placeholder="Your Name" 
                            defaultValue={user?.displayName} 
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Email</label>
                          <input 
                            type="email" 
                            className="w-full border rounded-md px-3 py-2 mt-1" 
                            placeholder="Your Email"
                            defaultValue={user?.email}
                            disabled
                          />
                        </div>
                        <Button>
                          Save Changes
                        </Button>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-4">Security</h3>
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-medium">Current Password</label>
                          <input type="password" className="w-full border rounded-md px-3 py-2 mt-1" placeholder="••••••••" />
                        </div>
                        <div>
                          <label className="text-sm font-medium">New Password</label>
                          <input type="password" className="w-full border rounded-md px-3 py-2 mt-1" placeholder="••••••••" />
                        </div>
                        <Button>
                          Update Password
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </Layout>
    </ProtectedRoute>
  );
};

export default Dashboard;
