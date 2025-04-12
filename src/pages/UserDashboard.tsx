import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, Settings, Calendar, FileText, Award, BarChart2, Clock, Play, 
  CheckCircle, BarChart, ChevronRight, PlusCircle, FileBarChart, MessageSquare
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
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

interface UserProfile {
  id: string;
  first_name: string | null;
  last_name: string | null;
  user_type: string;
  company_name: string | null;
  company_size: string | null;
  avatar_url: string | null;
}

interface InterviewSession {
  id: string;
  interview_type: string;
  job_role: string | null;
  industry: string | null;
  difficulty: string;
  duration: number;
  score: number | null;
  created_at: string;
}

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [sessions, setSessions] = useState<InterviewSession[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    
    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        
        if (profileError) throw profileError;
        setProfile(profileData);
        
        const { data: sessionsData, error: sessionsError } = await supabase
          .from('interview_sessions')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });
        
        if (sessionsError) throw sessionsError;
        setSessions(sessionsData);
        
      } catch (error) {
        console.error('Error fetching user data:', error);
        toast({
          title: 'Failed to load data',
          description: 'Please try refreshing the page',
          variant: 'destructive'
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchUserData();
  }, [user, navigate, toast]);
  
  const getInitials = () => {
    if (profile?.first_name && profile?.last_name) {
      return `${profile.first_name[0]}${profile.last_name[0]}`.toUpperCase();
    } else if (profile?.first_name) {
      return profile.first_name[0].toUpperCase();
    } else if (user?.email) {
      return user.email[0].toUpperCase();
    }
    return 'U';
  };
  
  const getFullName = () => {
    if (profile?.first_name && profile?.last_name) {
      return `${profile.first_name} ${profile.last_name}`;
    } else if (profile?.first_name) {
      return profile.first_name;
    } else if (user?.email) {
      return user.email;
    }
    return 'User';
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };
  
  const getInterviewTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      'behavioral': 'Behavioral',
      'technical': 'Technical',
      'situational': 'Situational',
      'leadership': 'Leadership',
      'case': 'Case Study'
    };
    return labels[type] || type;
  };
  
  const getDifficultyColor = (difficulty: string) => {
    const colors: Record<string, string> = {
      'beginner': 'bg-green-100 text-green-700',
      'moderate': 'bg-blue-100 text-blue-700',
      'challenging': 'bg-orange-100 text-orange-700',
      'expert': 'bg-red-100 text-red-700'
    };
    return colors[difficulty] || 'bg-gray-100 text-gray-700';
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
  
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          
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
              <Button variant="outline" onClick={handleOpenChatbot}>
                <MessageSquare className="mr-2 h-4 w-4" />
                Chat Assistant
              </Button>
              <Button onClick={handleStartPractice}>
                <Play className="mr-2 h-4 w-4" />
                Start Practice
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="md:col-span-1">
              <Card>
                <CardContent className="p-0">
                  <div className="p-6 border-b">
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="h-20 w-20 mb-4">
                        <AvatarImage src={profile?.avatar_url || ''} />
                        <AvatarFallback>{getInitials()}</AvatarFallback>
                      </Avatar>
                      <h2 className="font-semibold text-lg">{getFullName()}</h2>
                      <p className="text-gray-500 text-sm">
                        {profile?.user_type === 'company' ? 'Recruiter' : 'Job Seeker'}
                        {profile?.company_name && ` at ${profile.company_name}`}
                      </p>
                    </div>
                  </div>
                  <nav className="p-2">
                    <NavButton 
                      icon={<User size={18} />} 
                      label="Overview" 
                      active={activeTab === 'overview'} 
                      onClick={() => setActiveTab('overview')} 
                    />
                    <NavButton 
                      icon={<Calendar size={18} />} 
                      label="Interview Sessions" 
                      active={activeTab === 'sessions'} 
                      onClick={() => setActiveTab('sessions')} 
                    />
                    <NavButton 
                      icon={<BarChart size={18} />} 
                      label="Progress" 
                      active={activeTab === 'progress'} 
                      onClick={() => setActiveTab('progress')} 
                    />
                    <NavButton 
                      icon={<MessageSquare size={18} />} 
                      label="Chat History" 
                      active={activeTab === 'chats'} 
                      onClick={() => setActiveTab('chats')} 
                    />
                    <NavButton 
                      icon={<FileText size={18} />} 
                      label="Resources" 
                      active={activeTab === 'resources'} 
                      onClick={() => setActiveTab('resources')} 
                    />
                    <NavButton 
                      icon={<Settings size={18} />} 
                      label="Settings" 
                      active={activeTab === 'settings'} 
                      onClick={() => setActiveTab('settings')} 
                    />
                  </nav>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-3">
              
              <TabsContent value="overview" className="m-0 space-y-6" forceMount={activeTab === 'overview' ? true : undefined}>
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
              </TabsContent>
              
              <TabsContent value="sessions" className="m-0 space-y-6" forceMount={activeTab === 'sessions' ? true : undefined}>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Interview Sessions</CardTitle>
                    <Button onClick={handleStartPractice}>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      New Session
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {sessions.map((session) => (
                        <div key={session.id} className="flex items-center justify-between p-4 border rounded-md">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-zordie-100 rounded-full flex items-center justify-center mr-3">
                              <Play className="h-5 w-5 text-zordie-700" />
                            </div>
                            <div>
                              <h3 className="font-medium">{getInterviewTypeLabel(session.interview_type)} Interview</h3>
                              <div className="flex items-center mt-1">
                                <Badge className={getDifficultyColor(session.difficulty)}>
                                  {session.difficulty.charAt(0).toUpperCase() + session.difficulty.slice(1)}
                                </Badge>
                                <span className="text-sm text-gray-500 mx-2">•</span>
                                <span className="text-sm text-gray-500">{session.job_role || 'General'}</span>
                                <span className="text-sm text-gray-500 mx-2">•</span>
                                <span className="text-sm text-gray-500">{formatDate(session.created_at)}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            {session.score && (
                              <div className="mr-4 text-right">
                                <p className="font-medium">{session.score}%</p>
                                <p className="text-xs text-gray-500">score</p>
                              </div>
                            )}
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm">Actions</Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                <DropdownMenuItem>Watch Recording</DropdownMenuItem>
                                <DropdownMenuItem>Export Feedback</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      ))}
                      
                      {sessions.length === 0 && (
                        <div className="text-center py-8">
                          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Calendar className="h-8 w-8 text-gray-400" />
                          </div>
                          <h3 className="font-medium text-gray-700 mb-2">No Interview Sessions Yet</h3>
                          <p className="text-gray-500 mb-4">Start your first practice interview to see your sessions here.</p>
                          <Button onClick={handleStartPractice}>
                            Start Practice Interview
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="progress" className="m-0 space-y-6" forceMount={activeTab === 'progress' ? true : undefined}>
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
                </Card>
              </TabsContent>
              
              <TabsContent value="chats" className="m-0 space-y-6" forceMount={activeTab === 'chats' ? true : undefined}>
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
                            value={user?.email || ''} 
                            readOnly 
                          />
                        </div>
                        
                        {profile?.user_type === 'company' && (
                          <>
                            <div>
                              <label className="block text-sm font-medium mb-1">Company Name</label>
                              <input 
                                type="text" 
                                className="w-full p-2 border rounded-md" 
                                value={profile?.company_name || ''} 
                                readOnly 
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium mb-1">Company Size</label>
                              <input 
                                type="text" 
                                className="w-full p-2 border rounded-md" 
                                value={profile?.company_size || ''} 
                                readOnly 
                              />
                            </div>
                          </>
                        )}
                        
                        <div className="mt-4">
                          <Button>Save Changes</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavButton = ({ icon, label, active, onClick }: NavButtonProps) => {
  return (
    <button
      className={`flex items-center w-full px-3 py-2 rounded-md mb-1 ${
        active ? "bg-zordie-50 text-zordie-700" : "text-gray-700 hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      <span className="mr-3">{icon}</span>
      <span>{label}</span>
    </button>
  );
};

export default UserDashboard;
