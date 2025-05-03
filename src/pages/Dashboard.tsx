import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  PlusCircle, Users, Briefcase, CheckCircle, X, Clock, ChevronRight, 
  Search, Filter, Bell, User, Settings, LogOut, Edit, Trash2,
  FileText, MessageSquare, BarChart, Award, ArrowLeft, Home
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import AssessmentGenerator from "@/components/assessment/AssessmentGenerator";
import PrimeHRChatbot from "@/components/chatbot/PrimeHRChatbot";
import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const { signOut } = useAuth();

  // Handle navigation to different sections
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const returnToDashboardSelector = () => {
    navigate("/dashboard-selector");
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col w-64 bg-white border-r">
          <div className="p-5 border-b">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-zordie-700">Zordie</span>
              <span className="ml-1 text-xl font-bold text-accent1">.</span>
            </Link>
          </div>
          
          <div className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
            <div className="space-y-1">
              <p className="px-3 text-xs font-semibold text-gray-500 uppercase">Main</p>
              <NavButton 
                icon={<Home size={18} />} 
                label="Dashboard Selector" 
                active={false} 
                onClick={returnToDashboardSelector} 
              />
              <NavButton 
                icon={<BarChart size={18} />} 
                label="Overview" 
                active={activeTab === "overview"} 
                onClick={() => setActiveTab("overview")} 
              />
              <NavButton 
                icon={<Briefcase size={18} />} 
                label="Jobs" 
                active={activeTab === "jobs"} 
                onClick={() => setActiveTab("jobs")}
                badge="3" 
              />
              <NavButton 
                icon={<Users size={18} />} 
                label="Candidates" 
                active={activeTab === "candidates"} 
                onClick={() => setActiveTab("candidates")} 
              />
              <NavButton 
                icon={<Award size={18} />} 
                label="Assessments" 
                active={activeTab === "assessments"} 
                onClick={() => setActiveTab("assessments")} 
              />
            </div>
            
            <div className="space-y-1">
              <p className="px-3 text-xs font-semibold text-gray-500 uppercase">Tools</p>
              <NavButton 
                icon={<FileText size={18} />} 
                label="Resume Manager" 
                active={activeTab === "resumes"} 
                onClick={() => handleNavigation("/resumes")}
              />
              <NavButton 
                icon={<MessageSquare size={18} />} 
                label="Prime AI Chat" 
                active={activeTab === "chat"} 
                onClick={() => handleNavigation("/chat")}
              />
              <NavButton 
                icon={<Bell size={18} />} 
                label="Notifications" 
                active={activeTab === "notifications"} 
                onClick={() => setActiveTab("notifications")}
                badge="5" 
              />
              <NavButton 
                icon={<Settings size={18} />} 
                label="Settings" 
                active={activeTab === "settings"} 
                onClick={() => handleNavigation("/integration-settings")}
              />
            </div>
          </div>
          
          <div className="border-t p-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src="https://randomuser.me/api/portraits/men/2.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-gray-500">Admin</p>
                    </div>
                  </div>
                  <ChevronRight size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleNavigation("/user-dashboard")}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("/integration-settings")}>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={returnToDashboardSelector}>
                  <Home className="mr-2 h-4 w-4" />
                  <span>Dashboard Selector</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      
        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="bg-white border-b px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="mr-2 md:hidden"
                  onClick={returnToDashboardSelector}
                >
                  <ArrowLeft size={18} />
                </Button>
                <h1 className="text-xl font-semibold">Dashboard</h1>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" onClick={() => navigate("/chat")}>
                  <MessageSquare size={18} className="mr-2" />
                  Prime AI
                </Button>
                <Button variant="outline" size="sm">
                  <Bell size={18} className="mr-2" />
                  Notifications
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://randomuser.me/api/portraits/men/2.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={returnToDashboardSelector}>
                      <Home className="mr-2 h-4 w-4" />
                      <span>Dashboard Selector</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Sign out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>
          
          {/* Content */}
          <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList>
                <TabsTrigger value="overview" onClick={() => setActiveTab("overview")}>Overview</TabsTrigger>
                <TabsTrigger value="jobs" onClick={() => setActiveTab("jobs")}>Jobs</TabsTrigger>
                <TabsTrigger value="candidates" onClick={() => setActiveTab("candidates")}>Candidates</TabsTrigger>
                <TabsTrigger value="assessments" onClick={() => setActiveTab("assessments")}>Assessments</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
                      <Briefcase size={16} className="text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3</div>
                      <p className="text-xs text-muted-foreground">+1 from last week</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
                      <Users size={16} className="text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">42</div>
                      <p className="text-xs text-muted-foreground">+8 from last week</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">Assessments Sent</CardTitle>
                      <Award size={16} className="text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">15</div>
                      <p className="text-xs text-muted-foreground">80% completion rate</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Job Postings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <JobItem 
                        title="Senior Frontend Developer" 
                        applications={15} 
                        department="Engineering"
                        daysAgo={3}
                      />
                      <JobItem 
                        title="Product Manager" 
                        applications={23} 
                        department="Product"
                        daysAgo={5}
                      />
                      <JobItem 
                        title="UI/UX Designer" 
                        applications={4} 
                        department="Design"
                        daysAgo={1}
                        status="new"
                      />
                      
                      <div className="pt-2">
                        <Button 
                          variant="link" 
                          size="sm" 
                          className="text-zordie-600 p-0"
                          onClick={() => setActiveTab("jobs")}
                        >
                          View all jobs <ChevronRight size={16} className="ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Top Candidates</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CandidateItem 
                        name="Sarah Johnson"
                        role="Frontend Developer"
                        matchScore={92}
                        verified
                        avatarUrl="https://randomuser.me/api/portraits/women/12.jpg"
                      />
                      <CandidateItem 
                        name="Michael Chen"
                        role="Product Manager"
                        matchScore={87}
                        verified
                        avatarUrl="https://randomuser.me/api/portraits/men/22.jpg"
                      />
                      <CandidateItem 
                        name="Jessica Williams"
                        role="UI/UX Designer"
                        matchScore={85}
                        verified
                        avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
                      />
                      
                      <div className="pt-2">
                        <Button 
                          variant="link" 
                          size="sm" 
                          className="text-zordie-600 p-0"
                          onClick={() => setActiveTab("candidates")}
                        >
                          View all candidates <ChevronRight size={16} className="ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Prime AI Assistant</CardTitle>
                    <div className="bg-zordie-100 text-zordie-700 text-xs font-semibold py-1 px-2 rounded-full">
                      AI Powered
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-zordie-500 to-accent1 flex items-center justify-center text-white font-bold">
                        AI
                      </div>
                      <div className="flex-1 bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-700">
                          Good morning, John! You have <strong>5 new candidates</strong> for the Frontend Developer position. 
                          Would you like me to schedule initial AI interviews for them?
                        </p>
                        <div className="flex space-x-2 mt-3">
                          <Button 
                            size="sm" 
                            className="bg-zordie-600 hover:bg-zordie-700"
                            onClick={() => setActiveTab("assessments")}
                          >
                            Create Assessment
                          </Button>
                          <Button size="sm" variant="outline">Not now</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-zordie-500 to-accent1 flex items-center justify-center text-white font-bold">
                        AI
                      </div>
                      <div className="flex-1 bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-700">
                          The Product Manager job post is performing well with <strong>23 applications</strong> so far. 
                          Based on the candidates, I suggest adjusting the job requirements to attract more qualified applicants.
                        </p>
                        <div className="flex space-x-2 mt-3">
                          <Button size="sm" className="bg-zordie-600 hover:bg-zordie-700">View suggestions</Button>
                          <Button size="sm" variant="outline">Dismiss</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-zordie-500 to-accent1 flex items-center justify-center text-white font-bold">
                        AI
                      </div>
                      <div className="flex-1 bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-700">
                          12 candidates have completed their assessments for the Frontend Developer position. The top 3 candidates scored above 85% match rate. Would you like me to schedule interviews with them?
                        </p>
                        <div className="flex space-x-2 mt-3">
                          <Button size="sm" className="bg-zordie-600 hover:bg-zordie-700">Schedule Interviews</Button>
                          <Button size="sm" variant="outline">Review Assessments</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="jobs" className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <input 
                        type="text" 
                        placeholder="Search jobs..." 
                        className="pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-zordie-500 focus:border-transparent" 
                      />
                    </div>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <Button 
                    className="bg-gradient-to-r from-zordie-600 to-accent1 hover:from-zordie-700 hover:to-accent1 text-white"
                    onClick={() => navigate("/post-job")}
                  >
                    <PlusCircle className="h-4 w-4 mr-2" /> Post New Job
                  </Button>
                </div>
                
                <div className="bg-white rounded-lg border overflow-hidden">
                  <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 font-medium text-gray-700 border-b">
                    <div className="col-span-4">Job Title</div>
                    <div className="col-span-2">Department</div>
                    <div className="col-span-1 text-center">Applications</div>
                    <div className="col-span-2 text-center">Status</div>
                    <div className="col-span-2">Posted</div>
                    <div className="col-span-1 text-right">Actions</div>
                  </div>
                  
                  <JobTableRow 
                    title="Senior Frontend Developer"
                    department="Engineering"
                    applications={15}
                    status="active"
                    postedDate="Apr 7, 2025"
                  />
                  
                  <JobTableRow 
                    title="Product Manager"
                    department="Product"
                    applications={23}
                    status="active"
                    postedDate="Apr 5, 2025"
                  />
                  
                  <JobTableRow 
                    title="UI/UX Designer"
                    department="Design"
                    applications={4}
                    status="active"
                    postedDate="Apr 9, 2025"
                  />
                  
                  <JobTableRow 
                    title="Full Stack Developer"
                    department="Engineering"
                    applications={11}
                    status="draft"
                    postedDate="Apr 2, 2025"
                  />
                  
                  <JobTableRow 
                    title="Marketing Specialist"
                    department="Marketing"
                    applications={18}
                    status="closed"
                    postedDate="Mar 25, 2025"
                  />
                  
                  <JobTableRow 
                    title="Customer Support Representative"
                    department="Support"
                    applications={32}
                    status="closed"
                    postedDate="Mar 15, 2025"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">Showing 6 of 12 jobs</p>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="candidates" className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <input 
                        type="text" 
                        placeholder="Search candidates..." 
                        className="pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-zordie-500 focus:border-transparent" 
                      />
                    </div>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <Button 
                    className="bg-gradient-to-r from-zordie-600 to-accent1 hover:from-zordie-700 hover:to-accent1 text-white"
                    onClick={() => setActiveTab("assessments")}
                  >
                    <Award className="h-4 w-4 mr-2" /> Send Assessment
                  </Button>
                </div>
                
                <div className="bg-white rounded-lg border overflow-hidden">
                  <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 font-medium text-gray-700 border-b">
                    <div className="col-span-3">Candidate</div>
                    <div className="col-span-2">Position</div>
                    <div className="col-span-2">Match Score</div>
                    <div className="col-span-2 text-center">Status</div>
                    <div className="col-span-2">Applied</div>
                    <div className="col-span-1 text-right">Actions</div>
                  </div>
                  
                  <CandidateTableRow 
                    name="Sarah Johnson"
                    role="Frontend Developer"
                    matchScore={92}
                    status="interview"
                    date="Apr 8, 2025"
                    avatarUrl="https://randomuser.me/api/portraits/women/12.jpg"
                    verified
                  />
                  
                  <CandidateTableRow 
                    name="Michael Chen"
                    role="Product Manager"
                    matchScore={87}
                    status="screening"
                    date="Apr 6, 2025"
                    avatarUrl="https://randomuser.me/api/portraits/men/22.jpg"
                    verified
                  />
                  
                  <CandidateTableRow 
                    name="Jessica Williams"
                    role="UI/UX Designer"
                    matchScore={85}
                    status="screening"
                    date="Apr 9, 2025"
                    avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
                    verified
                  />
                  
                  <CandidateTableRow 
                    name="David Thompson"
                    role="Frontend Developer"
                    matchScore={78}
                    status="applied"
                    date="Apr 9, 2025"
                    avatarUrl="https://randomuser.me/api/portraits/men/32.jpg"
                    verified={false}
                  />
                  
                  <CandidateTableRow 
                    name="Aisha Patel"
                    role="Product Manager"
                    matchScore={91}
                    status="shortlisted"
                    date="Apr 5, 2025"
                    avatarUrl="https://randomuser.me/api/portraits/women/28.jpg"
                    verified
                  />
                  
                  <CandidateTableRow 
                    name="Chris Rodriguez"
                    role="Full Stack Developer"
                    matchScore={82}
                    status="rejected"
                    date="Apr 3, 2025"
                    avatarUrl="https://randomuser.me/api/portraits/men/67.jpg"
                    verified={false}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">Showing 6 of 42 candidates</p>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="assessments" className="space-y-6">
                <AssessmentGenerator />
              </TabsContent>
            </Tabs>
          </main>
        </div>
      
        {/* Prime HR AI Chatbot */}
        <PrimeHRChatbot initiallyOpen={false} />
      </div>
    </ProtectedRoute>
  );
};

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
  badge?: string;
}

const NavButton = ({ icon, label, active, onClick, badge }: NavButtonProps) => {
  return (
    <button
      className={`flex items-center justify-between px-3 py-2 rounded-md w-full ${
        active ? "bg-zordie-50 text-zordie-700" : "text-gray-600 hover:bg-gray-50"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <span className="mr-3">{icon}</span>
        <span>{label}</span>
      </div>
      {badge && (
        <span className="bg-zordie-100 text-zordie-700 text-xs font-semibold py-0.5 px-2 rounded-full">
          {badge}
        </span>
      )}
    </button>
  );
};

interface JobItemProps {
  title: string;
  applications: number;
  department: string;
  daysAgo: number;
  status?: "new" | "active" | "closed";
}

const JobItem = ({ title, applications, department, daysAgo, status }: JobItemProps) => {
  return (
    <div className="flex items-center justify-between p-3 border rounded-md">
      <div className="flex-1">
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-500">{department} &middot; {applications} applications</p>
      </div>
      <div className="flex items-center">
        <p className="text-xs text-gray-500 mr-3">{daysAgo}d ago</p>
        {status === "new" && (
          <span className="bg-green-100 text-green-700 text-xs font-semibold py-0.5 px-2 rounded-full">
            New
          </span>
        )}
      </div>
    </div>
  );
};

interface CandidateItemProps {
  name: string;
  role: string;
  matchScore: number;
  verified: boolean;
  avatarUrl: string;
}

const CandidateItem = ({ name, role, matchScore, verified, avatarUrl }: CandidateItemProps) => {
  return (
    <div className="flex items-center justify-between p-3 border rounded-md">
      <div className="flex items-center">
        <div className="relative">
          <Avatar className={`h-10 w-10 mr-3 ${verified ? "avatar-verified" : ""}`}>
            <AvatarImage src={avatarUrl} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          {verified && (
            <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs border-2 border-white">
              <CheckCircle size={12} />
            </div>
          )}
        </div>
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-6 text-right">
          <p className="font-medium">{matchScore}%</p>
          <p className="text-xs text-gray-500">match</p>
        </div>
        <Button variant="outline" size="sm">View</Button>
      </div>
    </div>
  );
};

interface JobTableRowProps {
  title: string;
  department: string;
  applications: number;
  status: "active" | "draft" | "closed";
  postedDate: string;
}

const JobTableRow = ({ title, department, applications, status, postedDate }: JobTableRowProps) => {
  return (
    <div className="grid grid-cols-12 gap-4 p-4 border-b items-center text-sm">
      <div className="col-span-4 font-medium">{title}</div>
      <div className="col-span-2 text-gray-600">{department}</div>
      <div className="col-span-1 text-center">{applications}</div>
      <div className="col-span-2 text-center">
        {status === "active" && (
          <span className="bg-green-100 text-green-700 text-xs font-semibold py-0.5 px-2 rounded-full">
            Active
          </span>
        )}
        {status === "draft" && (
          <span className="bg-gray-100 text-gray-700 text-xs font-semibold py-0.5 px-2 rounded-full">
            Draft
          </span>
        )}
        {status === "closed" && (
          <span className="bg-red-100 text-red-700 text-xs font-semibold py-0.5 px-2 rounded-full">
            Closed
          </span>
        )}
      </div>
      <div className="col-span-2 text-gray-600">{postedDate}</div>
      <div className="col-span-1 flex justify-end space-x-1">
        <Button variant="ghost" size="icon">
          <Edit size={16} />
        </Button>
        <Button variant="ghost" size="icon">
          <Trash2 size={16} />
        </Button>
      </div>
    </div>
  );
};

interface CandidateTableRowProps {
  name: string;
  role: string;
  matchScore: number;
  status: "applied" | "screening" | "interview" | "shortlisted" | "rejected";
  date: string;
  avatarUrl: string;
  verified: boolean;
}

const CandidateTableRow = ({ name, role, matchScore, status, date, avatarUrl, verified }: CandidateTableRowProps) => {
  return (
    <div className="grid grid-cols-12 gap-4 p-4 border-b items-center text-sm">
      <div className="col-span-3">
        <div className="flex items-center">
          <div className="relative">
            <Avatar className="h-8 w-8 mr-3">
              <AvatarImage src={avatarUrl} />
              <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
            {verified && (
              <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs border-2 border-white">
                <CheckCircle size={10} />
              </div>
            )}
          </div>
          <span className="font-medium">{name}</span>
        </div>
      </div>
      <div className="col-span-2 text-gray-600">{role}</div>
      <div className="col-span-2">
        <div className="flex flex-col space-y-1">
          <span className="text-xs font-medium text-right">{matchScore}%</span>
          <Progress value={matchScore} className="h-1.5" />
        </div>
      </div>
      <div className="col-span-2 text-center">
        {status === "applied" && (
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold py-0.5 px-2 rounded-full">
            Applied
          </span>
        )}
        {status === "screening" && (
          <span className="bg-purple-100 text-purple-700 text-xs font-semibold py-0.5 px-2 rounded-full">
            Screening
          </span>
        )}
        {status === "interview" && (
          <span className="bg-amber-100 text-amber-700 text-xs font-semibold py-0.5 px-2 rounded-full">
            Interview
          </span>
        )}
        {status === "shortlisted" && (
          <span className="bg-green-100 text-green-700 text-xs font-semibold py-0.5 px-2 rounded-full">
            Shortlisted
          </span>
        )}
        {status === "rejected" && (
          <span className="bg-red-100 text-red-700 text-xs font-semibold py-0.5 px-2 rounded-full">
            Rejected
          </span>
        )}
      </div>
      <div className="col-span-2 text-gray-600">{date}</div>
      <div className="col-span-1 flex justify-end space-x-1">
        <Button variant="ghost" size="icon">
          <CheckCircle size={16} />
        </Button>
        <Button variant="ghost" size="icon">
          <X size={16} />
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
