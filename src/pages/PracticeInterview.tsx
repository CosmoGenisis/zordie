
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Loader2, Mic, Video, Play, Settings, X, Info, Clock, Clipboard, BarChart } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Removed useAuth import

interface InterviewOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  questions: number;
  difficulty: 'beginner' | 'moderate' | 'challenging' | 'expert';
  jobRole?: string;
  industry?: string;
}

const PracticeInterview = () => {
  const [selectedInterviewType, setSelectedInterviewType] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState('moderate');
  const [jobRole, setJobRole] = useState('');
  const [industry, setIndustry] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [micAccess, setMicAccess] = useState(false);
  const [cameraAccess, setCameraAccess] = useState(false);
  const [checkingPermissions, setCheckingPermissions] = useState(false);
  const [preparingInterview, setPreparingInterview] = useState(false);
  
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Since we're no longer using auth, let's use a demo user ID
  const demoUserId = "demo-user";
  
  useEffect(() => {
    if (showSettings) {
      checkMediaPermissions();
    }
  }, [showSettings]);
  
  const checkMediaPermissions = async () => {
    setCheckingPermissions(true);
    try {
      // Check microphone permissions
      const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setMicAccess(true);
      audioStream.getTracks().forEach(track => track.stop());
      
      // Check camera permissions
      const videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraAccess(true);
      videoStream.getTracks().forEach(track => track.stop());
    } catch (error) {
      console.error('Error checking media permissions:', error);
    } finally {
      setCheckingPermissions(false);
    }
  };
  
  const handleStartInterview = () => {
    if (!selectedInterviewType) {
      toast({
        title: "Selection Required",
        description: "Please select an interview type to continue.",
        variant: "destructive",
      });
      return;
    }
    
    setPreparingInterview(true);
    
    // Simulate API delay
    setTimeout(() => {
      navigate('/ai-interview');
    }, 2000);
  };
  
  const handleRequestPermissions = async () => {
    try {
      // Request microphone permissions
      await navigator.mediaDevices.getUserMedia({ audio: true })
        .then((stream) => {
          setMicAccess(true);
          stream.getTracks().forEach(track => track.stop());
        })
        .catch(() => {
          setMicAccess(false);
        });
      
      // Request camera permissions
      await navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          setCameraAccess(true);
          stream.getTracks().forEach(track => track.stop());
        })
        .catch(() => {
          setCameraAccess(false);
        });
    } catch (error) {
      console.error('Error requesting media permissions:', error);
    }
  };
  
  const interviewOptions: InterviewOption[] = [
    {
      id: "behavioral",
      title: "Behavioral Interview",
      description: "Practice answering questions about your past experiences and how you handled various work situations.",
      icon: <Clipboard className="h-6 w-6" />,
      duration: "15-20 min",
      questions: 8,
      difficulty: "moderate"
    },
    {
      id: "technical",
      title: "Technical Interview",
      description: "Practice demonstrating your technical knowledge and problem-solving skills relevant to your field.",
      icon: <Settings className="h-6 w-6" />,
      duration: "20-25 min",
      questions: 6,
      difficulty: "challenging"
    },
    {
      id: "leadership",
      title: "Leadership Assessment",
      description: "Practice answering questions that assess your leadership capabilities and management style.",
      icon: <BarChart className="h-6 w-6" />,
      duration: "15-20 min",
      questions: 7,
      difficulty: "challenging"
    }
  ];
  
  const getDifficultyBadge = (difficulty: string) => {
    const badgeStyles = {
      beginner: "bg-green-100 text-green-700 hover:bg-green-200",
      moderate: "bg-blue-100 text-blue-700 hover:bg-blue-200",
      challenging: "bg-orange-100 text-orange-700 hover:bg-orange-200",
      expert: "bg-red-100 text-red-700 hover:bg-red-200"
    };
    
    return badgeStyles[difficulty as keyof typeof badgeStyles] || "bg-gray-100 text-gray-700";
  };
  
  return (
    <Layout>
      {preparingInterview ? (
        <div className="container max-w-4xl py-24">
          <div className="text-center">
            <Loader2 className="h-16 w-16 animate-spin text-zordie-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-2">Preparing Your Interview...</h2>
            <p className="text-gray-600 mb-8">We're setting up your personalized AI interview experience.</p>
          </div>
        </div>
      ) : (
        <div className="container max-w-4xl py-12">
          <SectionHeading
            title="Practice Interview"
            subtitle="Prepare for your next interview with our AI interviewer"
            align="center"
          />
          
          <div className="mb-8 mt-8">
            <h3 className="text-xl font-semibold mb-4">Select Interview Type</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {interviewOptions.map((option) => (
                <Card 
                  key={option.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedInterviewType === option.id 
                      ? 'border-zordie-500 shadow-md' 
                      : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedInterviewType(option.id)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="w-10 h-10 bg-zordie-100 rounded-full flex items-center justify-center">
                        {option.icon}
                      </div>
                      <Badge className={getDifficultyBadge(option.difficulty)}>
                        {option.difficulty.charAt(0).toUpperCase() + option.difficulty.slice(1)}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg mt-4">{option.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </CardContent>
                  <CardFooter className="pt-0 pb-4">
                    <div className="flex justify-between items-center w-full text-sm text-gray-500">
                      <span className="flex items-center"><Clock className="h-4 w-4 mr-1" /> {option.duration}</span>
                      <span>{option.questions} questions</span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Interview Settings</h3>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowSettings(!showSettings)}
            >
              {showSettings ? (
                <>
                  <X className="mr-1 h-4 w-4" />
                  Hide
                </>
              ) : (
                <>
                  <Settings className="mr-1 h-4 w-4" />
                  Customize
                </>
              )}
            </Button>
          </div>
          
          {showSettings && (
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label>Difficulty Level</Label>
                      <RadioGroup 
                        defaultValue={difficulty}
                        onValueChange={setDifficulty}
                        className="grid grid-cols-2 gap-2 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="beginner" id="beginner" />
                          <Label htmlFor="beginner">Beginner</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="moderate" id="moderate" />
                          <Label htmlFor="moderate">Moderate</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="challenging" id="challenging" />
                          <Label htmlFor="challenging">Challenging</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="expert" id="expert" />
                          <Label htmlFor="expert">Expert</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div>
                      <Label htmlFor="job-role">Job Role (Optional)</Label>
                      <Select 
                        value={jobRole} 
                        onValueChange={setJobRole}
                      >
                        <SelectTrigger id="job-role" className="mt-1">
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="software-engineer">Software Engineer</SelectItem>
                          <SelectItem value="product-manager">Product Manager</SelectItem>
                          <SelectItem value="data-scientist">Data Scientist</SelectItem>
                          <SelectItem value="ux-designer">UX Designer</SelectItem>
                          <SelectItem value="marketing-manager">Marketing Manager</SelectItem>
                          <SelectItem value="sales-representative">Sales Representative</SelectItem>
                          <SelectItem value="customer-service">Customer Service</SelectItem>
                          <SelectItem value="project-manager">Project Manager</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="industry">Industry (Optional)</Label>
                      <Select 
                        value={industry} 
                        onValueChange={setIndustry}
                      >
                        <SelectTrigger id="industry" className="mt-1">
                          <SelectValue placeholder="Select an industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="media">Media & Entertainment</SelectItem>
                          <SelectItem value="consulting">Consulting</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label>Device Permissions</Label>
                      <div className="border rounded-md mt-2 p-4 space-y-3">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Mic className="h-5 w-5 mr-2" />
                            <span>Microphone</span>
                          </div>
                          {checkingPermissions ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Badge variant={micAccess ? "default" : "destructive"}>
                              {micAccess ? "Allowed" : "Blocked"}
                            </Badge>
                          )}
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Video className="h-5 w-5 mr-2" />
                            <span>Camera</span>
                          </div>
                          {checkingPermissions ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Badge variant={cameraAccess ? "default" : "destructive"}>
                              {cameraAccess ? "Allowed" : "Blocked"}
                            </Badge>
                          )}
                        </div>
                        
                        {(!micAccess || !cameraAccess) && !checkingPermissions && (
                          <Button 
                            size="sm" 
                            className="w-full"
                            onClick={handleRequestPermissions}
                          >
                            Request Permissions
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex flex-col items-center mt-8">
                <Button 
                  size="lg" 
                  className="btn-gradient px-12"
                  onClick={handleStartInterview}
                  disabled={!selectedInterviewType}
                >
                  <Play className="mr-2 h-4 w-4" />
                  Start Interview
                </Button>
                <div className="flex items-center mt-4 text-gray-500 text-sm">
                  <Info className="h-4 w-4 mr-1" />
                  <span>Make sure your microphone and camera are working</span>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Ready to Begin?</DialogTitle>
                <DialogDescription>
                  Your AI interviewer will ask you questions based on your selected interview type and settings.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 my-2">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-zordie-100 rounded-full flex items-center justify-center mr-3">
                    <Mic className="h-5 w-5 text-zordie-700" />
                  </div>
                  <div>
                    <p className="font-medium">Speak clearly</p>
                    <p className="text-sm text-gray-500">The AI will be listening to your responses</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-zordie-100 rounded-full flex items-center justify-center mr-3">
                    <Clock className="h-5 w-5 text-zordie-700" />
                  </div>
                  <div>
                    <p className="font-medium">Take your time</p>
                    <p className="text-sm text-gray-500">You'll have time to think before answering</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-zordie-100 rounded-full flex items-center justify-center mr-3">
                    <Avatar className="h-5 w-5 text-zordie-700">
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <p className="font-medium">Your AI interviewer is ready</p>
                    <p className="text-sm text-gray-500">You'll receive feedback after each answer</p>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleStartInterview} className="w-full btn-gradient">
                  <Play className="mr-2 h-4 w-4" />
                  Begin Interview
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </Layout>
  );
};

export default PracticeInterview;
