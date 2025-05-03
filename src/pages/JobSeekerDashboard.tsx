import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, Settings, Calendar, FileText, Award, BarChart2, Clock, Play, 
  CheckCircle, BarChart, ChevronRight, PlusCircle, FileBarChart, MessageSquare,
  Briefcase, Search, Home, LogOut
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const JobSeekerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [profile, setProfile] = useState({
    id: 'demo-user-id',
    first_name: 'Demo',
    last_name: 'User',
    user_type: 'candidate',
    company_name: null,
    company_size: null,
    avatar_url: null
  });
  const [sessions, setSessions] = useState([
    {
      id: '1',
      interview_type: 'behavioral',
      job_role: 'Product Manager',
      industry: 'Technology',
      difficulty: 'moderate',
      duration: 20,
      score: 82,
      created_at: '2023-04-15T10:30:00Z'
    },
    {
      id: '2',
      interview_type: 'technical',
      job_role: 'Frontend Developer',
      industry: 'Technology',
      difficulty: 'challenging',
      duration: 25,
      score: 76,
      created_at: '2023-04-17T14:00:00Z'
    },
    {
      id: '3',
      interview_type: 'leadership',
      job_role: 'Team Lead',
      industry: 'Finance',
      difficulty: 'expert',
      duration: 30,
      score: 68,
      created_at: '2023-04-19T11:15:00Z'
    }
  ]);
  const [isLoading, setIsLoading] = useState(true);
  
  const { toast } = useToast();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [toast]);
  
  const getInitials = () => {
    if (profile?.first_name && profile?.last_name) {
      return `${profile.first_name[0]}${profile.last_name[0]}`.toUpperCase();
    } else if (profile?.first_name) {
      return profile.first_name[0].toUpperCase();
    } 
    return 'U';
  };
  
  const getFullName = () => {
    if (profile?.first_name && profile?.last_name) {
      return `${profile.first_name} ${profile.last_name}`;
    } else if (profile?.first_name) {
      return profile.first_name;
    } 
    return 'User';
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };
  
  const getInterviewTypeLabel = (type) => {
    const labels = {
      'behavioral': 'Behavioral',
      'technical': 'Technical',
      'situational': 'Situational',
      'leadership': 'Leadership',
      'case': 'Case Study'
    };
    return labels[type] || type;
  };
  
  const getDifficultyColor = (difficulty) => {
    const colors = {
      'beginner': 'bg-green-100 text-green-700',
      'moderate': 'bg-blue-100 text-blue-700',
      'challenging': 'bg-orange-100 text-orange-700',
      'expert': 'bg-red-100 text-red-700'
    };
    return colors[difficulty] || 'bg-gray-100 text-gray-700';
  };
  
  const handleNavigation = (path) => {
    navigate(path);
  };
  
  const returnToDashboardSelector = () => {
    navigate("/dashboard-selector");
  };
  
  const handleStartPractice = () => {
    navigate('/practice-interview');
  };
  
  const handleStartAIInterview = () => {
    navigate('/ai-interview');
  };
  
  const handleOpenChatbot = () => {
    navigate('/chat');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zordie-600"></div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col w-64 bg-white border-r">
          <div className="p-5 border-b">
            <div className="flex items-center">
              <span className="text-xl font-bold text-zordie-700">Zordie</span>
              <span className="ml-1 text-xl font-bold text-accent1">.</span>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
            <div className="space-y-1">
              <p className="px-3 text-xs font-semibold text-gray-500 uppercase">Main</p>
              <NavButton 
                icon={<Home size={18} />} 
                label="Overview" 
                active={activeTab === "overview"} 
                onClick={() => setActiveTab("overview")} 
              />
              <NavButton 
                icon={<Briefcase size={18} />} 
                label="My Applications" 
                active={activeTab === "applications"} 
                onClick={() => setActiveTab("applications")}
              />
              <NavButton 
                icon={<Search size={18} />} 
                label="Find Jobs" 
                active={activeTab === "find-jobs"} 
                onClick={() => handleNavigation("/find-jobs")} 
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
                label="My Resume" 
                active={activeTab === "resume"} 
                onClick={() => handleNavigation("/resumes")}
              />
              <NavButton 
                icon={<Play size={18} />} 
                label="Practice Interview" 
                active={activeTab === "practice"} 
                onClick={() => handleNavigation("/practice-interview")}
              />
              <NavButton 
                icon={<MessageSquare size={18} />} 
                label="AI Chat Assistant" 
                active={activeTab === "chat"} 
                onClick={() => handleNavigation("/chat")}
              />
              <NavButton 
                icon={<Settings size={18} />} 
                label="Settings" 
                active={activeTab === "settings"} 
                onClick={() => setActiveTab("settings")}
              />
            </div>
          </div>
          
          <div className="border-t p-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src={profile?.avatar_url || ''} />
                      <AvatarFallback>{getInitials()}</AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="text-sm font-medium">{getFullName()}</p>
                      <p className="text-xs text-gray-500">Job Seeker</p>
                    </div>
                  </div>
                  <ChevronRight size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setActiveTab("settings")}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveTab("settings")}>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={returnToDashboardSelector}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Switch Dashboard</span>
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
              <div className="flex items-center md:hidden">
                <span className="text-xl font-bold text-zordie-700">Zordie</span>
              </div>
              
              <div className="flex items-center">
                <h1 className="text-xl font-semibold hidden md:block">Dashboard</h1>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" onClick={() => handleNavigation("/chat")}>
                  <MessageSquare size={18} className="mr-2" />
                  Chat Assistant
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleNavigation("/find-jobs")}>
                  <Search size={18} className="mr-2" />
                  Find Jobs
                </Button>
                
                {/* Mobile menu avatar */}
                <div className="md:hidden">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={profile?.avatar_url || ''} />
                          <AvatarFallback>{getInitials()}</AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>{getFullName()}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => setActiveTab("overview")}>
                        <Home className="mr-2 h-4 w-4" />
                        <span>Overview</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setActiveTab("applications")}>
                        <Briefcase className="mr-2 h-4 w-4" />
                        <span>My Applications</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleNavigation("/resumes")}>
                        <FileText className="mr-2 h-4 w-4" />
                        <span>My Resume</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setActiveTab("settings")}>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={returnToDashboardSelector}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Switch Dashboard</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 overflow-y-auto p-6">
            {/* Dashboard content based on activeTab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Welcome section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                  <div className="flex items-center mb-4 md:mb-0">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={profile?.avatar_url || ''} />
                      <AvatarFallback>{getInitials()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h1 className="text-2xl font-bold">Welcome, {profile?.first_name || 'there'}!</h1>
                      <p className="text-gray-500">Ready to improve your interview skills today?</p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="outline" onClick={() => handleNavigation("/chat")}>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Chat Assistant
                    </Button>
                    <Button onClick={() => handleNavigation("/practice-interview")}>
                      <Play className="mr-2 h-4 w-4" />
                      Start Practice
                    </Button>
                  </div>
                </div>
              
                {/* Stats cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Total Practice Sessions</p>
                          <h2 className="text-3xl font-bold">{sessions.length}</h2>
                        </div>
                        <div className="w-12 h-12 bg-zordie-100 rounded-full flex items-center justify-center">
                          <Calendar className="h-6 w-6 text-zordie-700" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Average Score</p>
                          <h2 className="text-3xl font-bold">78%</h2>
                        </div>
                        <div className="w-12 h-12 bg-zordie-100 rounded-full flex items-center justify-center">
                          <BarChart2 className="h-6 w-6 text-zordie-700" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Practice Time</p>
                          <h2 className="text-3xl font-bold">3.5h</h2>
                        </div>
                        <div className="w-12 h-12 bg-zordie-100 rounded-full flex items-center justify-center">
                          <Clock className="h-6 w-6 text-zordie-700" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Recent Activities */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {sessions.slice(0, 5).map((session) => (
                        <div key={session.id} className="flex items-center justify-between p-3 border rounded-md">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-zordie-100 rounded-full flex items-center justify-center mr-3">
                              <Play className="h-5 w-5 text-zordie-700" />
                            </div>
                            <div>
                              <h3 className="font-medium">{getInterviewTypeLabel(session.interview_type)} Interview</h3>
                              <p className="text-sm text-gray-500">
                                {session.job_role || 'General'} • {formatDate(session.created_at)}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            {session.score && (
                              <div className="mr-4 text-right">
                                <p className="font-medium">{session.score}%</p>
                                <p className="text-xs text-gray-500">score</p>
                              </div>
                            )}
                            <Button variant="outline" size="sm">View</Button>
                          </div>
                        </div>
                      ))}
                      
                      {sessions.length === 0 && (
                        <div className="text-center py-6">
                          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Calendar className="h-8 w-8 text-gray-400" />
                          </div>
                          <h3 className="font-medium text-gray-700 mb-2">No Interview Sessions Yet</h3>
                          <p className="text-gray-500 mb-4">Start your first practice interview to see your progress here.</p>
                          <Button onClick={handleStartPractice}>
                            Start Practice Interview
                          </Button>
                        </div>
                      )}
                      
                      {sessions.length > 0 && (
                        <div className="flex justify-end mt-2">
                          <Button variant="link" className="text-zordie-600 p-0" onClick={() => setActiveTab('sessions')}>
                            View all sessions <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Recommended Practice section */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recommended Practice</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start">
                          <div className="w-10 h-10 bg-zordie-100 rounded-full flex items-center justify-center mr-3">
                            <Award className="h-5 w-5 text-zordie-700" />
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Leadership Interview</h3>
                            <p className="text-sm text-gray-500 mb-4">Practice leadership scenarios and team management questions.</p>
                            <Button size="sm" onClick={handleStartAIInterview}>Start Practice</Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start">
                          <div className="w-10 h-10 bg-zordie-100 rounded-full flex items-center justify-center mr-3">
                            <FileBarChart className="h-5 w-5 text-zordie-700" />
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Case Study Analysis</h3>
                            <p className="text-sm text-gray-500 mb-4">Improve your analytical skills with industry-specific case studies.</p>
                            <Button size="sm" onClick={handleStartAIInterview}>Start Practice</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="space-y-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>My Applications</CardTitle>
                    <Button onClick={() => handleNavigation("/find-jobs")}>
                      <Search className="mr-2 h-4 w-4" />
                      Find Jobs
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Application items would go here */}
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Briefcase className="h-8 w-8 text-gray-400" />
                        </div>
                        <h3 className="font-medium text-gray-700 mb-2">No Applications Yet</h3>
                        <p className="text-gray-500 mb-4">Start applying for jobs to track your applications here.</p>
                        <Button onClick={() => handleNavigation("/find-jobs")}>
                          Browse Jobs
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            
            {activeTab === 'assessments' && (
              <div className="space-y-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>My Assessments</CardTitle>
                    <Button onClick={() => handleNavigation("/practice-interview")}>
                      <Play className="mr-2 h-4 w-4" />
                      Practice Assessment
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Award className="h-8 w-8 text-gray-400" />
                        </div>
                        <h3 className="font-medium text-gray-700 mb-2">No Assessments Yet</h3>
                        <p className="text-gray-500 mb-4">Complete assessments sent by employers or practice to improve your skills.</p>
                        <Button onClick={() => handleNavigation("/practice-interview")}>
                          Start Practice Assessment
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            
            {/* Progress tab content */}
            <TabsContent value="progress" className="m-0 space-y-6" forceMount={activeTab === 'settings' ? true : undefined}>
              <Card>
                <CardHeader>
                  <CardTitle>Your Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-4">Skills Assessment</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <label className="text-sm font-medium">Communication</label>
                            <span className="text-sm text-gray-500">Good</span>
                          </div>
                          <Progress value={75} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <label className="text-sm font-medium">Technical Knowledge</label>
                            <span className="text-sm text-gray-500">Excellent</span>
                          </div>
                          <Progress value={90} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <label className="text-sm font-medium">Problem Solving</label>
                            <span className="text-sm text-gray-500">Good</span>
                          </div>
                          <Progress value={70} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <label className="text-sm font-medium">Leadership</label>
                            <span className="text-sm text-gray-500">Needs Improvement</span>
                          </div>
                          <Progress value={45} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <label className="text-sm font-medium">Cultural Fit</label>
                            <span className="text-sm text-gray-500">Good</span>
                          </div>
                          <Progress value={80} className="h-2" />
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-medium mb-4">Interview Performance Over Time</h3>
                      <div className="h-48 flex items-center justify-center bg-gray-50 rounded-md">
                        <p className="text-gray-500">Performance graph will be displayed here</p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-medium mb-4">Achievements</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div className="border rounded-md p-3 text-center">
                          <div className="w-12 h-12 rounded-full bg-zordie-100 text-zordie-700 flex items-center justify-center mx-auto mb-2">
                            <CheckCircle className="h-6 w-6" />
                          </div>
                          <p className="text-sm font-medium">First Interview</p>
                        </div>
                        <div className="border rounded-md p-3 text-center">
                          <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center mx-auto mb-2">
                            <Award className="h-6 w-6" />
                          </div>
                          <p className="text-sm font-medium text-gray-500">Perfect Score</p>
                        </div>
                        <div className="border rounded-md p-3 text-center">
                          <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center mx-auto mb-2">
                            <Calendar className="h-6 w-6" />
                          </div>
                          <p className="text-sm font-medium text-gray-500">10 Sessions</p>
                        </div>
                        <div className="border rounded-md p-3 text-center">
                          <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center mx-auto mb-2">
                            <Clock className="h-6 w-6" />
                          </div>
                          <p className="text-sm font-medium text-gray-500">5 Hour Club</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </TabsContent>
            
            {/* Chats tab content */}
            <TabsContent value="chats" className="m-0 space-y-6" forceMount={activeTab === 'settings' ? true : undefined}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Chat History</CardTitle>
                  <Button onClick={handleOpenChatbot}>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    New Chat
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MessageSquare className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="font-medium text-gray-700 mb-2">No Chat History Yet</h3>
                      <p className="text-gray-500 mb-4">Start a conversation with our AI assistant to get interview tips and guidance.</p>
                      <Button onClick={handleOpenChatbot}>
                        Start New Chat
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Settings tab content */}
            <TabsContent value="settings" className="m-0 space-y-6" forceMount={activeTab === 'settings' ? true : undefined}>
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <Avatar className="h-24 w-24 mx-auto mb-4">
                        <AvatarImage src={profile?.avatar_url || ''} />
                        <AvatarFallback>{getInitials()}</AvatarFallback>
                      </Avatar>
                      <Button variant="outline" size="sm">Change Avatar</Button>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4 mt-6">
                      <div>
                        <label className="block text-sm font-medium mb-1">Full Name</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border rounded-md" 
                          value={getFullName()} 
                          readOnly 
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input 
                          type="email" 
                          className="w-full p-2 border rounded-md" 
                          value="demo@example.com" 
                          readOnly 
                        />
                      </div>
                      
                      <div className="mt-4">
                        <Button>Save Changes</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </main>
        </div>
      </div>
    </div>
  );
};

// NavButton component
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
      className={`flex items-center justify-between w-full px-3 py-2 rounded-md mb-1 ${
        active ? "bg-zordie-50 text-zordie-700" : "text-gray-700 hover:bg-gray-100"
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

export default JobSeekerDashboard;
