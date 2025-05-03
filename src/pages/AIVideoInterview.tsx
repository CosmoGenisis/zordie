
import React, { useState, useRef, useEffect } from 'react';
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  Video, 
  Mic, 
  MicOff, 
  VideoOff,
  FileText, 
  Send,
  MessageSquare, 
  Brain
} from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import AIInterviewAnalyzer from '@/components/interview/AIInterviewAnalyzer';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

const AIVideoInterview = () => {
  const [activeTab, setActiveTab] = useState('live');
  const [isRecording, setIsRecording] = useState(false);
  const [isMicMuted, setIsMicMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [interviewDuration, setInterviewDuration] = useState(0);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [messages, setMessages] = useState<{ sender: 'ai' | 'user', text: string }[]>([
    { sender: 'ai', text: 'Hello! I\'m your AI interviewer today. We'll be discussing your experience and skills for the Frontend Developer position. Are you ready to begin?' }
  ]);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<number | null>(null);
  const chatInputRef = useRef<HTMLInputElement>(null);
  
  // Mock interview questions for the AI interviewer
  const interviewQuestions = [
    "Can you tell me about your experience with React and other frontend frameworks?",
    "How do you approach optimizing the performance of web applications?",
    "Describe a challenging project you worked on and how you overcame the obstacles.",
    "How do you stay updated with the latest frontend development trends?",
    "What's your approach to writing maintainable and scalable code?",
    "How do you handle disagreements with team members about technical decisions?"
  ];
  
  useEffect(() => {
    // Clean up timer on unmount
    return () => {
      if (timerRef.current !== null) {
        window.clearInterval(timerRef.current);
      }
    };
  }, []);
  
  const startInterview = async () => {
    try {
      // Request access to camera and microphone
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      
      // Display the video stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      
      // Start recording
      setIsRecording(true);
      setShowPreview(true);
      
      // Start timer
      let seconds = 0;
      timerRef.current = window.setInterval(() => {
        seconds++;
        setInterviewDuration(seconds);
      }, 1000);
      
      // Simulate AI asking first question after a short delay
      setTimeout(() => {
        setMessages(prev => [...prev, { sender: 'ai', text: interviewQuestions[0] }]);
      }, 3000);
      
    } catch (error) {
      console.error('Error accessing camera and microphone:', error);
      toast({
        title: "Camera access denied",
        description: "Please allow access to your camera and microphone to start the interview",
        variant: "destructive"
      });
    }
  };
  
  const stopInterview = () => {
    // Stop the video stream
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    
    // Stop the timer
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    
    setIsRecording(false);
    setShowPreview(false);
    
    // Show completion message
    toast({
      title: "Interview completed",
      description: "Your interview has been recorded and is being processed"
    });
    
    // Show analysis after a delay
    setTimeout(() => {
      setShowAnalysis(true);
      setActiveTab('analysis');
    }, 1500);
  };
  
  const toggleMicrophone = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getAudioTracks().forEach(track => {
        track.enabled = isMicMuted;
      });
      setIsMicMuted(!isMicMuted);
    }
  };
  
  const toggleVideo = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getVideoTracks().forEach(track => {
        track.enabled = isVideoOff;
      });
      setIsVideoOff(!isVideoOff);
    }
  };
  
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!chatInputRef.current || !chatInputRef.current.value.trim()) return;
    
    const userMessage = chatInputRef.current.value;
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    chatInputRef.current.value = '';
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const questionIndex = Math.min(
        Math.floor(messages.length / 2), 
        interviewQuestions.length - 1
      );
      
      if (questionIndex < interviewQuestions.length - 1) {
        setMessages(prev => [...prev, { sender: 'ai', text: interviewQuestions[questionIndex + 1] }]);
      } else {
        setMessages(prev => [...prev, { 
          sender: 'ai', 
          text: "Thank you for your responses! I think I have all the information I need. Do you have any questions for me about the role or the company?" 
        }]);
      }
    }, 1500);
  };

  return (
    <ProtectedRoute requiresRole="hr">
      <Layout>
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold mb-2">AI Video Interview</h1>
          <p className="text-gray-600 mb-8">Conduct AI-powered video interviews with automated analysis and transcription</p>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList>
              <TabsTrigger value="live">Live Interview</TabsTrigger>
              <TabsTrigger value="analysis" disabled={!showAnalysis}>Analysis</TabsTrigger>
            </TabsList>
            
            <TabsContent value="live" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Video className="h-5 w-5 mr-2" />
                      Video Interview
                      {isRecording && (
                        <span className="ml-2 flex items-center text-red-500 text-sm">
                          <span className="h-2 w-2 rounded-full bg-red-500 mr-1 animate-pulse"></span>
                          REC {formatTime(interviewDuration)}
                        </span>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video bg-black rounded-md overflow-hidden relative">
                      {showPreview ? (
                        <video
                          ref={videoRef}
                          autoPlay
                          muted={isMicMuted}
                          className="w-full h-full object-cover"
                        ></video>
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <div className="text-white text-center">
                            <Video className="h-12 w-12 mx-auto mb-2 opacity-30" />
                            <p className="text-sm opacity-60">Camera preview will appear here</p>
                          </div>
                        </div>
                      )}
                      
                      {isRecording && (
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 bg-black/70 rounded-full py-2 px-4">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="rounded-full hover:bg-white/20"
                            onClick={toggleMicrophone}
                          >
                            {isMicMuted ? (
                              <MicOff className="h-5 w-5 text-white" />
                            ) : (
                              <Mic className="h-5 w-5 text-white" />
                            )}
                          </Button>
                          
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="rounded-full hover:bg-white/20"
                            onClick={toggleVideo}
                          >
                            {isVideoOff ? (
                              <VideoOff className="h-5 w-5 text-white" />
                            ) : (
                              <Video className="h-5 w-5 text-white" />
                            )}
                          </Button>
                          
                          <Button 
                            variant={isRecording ? "destructive" : "default"} 
                            onClick={isRecording ? stopInterview : startInterview}
                          >
                            {isRecording ? "End Interview" : "Start Interview"}
                          </Button>
                        </div>
                      )}
                    </div>
                    
                    {!isRecording && !showAnalysis && (
                      <div className="flex justify-center">
                        <Button onClick={startInterview} className="btn-gradient">
                          <Video className="mr-2 h-5 w-5" />
                          Start AI Interview
                        </Button>
                      </div>
                    )}
                    
                    {showAnalysis && (
                      <div className="p-4 rounded-md bg-green-50 border border-green-100 text-green-800">
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <div>
                            <p className="font-medium">Interview Complete</p>
                            <p className="text-sm mt-1">
                              The AI interview has been successfully recorded and analyzed. 
                              View the detailed analysis in the Analysis tab.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2" />
                      Interview Chat
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 h-[500px] flex flex-col">
                    <div className="flex-grow overflow-y-auto p-4 space-y-4">
                      {messages.map((msg, index) => (
                        <div 
                          key={index} 
                          className={`flex ${msg.sender === 'ai' ? '' : 'justify-end'}`}
                        >
                          <div 
                            className={`max-w-[85%] rounded-lg p-3 ${
                              msg.sender === 'ai' 
                                ? 'bg-gray-100 text-gray-800' 
                                : 'bg-zordie-100 text-zordie-800'
                            }`}
                          >
                            <p className="text-sm">{msg.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="p-4 border-t">
                      <form onSubmit={handleSendMessage} className="flex items-center">
                        <input 
                          ref={chatInputRef}
                          type="text" 
                          placeholder="Type your response..." 
                          className="flex-grow border rounded-l-md py-2 px-3" 
                          disabled={!isRecording}
                        />
                        <Button 
                          type="submit" 
                          variant="default" 
                          className="rounded-l-none" 
                          disabled={!isRecording}
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      </form>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Interview Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Position</p>
                      <p>Frontend Developer</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Candidate</p>
                      <p>James Wilson</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Date</p>
                      <p>May 3, 2025</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Duration</p>
                      <p>{formatTime(interviewDuration)}</p>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div>
                    <h3 className="font-medium mb-2">Interview Focus Areas</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                      <div className="bg-gray-50 p-2 rounded-md text-sm">Technical Skills</div>
                      <div className="bg-gray-50 p-2 rounded-md text-sm">Problem Solving</div>
                      <div className="bg-gray-50 p-2 rounded-md text-sm">Project Experience</div>
                      <div className="bg-gray-50 p-2 rounded-md text-sm">Collaboration</div>
                      <div className="bg-gray-50 p-2 rounded-md text-sm">Communication</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="analysis" className="space-y-6">
              {showAnalysis ? (
                <AIInterviewAnalyzer 
                  candidateName="James Wilson"
                  position="Frontend Developer"
                  interviewDate="May 3, 2025"
                  interviewDuration={formatTime(interviewDuration)}
                  interviewId="INT-2345"
                />
              ) : (
                <div className="text-center py-12">
                  <Brain className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <h3 className="text-lg font-medium text-gray-600">No Analysis Available</h3>
                  <p className="text-sm text-gray-500">Complete an interview first to see AI analysis</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </Layout>
    </ProtectedRoute>
  );
};

export default AIVideoInterview;
