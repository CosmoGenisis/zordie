
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  Send, 
  Bot, 
  User as UserIcon, 
  Play, 
  Calendar, 
  Info, 
  FileText, 
  ChevronRight,
  PenLine
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

interface ChatMessage {
  id?: string;
  content: string;
  is_user: boolean;
  created_at?: string;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      content: "Hi there! I'm your interview coach assistant. How can I help you prepare for your interviews today?",
      is_user: false,
      created_at: new Date().toISOString()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Scroll to bottom whenever messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  useEffect(() => {
    // Load chat history if user is logged in
    if (user) {
      fetchChatHistory();
    }
  }, [user]);
  
  const fetchChatHistory = async () => {
    try {
      const { data, error } = await supabase
        .from('chat_messages')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: true })
        .limit(50);
      
      if (error) throw error;
      
      if (data && data.length > 0) {
        setMessages(data);
      }
    } catch (error) {
      console.error('Error fetching chat history:', error);
    }
  };
  
  const sendMessage = async () => {
    if (!input.trim()) return;
    
    // Add user message to chat
    const userMessage: ChatMessage = {
      content: input,
      is_user: true,
      created_at: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      // Save user message to database if logged in
      if (user) {
        const { error } = await supabase
          .from('chat_messages')
          .insert({
            user_id: user.id,
            content: input,
            is_user: true
          });
        
        if (error) throw error;
      }
      
      // Generate bot response (simulated)
      setTimeout(async () => {
        const botResponses: Record<string, string> = {
          'help': "I can help you prepare for interviews by providing practice questions, offering feedback on your answers, suggesting interview strategies, and more. What specific aspect of interview preparation are you interested in?",
          'nervous': "It's completely normal to feel nervous before an interview. Some strategies to manage interview anxiety include: practicing your responses, researching the company thoroughly, preparing questions to ask, getting a good night's sleep, and using deep breathing techniques right before the interview.",
          'question': "Some common interview questions include: 'Tell me about yourself', 'Why are you interested in this position?', 'What are your strengths and weaknesses?', 'Tell me about a challenge you've faced and how you overcame it', and 'Where do you see yourself in 5 years?'. Would you like sample answers for any of these?",
          'practice': "I recommend starting with our Practice Interview feature, where you can select your industry, job role, and difficulty level for a customized practice session. You'll receive feedback on your answers and suggestions for improvement.",
          'salary': "When discussing salary, it's best to research the market rate for the position in your location first. During the interview, you can say something like: 'Based on my research and experience, I'm looking for a salary in the range of $X to $Y. However, I'm open to discussing the overall compensation package.'",
          'strength': "When discussing strengths, focus on qualities relevant to the position. Use the STAR method (Situation, Task, Action, Result) to provide specific examples that demonstrate your strengths in action.",
          'weakness': "When discussing weaknesses, be honest but strategic. Choose a genuine weakness that isn't critical to the role, explain how you're working to improve it, and provide evidence of your progress.",
        };
        
        // Simple keyword matching for demo purposes
        let botResponse = "I'm here to help with your interview preparation! You can ask me about interview questions, techniques, or how to prepare for specific types of interviews.";
        
        const lowercaseInput = input.toLowerCase();
        for (const [keyword, response] of Object.entries(botResponses)) {
          if (lowercaseInput.includes(keyword)) {
            botResponse = response;
            break;
          }
        }
        
        const botMessage: ChatMessage = {
          content: botResponse,
          is_user: false,
          created_at: new Date().toISOString()
        };
        
        setMessages(prev => [...prev, botMessage]);
        
        // Save bot response to database if logged in
        if (user) {
          const { error } = await supabase
            .from('chat_messages')
            .insert({
              user_id: user.id,
              content: botResponse,
              is_user: false
            });
          
          if (error) throw error;
        }
        
        setIsLoading(false);
      }, 1000);
      
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: 'Failed to send message',
        description: 'Please try again later',
        variant: 'destructive'
      });
      setIsLoading(false);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };
  
  const startPracticeInterview = () => {
    navigate('/practice-interview');
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">AI Interview Assistant</h1>
            <Button onClick={startPracticeInterview}>
              <Play className="mr-2 h-4 w-4" />
              Start Practice
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar with suggestions */}
            <div className="md:col-span-1">
              <Card className="p-4">
                <h2 className="font-medium mb-3">Quick Suggestions</h2>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left"
                    onClick={() => setInput('How should I prepare for a technical interview?')}
                  >
                    <PenLine className="mr-2 h-4 w-4" />
                    <span className="truncate">Technical interview tips</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left"
                    onClick={() => setInput('How do I answer "Tell me about yourself"?')}
                  >
                    <PenLine className="mr-2 h-4 w-4" />
                    <span className="truncate">Common questions help</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left"
                    onClick={() => setInput('How to handle salary negotiations?')}
                  >
                    <PenLine className="mr-2 h-4 w-4" />
                    <span className="truncate">Salary negotiation tips</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left"
                    onClick={() => setInput('I feel nervous about my upcoming interview')}
                  >
                    <PenLine className="mr-2 h-4 w-4" />
                    <span className="truncate">Managing interview anxiety</span>
                  </Button>
                </div>
                
                <Separator className="my-4" />
                
                <h2 className="font-medium mb-3">Quick Actions</h2>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left"
                    onClick={startPracticeInterview}
                  >
                    <Play className="mr-2 h-4 w-4" />
                    <span>Practice Interview</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left"
                    onClick={() => navigate('/dashboard')}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>View Dashboard</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left"
                    onClick={() => navigate('/resources')}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    <span>Interview Resources</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left"
                    onClick={() => navigate('/ai-interview')}
                  >
                    <Info className="mr-2 h-4 w-4" />
                    <span>About AI Interviews</span>
                  </Button>
                </div>
              </Card>
            </div>
            
            {/* Chat area */}
            <div className="md:col-span-3">
              <Card className="flex flex-col h-[70vh]">
                {/* Chat messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <div 
                      key={message.id || index} 
                      className={`flex ${message.is_user ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start max-w-[80%] ${message.is_user ? 'flex-row-reverse' : ''}`}>
                        <Avatar className={`h-8 w-8 ${message.is_user ? 'ml-2' : 'mr-2'}`}>
                          {message.is_user ? (
                            <>
                              <AvatarImage src="" />
                              <AvatarFallback className="bg-zordie-600 text-white">
                                <UserIcon className="h-4 w-4" />
                              </AvatarFallback>
                            </>
                          ) : (
                            <>
                              <AvatarImage src="" />
                              <AvatarFallback className="bg-zordie-200 text-zordie-700">
                                <Bot className="h-4 w-4" />
                              </AvatarFallback>
                            </>
                          )}
                        </Avatar>
                        
                        <div 
                          className={`p-3 rounded-lg ${
                            message.is_user 
                              ? 'bg-zordie-600 text-white' 
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          <p className="whitespace-pre-wrap">{message.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex items-start max-w-[80%]">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-zordie-200 text-zordie-700">
                            <Bot className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="p-3 rounded-lg bg-gray-100 text-gray-800">
                          <div className="flex space-x-1">
                            <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                            <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
                
                {/* Input area */}
                <div className="p-4 border-t">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Type your message..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      disabled={isLoading}
                      className="flex-1"
                    />
                    <Button onClick={sendMessage} disabled={isLoading || !input.trim()}>
                      <Send className="h-4 w-4" />
                      <span className="sr-only">Send</span>
                    </Button>
                  </div>
                  
                  {!user && (
                    <div className="mt-2 text-xs text-gray-500 flex items-center">
                      <Info className="h-3 w-3 mr-1" />
                      <span>
                        <Button 
                          variant="link" 
                          className="p-0 h-auto text-xs text-zordie-600" 
                          onClick={() => navigate('/login')}
                        >
                          Log in
                        </Button>
                        {' '}to save your chat history
                      </span>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Chatbot;
